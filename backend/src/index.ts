import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import Database from 'better-sqlite3';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

const db = new Database(path.join(__dirname, '..', 'data', 'bogeygolf.db'));
db.exec(`
  CREATE TABLE IF NOT EXISTS waitlist (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:3000' }));
app.use(express.json({ limit: '10kb' }));

const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 60,
  standardHeaders: true,
  legacyHeaders: false,
});

const waitlistLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests, please try again later' },
});

app.use(globalLimiter);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'bogeygolf-api' });
});

app.post('/api/waitlist', waitlistLimiter, (req, res) => {
  const { email } = req.body as { email?: unknown };

  if (
    typeof email !== 'string' ||
    email.length < 3 ||
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    res.status(400).json({ error: 'Valid email required' });
    return;
  }

  const sanitised = email.toLowerCase().trim();

  try {
    db.prepare('INSERT INTO waitlist (email) VALUES (?)').run(sanitised);
    res.json({ success: true });
  } catch (err: unknown) {
    if (err instanceof Error && err.message.includes('UNIQUE constraint failed')) {
      res.status(409).json({ error: 'already_signed_up' });
    } else {
      res.status(500).json({ error: 'Server error' });
    }
  }
});

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});

export default app;

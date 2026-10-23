const path = require('path');
const Database = require('better-sqlite3');

const db = new Database(path.join(__dirname, '..', 'data', 'bogeygolf.db'), { readonly: true });

const rows = db.prepare('SELECT id, email, created_at FROM waitlist ORDER BY id').all();

if (rows.length === 0) {
  console.log('No signups yet.');
  process.exit(0);
}

const widths = {
  id: Math.max(2, ...rows.map((r) => String(r.id).length)),
  email: Math.max(5, ...rows.map((r) => r.email.length)),
  created_at: Math.max(10, ...rows.map((r) => r.created_at.length)),
};

const pad = (str, len) => String(str).padEnd(len);

console.log(`${pad('id', widths.id)}  ${pad('email', widths.email)}  created_at`);
console.log(`${'-'.repeat(widths.id)}  ${'-'.repeat(widths.email)}  ${'-'.repeat(widths.created_at)}`);
for (const r of rows) {
  console.log(`${pad(r.id, widths.id)}  ${pad(r.email, widths.email)}  ${r.created_at}`);
}
console.log(`\nTotal: ${rows.length}`);

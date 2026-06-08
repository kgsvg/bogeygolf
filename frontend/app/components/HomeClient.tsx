'use client';

import { useState } from 'react';

const features = [
  {
    icon: '🤝',
    title: 'Brand Deal Management',
    desc: 'Track every partnership in one place — deliverables, deadlines, payments, and contracts. Never lose a brand deal detail again.',
  },
  {
    icon: '🎬',
    title: 'UGC Content Hub',
    desc: 'Organise, deliver, and archive your user-generated content. Share polished content packages directly with brands.',
  },
  {
    icon: '✉️',
    title: 'Custom Email Domain',
    desc: 'Send and receive email as yourname@yourbrand.com. Look professional from day one — no more Gmail in the pitch deck.',
  },
  {
    icon: '🔗',
    title: 'Link in Bio Pages',
    desc: 'A stunning, branded link page for your socials — with built-in analytics so you know exactly what your audience clicks.',
  },
  {
    icon: '📊',
    title: 'Analytics Dashboard',
    desc: 'See your reach, engagement, and link performance across every platform in a single clean dashboard.',
  },
  {
    icon: '💬',
    title: 'Creator Communications',
    desc: 'Keep brand conversations organised with a dedicated inbox — separate from your personal DMs and always on the record.',
  },
];

const faqs = [
  {
    q: 'What is Bogey Golf Club?',
    a: 'Bogey Golf Club is an all-in-one business platform built specifically for social media golf creators. It brings together brand deal management, UGC content delivery, a custom email domain, a link-in-bio page with analytics, and a creator communications inbox — everything you need to run your golf brand professionally.',
  },
  {
    q: 'Who is Bogey Golf Club for?',
    a: 'It\'s built for golf content creators on Instagram, TikTok, and YouTube — whether you\'re just starting to land your first brand deals or you\'re already juggling multiple partnerships and need a better system. If you\'re making golf content and want to treat it like a real business, this is for you.',
  },
  {
    q: 'How does brand deal management work?',
    a: 'You can log every brand partnership with details like deliverables, deadlines, payment terms, and contact information. Track the status of each deal from first outreach through to final content delivery, all without digging through DMs or email threads.',
  },
  {
    q: 'What is a custom email domain for creators?',
    a: 'Instead of pitching brands from a Gmail address, you\'ll send emails from yourname@yourbrand.com. It signals professionalism and helps brands take you seriously — especially when you\'re cold-pitching or responding to inbound enquiries.',
  },
  {
    q: 'What\'s included in the link-in-bio page?',
    a: 'Your link page is a branded, mobile-optimised page you can link to from any social profile. Add links to your content, brand work, affiliate codes, and more — plus built-in analytics show you click-through rates for every link so you know what your audience actually engages with.',
  },
  {
    q: 'When is Bogey Golf Club launching?',
    a: 'We\'re actively building the platform now. Join the waitlist to get early access and be the first to know when we open the doors.',
  },
];

export default function HomeClient() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'duplicate' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else if (res.status === 409) {
        setStatus('duplicate');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white font-sans">

      {/* Nav */}
      <nav className="flex items-center justify-between max-w-6xl mx-auto px-6 py-6">
        <span className="text-lg font-bold tracking-tight">
          <span className="text-green-400">Bogey</span> Golf Club
        </span>
        <a
          href="#waitlist"
          className="text-sm font-semibold text-green-400 hover:text-green-300 transition-colors"
        >
          Join the Waitlist →
        </a>
      </nav>

      {/* Hero */}
      <section className="relative flex flex-col items-center text-center px-6 pt-20 pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/30 via-neutral-950 to-neutral-950 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block text-green-400 text-xs font-bold tracking-widest uppercase mb-5 px-4 py-1.5 rounded-full border border-green-400/30 bg-green-400/5">
            Built for Golf Creators
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6">
            Run your golf brand<br />
            <span className="text-green-400">like a business.</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Bogey Golf Club is the all-in-one platform for social media golf creators. Manage brand partnerships, UGC content, and creator communications — plus your own custom email domain and link-in-bio page with analytics.
          </p>
          <a
            href="#waitlist"
            className="inline-block bg-green-500 hover:bg-green-400 active:scale-95 text-black font-bold px-10 py-4 rounded-full text-base transition-all"
          >
            Get Early Access
          </a>
        </div>
      </section>

      {/* Social proof line */}
      <div className="text-center text-neutral-600 text-sm pb-16">
        Launching soon · Be the first to know
      </div>

      {/* Who it's for */}
      <section className="max-w-4xl mx-auto px-6 pb-24 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Built for the golf creator economy</h2>
        <p className="text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-10">
          Whether you're a golf TikToker landing your first brand deal, an Instagram golf creator growing an audience, or a YouTube golf channel building a media business — Bogey Golf Club gives you the infrastructure to operate like a professional.
        </p>
        <div className="grid sm:grid-cols-3 gap-6 text-left">
          {[
            { label: 'Golf TikTokers & Reels creators', desc: 'Pitch brands with a professional email, deliver UGC, and track your link-in-bio clicks — all in one place.' },
            { label: 'Instagram golf influencers', desc: 'Manage inbound brand enquiries without losing track. Keep every deal organised from first DM to payment.' },
            { label: 'YouTube golf content creators', desc: 'Handle affiliate partnerships, sponsored content, and brand communications with a system built for how you actually work.' },
          ].map((item) => (
            <div key={item.label} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5">
              <p className="text-green-400 font-semibold text-sm mb-2">{item.label}</p>
              <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Everything a golf creator needs to run their brand</h2>
          <p className="text-neutral-400 max-w-xl mx-auto">
            Stop juggling spreadsheets, DMs, and a dozen different tools. Bogey Golf Club brings it all together in one platform designed for golf content creators.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <article
              key={f.title}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-green-400/30 transition-colors"
            >
              <span className="text-3xl" aria-hidden="true">{f.icon}</span>
              <h3 className="text-white font-semibold text-lg mt-3 mb-2">{f.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{f.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-neutral-900/50 border-y border-neutral-800 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Your whole golf brand in one place</h2>
          <p className="text-neutral-400 max-w-xl mx-auto">
            From the first brand email to final content delivery — Bogey Golf Club handles the business side so you can focus on creating golf content.
          </p>
        </div>
        <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            { step: '01', title: 'Set up your brand', desc: 'Get your custom email domain and a professional link-in-bio page live in minutes.' },
            { step: '02', title: 'Manage deals & content', desc: 'Track brand partnerships, deadlines, and UGC deliverables from one dashboard.' },
            { step: '03', title: 'Grow with data', desc: 'Analytics across your link page and partnerships show you what\'s working and what to double down on.' },
          ].map((s) => (
            <div key={s.step}>
              <p className="text-green-400 text-4xl font-extrabold mb-3" aria-hidden="true">{s.step}</p>
              <h3 className="font-semibold text-white text-lg mb-2">{s.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Frequently asked questions</h2>
          <p className="text-neutral-400">Everything you need to know about Bogey Golf Club.</p>
        </div>
        <dl className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
              <dt className="font-semibold text-white mb-2">{faq.q}</dt>
              <dd className="text-neutral-400 text-sm leading-relaxed">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Get early access</h2>
        <p className="text-neutral-400 text-lg mb-10">
          We're building this for golf creators — join the waitlist and be first in the door when we launch.
        </p>

        {status === 'success' ? (
          <div className="bg-green-900/30 border border-green-500/40 rounded-2xl px-8 py-6">
            <p className="text-green-400 font-semibold text-lg">You're on the list!</p>
            <p className="text-neutral-400 text-sm mt-1">We'll be in touch as soon as we're ready to let you in.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" aria-label="Waitlist sign-up">
            <label htmlFor="waitlist-email" className="sr-only">Email address</label>
            <input
              id="waitlist-email"
              type="email"
              required
              value={email}
              onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
              placeholder="your@email.com"
              className="flex-1 bg-neutral-900 border border-neutral-700 focus:border-green-400 focus:outline-none rounded-full px-5 py-3 text-white placeholder-neutral-600 text-sm transition-colors"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-green-500 hover:bg-green-400 disabled:opacity-60 disabled:cursor-not-allowed active:scale-95 text-black font-bold px-7 py-3 rounded-full text-sm transition-all whitespace-nowrap"
            >
              {status === 'loading' ? 'Signing up…' : 'Sign Up for Waitlist'}
            </button>
          </form>
        )}

        {status === 'duplicate' && (
          <p className="text-neutral-500 text-sm mt-4">That email is already on the waitlist — you're all set!</p>
        )}
        {status === 'error' && (
          <p className="text-red-400 text-sm mt-4">Something went wrong. Please try again.</p>
        )}
      </section>

      <footer className="text-center text-neutral-700 text-xs py-8 border-t border-neutral-900">
        © 2026 Bogey Golf Club · Business tools for golf content creators
      </footer>
    </main>
  );
}

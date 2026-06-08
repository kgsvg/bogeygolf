import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bogey Kris – Golf Content Creator Media Kit',
  description: 'Brand partnership one-pager for Bogey Kris, golf content creator on Instagram and TikTok.',
};

const stats = [
  { value: '71k+', label: 'Campaign Views', sub: 'across IG & TikTok' },
  { value: '51', label: 'Instagram', sub: 'followers & growing' },
  { value: '38', label: 'TikTok', sub: 'followers & growing' },
];

const services = [
  {
    title: 'UGC Videos',
    desc: 'High-quality short-form video assets you own outright. Use them in paid ads, email, or any channel.',
  },
  {
    title: 'Affiliate Partnerships',
    desc: 'Commission-based deals with trackable links — low risk, performance-driven, fully measurable.',
  },
  {
    title: 'Product Testing',
    desc: 'On-course demos and honest reviews. Real feedback from someone who actually uses the gear.',
  },
  {
    title: 'Content Packages',
    desc: 'Multi-piece short-form bundles for product launches or seasonal campaigns. Delivered fast.',
  },
];

const contentTypes = [
  { title: 'Golf Comedy & Satire', desc: 'Relatable content for the average golfer — the mishits, the mental collapses, the post-round excuses.' },
  { title: 'Product Testing', desc: 'Unfiltered reviews from a real average golfer. No pro bias. No glossy fakery.' },
  { title: 'Influencer Satire', desc: '"Every golf influencer\'s stock shots" style content that resonates broadly and drives shares.' },
  { title: 'Improvement Journey', desc: 'Authentic handicap-chasing content your audience can follow along with week to week.' },
];

const whyMicro = [
  'Higher engagement than large accounts — smaller audiences are more loyal and responsive',
  'UGC rights included — keep the content and repurpose it across paid ads, email, and your own socials',
  'Early-stage pricing — get in before the audience (and rates) scale',
  'Authentic voice — my audience trusts me because I\'m genuinely one of them',
];

export default function MediaKit() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white font-sans">

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,_rgba(34,197,94,0.18),_transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,_rgba(34,197,94,0.06),_transparent)]" />
        {/* Grid texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)',backgroundSize:'60px 60px'}} />

        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-green-400 text-xs font-bold tracking-[0.25em] uppercase mb-6">Creator Media Kit · 2026</p>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-4 leading-none">
            Bogey<br />
            <span className="text-green-400">Kris</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 max-w-lg mx-auto mt-6 mb-10 leading-relaxed font-light">
            Golf content for the 95% of golfers who will never break 80 — and are totally fine with that.
          </p>

          {/* Stat pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 backdrop-blur-sm">
                <span className="text-green-400 font-black text-lg">{s.value}</span>
                <span className="text-neutral-400 text-sm">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="mailto:krisgardiner.dev@gmail.com"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 active:scale-95 text-black font-bold px-8 py-4 rounded-full text-sm tracking-wide transition-all"
            >
              Get in Touch
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-8 py-4 rounded-full text-sm tracking-wide transition-all"
            >
              View Services
            </a>
          </div>

          <p className="text-neutral-600 text-xs mt-8">Instagram · TikTok</p>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-700">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-neutral-700" />
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-3 gap-4 md:gap-6">
          {stats.map((s) => (
            <div key={s.label} className="relative group bg-neutral-900 border border-neutral-800 hover:border-green-400/30 rounded-2xl p-6 md:p-8 text-center transition-colors overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="text-4xl md:text-5xl font-black text-green-400 mb-1">{s.value}</p>
              <p className="text-white font-semibold text-sm uppercase tracking-widest mb-1">{s.label}</p>
              <p className="text-neutral-500 text-xs">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-green-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">About</p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
          Golf content that hits different — because I <em className="not-italic text-green-400">am</em> the audience.
        </h2>
        <div className="space-y-4 text-neutral-400 text-lg leading-relaxed">
          <p>
            I make golf content for real golfers — people grinding to improve, celebrating small wins, and laughing at the absurdity of this sport. Not the influencer who shoots 68 every round and swings in slow motion.
          </p>
          <p>
            Recent satire content crossed <strong className="text-white">71k+ views</strong> across Instagram and TikTok, proving the demand for authentic, funny golf content is massive and underserved. Early channel, fast trajectory.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-neutral-800" />
      </div>

      {/* Content Style */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-green-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">Content Style</p>
        <h2 className="text-3xl font-extrabold mb-10">What I make</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {contentTypes.map((c) => (
            <div key={c.title} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-green-400/20 transition-colors">
              <div className="flex items-start gap-3">
                <span className="text-green-400 font-black text-sm mt-0.5">→</span>
                <div>
                  <h3 className="font-bold text-white mb-1">{c.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Win */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <p className="text-green-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">Recent Wins</p>
        <h2 className="text-3xl font-extrabold mb-8">Proof it works</h2>
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden">
          <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <div className="inline-block text-xs font-bold uppercase tracking-widest text-green-400 bg-green-400/10 border border-green-400/20 px-3 py-1 rounded-full mb-3">Top Performing</div>
              <h3 className="text-xl font-bold text-white mb-2">"Every golf influencer's stock shots"</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Viral satire format that resonates across the entire golf creator community. Proved the demand for authentic, self-aware golf content.</p>
            </div>
            <div className="flex gap-4 md:flex-col md:text-right shrink-0">
              <div>
                <p className="text-3xl font-black text-green-400">71k+</p>
                <p className="text-neutral-500 text-xs uppercase tracking-wide">Total Views</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">IG + TikTok</p>
                <p className="text-neutral-500 text-xs uppercase tracking-wide">Platform</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-neutral-900/40 border-y border-neutral-800 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-green-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">What I Offer</p>
          <h2 className="text-3xl font-extrabold mb-10">Partnership formats</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((s, i) => (
              <div key={s.title} className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 hover:border-green-400/20 transition-colors">
                <div className="flex items-start gap-4">
                  <span className="text-green-400/40 font-black text-2xl leading-none">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-bold text-white mb-2">{s.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why micro creator */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-green-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">Why Partner With a Micro-Creator</p>
        <h2 className="text-3xl font-extrabold mb-8">Small account. Real results.</h2>
        <ul className="space-y-4">
          {whyMicro.map((item, i) => (
            <li key={i} className="flex items-start gap-4 group">
              <span className="mt-1 w-5 h-5 shrink-0 rounded-full border border-green-400/40 bg-green-400/10 flex items-center justify-center">
                <span className="text-green-400 text-xs font-black">✓</span>
              </span>
              <p className="text-neutral-300 leading-relaxed">{item}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_100%_at_50%_100%,_rgba(34,197,94,0.12),_transparent)]" />
        <div className="relative max-w-3xl mx-auto px-6 py-24 text-center">
          <p className="text-green-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">Let's Work Together</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            Open to UGC, affiliate,<br />and product deals.
          </h2>
          <p className="text-neutral-400 text-lg mb-10 max-w-md mx-auto leading-relaxed">
            Early-stage pricing. High engagement. Authentic audience. Let's build something that works for both of us.
          </p>
          <a
            href="mailto:krisgardiner.dev@gmail.com"
            className="inline-block bg-green-500 hover:bg-green-400 active:scale-95 text-black font-bold px-12 py-4 rounded-full text-base tracking-wide transition-all shadow-lg shadow-green-500/20"
          >
            Get in Touch
          </a>
          <p className="text-neutral-600 text-sm mt-6">krisgardiner.dev@gmail.com</p>
        </div>
      </section>

      <footer className="text-center text-neutral-800 text-xs py-8 border-t border-neutral-900">
        © 2026 Bogey Kris · Golf Content Creator
      </footer>
    </main>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bogey Kris – Creator Media Kit',
  description: 'Brand partnership one-pager for Bogey Kris, golf content creator.',
};

const stats = [
  { label: 'Total Views', value: '71k+', sub: 'recent campaign' },
  { label: 'Instagram', value: '51', sub: 'followers' },
  { label: 'TikTok', value: '38', sub: 'followers' },
];

const contentTypes = [
  { title: 'Golf Comedy & Satire', desc: 'Relatable comedy for the average golfer — the mishits, the mental breakdowns, the post-round excuses.' },
  { title: 'Product Testing', desc: 'Honest, unfiltered reviews from a real average golfer. No pro bias.' },
  { title: 'Influencer Satire', desc: '"Every golf influencer\'s stock shots" style content that resonates broadly and drives shares.' },
  { title: 'Improvement Journey', desc: 'Authentic handicap-chasing content your audience can follow along with.' },
];

const services = [
  { icon: '🎬', label: 'UGC Videos', desc: 'High-quality short-form video assets you own and can repurpose across any platform.' },
  { icon: '🔗', label: 'Affiliate Partnerships', desc: 'Commission-based deals with trackable links — low risk, performance-based.' },
  { icon: '🏌️', label: 'Product Testing', desc: 'On-course demos and honest reviews delivered as short-form content.' },
  { icon: '📦', label: 'Content Packages', desc: 'Multi-piece short-form content bundles for product launches or campaigns.' },
];

const topContent = [
  { title: 'Every golf influencer\'s stock shots', result: 'Top performing post — viral satire format', platform: 'IG + TikTok' },
];

export default function MediaKit() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white font-sans">

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-b from-green-900/40 to-neutral-950">
        <p className="text-green-400 text-sm font-semibold tracking-widest uppercase mb-3">Creator Media Kit</p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">Bogey Kris</h1>
        <p className="text-xl md:text-2xl text-neutral-300 max-w-xl">
          Golf content for average golfers trying to get better.
        </p>
        <p className="mt-4 text-neutral-500 text-sm">Instagram · TikTok</p>
      </section>

      {/* Stats */}
      <section className="max-w-4xl mx-auto px-6 py-12 grid grid-cols-3 gap-6 text-center">
        {stats.map((s) => (
          <div key={s.label} className="bg-neutral-900 rounded-2xl p-6">
            <p className="text-4xl font-extrabold text-green-400">{s.value}</p>
            <p className="text-neutral-400 text-sm mt-1">{s.sub}</p>
            <p className="text-white text-xs font-semibold uppercase tracking-wide mt-1">{s.label}</p>
          </div>
        ))}
      </section>

      {/* About */}
      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-4 text-green-400">About</h2>
        <p className="text-neutral-300 leading-relaxed text-lg">
          I make golf content for the 95% of golfers who will never break 80 — and are totally fine with that.
          My content hits differently because I <em>am</em> the audience: a real average golfer grinding to improve,
          calling out the absurdity of golf culture along the way. Recent satire content crossed <strong>71k+ views</strong> across
          Instagram and TikTok, proving the demand for authentic, funny golf content is massive and underserved.
        </p>
      </section>

      {/* Content Style */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-6 text-green-400">Content Style</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {contentTypes.map((c) => (
            <div key={c.title} className="bg-neutral-900 rounded-2xl p-5">
              <h3 className="font-semibold text-white mb-1">{c.title}</h3>
              <p className="text-neutral-400 text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Top Content */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-6 text-green-400">Recent Wins</h2>
        <div className="bg-neutral-900 rounded-2xl divide-y divide-neutral-800">
          {topContent.map((p) => (
            <div key={p.title} className="flex items-start justify-between px-6 py-5 gap-4">
              <div>
                <p className="font-semibold text-white">"{p.title}"</p>
                <p className="text-neutral-400 text-sm mt-1">{p.result}</p>
              </div>
              <span className="text-xs bg-green-900/50 text-green-400 px-3 py-1 rounded-full whitespace-nowrap">{p.platform}</span>
            </div>
          ))}
          <div className="flex items-start justify-between px-6 py-5 gap-4">
            <div>
              <p className="font-semibold text-white">71k+ total views</p>
              <p className="text-neutral-400 text-sm mt-1">Across recent campaign — early channel, fast growth trajectory</p>
            </div>
            <span className="text-xs bg-green-900/50 text-green-400 px-3 py-1 rounded-full whitespace-nowrap">IG + TikTok</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-6 text-green-400">What I Offer</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((s) => (
            <div key={s.label} className="bg-neutral-900 rounded-2xl p-5 flex gap-4">
              <span className="text-3xl">{s.icon}</span>
              <div>
                <h3 className="font-semibold text-white mb-1">{s.label}</h3>
                <p className="text-neutral-400 text-sm">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why small creators */}
      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-4 text-green-400">Why Partner With a Micro-Creator?</h2>
        <ul className="space-y-3 text-neutral-300">
          <li className="flex gap-3"><span className="text-green-400 font-bold">→</span> Higher engagement rates than large accounts — smaller audiences are more loyal</li>
          <li className="flex gap-3"><span className="text-green-400 font-bold">→</span> UGC rights mean you keep the content — use it in paid ads, email, your own channels</li>
          <li className="flex gap-3"><span className="text-green-400 font-bold">→</span> Early-stage pricing — get in before the audience (and rates) scale</li>
          <li className="flex gap-3"><span className="text-green-400 font-bold">→</span> Authentic voice — my audience trusts me because I'm one of them</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-extrabold mb-3">Let's Work Together</h2>
        <p className="text-neutral-400 mb-8 text-lg">Open to UGC deals, affiliate arrangements, and product testing packages.</p>
        <a
          href="mailto:krisgardiner.dev@gmail.com"
          className="inline-block bg-green-500 hover:bg-green-400 text-black font-bold px-10 py-4 rounded-full text-lg transition-colors"
        >
          Get in Touch
        </a>
      </section>

      <footer className="text-center text-neutral-700 text-xs py-8">
        © 2026 Bogey Kris · Golf Content Creator
      </footer>
    </main>
  );
}

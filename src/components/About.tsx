import { motion } from 'motion/react';
import { Target, Users, Zap, ShieldCheck, Heart } from 'lucide-react';

// TODO (real photos): add `imageUrl` to each member for a real headshot.
// Until then, the initials placeholder is shown.
const TEAM: { name: string; role: string; bio: string; initials: string; imageUrl?: string }[] = [
  {
    name: 'Sarah Lindberg',
    role: 'Founder & Strategy Director',
    bio: 'Former VP of Social at a Fortune-500 startup. Specializes in building organic viral loops and high-converting funnel architectures.',
    initials: 'SL',
  },
  {
    name: 'Devon Kross',
    role: 'Lead Content & Creative Editor',
    bio: 'Master of short-form audio visual storytelling. Has supervised the content creation of campaigns scaling to over 15M organic video views.',
    initials: 'DK',
  },
  {
    name: 'Yuki Sato',
    role: 'Technical SEO Architect',
    bio: 'Algorithm researcher and search crawl specialist. Spends his days auditing core web vitals, local mapping configurations, and index graphs.',
    initials: 'YS',
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-navy-900">
      {/* Background decoration */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-orange-600/5 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-500/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Core Content: Story & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400 bg-orange-950/60 border border-orange-900/40 px-2.5 py-1 rounded inline-block">
              Our Agency Story
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink tracking-tight">
              A Growth-First Squad Obsessed With Real Business Value
            </h2>
            <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Monarchix was born out of frustration. We saw local business owners and startups spending thousands of euros on massive agency contracts that only delivered vague, non-converting "impressions" and "brand alignment."
            </p>
            <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              We decided to build something different: a lean, highly specialized digital marketing execution team focused exclusively on <strong>quantifiable customer acquisition</strong>. Whether that is organic search rankings that drive daily phone calls, or active video shorts that generate immediate product checkouts.
            </p>

            {/* Core Values Subgrid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-800">
              <div className="flex space-x-3">
                <div className="p-2 bg-orange-950 text-orange-400 rounded-lg h-9 w-9 flex items-center justify-center shrink-0">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-ink">Absolute Clarity</h4>
                  <p className="text-xs text-slate-400 font-sans mt-1">We present results clearly, explaining which platform is performing and why.</p>
                </div>
              </div>

              <div className="flex space-x-3">
                <div className="p-2 bg-orange-950 text-orange-400 rounded-lg h-9 w-9 flex items-center justify-center shrink-0">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-ink">Rapid Execution</h4>
                  <p className="text-xs text-slate-400 font-sans mt-1">No multi-month research delays. We publish, test, and adapt content in days.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual block representing agency mission */}
          <div className="lg:col-span-5 bg-slate-900/40 border border-slate-800 p-8 rounded-3xl relative backdrop-blur-md">
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 blur-[40px] pointer-events-none rounded-bl-full" />
            <h3 className="font-display font-bold text-xl text-ink mb-6 flex items-center">
              <Heart className="h-5 w-5 text-emerald-400 mr-2" /> Our Core Mission
            </h3>
            <blockquote className="border-l-2 border-emerald-500 pl-4 py-1 text-slate-300 font-sans text-sm italic font-light leading-relaxed mb-6">
              "To democratize world-class social media strategies and search engine engineering for small-to-medium enterprise owners, turning visibility into reliable, stress-free business revenue."
            </blockquote>

            <div className="space-y-4">
              <div className="flex items-center space-x-3.5 bg-slate-950 p-4 rounded-xl border border-slate-800/60">
                <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-300 font-semibold font-sans">No long lock-in contracts (cancel anytime)</span>
              </div>
              <div className="flex items-center space-x-3.5 bg-slate-950 p-4 rounded-xl border border-slate-800/60">
                <Users className="h-5 w-5 text-orange-400 shrink-0" />
                <span className="text-xs text-slate-300 font-semibold font-sans">100% human-crafted creative content</span>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section (Optional, adds professional depth) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-display font-extrabold text-2xl text-ink">Meet Our Growth Advisors</h3>
            <p className="font-sans text-xs sm:text-sm text-slate-400 mt-2">
              Our lean operational roster consists of experienced content creators and index engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 transition-colors duration-300 flex flex-col items-center text-center"
              >
                {/* Real headshot if provided, else a styled initials placeholder */}
                {member.imageUrl ? (
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                    className="h-16 w-16 rounded-2xl object-cover shadow-lg mb-4"
                  />
                ) : (
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-orange-600 to-orange-800 text-white flex items-center justify-center font-display font-bold text-lg shadow-lg mb-4">
                    {member.initials}
                  </div>
                )}

                <h4 className="font-display font-bold text-base text-ink">{member.name}</h4>
                <p className="text-xs text-orange-400 font-medium font-sans mt-0.5">{member.role}</p>

                <p className="font-sans text-xs text-slate-400 leading-relaxed font-light mt-4 pt-4 border-t border-slate-900/80">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

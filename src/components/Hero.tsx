import { motion } from 'motion/react';
import { ArrowRight, Star, TrendingUp, Users, Award, ShieldCheck } from 'lucide-react';
import { STATS_COUNTERS, PARTNERS_LOGOS } from '../data';

export default function Hero() {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  // Stagger Container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  // Fade Up Elements
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Background gradients and meshes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand/10 blur-[90px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-500/5 blur-[90px] pointer-events-none" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.15]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Headline */}
            <motion.h1 variants={itemVariants} className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] text-ink">
              Grow Your Business <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand-light to-amber-300">
                Online, Effortlessly.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p variants={itemVariants} className="font-sans text-slate-300 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              We create targeted content, optimize search algorithms, and manage high-impact campaigns across Instagram, Facebook, and YouTube to capture real leads and compound your revenue.
            </motion.p>

            {/* CTA Group */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={scrollToPricing}
                className="w-full sm:w-auto bg-brand hover:bg-brand-light text-white font-display font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-[0_8px_25px_rgba(249,115,22,0.35)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2 group cursor-pointer"
              >
                <span>View Pricing & Packages</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-slate-200 font-display font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center cursor-pointer"
              >
                Get Free Consultation
              </button>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div variants={itemVariants} className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-slate-400">
              <span className="flex items-center"><Star className="h-4 w-4 text-amber-400 fill-amber-400 mr-1.5" /> 4.9/5 Trust Score</span>
              <span className="flex items-center"><ShieldCheck className="h-4 w-4 text-emerald-400 mr-1.5" /> Guarantee Results</span>
              <span className="flex items-center"><Users className="h-4 w-4 text-orange-400 mr-1.5" /> 250+ Active Brands</span>
            </motion.div>
          </div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, type: 'spring', stiffness: 80, damping: 20 }}
              className="relative bg-slate-900/50 border border-slate-800/80 p-6 md:p-8 rounded-3xl backdrop-blur-md shadow-2xl"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-300 via-brand to-brand-dark rounded-t-3xl" />

              {/* Mock Dashboard Top */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-1.5">
                    <span className="h-3.5 w-3.5 rounded-full bg-rose-500/20 border border-rose-500/40 inline-block" />
                    <span className="h-3.5 w-3.5 rounded-full bg-amber-500/20 border border-amber-500/40 inline-block" />
                    <span className="h-3.5 w-3.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded">monarchix.eu/dashboard</span>
                </div>
                <span className="text-xs text-emerald-400 bg-emerald-950/30 border border-emerald-900/50 px-2 py-0.5 rounded-full font-semibold flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" /> Live Growth Engine
                </span>
              </div>

              {/* Dynamic stats preview inside the dashboard mock */}
              <div className="space-y-6">
                {/* Stat 1: Main aggregate stat */}
                <div>
                  <span className="text-xs text-slate-400 font-mono tracking-wider uppercase">Average Brand Return (ROAS)</span>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-display font-extrabold text-ink">4.82x</span>
                    <span className="text-sm font-semibold text-emerald-400 font-mono">+12.4% this week</span>
                  </div>
                </div>

                {/* Stat Progress Bar Grid */}
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-300">Instagram Growth Index</span>
                      <span className="text-emerald-400">+340% Target Reach</span>
                    </div>
                    <div className="h-2 bg-slate-950 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: '0%' }}
                        animate={{ width: '82%' }}
                        transition={{ delay: 0.8, duration: 1.2, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-brand to-brand-light"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-300">SEO Search Impressions</span>
                      <span className="text-emerald-400">+280% Page-1 Keywords</span>
                    </div>
                    <div className="h-2 bg-slate-950 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: '0%' }}
                        animate={{ width: '74%' }}
                        transition={{ delay: 1, duration: 1.2, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-emerald-400 to-teal-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-300">YouTube Acquisition Rate</span>
                      <span className="text-emerald-400">+220% Subscribers</span>
                    </div>
                    <div className="h-2 bg-slate-950 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: '0%' }}
                        animate={{ width: '90%' }}
                        transition={{ delay: 1.2, duration: 1.2, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-amber-400 to-brand"
                      />
                    </div>
                  </div>
                </div>

                {/* Miniature card representing active actions */}
                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-orange-500/10 text-orange-400 p-2 rounded-lg">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-ink">SEO Optimization Complete</p>
                      <p className="text-[10px] text-slate-500">Google Sitemap Submitted Successfully</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900/30">Success</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Counter Stats Section */}
        <div className="mt-20 py-8 border-y border-slate-900/80 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS_COUNTERS.map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <p className="font-display font-extrabold text-3xl sm:text-4xl text-ink">{stat.value}</p>
              <p className="font-sans text-xs sm:text-sm text-slate-400 mt-1 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Client Partners Logo Marquee */}
        <div className="mt-16 text-center">
          <p className="text-xs font-sans text-slate-500 uppercase tracking-widest mb-6">Platforms &amp; tools we work with daily</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-40 hover:opacity-60 transition-opacity duration-300">
            {PARTNERS_LOGOS.map((partner, i) => (
              partner.logoUrl ? (
                <img
                  key={i}
                  src={partner.logoUrl}
                  alt={partner.name}
                  loading="lazy"
                  decoding="async"
                  className="h-6 w-auto object-contain"
                />
              ) : (
                <span key={i} className="font-display font-black text-sm tracking-[0.3em] text-slate-300 select-none">
                  {partner.logoText}
                </span>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Check, X, Shield, HelpCircle, Sliders, Settings2, Sparkles } from 'lucide-react';
import { PRICING_PACKAGES } from '../data';
import { CustomPlanState } from '../types';

interface PricingProps {
  onSelectPlan: (planName: string, messagePreset?: string) => void;
}

export default function Pricing({ onSelectPlan }: PricingProps) {
  // Custom Plan Calculator State
  const [customPlan, setCustomPlan] = useState<CustomPlanState>({
    platforms: ['instagram'],
    postsPerWeek: 3,
    adBudget: 25,
    seoKeywords: 0,
    reportFrequency: 'monthly',
  });

  const [customPrice, setCustomPrice] = useState(60);

  // Billing period toggle (#14). Annual = 20% off, billed yearly.
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');
  const ANNUAL_DISCOUNT = 0.2;
  const monthlyEquivalent = (price: number) =>
    billing === 'annual' ? Math.round(price * (1 - ANNUAL_DISCOUNT)) : price;

  // Re-calculate custom plan price dynamically
  useEffect(() => {
    // Base cost for choosing custom
    let price = 20;

    // Platform charge: €10 per active platform
    price += customPlan.platforms.length * 12;

    // Posts frequency: €4 per post per week
    price += customPlan.postsPerWeek * 5;

    // SEO Keywords: €1.50 per keyword
    price += customPlan.seoKeywords * 1.5;

    // Ad Budget: We add the ad budget directly to client billing as spend
    // But since it has up to €200 limit, let's include an allocation formula
    // e.g. 50% of the ad budget is included as management surcharge or ad spend itself
    price += customPlan.adBudget * 0.4;

    // Reporting: weekly (+€25), bi-weekly (+€12), monthly (+€0)
    if (customPlan.reportFrequency === 'weekly') {
      price += 25;
    } else if (customPlan.reportFrequency === 'bi-weekly') {
      price += 12;
    }

    // Cap pricing or keep it accurate
    const finalPrice = Math.min(200, Math.round(price));
    setCustomPrice(finalPrice);
  }, [customPlan]);

  const togglePlatform = (platformId: string) => {
    setCustomPlan((prev) => {
      const active = prev.platforms.includes(platformId);
      let nextPlatforms = [...prev.platforms];
      if (active) {
        // Don't allow 0 platforms
        if (nextPlatforms.length > 1) {
          nextPlatforms = nextPlatforms.filter((id) => id !== platformId);
        }
      } else {
        nextPlatforms.push(platformId);
      }
      return { ...prev, platforms: nextPlatforms };
    });
  };

  const handleCustomPlanSubmit = () => {
    const platformsLabel = customPlan.platforms.map(p => p.toUpperCase()).join(', ');
    const messagePreset = `Interested in a Custom Pack (€${customPrice}/mo):
- Platforms: ${platformsLabel}
- Posts: ${customPlan.postsPerWeek} posts/week
- Ad Budget: €${customPlan.adBudget}/mo ad credit
- SEO Keywords: ${customPlan.seoKeywords} keywords
- Reports: ${customPlan.reportFrequency}`;

    onSelectPlan('Custom Pack', messagePreset);
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-navy-900">
      {/* Background Orbs */}
      <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] rounded-full bg-brand/5 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-5%] w-[40%] h-[40%] rounded-full bg-emerald-500/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="font-display font-extrabold text-3xl sm:text-4xl text-ink tracking-tight"
          >
            Transparent Packages Built to Scale Your Brand
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans text-slate-400 mt-4 text-base sm:text-lg"
          >
            No hidden setup fees. Choose a fixed pricing package below, or leverage our interactive builder to configure a customized growth system for up to €200/month.
          </motion.p>
        </div>

        {/* Billing period toggle */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div
            role="tablist"
            aria-label="Billing period"
            className="inline-flex bg-slate-950 border border-slate-800 p-1 rounded-xl"
          >
            <button
              role="tab"
              aria-selected={billing === 'monthly'}
              onClick={() => setBilling('monthly')}
              className={`px-5 py-2 rounded-lg text-xs font-display font-bold transition-all cursor-pointer ${
                billing === 'monthly' ? 'bg-brand text-white shadow-md' : 'text-slate-400 hover:text-ink'
              }`}
            >
              Monthly
            </button>
            <button
              role="tab"
              aria-selected={billing === 'annual'}
              onClick={() => setBilling('annual')}
              className={`px-5 py-2 rounded-lg text-xs font-display font-bold transition-all cursor-pointer flex items-center gap-2 ${
                billing === 'annual' ? 'bg-brand text-white shadow-md' : 'text-slate-400 hover:text-ink'
              }`}
            >
              Annual
              <span className="text-[10px] font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-900/50 px-1.5 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch mb-6">
          {PRICING_PACKAGES.map((pack) => (
            <motion.div
              key={pack.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className={`rounded-3xl border p-6 flex flex-col justify-between relative transition-all duration-300 hover:shadow-xl group ${pack.colorClass}`}
            >
              {pack.isPopular && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand to-amber-400 text-white font-display text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                  <Sparkles className="h-3 w-3" /> Most Popular
                </div>
              )}

              {/* Title & Price */}
              <div>
                <h3 className="font-display font-extrabold text-xl text-ink">{pack.name}</h3>
                <p className="font-sans text-xs text-slate-400 mt-1.5 font-light leading-relaxed min-h-[40px]">{pack.description}</p>

                <div className="mt-5 border-b border-slate-800 pb-5">
                  <div className="flex items-baseline space-x-1">
                    <span className="font-display font-extrabold text-4xl text-ink">€{monthlyEquivalent(pack.price)}</span>
                    <span className="font-sans text-xs text-slate-400 font-light">/month</span>
                  </div>
                  <span className="font-sans text-[10px] text-slate-500 font-light">
                    incl. VAT (EU)
                    {billing === 'annual' && ` · billed €${monthlyEquivalent(pack.price) * 12}/year`}
                  </span>
                </div>

                {/* Features Checklist */}
                <ul className="mt-6 space-y-3.5">
                  {pack.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-xs font-sans text-slate-300">
                      {feature.included ? (
                        <Check className="h-4 w-4 text-emerald-400 mr-2.5 shrink-0 mt-0.5 bg-emerald-950/40 p-0.5 rounded border border-emerald-900/40" />
                      ) : (
                        <X className="h-4 w-4 text-slate-600 mr-2.5 shrink-0 mt-0.5 bg-slate-950/40 p-0.5 rounded border border-slate-900/40" />
                      )}
                      <span className={feature.included ? '' : 'text-slate-500'}>
                        {feature.name}
                        {feature.val && <strong className="block text-slate-200 mt-0.5 font-medium">{feature.val}</strong>}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button — sends the visitor to the contact form with this plan prefilled */}
              <button
                onClick={() =>
                  onSelectPlan(
                    pack.name,
                    `Hi, I'd like to get started with the ${pack.name} package (${billing === 'annual' ? 'annual' : 'monthly'} billing — €${monthlyEquivalent(pack.price)}/month). Here are my details:`,
                  )
                }
                className={`mt-8 w-full font-display font-bold text-sm py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${
                  pack.isPopular
                    ? 'bg-brand hover:bg-brand-light text-white shadow-[0_4px_18px_rgba(249,115,22,0.35)]'
                    : 'bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-ink'
                }`}
              >
                {pack.ctaText}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Reassurance */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400 mb-20">
          <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-400" /> No setup fee</span>
          <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-400" /> Cancel anytime</span>
          <span className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5 text-emerald-400" /> 30-day guarantee</span>
        </div>

        {/* Interactive Custom Plan Builder Slider (The €200/month Cap package) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-b from-slate-900 to-navy-950 border border-slate-800/80 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle decoration lines */}
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-emerald-500/5 blur-[80px] pointer-events-none rounded-tl-full" />

          {/* Section title inside card */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-slate-800/80 pb-6 mb-8 gap-4">
            <div className="flex items-center space-x-3.5">
              <div className="bg-emerald-950/50 p-3 rounded-2xl text-emerald-400 border border-emerald-900/40">
                <Settings2 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-2xl text-ink">Custom Pack Builder</h3>
                <p className="font-sans text-xs text-slate-400 font-light mt-0.5">Scale options to fit your needs perfectly — capped at €200/month maximum value.</p>
              </div>
            </div>

            {/* Dynamic Price Display */}
            <div className="bg-slate-950/80 px-6 py-4 rounded-2xl border border-slate-800/60 text-center md:text-right flex md:flex-col justify-between items-center md:items-end gap-4 min-w-[160px]">
              <span className="text-xs text-slate-400 font-mono tracking-wider uppercase">Estimated Cost</span>
              <div className="flex items-baseline space-x-1">
                <span className="text-3xl font-display font-black text-emerald-400">€{customPrice}</span>
                <span className="text-xs text-slate-500 font-light">/month</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Custom Sliders Configuration */}
            <div className="lg:col-span-8 space-y-6">
              {/* Select Platforms */}
              <div>
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-3">
                  1. Choose Social & SEO Channels (Select multiple):
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: 'instagram', label: 'Instagram' },
                    { id: 'facebook', label: 'Facebook' },
                    { id: 'youtube', label: 'YouTube' },
                    { id: 'seo', label: 'Website SEO' },
                  ].map((p) => {
                    const isSelected = customPlan.platforms.includes(p.id);
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => togglePlatform(p.id)}
                        className={`py-3 px-4 rounded-xl text-xs font-sans font-semibold border transition-all cursor-pointer ${
                          isSelected
                            ? 'border-emerald-500 bg-emerald-950/20 text-emerald-400'
                            : 'border-slate-800 bg-slate-950/40 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                        }`}
                      >
                        {p.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Slider 1: Posts frequency */}
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                  <span className="uppercase tracking-wider">2. Posts / Reels Frequency:</span>
                  <span className="text-emerald-400 font-bold">{customPlan.postsPerWeek} posts per week</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="7"
                  value={customPlan.postsPerWeek}
                  onChange={(e) => setCustomPlan((prev) => ({ ...prev, postsPerWeek: parseInt(e.target.value) }))}
                  className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-400 border border-slate-800"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                  <span>1 Post/wk</span>
                  <span>4 Posts/wk</span>
                  <span>7 Posts/wk (Daily)</span>
                </div>
              </div>

              {/* Slider 2: Ad budget booster */}
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                  <span className="uppercase tracking-wider">3. Monthly Ad Boost Budget:</span>
                  <span className="text-emerald-400 font-bold">€{customPlan.adBudget} /month</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="200"
                  step="10"
                  value={customPlan.adBudget}
                  onChange={(e) => setCustomPlan((prev) => ({ ...prev, adBudget: parseInt(e.target.value) }))}
                  className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-400 border border-slate-800"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                  <span>€0 (Organic only)</span>
                  <span>€100 Limit</span>
                  <span>€200 Max credit</span>
                </div>
              </div>

              {/* Slider 3: Keywords */}
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                  <span className="uppercase tracking-wider">4. Website Keywords Tracked (SEO):</span>
                  <span className="text-emerald-400 font-bold">{customPlan.seoKeywords} keywords</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="5"
                  value={customPlan.seoKeywords}
                  onChange={(e) => setCustomPlan((prev) => ({ ...prev, seoKeywords: parseInt(e.target.value) }))}
                  className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-400 border border-slate-800"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                  <span>0 Keywords</span>
                  <span>25 Keywords</span>
                  <span>50 Keywords (Pro)</span>
                </div>
              </div>

              {/* Reporting Toggle */}
              <div>
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-3">
                  5. Reporting & Strategy Session Frequency:
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(['monthly', 'bi-weekly', 'weekly'] as const).map((freq) => {
                    const isSelected = customPlan.reportFrequency === freq;
                    return (
                      <button
                        key={freq}
                        type="button"
                        onClick={() => setCustomPlan((prev) => ({ ...prev, reportFrequency: freq }))}
                        className={`py-3 px-3 rounded-xl text-xs font-sans font-semibold border transition-all cursor-pointer capitalize ${
                          isSelected
                            ? 'border-emerald-500 bg-emerald-950/20 text-emerald-400'
                            : 'border-slate-800 bg-slate-950/40 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                        }`}
                      >
                        {freq.replace('-', ' ')}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right: Plan Highlights Summary Card */}
            <div className="lg:col-span-4 bg-slate-950 border border-slate-800 rounded-2xl p-6 h-full flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Your Custom Inclusions:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start text-xs text-slate-300">
                    <Check className="h-4 w-4 text-emerald-400 mr-2 shrink-0 mt-0.5 bg-emerald-950/35 p-0.5 rounded" />
                    <span>Channels: {customPlan.platforms.map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join(', ')}</span>
                  </li>
                  <li className="flex items-start text-xs text-slate-300">
                    <Check className="h-4 w-4 text-emerald-400 mr-2 shrink-0 mt-0.5 bg-emerald-950/35 p-0.5 rounded" />
                    <span>Posting Rate: {customPlan.postsPerWeek} posts per week managed</span>
                  </li>
                  {customPlan.adBudget > 0 && (
                    <li className="flex items-start text-xs text-slate-300">
                      <Check className="h-4 w-4 text-emerald-400 mr-2 shrink-0 mt-0.5 bg-emerald-950/35 p-0.5 rounded" />
                      <span>Boost budget: €{customPlan.adBudget}/mo credited directly</span>
                    </li>
                  )}
                  {customPlan.seoKeywords > 0 && (
                    <li className="flex items-start text-xs text-slate-300">
                      <Check className="h-4 w-4 text-emerald-400 mr-2 shrink-0 mt-0.5 bg-emerald-950/35 p-0.5 rounded" />
                      <span>SEO focus: {customPlan.seoKeywords} active keywords tracked</span>
                    </li>
                  )}
                  <li className="flex items-start text-xs text-slate-300">
                    <Check className="h-4 w-4 text-emerald-400 mr-2 shrink-0 mt-0.5 bg-emerald-950/35 p-0.5 rounded" />
                    <span className="capitalize">Reporting structure: {customPlan.reportFrequency} dashboard</span>
                  </li>
                  <li className="flex items-start text-xs text-slate-300">
                    <Check className="h-4 w-4 text-emerald-400 mr-2 shrink-0 mt-0.5 bg-emerald-950/35 p-0.5 rounded" />
                    <span>Dedicated marketing admin assigned</span>
                  </li>
                </ul>

                <div className="mt-6 pt-4 border-t border-slate-900 flex items-center space-x-2 text-[11px] text-slate-400">
                  <Shield className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>30-day performance assurance warranty included.</span>
                </div>
              </div>

              <button
                onClick={handleCustomPlanSubmit}
                className="mt-8 w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-display font-bold text-sm py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_18px_rgba(16,185,129,0.25)] flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Sliders className="h-4 w-4" />
                <span>Build This Plan</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { useState, useRef, type KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './BrandIcons';
import { SERVICES_DATA } from '../data';

export default function Services() {
  const [selectedServiceId, setSelectedServiceId] = useState(SERVICES_DATA[0].id);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  // Real brand logo per service (self-colored)
  const renderIcon = (iconName: string) => <BrandLogo name={iconName} className="h-7 w-7" />;

  const currentService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      window.scrollTo({ top: elementRect - bodyRect - offset, behavior: 'smooth' });
    }
  };

  // Roving-tabindex keyboard navigation for the vertical tab list (a11y)
  const handleTabKeyDown = (e: KeyboardEvent, idx: number) => {
    const len = SERVICES_DATA.length;
    let next = idx;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (idx + 1) % len;
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = (idx - 1 + len) % len;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = len - 1;
    else return;
    e.preventDefault();
    setSelectedServiceId(SERVICES_DATA[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-navy-950">
      {/* Background Accent glow */}
      <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[60%] h-[30%] rounded-full bg-orange-900/5 blur-[90px] pointer-events-none" />

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
            Services built to grow your business
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans text-slate-400 mt-4 text-base sm:text-lg"
          >
            Focused work across the channels your customers actually use — content, community, and search — handled for you end to end.
          </motion.p>
        </div>

        {/* Desktop Interactive Layout (Tab system) */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Tabs List */}
          <div role="tablist" aria-label="Services" aria-orientation="vertical" className="col-span-5 space-y-4">
            {SERVICES_DATA.map((service, idx) => {
              const isActive = service.id === selectedServiceId;
              return (
                <button
                  key={service.id}
                  ref={(el) => {
                    tabRefs.current[idx] = el;
                  }}
                  role="tab"
                  id={`tab-${service.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${service.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onKeyDown={(e) => handleTabKeyDown(e, idx)}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                    isActive
                      ? 'border-orange-500 bg-slate-900/80 shadow-lg'
                      : 'border-slate-900 bg-slate-950/40 hover:bg-slate-900/30 hover:border-slate-800'
                  }`}
                >
                  {/* Active indicator in the service's own brand color */}
                  {isActive && (
                    <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${service.accentColor}`} />
                  )}

                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-2.5 rounded-xl bg-white shadow-sm transition-all duration-300 group-hover:scale-105 ${
                        isActive ? 'ring-2 ring-white/70 scale-105' : 'opacity-80 group-hover:opacity-100'
                      }`}
                    >
                      {renderIcon(service.icon)}
                    </div>
                    <div>
                      <h3
                        className={`font-display font-bold text-lg transition-colors ${
                          isActive ? 'text-ink' : 'text-slate-300 group-hover:text-ink'
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-sans mt-0.5 font-light leading-snug line-clamp-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Service Detailed Card */}
          <div className="col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService.id}
                id={`panel-${currentService.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${currentService.id}`}
                tabIndex={0}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-3xl backdrop-blur-md shadow-xl relative overflow-hidden focus:outline-none"
              >
                {/* Top accent bar in the service's brand color */}
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${currentService.accentColor}`} />
                {/* Accent glow corner */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${currentService.accentColor} opacity-5 blur-[50px] rounded-bl-full`} />

                {/* Service Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-800/60 pb-6 mb-6 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white shadow-sm shrink-0">{renderIcon(currentService.icon)}</div>
                    <h3 className="font-display font-extrabold text-2xl text-ink">{currentService.title}</h3>
                  </div>
                </div>

                {/* Long description */}
                <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed font-light mb-8">
                  {currentService.longDescription}
                </p>

                {/* Subgrid: Deliverables + Outcomes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">What&apos;s Included</h4>
                    <ul className="space-y-3">
                      {currentService.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start text-xs sm:text-sm text-slate-300">
                          <Check className="h-4 w-4 text-emerald-400 mr-2.5 shrink-0 mt-0.5 bg-emerald-950/40 p-0.5 rounded border border-emerald-900/40" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Honest, qualitative outcomes (no fabricated metrics) */}
                  <div className="bg-slate-950/50 rounded-2xl p-6 border border-slate-800/50 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">What success looks like</h4>
                      <ul className="space-y-3">
                        {currentService.outcomes.map((item, i) => (
                          <li key={i} className="flex items-start text-xs sm:text-sm text-slate-200">
                            <Check className="h-4 w-4 text-emerald-400 mr-2.5 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6 space-y-2">
                      <button
                        onClick={() => scrollTo('contact')}
                        className="w-full bg-brand hover:bg-brand-light text-white text-xs font-display font-bold py-2.5 rounded-lg text-center transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>Discuss this service</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => scrollTo('pricing')}
                        className="w-full text-slate-400 hover:text-ink text-xs font-display font-semibold py-1.5 text-center transition-colors flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <span>See pricing</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Responsive Layout (Elegant Grid of cards) */}
        <div className="lg:hidden space-y-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 relative overflow-hidden"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${service.accentColor}`} />
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-white rounded-lg shadow-sm">{renderIcon(service.icon)}</div>
                <h3 className="font-display font-bold text-lg text-ink">{service.title}</h3>
              </div>

              <p className="text-slate-300 font-sans text-sm font-light leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Inclusions */}
              <div className="space-y-2.5 mb-6">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start text-xs text-slate-300">
                    <Check className="h-4 w-4 text-emerald-400 mr-2 shrink-0 mt-0.5 bg-emerald-950/40 p-0.5 rounded border border-emerald-900/40" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Outcomes */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                {service.outcomes.map((item, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 text-[10px] bg-slate-950 text-slate-300 px-2 py-1 rounded border border-slate-800"
                  >
                    <Check className="h-3 w-3 text-emerald-400 shrink-0" /> {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Service Bottom Callout */}
        <div className="mt-16 bg-slate-900/20 border border-slate-900/80 p-8 rounded-3xl text-center md:flex md:items-center md:justify-between md:text-left">
          <div>
            <h4 className="font-display font-bold text-lg text-ink">Not sure which channels to prioritize first?</h4>
            <p className="font-sans text-sm text-slate-400 mt-1 max-w-xl">
              Book a quick, zero-obligation discovery audit. We&apos;ll review your current website, keywords, and social presence — completely free.
            </p>
          </div>
          <button
            onClick={() => scrollTo('contact')}
            className="mt-6 md:mt-0 w-full md:w-auto bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-ink font-display font-semibold text-sm px-6 py-3 rounded-xl transition-all flex items-center justify-center space-x-2 group cursor-pointer"
          >
            <span>Claim free audit</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

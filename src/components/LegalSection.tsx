import { Shield, FileText, Building2, ArrowRight } from 'lucide-react';

const LEGAL_LINKS = [
  {
    href: '/privacy',
    title: 'Privacy Policy',
    description: 'How we collect, use, and protect your personal information.',
    icon: Shield,
  },
  {
    href: '/terms',
    title: 'Terms of Service',
    description: 'The terms that govern your use of our site and services.',
    icon: FileText,
  },
  {
    href: '/impressum',
    title: 'Imprint / Impressum',
    description: 'Provider identification and contact details for Monarchix LLC.',
    icon: Building2,
  },
];

export default function LegalSection() {
  return (
    <section aria-label="Legal information" className="border-t border-slate-900 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400 bg-orange-950/60 border border-orange-900/40 px-2.5 py-1 rounded inline-block">
            Transparency
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight mt-4">
            Legal &amp; Policies
          </h2>
          <p className="font-sans text-slate-400 mt-3 text-sm sm:text-base font-light">
            Straightforward answers on how we handle your data and what to expect when you work with us.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {LEGAL_LINKS.map(({ href, title, description, icon: Icon }) => (
            <a
              key={href}
              href={href}
              className="group flex flex-col bg-slate-900/40 hover:bg-slate-900/70 border border-slate-800 hover:border-brand/60 rounded-2xl p-6 transition-colors"
            >
              <div className="bg-brand/10 text-brand-light p-2.5 rounded-xl w-fit">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display font-semibold text-ink mt-4">{title}</h3>
              <p className="text-sm text-slate-400 mt-1.5 flex-1">{description}</p>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-light mt-4 group-hover:gap-2.5 transition-all">
                Read more
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ChevronRight, Shield, FileText, Building2 } from 'lucide-react';
import LegalLayout from './LegalLayout';

const pages = [
  {
    href: '/privacy',
    title: 'Privacy Policy',
    description: 'What personal information we collect, how we use it, and your rights over it.',
    icon: Shield,
  },
  {
    href: '/terms',
    title: 'Terms of Service',
    description: 'The terms that govern your use of the Site and any services you purchase from us.',
    icon: FileText,
  },
  {
    href: '/impressum',
    title: 'Imprint / Impressum',
    description: 'Provider identification and contact details for Monarchix LLC.',
    icon: Building2,
  },
];

export default function LegalHub() {
  return (
    <LegalLayout title="Legal & Policies" lastUpdated="July 5, 2026">
      <p>
        The documents below cover how Monarchix LLC operates the Site, delivers services, and
        handles your personal information.
      </p>

      <ul className="!list-none !pl-0 space-y-3 mt-6">
        {pages.map(({ href, title, description, icon: Icon }) => (
          <li key={href}>
            <a
              href={href}
              className="group flex items-start gap-4 rounded-xl border border-slate-800 hover:border-brand/60 bg-slate-900/40 hover:bg-slate-900/70 px-5 py-4 transition-colors !text-inherit hover:!no-underline"
            >
              <div className="bg-brand/10 text-brand-light p-2 rounded-lg shrink-0">
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="font-display font-semibold text-ink">{title}</p>
                <p className="text-sm text-slate-400 mt-0.5">{description}</p>
              </div>
              <ChevronRight className="h-5 w-5 text-slate-600 group-hover:text-brand-light group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
            </a>
          </li>
        ))}
      </ul>
    </LegalLayout>
  );
}

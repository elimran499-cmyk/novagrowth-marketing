import { ReactNode } from 'react';
import { TrendingUp, ArrowLeft } from 'lucide-react';
import Footer from '../Footer';

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-navy-950 font-sans text-slate-100 flex flex-col">
      <header className="border-b border-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2 group">
            <div className="bg-brand p-1.5 rounded text-white group-hover:bg-brand-light transition-colors">
              <TrendingUp className="h-4 w-4" />
            </div>
            <span className="font-display font-extrabold text-lg text-ink tracking-tight">
              Monarch<span className="text-brand-light">ix</span>
            </span>
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-ink transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to homepage
          </a>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-ink tracking-tight">
            {title}
          </h1>
          <p className="mt-2 text-xs font-medium text-slate-500 uppercase tracking-wider">
            Last updated: {lastUpdated}
          </p>

          <div className="mt-10 space-y-8 text-sm sm:text-base font-light leading-relaxed text-slate-300 [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-lg [&_h2]:sm:text-xl [&_h2]:text-ink [&_h2]:mb-3 [&_h2]:mt-2 [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_li]:pl-1 [&_a]:text-brand-light [&_a]:hover:underline [&_strong]:text-ink [&_strong]:font-semibold">
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

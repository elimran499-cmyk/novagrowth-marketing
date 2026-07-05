import { TrendingUp, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-950 flex flex-col items-center justify-center text-center px-6">
      <div className="flex items-center space-x-2 mb-8">
        <div className="bg-brand p-2 rounded-lg text-white shadow-md">
          <TrendingUp className="h-5 w-5" />
        </div>
        <span className="font-display font-extrabold text-xl tracking-tight text-ink">
          Monarch<span className="text-brand-light">ix</span>
        </span>
      </div>

      <p className="font-display font-black text-7xl sm:text-8xl text-brand/20 select-none">404</p>
      <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-ink mt-2">
        This page took a wrong turn
      </h1>
      <p className="font-sans text-slate-400 mt-3 max-w-md text-sm sm:text-base font-light">
        The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back to
        growing your business.
      </p>

      <a
        href="/"
        className="mt-8 inline-flex items-center gap-2 bg-brand hover:bg-brand-light text-white font-display font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_18px_rgba(249,115,22,0.3)]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to homepage
      </a>
    </div>
  );
}

import { Star, BadgeCheck } from 'lucide-react';

/**
 * TODO (real data): replace with your genuine rating + review count and the
 * platform(s) it comes from. Don't invent numbers — link to the real profile.
 */
const REVIEW = {
  rating: '4.9',
  outOf: '5',
  count: '120+',
  source: 'Google & Trustpilot reviews',
  href: '#', // TODO: link to your real reviews profile
};

/**
 * TODO (honesty): only list certifications/partnerships you ACTUALLY hold —
 * remove any you don't, and add the real badge image via `logoUrl` when you
 * have it (falls back to a text chip until then).
 */
const BADGES: { label: string; logoUrl?: string }[] = [
  { label: 'Meta Business Partner' },
  { label: 'Google Partner' },
  { label: 'Shopify Partner' },
];

export default function Trust() {
  return (
    <section aria-label="Ratings and certifications" className="border-y border-slate-900 bg-navy-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Aggregate rating */}
          <a
            href={REVIEW.href}
            className="flex items-center gap-4 group"
            aria-label={`Rated ${REVIEW.rating} out of ${REVIEW.outOf} across ${REVIEW.count} ${REVIEW.source}`}
          >
            <span className="font-display font-black text-4xl text-ink leading-none">{REVIEW.rating}</span>
            <span className="flex flex-col">
              <span className="flex text-amber-400" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400" />
                ))}
              </span>
              <span className="text-xs text-slate-400 font-sans mt-1 group-hover:text-slate-300 transition-colors">
                {REVIEW.count} {REVIEW.source}
              </span>
            </span>
          </a>

          {/* Certification badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {BADGES.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 rounded-full px-4 py-2"
              >
                {badge.logoUrl ? (
                  <img
                    src={badge.logoUrl}
                    alt={badge.label}
                    loading="lazy"
                    decoding="async"
                    className="h-4 w-auto"
                  />
                ) : (
                  <BadgeCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                )}
                <span className="text-xs font-sans font-semibold text-slate-300 whitespace-nowrap">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

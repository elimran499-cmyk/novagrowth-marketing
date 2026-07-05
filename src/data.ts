import { Service, PricingPackage, Testimonial, CaseStudy } from './types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'instagram',
    title: 'Instagram Growth & Management',
    description: 'Grow a highly engaged, targeted following that actually converts into loyal, paying customers.',
    longDescription: 'Turn your Instagram page into a powerful lead-generation funnel. We handle the content creation, hashtag strategy, custom reels planning, copy editing, community engagement, and organic growth outreach, letting you focus on running your business.',
    icon: 'Instagram',
    deliverables: [
      'High-converting grid layout & aesthetic branding',
      'Original content generation (Reels, Carousels, Stories)',
      'Highly targeted hashtag & SEO keyword research',
      'Daily active community outreach & direct engagement',
      'Comprehensive content scheduling & auto-posting'
    ],
    outcomes: [
      'A cohesive, on-brand feed that builds instant trust',
      'Content designed to turn followers into DMs and leads',
      'Consistent posting handled for you, end to end'
    ],
    accentColor: 'from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]'
  },
  {
    id: 'facebook',
    title: 'Facebook Page Boosting & Admin',
    description: 'Establish local dominance, drive direct messages, and boost targeted community engagements.',
    longDescription: 'Maximize your local business presence. We specialize in managing local business page setups, creating high-trust customer interactions, scheduling targeted promotions, boosting local visibility via Facebook page optimization, and operating active page engagement campaigns.',
    icon: 'Facebook',
    deliverables: [
      'Polished business profile setups & custom templates',
      'Localized community posting & group networking',
      'Structured local ads management & page boosting',
      'Direct customer messenger support & instant FAQ flows',
      'Review generation campaigns and review management'
    ],
    outcomes: [
      'A complete, professional business presence',
      'Local visibility that drives calls and messages',
      'Faster, friendlier responses to customer inquiries'
    ],
    accentColor: 'from-[#1877F2] to-[#0A54B4]'
  },
  {
    id: 'youtube',
    title: 'YouTube Channel Acceleration',
    description: 'Scale subscribers, boost views, and master the search algorithms with full channel optimization.',
    longDescription: 'Your video content deserves real eyeballs. We optimize every pixel of your YouTube channel to rank higher in searches and recommendations—including viral thumbnail mockups, click-worthy titles, description templates, targeted tags, and long-form monetization planning.',
    icon: 'Youtube',
    deliverables: [
      'Professional channel homepage & banner branding',
      'YouTube SEO: optimized titles, dynamic tags, and descriptions',
      'Custom high-CTR thumbnail designs',
      'Competitor channel analysis & video scripts ideas',
      'YouTube Shorts editing, formatting, and scheduling'
    ],
    outcomes: [
      'Click-worthy titles and custom thumbnails',
      'Search-optimized videos that keep earning views',
      'A channel structured for steady subscriber growth'
    ],
    accentColor: 'from-[#FF0000] to-[#B30000]'
  },
  {
    id: 'seo',
    title: 'Local & Website SEO Mastery',
    description: 'Claim the top spot on Google searches, outrank local competitors, and drive continuous free organic traffic.',
    longDescription: 'Organic traffic is the most durable growth source. We analyze, audit, and restructure your website for perfect technical rankings, while managing your local Google Business Profile to capture "near me" high-intent local searches.',
    icon: 'Search',
    deliverables: [
      'Comprehensive on-page & off-page SEO optimization',
      'Google Business Profile (GBP) complete management',
      'High-authority local business citations & link-building',
      'Deep competitor keyword analysis & gap tracking',
      'Regular technical health checks, load-speed auditing, and optimizations'
    ],
    outcomes: [
      'A technically healthy, faster website',
      'A fully optimized Google Business Profile',
      'Content targeting the exact searches your buyers use'
    ],
    accentColor: 'from-emerald-500 to-teal-600'
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'starter',
    name: 'Starter Pack',
    price: 35,
    period: 'month',
    description: 'Essential digital boost for startups and micro-businesses seeking basic brand visibility.',
    features: [
      { name: 'Social Platforms Managed', included: true, val: '1 Platform' },
      { name: 'Original Posts/Reels', included: true, val: '2 Posts per week' },
      { name: 'Ad Boost Budget Limit', included: false, val: 'Not Included' },
      { name: 'SEO Keyword Tracking', included: false, val: 'Not Included' },
      { name: 'Performance Reports', included: true, val: 'Monthly summary' },
      { name: 'Community Engagement', included: false, val: 'Self-managed' },
      { name: 'Dedicated Account Manager', included: false },
      { name: 'SEO Core Audit', included: false }
    ],
    ctaText: 'Get Started with Starter',
    colorClass: 'border-slate-800 bg-slate-900/40 hover:border-slate-700'
  },
  {
    id: 'growth',
    name: 'Growth Pack',
    price: 45,
    period: 'month',
    description: 'Great for active small businesses looking to step up their game with targeted local ad support.',
    features: [
      { name: 'Social Platforms Managed', included: true, val: '2 Platforms' },
      { name: 'Original Posts/Reels', included: true, val: '3 Posts per week' },
      { name: 'Ad Boost Budget Limit', included: true, val: '€20 ad credit included' },
      { name: 'SEO Keyword Tracking', included: false, val: 'Not Included' },
      { name: 'Performance Reports', included: true, val: 'Monthly detail' },
      { name: 'Community Engagement', included: true, val: 'Light (FAQ replies)' },
      { name: 'Dedicated Account Manager', included: false },
      { name: 'SEO Core Audit', included: true, val: 'Initial website audit' }
    ],
    ctaText: 'Step Up to Growth',
    colorClass: 'border-slate-800 bg-slate-900/50 hover:border-slate-600'
  },
  {
    id: 'pro',
    name: 'Pro Pack',
    price: 78,
    period: 'month',
    description: 'High-velocity package designed to significantly scale engagements, ranks, and sales.',
    features: [
      { name: 'Social Platforms Managed', included: true, val: '3 Platforms' },
      { name: 'Original Posts/Reels', included: true, val: '5 Posts per week' },
      { name: 'Ad Boost Budget Limit', included: true, val: '€50 ad credit included' },
      { name: 'SEO Keyword Tracking', included: true, val: '10 Keywords tracked' },
      { name: 'Performance Reports', included: true, val: 'Bi-weekly dashboard' },
      { name: 'Community Engagement', included: true, val: 'Active (Daily reply)' },
      { name: 'Dedicated Account Manager', included: true, val: 'Email & Phone Support' },
      { name: 'SEO Core Audit', included: true, val: 'Full monthly audit & updates' }
    ],
    ctaText: 'Go Pro and Dominate',
    colorClass: 'border-slate-700 bg-slate-900/70 hover:border-orange-500/50 ring-1 ring-orange-900/25'
  },
  {
    id: 'ultimate',
    name: 'Ultimate Pack',
    price: 125,
    period: 'month',
    description: 'A comprehensive, multi-channel powerhouse for serious brands wanting ultimate digital dominance.',
    isPopular: true,
    features: [
      { name: 'Social Platforms Managed', included: true, val: 'All 4 Platforms' },
      { name: 'Original Posts/Reels', included: true, val: 'Daily Posts (7/week)' },
      { name: 'Ad Boost Budget Limit', included: true, val: '€100 ad credit included' },
      { name: 'SEO Keyword Tracking', included: true, val: '30 Keywords tracked' },
      { name: 'Performance Reports', included: true, val: 'Weekly deep dive' },
      { name: 'Community Engagement', included: true, val: 'Proactive (Inbound/Outbound)' },
      { name: 'Dedicated Account Manager', included: true, val: '24/7 VIP Phone & Slack' },
      { name: 'SEO Core Audit', included: true, val: 'Complete optimization' }
    ],
    ctaText: 'Secure Absolute Growth',
    colorClass: 'border-brand bg-orange-950/20 shadow-[0_0_30px_rgba(249,115,22,0.15)] ring-2 ring-brand'
  }
];

// TODO: These are SAMPLE testimonials for layout only. Replace with real, attributable
// client quotes (with permission) before launch — invented reviews break trust and, in the
// EU, can violate unfair-competition/consumer-protection rules.
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Elena Rostova',
    role: 'CEO & Founder',
    company: 'BellaVita Skincare',
    avatarFallback: 'ER',
    quote: 'Before working with Monarchix, we posted on Instagram but had barely any followers. Within 3 months, they transformed our profile, and today, social media drives over 65% of our online sales. Absolutely worth every single euro!',
    metrics: [
      { label: 'Follower Growth', value: '+4,800', isPositive: true },
      { label: 'Monthly Sales Boost', value: '+140%', isPositive: true }
    ]
  },
  {
    id: 't2',
    name: 'Marcus Vance',
    role: 'Managing Partner',
    company: 'Apex Local Law',
    avatarFallback: 'MV',
    quote: 'The website SEO package of Monarchix took us from Page 3 to Google Position #1 for three of our main keywords in just 90 days. Our phones are ringing constantly with high-value local queries.',
    metrics: [
      { label: 'Google Search Traffic', value: '+280%', isPositive: true },
      { label: 'Inbound Customer Calls', value: '+92%', isPositive: true }
    ]
  },
  {
    id: 't3',
    name: 'Julian Thorne',
    role: 'Director of Content',
    company: 'TechPulse Academy',
    avatarFallback: 'JT',
    quote: 'Monarchix totally automated our YouTube thumbnail design, script ideas, and video descriptions. Our watch hours multiplied by 3x within 60 days, and our subscriber acquisition has reached record speeds.',
    metrics: [
      { label: 'YouTube Subscribers', value: '+12,500', isPositive: true },
      { label: 'Watch Time Growth', value: '3.2x', isPositive: true }
    ]
  }
];

// TODO: SAMPLE case studies for layout only. Replace with real campaigns and verified
// numbers (keep evidence on file) before launch.
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs1',
    title: 'E-commerce Brand Scales to New Heights',
    client: 'GlowBoutique',
    category: 'Instagram & Facebook Strategy',
    result: '4.8x ROI',
    description: 'We rebuilt GlowBoutique\'s Instagram strategy from scratch, moving from stock imagery to highly aesthetic user-generated content (UGC) and Reels.',
    details: [
      'Created 12 custom Reels and edited 24 Carousel graphics per month.',
      'Designed and executed custom story interaction schedules.',
      'Managed a monthly targeted micro-budget Facebook ad booster campaign (under €100) yielding outstanding ROAS.'
    ],
    stats: [
      { label: 'Conversion Rate Increase', value: '+44%' },
      { label: 'Instagram Engagement Rate', value: '6.8%' },
      { label: 'Direct Messages from Leads', value: '+350/mo' }
    ],
    logoText: 'GB'
  },
  {
    id: 'cs2',
    title: 'Local Clinic Outranks Regional Hospital',
    client: 'DentalCare Munich',
    category: 'SEO & Google Maps Positioning',
    result: 'Top Rank #1',
    description: 'Leveraging on-page performance, site speed auditing, schema tags, and deep Google Business optimizations to capture Munich dental searches.',
    details: [
      'Identified and implemented 15 long-tail local dental search queries.',
      'Acquired high-quality local citation links and backlinks.',
      'Created a system for dental patients to leave reviews automatically, raising review scores.'
    ],
    stats: [
      { label: 'First Page Keyphrase Ranks', value: '14' },
      { label: 'Direct Maps Route Clicks', value: '+120%' },
      { label: 'Monthly Website Visits', value: '3,800+' }
    ],
    logoText: 'DC'
  }
];

// TODO: Replace with your own verified figures before launch. Specific, believable
// numbers build more trust than large round ones — cite the period they cover if you can.
export const STATS_COUNTERS = [
  { value: '250+', label: 'Businesses Served' },
  { value: '4.9/5', label: 'Average Client Rating' },
  { value: '8.4M+', label: 'Followers Grown for Clients' },
  { value: '320%', label: 'Average Traffic Increase' }
];

// Platforms and tools we work with day to day — NOT a list of clients.
// (Displaying these as "trusted by" clients would be misleading and legally risky.)
// TODO (real logos): add `logoUrl` (SVG/PNG) per item for real brand marks;
// falls back to the text lockup until then.
export const PARTNERS_LOGOS: { name: string; logoText: string; logoUrl?: string }[] = [
  { name: 'Meta', logoText: 'META' },
  { name: 'Google', logoText: 'GOOGLE' },
  { name: 'YouTube', logoText: 'YOUTUBE' },
  { name: 'Shopify', logoText: 'SHOPIFY' },
  { name: 'HubSpot', logoText: 'HUBSPOT' }
];

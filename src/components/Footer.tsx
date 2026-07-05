import { TrendingUp, Mail, MapPin } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './BrandIcons';

export default function Footer() {
  const currentYear = 2026;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      window.scrollTo({
        top: elementRect - bodyRect - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-navy-950 border-t border-slate-900 pt-16 pb-8 text-slate-400 font-sans relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-slate-900 pb-12 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <div
              className="flex items-center space-x-2 cursor-pointer group"
              onClick={() => scrollToSection('home')}
            >
              <div className="bg-brand p-1.5 rounded text-white group-hover:bg-brand-light transition-colors">
                <TrendingUp className="h-4 w-4" />
              </div>
              <span className="font-display font-extrabold text-lg text-ink tracking-tight">
                Monarch<span className="text-brand-light">ix</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 font-light leading-relaxed">
              We help small and medium businesses claim their digital space, automate posting grids, optimize search index ranks, and scale sustainable revenue channels.
            </p>
            <div className="flex space-x-3.5 text-slate-500">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:-translate-y-0.5 transition-transform" aria-label="Instagram">
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:-translate-y-0.5 transition-transform" aria-label="Facebook">
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:-translate-y-0.5 transition-transform" aria-label="YouTube">
                <YoutubeIcon className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-ink uppercase tracking-wider font-display">Navigation</h4>
            <ul className="space-y-2 text-xs">
              {['Home', 'Services', 'Pricing', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', ''))}
                    className="hover:text-ink transition-colors cursor-pointer block"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quick links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-ink uppercase tracking-wider font-display">Services</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-ink transition-colors text-left block">
                  Instagram Growth & Grid Management
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-ink transition-colors text-left block">
                  Facebook Boosts & Local Presence
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-ink transition-colors text-left block">
                  YouTube Channel Acceleration
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-ink transition-colors text-left block">
                  Local Map & Technical SEO Mastery
                </button>
              </li>
            </ul>
          </div>

          {/* Contacts Details info */}
          <div className="md:col-span-3 space-y-4 text-xs font-light">
            <h4 className="text-xs font-bold text-ink uppercase tracking-wider font-display">Office Address</h4>
            <div className="space-y-2">
              <p className="flex items-start"><MapPin className="h-3.5 w-3.5 text-orange-400 mr-2 shrink-0 mt-0.5" /> <span>Monarchix LLC<br />1209 Mountain Road Pl NE<br />Ste N<br />Albuquerque, NM 87110</span></p>
              <p className="flex items-center"><Mail className="h-3.5 w-3.5 text-orange-400 mr-2 shrink-0" /> growth@monarchix.eu</p>
            </div>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-600 gap-4">
          <p>© {currentYear} Monarchix Marketing Agency. All rights reserved.</p>
          <div className="flex space-x-4">
            {/* TODO: point these to real legal pages before launch — a German business landing page requires a valid Impressum + privacy policy. */}
            <a href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="/impressum" className="hover:text-slate-300 transition-colors">Imprint / Impressum</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

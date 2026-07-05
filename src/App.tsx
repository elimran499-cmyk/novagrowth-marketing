import { useState, useEffect } from 'react';
import { MotionConfig } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Services from './components/Services';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

type Theme = 'dark' | 'light';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedPlanName, setSelectedPlanName] = useState('');
  const [messagePreset, setMessagePreset] = useState('');

  // Theme: dark is the default; persisted to localStorage and applied to <html>
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document !== 'undefined') {
      const current = document.documentElement.getAttribute('data-theme');
      if (current === 'light' || current === 'dark') return current;
    }
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* ignore storage errors (private mode, etc.) */
    }
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  // Simple client-side 404 for unknown paths (SPA fallback serves this file).
  const [notFound] = useState(
    () => typeof window !== 'undefined' && window.location.pathname !== '/',
  );

  // Handle plan selection from Pricing table
  const handleSelectPlan = (planName: string, presetText: string = '') => {
    setSelectedPlanName(planName);
    setMessagePreset(presetText);

    // Smooth scroll down to Contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      window.scrollTo({
        top: elementRect - bodyRect - offset,
        behavior: 'smooth',
      });
    }
  };

  const handleClearPlan = () => {
    setSelectedPlanName('');
    setMessagePreset('');
  };

  // Section Tracking via IntersectionObserver
  useEffect(() => {
    const sections = ['home', 'services', 'pricing', 'about', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // trigger when section occupies middle of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  if (notFound) {
    return (
      <MotionConfig reducedMotion="user">
        <NotFound />
      </MotionConfig>
    );
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-navy-950 font-sans text-slate-100 selection:bg-brand selection:text-white">
        {/* Skip link for keyboard users */}
        <a
          href="#services"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:bg-brand focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Skip to content
        </a>

        {/* Dynamic Navigation */}
        <Navbar activeSection={activeSection} theme={theme} onToggleTheme={toggleTheme} />

        {/* Main Sections flow */}
        <main>
          {/* Home / Hero */}
          <Hero />

          {/* Social proof / trust bar */}
          <Trust />

          {/* Services */}
          <Services />

          {/* Pricing Systems & Calculator */}
          <Pricing onSelectPlan={handleSelectPlan} />

          {/* About Us */}
          <About />

          {/* Booking / Contact */}
          <Contact
            selectedPlanName={selectedPlanName}
            messagePreset={messagePreset}
            onClearSelectedPlan={handleClearPlan}
          />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </MotionConfig>
  );
}

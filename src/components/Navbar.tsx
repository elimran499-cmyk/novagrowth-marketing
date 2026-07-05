import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, TrendingUp, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export default function Navbar({ activeSection, theme, onToggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'About Us', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-navy-950/90 backdrop-blur-md border-b border-slate-800/60 py-4 shadow-lg'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className="flex items-center space-x-2 cursor-pointer group"
              onClick={() => scrollToSection('home')}
            >
              <div className="bg-brand p-2 rounded-lg text-white group-hover:bg-brand-light transition-colors duration-200 shadow-md">
                <TrendingUp className="h-5 w-5" />
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-ink">
                Monarch<span className="text-brand-light group-hover:text-brand transition-colors duration-200">ix</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`font-sans font-medium text-sm transition-colors duration-200 relative py-1 hover:text-ink ${
                      activeSection === item.id ? 'text-ink font-semibold' : 'text-slate-400'
                    }`}
                  >
                    {item.name}
                    {activeSection === item.id && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-light rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={onToggleTheme}
                className="text-slate-400 hover:text-ink p-2 rounded-lg border border-slate-800 hover:border-slate-700 hover:bg-slate-900 transition-colors duration-200 cursor-pointer"
                aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              >
                {theme === 'dark' ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
              </button>

              <button
                onClick={() => scrollToSection('pricing')}
                className="bg-brand hover:bg-brand-light text-white font-display font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 shadow-[0_4px_14px_rgba(249,115,22,0.3)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Get Started
              </button>
            </div>

            {/* Mobile controls */}
            <div className="md:hidden flex items-center space-x-1">
              <button
                onClick={onToggleTheme}
                className="text-slate-400 hover:text-ink focus:outline-none p-1.5 hover:bg-slate-900 rounded-lg transition-colors duration-200"
                aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              >
                {theme === 'dark' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-400 hover:text-ink focus:outline-none p-1.5 hover:bg-slate-900 rounded-lg transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden fixed top-[72px] left-0 w-full bg-navy-950/95 backdrop-blur-lg border-b border-slate-800 z-40 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-3 shadow-inner">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2.5 rounded-lg font-sans font-medium text-base transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'bg-brand/10 text-brand-light font-bold border-l-4 border-brand'
                      : 'text-slate-400 hover:bg-slate-900 hover:text-ink'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-2 px-4">
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="w-full bg-brand hover:bg-brand-light text-white font-display font-semibold py-3 rounded-lg text-center transition-all duration-200 block shadow-md"
                >
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

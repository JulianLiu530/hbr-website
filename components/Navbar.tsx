'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section
      const sections = ['products', 'features', 'about', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const switchLocale = () => {
    const next = locale === 'zh' ? 'en' : 'zh';
    const segments = pathname.split('/');
    segments[1] = next;
    router.push(segments.join('/'));
  };

  const navLinks = [
    { key: 'products', href: '#products' },
    { key: 'features', href: '#features' },
    { key: 'about', href: '#about' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#040f2a]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
          : 'bg-gradient-to-b from-black/40 to-transparent backdrop-blur-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-9 h-9 overflow-hidden">
            <Image
              src="/logo.png"
              alt="HBR Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col leading-none hidden sm:flex">
            <span
              className="text-white font-bold text-[13px] tracking-[0.12em] uppercase"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              HBR
            </span>
            <span
              className="text-[#4FC3F7]/60 text-[9px] tracking-[0.3em] uppercase mt-0.5"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Electronics
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.key;
            return (
              <a
                key={link.key}
                href={link.href}
                className={`relative px-4 py-2 text-[13px] tracking-[0.08em] uppercase transition-colors duration-200 ${
                  isActive ? 'text-white' : 'text-white/50 hover:text-white'
                }`}
              >
                {t(link.key)}
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded bg-white/[0.08] -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="absolute bottom-0 left-4 right-4 h-px bg-[#4FC3F7] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            );
          })}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Locale switcher */}
          <button
            onClick={switchLocale}
            className="hidden sm:flex items-center gap-1.5 text-white/40 hover:text-[#4FC3F7] text-[11px] tracking-[0.2em] uppercase transition-colors duration-200"
          >
            <Globe size={13} />
            {locale === 'zh' ? 'EN' : '中文'}
          </button>

          {/* CTA button */}
          <a
            href="#contact"
            className="hidden md:block relative overflow-hidden bg-[#4FC3F7] hover:bg-white text-[#061840] font-semibold text-[11px] tracking-[0.15em] uppercase px-5 py-2.5 rounded transition-all duration-300 group"
          >
            <span className="relative z-10">{t('contact')}</span>
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white/60 hover:text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-[#040f2a]/98 backdrop-blur-xl border-t border-white/[0.06]"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.key}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/60 hover:text-white text-sm tracking-wide py-3 border-b border-white/[0.05] last:border-0 transition-colors"
                >
                  {t(link.key)}
                </motion.a>
              ))}
              <div className="flex items-center justify-between pt-4">
                <button
                  onClick={switchLocale}
                  className="flex items-center gap-1.5 text-white/40 hover:text-[#4FC3F7] text-xs tracking-widest uppercase transition-colors"
                >
                  <Globe size={12} />
                  {locale === 'zh' ? 'EN' : '中文'}
                </button>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="bg-[#4FC3F7] text-[#061840] font-semibold text-xs tracking-widest uppercase px-5 py-2.5 rounded transition-all"
                >
                  {t('contact')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

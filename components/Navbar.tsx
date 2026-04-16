'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PRODUCT_LINKS = [
  { label: 'Screens', href: '/screens.html' },
  { label: 'Glass + OCA', href: '/glass.html' },
  { label: 'Back Housing', href: '/housing.html' },
  { label: 'Batteries', href: '/battery.html' },
];

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const switchLocale = () => {
    const next = locale === 'zh' ? 'en' : 'zh';
    const segments = pathname.split('/');
    segments[1] = next;
    router.push(segments.join('/'));
  };

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
        <a href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-9 h-9 overflow-hidden">
            <Image
              src="/logo.png"
              alt="HBR Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex-col leading-none hidden sm:flex">
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
          {/* Products dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <a
              href="/products.html"
              className="flex items-center gap-1 px-4 py-2 text-[13px] tracking-[0.08em] uppercase text-white/50 hover:text-white transition-colors duration-200"
            >
              {t('products')}
              <ChevronDown size={11} className="opacity-50" />
            </a>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 py-2 px-2 rounded-xl min-w-[160px] list-none"
                  style={{
                    background: 'rgba(4,12,34,0.97)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(79,195,247,0.12)',
                    boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
                  }}
                >
                  {PRODUCT_LINKS.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 rounded-lg text-[12px] tracking-[0.06em] uppercase text-white/50 hover:text-[#4FC3F7] hover:bg-[#4FC3F7]/[0.08] transition-colors duration-150 whitespace-nowrap"
                    >
                      {item.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Why HBR */}
          <a
            href="/why-hbr.html"
            className="px-4 py-2 text-[13px] tracking-[0.08em] uppercase text-white/50 hover:text-white transition-colors duration-200"
          >
            {t('whyhbr')}
          </a>

          {/* About HBR */}
          <a
            href="/about-hbr.html"
            className="px-4 py-2 text-[13px] tracking-[0.08em] uppercase text-white/50 hover:text-white transition-colors duration-200"
          >
            {t('abouthbr')}
          </a>

          {/* Contact (scroll) */}
          <a
            href="#contact"
            className="px-4 py-2 text-[13px] tracking-[0.08em] uppercase text-white/50 hover:text-white transition-colors duration-200"
          >
            {t('contact')}
          </a>
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
            className="hidden md:block relative overflow-hidden bg-[#4FC3F7] hover:bg-white text-[#061840] font-semibold text-[11px] tracking-[0.15em] uppercase px-5 py-2.5 rounded transition-all duration-300"
          >
            {t('cta')}
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
              {/* Products header */}
              <a
                href="/products.html"
                onClick={() => setMenuOpen(false)}
                className="text-white/60 hover:text-white text-sm tracking-wide py-3 border-b border-white/[0.05] transition-colors"
              >
                {t('products')}
              </a>
              {/* Product sub-links */}
              {PRODUCT_LINKS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/35 hover:text-[#4FC3F7] text-xs tracking-widest uppercase py-2 pl-4 border-b border-white/[0.03] last:border-0 transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <a
                href="/why-hbr.html"
                onClick={() => setMenuOpen(false)}
                className="text-white/60 hover:text-white text-sm tracking-wide py-3 border-b border-white/[0.05] transition-colors"
              >
                {t('whyhbr')}
              </a>
              <a
                href="/about-hbr.html"
                onClick={() => setMenuOpen(false)}
                className="text-white/60 hover:text-white text-sm tracking-wide py-3 border-b border-white/[0.05] transition-colors"
              >
                {t('abouthbr')}
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-white/60 hover:text-white text-sm tracking-wide py-3 border-b border-white/[0.05] transition-colors"
              >
                {t('contact')}
              </a>
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
                  {t('cta')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

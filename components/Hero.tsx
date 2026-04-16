'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Shield, Cpu, Globe } from 'lucide-react';

const floatingBadges = [
  { icon: Shield, label: 'ISO 9001', sub: 'Certified', x: 'right-[6%]', y: 'top-[28%]', delay: 1.4 },
  { icon: Cpu, label: '15+ Years', sub: 'OEM/ODM Export', x: 'right-[4%]', y: 'top-[48%]', delay: 1.6 },
  { icon: Globe, label: '50+ Countries', sub: 'Global Reach', x: 'left-[3%]', y: 'bottom-[32%]', delay: 1.8 },
];

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#030d1f]">

      {/* ── Layer 1: Deep multi-stop gradient ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #030d1f 0%, #061840 35%, #0a2060 55%, #041228 80%, #020810 100%)',
        }}
      />

      {/* ── Layer 2: Fine grid ── */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(79,195,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(79,195,247,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Layer 3: Radial center bloom ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[900px] h-[900px] rounded-full"
          style={{
            background:
              'radial-gradient(circle at 50% 45%, rgba(79,195,247,0.12) 0%, rgba(10,36,99,0.15) 35%, transparent 65%)',
          }}
        />
      </div>

      {/* ── Layer 4: Bottom-right aurora ── */}
      <div
        className="absolute -bottom-20 right-0 w-[700px] h-[500px] pointer-events-none"
        style={{
          background:
            'conic-gradient(from 210deg at 75% 85%, rgba(79,195,247,0.18), rgba(10,36,99,0.1), transparent 55%)',
          filter: 'blur(80px)',
        }}
      />

      {/* ── Layer 5: Top-left subtle leak ── */}
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, #0A2463 0%, transparent 65%)',
        }}
      />

      {/* ── Layer 6: Diagonal scan line ── */}
      <div
        className="absolute bottom-[18%] right-[8%] w-[360px] h-px pointer-events-none opacity-60"
        style={{
          background: 'linear-gradient(90deg, transparent, #4FC3F7, transparent)',
          transform: 'rotate(-35deg)',
          boxShadow: '0 0 24px rgba(79,195,247,0.8)',
        }}
      />
      <div
        className="absolute top-[22%] left-[12%] w-[180px] h-px pointer-events-none opacity-30"
        style={{
          background: 'linear-gradient(90deg, transparent, #A8D8EA, transparent)',
          transform: 'rotate(20deg)',
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: copy */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-10"
            >
              <span
                className="h-px w-8 bg-[#4FC3F7]/60"
              />
              <span
                className="text-[#4FC3F7] text-[10px] tracking-[0.4em] uppercase"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                HBR Electronics · Est. 2009 · Dongguan
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-white leading-[1.04] mb-7 text-balance"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.6rem, 6.5vw, 5.5rem)',
                fontWeight: 300,
                letterSpacing: '-0.015em',
              }}
            >
              {t('headline')}
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="text-white/45 max-w-xl mb-12 leading-[1.75]"
              style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.1rem)' }}
            >
              {t('subheadline')}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.72 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="group flex items-center gap-2.5 bg-[#4FC3F7] hover:bg-white text-[#061840] font-semibold text-[11px] tracking-[0.18em] uppercase px-8 py-4 rounded transition-all duration-300 shadow-[0_0_40px_rgba(79,195,247,0.3)] hover:shadow-[0_0_60px_rgba(79,195,247,0.5)]"
              >
                {t('cta')}
                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
              <a
                href="#products"
                className="flex items-center gap-2 border border-white/15 hover:border-[#4FC3F7]/50 text-white/55 hover:text-white text-[11px] tracking-[0.18em] uppercase px-8 py-4 rounded transition-all duration-300 backdrop-blur-sm"
              >
                {t('cta_secondary')}
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.05 }}
              className="mt-16 pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-6 max-w-sm"
            >
              {[
                { num: '15+', label: 'Years' },
                { num: '500+', label: 'Clients' },
                { num: '50+', label: 'Countries' },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="text-[#4FC3F7] mb-1"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                      fontWeight: 300,
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    className="text-white/25 text-[9px] tracking-[0.25em] uppercase"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: product image container */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center justify-center relative"
          >
            {/* Hero product image */}
            <div
              className="relative w-full max-w-[520px] aspect-[4/3] rounded-2xl overflow-hidden"
              style={{
                border: '1px solid rgba(79,195,247,0.15)',
                boxShadow: '0 0 80px rgba(79,195,247,0.10), inset 0 1px 0 rgba(255,255,255,0.06)',
              }}
            >
              {/* Corner markers */}
              {[
                'top-3 left-3 border-t border-l',
                'top-3 right-3 border-t border-r',
                'bottom-3 left-3 border-b border-l',
                'bottom-3 right-3 border-b border-r',
              ].map((cls, i) => (
                <div
                  key={i}
                  className={`absolute w-5 h-5 border-[#4FC3F7]/40 ${cls}`}
                />
              ))}

              {/* Actual hero image */}
              <img
                src="/images/hero-image.jpg"
                alt="HBR Electronics Products"
                className="w-full h-full object-cover"
              />

              {/* Overlay tint for depth */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(180deg, rgba(3,13,31,0.15) 0%, rgba(3,13,31,0.0) 40%, rgba(3,13,31,0.35) 100%)',
                }}
              />
            </div>

            {/* Floating badges */}
            {floatingBadges.map(({ icon: Icon, label, sub, x, y, delay }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`absolute ${x} ${y} flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg`}
                style={{
                  background: 'rgba(6,24,64,0.85)',
                  border: '1px solid rgba(79,195,247,0.18)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
                }}
              >
                <div className="w-7 h-7 rounded bg-[#4FC3F7]/15 flex items-center justify-center">
                  <Icon size={14} className="text-[#4FC3F7]" />
                </div>
                <div>
                  <div className="text-white text-[11px] font-semibold leading-none mb-0.5">{label}</div>
                  <div className="text-white/35 text-[9px] tracking-wide">{sub}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1.5"
        >
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-[#4FC3F7]/30" />
          <ChevronDown size={14} className="text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}

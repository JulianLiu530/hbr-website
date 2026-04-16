'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { MapPin, Award, Users, Globe } from 'lucide-react';

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const steps = 50;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const milestones = [
  { year: '2009', label: 'Founded in Shenzhen (坂田新清大楼)', icon: Award },
  { year: '2017', label: 'Dongguan factory established', icon: Globe },
  { year: '2019', label: 'Hongxing Optoelectronics launched', icon: Award },
  { year: '2023', label: '500+ clients, 50+ countries', icon: Users },
];

export default function About() {
  const t = useTranslations('about');

  const stats = [
    { num: 15, suffix: '+', label: t('stat1_label') },
    { num: 500, suffix: '+', label: t('stat2_label') },
    { num: 50, suffix: '+', label: t('stat3_label') },
  ];

  return (
    <section id="about" className="py-28 bg-[#061840] relative overflow-hidden">

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(79,195,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(79,195,247,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glows */}
      <div
        className="absolute top-0 left-1/3 w-[600px] h-[400px] rounded-full pointer-events-none opacity-[0.08]"
        style={{ background: 'radial-gradient(ellipse, #4FC3F7, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #0A2463, transparent 70%)' }}
      />

      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4FC3F7]/15 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">

          {/* Left: text block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
          >
            <span
              className="text-[#4FC3F7] text-[10px] tracking-[0.4em] uppercase mb-4 block"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              03 — {t('title')}
            </span>
            <h2
              className="text-white leading-tight mb-6"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.9rem, 3.8vw, 3.2rem)',
                fontWeight: 300,
              }}
            >
              {t('title')}
            </h2>

            <p className="text-white/45 leading-[1.85] mb-10 text-base">
              {t('body')}
            </p>

            {/* Location chip */}
            <div className="flex items-center gap-2 mb-12">
              <MapPin size={14} className="text-[#4FC3F7]" />
              <span
                className="text-white/30 text-xs tracking-[0.2em] uppercase"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Dongguan, Guangdong, China
              </span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/[0.08]">
              {stats.map((s) => (
                <div key={s.label}>
                  <div
                    className="text-[#4FC3F7] mb-1.5"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.7rem, 2.8vw, 2.4rem)',
                      fontWeight: 300,
                    }}
                  >
                    <CountUp target={s.num} suffix={s.suffix} />
                  </div>
                  <div
                    className="text-white/25 text-[10px] tracking-[0.18em] uppercase leading-tight"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: timeline + logo ring */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-10"
          >
            {/* Timeline */}
            <div className="relative pl-6 border-l border-white/[0.1] flex flex-col gap-8">
              {milestones.map(({ year, label, icon: Icon }, i) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
                  className="relative"
                >
                  {/* Dot */}
                  <div className="absolute -left-[25px] top-0 w-[10px] h-[10px] rounded-full bg-[#4FC3F7]/20 border border-[#4FC3F7]/40 flex items-center justify-center">
                    <div className="w-[4px] h-[4px] rounded-full bg-[#4FC3F7]" />
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="text-[#4FC3F7]/50 shrink-0 mt-0.5"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {year}
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Icon size={13} className="text-white/20 shrink-0" />
                      <span className="text-white/60 text-sm leading-snug">{label}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Logo ring display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex items-center justify-center mt-4"
            >
              <div className="relative w-56 h-56 flex items-center justify-center">
                {/* Rings */}
                <div className="absolute inset-0 rounded-full border border-[#4FC3F7]/[0.07] animate-[spin_25s_linear_infinite]" />
                <div className="absolute inset-5 rounded-full border border-[#4FC3F7]/[0.05] animate-[spin_18s_linear_infinite_reverse]" />
                <div className="absolute inset-10 rounded-full border border-[#4FC3F7]/[0.08]" />

                {/* Radial glow */}
                <div
                  className="absolute inset-10 rounded-full opacity-25"
                  style={{ background: 'radial-gradient(circle, #4FC3F7, transparent 70%)' }}
                />

                {/* Center text */}
                <div className="relative text-center">
                  <div
                    className="text-white/80 leading-none mb-1"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '2.8rem',
                      fontWeight: 300,
                    }}
                  >
                    HBR
                  </div>
                  <div
                    className="text-[#4FC3F7]/50 text-[9px] tracking-[0.4em] uppercase"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    Electronics
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

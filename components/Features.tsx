'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  CalendarDays,
  Factory,
  Zap,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';

const icons = [CalendarDays, Factory, Zap];

const cardAccents = [
  { border: 'rgba(79,195,247,0.25)', glow: 'rgba(79,195,247,0.08)', tag: '#4FC3F7' },
  { border: 'rgba(168,216,234,0.25)', glow: 'rgba(168,216,234,0.06)', tag: '#A8D8EA' },
  { border: 'rgba(192,200,216,0.2)', glow: 'rgba(192,200,216,0.05)', tag: '#C0C8D8' },
];

const bulletSets = [
  ['15+ Years OEM & ODM', 'Shenzhen → Dongguan since 2009', 'Full product lifecycle support'],
  ['Close to Shenzhen Port', 'Stable bulk supply chain', 'Competitive factory direct price'],
  ['Full test before shipment', 'Serving EU, US, SEA, ME, Africa', 'Wholesale & B2B support'],
];

export default function Features() {
  const t = useTranslations('features');
  const items = t.raw('items') as Array<{ title: string; desc: string }>;

  return (
    <section id="features" className="py-28 bg-white relative overflow-hidden">

      {/* Watermark */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-4 text-[#0A2463]/[0.025] select-none pointer-events-none leading-none"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(10rem, 22vw, 20rem)',
          fontWeight: 300,
        }}
      >
        HBR
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4FC3F7]/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <span
              className="text-[#4FC3F7] text-[10px] tracking-[0.4em] uppercase mb-4 block"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              02 — {t('title')}
            </span>
            <h2
              className="text-[#061840] leading-tight"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 300,
              }}
            >
              {t('subtitle')}
            </h2>
          </div>
          <a
            href="#contact"
            className="group flex items-center gap-2 text-[#0A2463] hover:text-[#4FC3F7] text-sm tracking-wide transition-colors shrink-0 self-start sm:self-auto"
          >
            <span className="border-b border-[#0A2463]/20 group-hover:border-[#4FC3F7] transition-colors pb-0.5">
              Request a sample
            </span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, i) => {
            const Icon = icons[i];
            const accent = cardAccents[i];
            const bullets = bulletSets[i];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group relative"
              >
                {/* Ghost number */}
                <div
                  className="absolute -top-6 -left-1 text-[#0A2463]/[0.05] select-none leading-none pointer-events-none"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '6.5rem',
                    fontWeight: 300,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Card */}
                <div
                  className="relative h-full bg-white rounded-2xl p-8 transition-all duration-500 group-hover:-translate-y-1"
                  style={{
                    border: `1px solid ${accent.border}`,
                    boxShadow: `0 4px 24px ${accent.glow}, 0 1px 3px rgba(0,0,0,0.04)`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px ${accent.glow}, 0 4px 12px rgba(0,0,0,0.06)`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 24px ${accent.glow}, 0 1px 3px rgba(0,0,0,0.04)`;
                  }}
                >
                  {/* Top accent bar */}
                  <div
                    className="absolute top-0 left-8 right-8 h-[2px] rounded-full transition-all duration-500 opacity-0 group-hover:opacity-100"
                    style={{ background: `linear-gradient(90deg, transparent, ${accent.tag}, transparent)` }}
                  />

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-7 transition-all duration-500"
                    style={{
                      background: `linear-gradient(135deg, rgba(6,24,64,0.9) 0%, rgba(10,36,99,0.8) 100%)`,
                    }}
                  >
                    <Icon
                      size={20}
                      style={{ color: accent.tag }}
                      className="transition-all duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Tag chip */}
                  <span
                    className="text-[9px] tracking-[0.35em] uppercase mb-3 block"
                    style={{ fontFamily: 'var(--font-mono)', color: accent.tag }}
                  >
                    Advantage {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Title */}
                  <h3
                    className="text-[#061840] text-[1.1rem] mb-3 leading-snug"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
                  >
                    {item.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-7">
                    {item.desc}
                  </p>

                  {/* Bullets */}
                  <ul className="flex flex-col gap-2.5">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-gray-500">
                        <CheckCircle2
                          size={14}
                          className="mt-0.5 shrink-0"
                          style={{ color: accent.tag }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Bottom left accent bar */}
                  <div
                    className="absolute left-0 top-12 bottom-12 w-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: accent.tag }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

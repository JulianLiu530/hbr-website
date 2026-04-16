'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Monitor,
  Lightbulb,
  Cpu,
  Wrench,
  ArrowUpRight,
  CheckCircle2,
  Zap,
} from 'lucide-react';

// ── Bento card configs ─────────────────────────────────────────────────────
const CARDS = [
  {
    key: 'mobile',
    icon: Smartphone,
    color: '#4FC3F7',
    bg: 'rgba(79,195,247,0.07)',
    border: 'rgba(79,195,247,0.2)',
    gridClass: 'lg:col-span-2 lg:row-span-2',
    tag: '01',
    large: true,
  },
  {
    key: 'lcd',
    icon: Monitor,
    color: '#A8D8EA',
    bg: 'rgba(168,216,234,0.06)',
    border: 'rgba(168,216,234,0.18)',
    gridClass: 'lg:col-span-1 lg:row-span-2',
    tag: '02',
    large: true,
  },
  {
    key: 'opto',
    icon: Lightbulb,
    color: '#FFD580',
    bg: 'rgba(255,213,128,0.05)',
    border: 'rgba(255,213,128,0.15)',
    gridClass: 'lg:col-span-1 lg:row-span-1',
    tag: '03',
    large: false,
  },
  {
    key: 'components',
    icon: Cpu,
    color: '#C0C8D8',
    bg: 'rgba(192,200,216,0.05)',
    border: 'rgba(192,200,216,0.15)',
    gridClass: 'lg:col-span-1 lg:row-span-1',
    tag: '04',
    large: false,
  },
  {
    key: 'oem',
    icon: Wrench,
    color: '#81E6A0',
    bg: 'rgba(129,230,160,0.05)',
    border: 'rgba(129,230,160,0.18)',
    gridClass: 'lg:col-span-1 lg:row-span-1',
    tag: '05',
    large: false,
    stat: true,
  },
] as const;

type CardCfg = (typeof CARDS)[number];
type BentoData = {
  label: string;
  name: string;
  desc: string;
  sub?: string[];
  badge?: string;
};

// ── Large hero card ───────────────────────────────────────────────────────
function LargeCard({ cfg, t, delay }: { cfg: CardCfg; t: ReturnType<typeof useTranslations>; delay: number }) {
  const Icon = cfg.icon;
  const data = t.raw(`bento.${cfg.key}`) as BentoData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative rounded-2xl overflow-hidden p-8 flex flex-col justify-between cursor-default transition-all duration-500 ${cfg.gridClass}`}
      style={{
        background: 'linear-gradient(140deg, rgba(6,24,64,0.9) 0%, rgba(4,12,32,0.95) 100%)',
        border: `1px solid ${cfg.border}`,
        boxShadow: '0 4px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)',
        minHeight: '280px',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
        (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px ${cfg.border}, 0 0 40px ${cfg.color}18`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = '';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)';
      }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 20% 80%, ${cfg.color}12 0%, transparent 60%)` }}
      />
      {/* Top row */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${cfg.color}18, ${cfg.color}08)`,
              border: `1px solid ${cfg.color}30`,
            }}
          >
            <Icon size={22} style={{ color: cfg.color }} />
          </div>
          <span
            className="text-[9px] tracking-[0.4em] uppercase opacity-30"
            style={{ fontFamily: 'var(--font-mono)', color: cfg.color }}
          >
            {cfg.tag}
          </span>
        </div>
        <span
          className="text-[9px] tracking-[0.35em] uppercase block mb-3"
          style={{ fontFamily: 'var(--font-mono)', color: cfg.color }}
        >
          {data.label}
        </span>
        <h3
          className="text-white leading-snug mb-4"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(1.3rem, 2.2vw, 1.75rem)' }}
        >
          {data.name}
        </h3>
        <p className="text-white/35 text-sm leading-relaxed mb-8 max-w-sm">
          {data.desc}
        </p>
      </div>
      {/* Bullet list */}
      {data.sub && (
        <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
          {data.sub.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle2 size={12} style={{ color: cfg.color }} className="shrink-0" />
              <span className="text-white/40 text-xs leading-snug">{item}</span>
            </div>
          ))}
        </div>
      )}
      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${cfg.color}60, transparent)` }}
      />
    </motion.div>
  );
}

// ── Small card ────────────────────────────────────────────────────────────
function SmallCard({ cfg, t, delay }: { cfg: CardCfg; t: ReturnType<typeof useTranslations>; delay: number }) {
  const Icon = cfg.icon;
  const data = t.raw(`bento.${cfg.key}`) as BentoData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative rounded-2xl overflow-hidden p-6 flex flex-col justify-between transition-all duration-500 cursor-default ${cfg.gridClass}`}
      style={{
        background: cfg.bg,
        border: `1px solid ${cfg.border}`,
        boxShadow: '0 2px 16px rgba(0,0,0,0.2)',
        minHeight: '160px',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
        (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px rgba(0,0,0,0.35), 0 0 0 1px ${cfg.border}`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = '';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 16px rgba(0,0,0,0.2)';
      }}
    >
      {/* Top row */}
      <div>
        <div className="flex items-start justify-between mb-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${cfg.border}` }}
          >
            <Icon size={16} style={{ color: cfg.color }} />
          </div>
          <span
            className="text-[9px] tracking-[0.3em] uppercase opacity-30"
            style={{ fontFamily: 'var(--font-mono)', color: cfg.color }}
          >
            {cfg.tag}
          </span>
        </div>
        <span
          className="text-[9px] tracking-[0.3em] uppercase block mb-1.5"
          style={{ fontFamily: 'var(--font-mono)', color: cfg.color }}
        >
          {data.label}
        </span>
        <h3
          className="text-white/80 text-[0.88rem] leading-snug mb-2"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
        >
          {data.name}
        </h3>
      </div>
      {/* Badge */}
      {data.badge && (
        <div
          className="mt-auto self-start text-[10px] tracking-[0.12em] uppercase px-3 py-1.5 rounded-full flex items-center gap-1"
          style={{ fontFamily: 'var(--font-mono)', color: cfg.color, background: `${cfg.color}12`, border: `1px solid ${cfg.border}` }}
        >
          <Zap size={9} />
          {data.badge}
        </div>
      )}
      {/* Hover arrow */}
      <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: cfg.color }}>
        <ArrowUpRight size={16} />
      </div>
      {/* Corner glow */}
      <div
        className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${cfg.color}20, transparent 70%)` }}
      />
    </motion.div>
  );
}

// ── Main export ────────────────────────────────────────────────────────────
export default function Products() {
  const t = useTranslations('products');

  return (
    <section id="products" className="py-28 bg-[#030d1f] relative overflow-hidden">
      {/* Dot texture */}
      <div
        className="absolute inset-0 opacity-[0.032]"
        style={{
          backgroundImage: 'radial-gradient(rgba(79,195,247,0.9) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4FC3F7]/15 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex justify-end"
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 text-white/40 hover:text-[#4FC3F7] text-sm tracking-wide transition-colors shrink-0"
          >
            <span className="border-b border-white/15 group-hover:border-[#4FC3F7] transition-colors pb-0.5">
              Request a quote
            </span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 gap-3 lg:gap-4" style={{ gridAutoRows: '160px' }}>
          {CARDS.map((cfg, i) =>
            cfg.large ? (
              <LargeCard key={cfg.key} cfg={cfg} t={t} delay={i * 0.1} />
            ) : (
              <SmallCard key={cfg.key} cfg={cfg} t={t} delay={i * 0.1} />
            )
          )}
        </div>
      </div>
    </section>
  );
}

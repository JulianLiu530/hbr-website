'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  {
    num: '01',
    label: 'Display Assemblies',
    title: 'Screens',
    desc: 'Hard OLED · Soft OLED · Incell\niPhone X → 17 Pro Max',
    href: '/screens.html',
    color: '#4FC3F7',
    border: 'rgba(79,195,247,0.22)',
    glow: 'rgba(79,195,247,0.10)',
    icon: '🖥',
  },
  {
    num: '02',
    label: 'Cover Glass',
    title: 'Glass + OCA',
    desc: 'Curved Glass+OCA\nFlat Glass+OCA',
    href: '/glass.html',
    color: '#A8D8EA',
    border: 'rgba(168,216,234,0.2)',
    glow: 'rgba(168,216,234,0.08)',
    icon: '🪟',
  },
  {
    num: '03',
    label: 'Frame & Body',
    title: 'Back Housing',
    desc: 'With Buttons · With Battery\nWith NFC Module',
    href: '/housing.html',
    color: '#C0C8D8',
    border: 'rgba(192,200,216,0.18)',
    glow: 'rgba(192,200,216,0.06)',
    icon: '📱',
  },
  {
    num: '04',
    label: 'Power Solutions',
    title: 'Batteries',
    desc: 'Standard · High Capacity\nNo-Popup',
    href: '/battery.html',
    color: '#81E6A0',
    border: 'rgba(129,230,160,0.18)',
    glow: 'rgba(129,230,160,0.07)',
    icon: '🔋',
  },
];

export default function CategoryNav() {
  return (
    <section className="py-24 bg-[#030d1f] relative overflow-hidden">
      {/* top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <span
              className="text-[#4FC3F7] text-[10px] tracking-[0.4em] uppercase mb-3 block"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Browse by Category
            </span>
            <h2
              className="text-white leading-tight"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
                fontWeight: 300,
              }}
            >
              Product Catalogue
            </h2>
          </div>
          <a
            href="/products.html"
            className="group flex items-center gap-2 text-white/35 hover:text-[#4FC3F7] text-sm tracking-wide transition-colors shrink-0 self-start sm:self-auto"
          >
            <span
              className="border-b border-white/15 group-hover:border-[#4FC3F7] transition-colors pb-0.5"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em' }}
            >
              View all products
            </span>
            <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.num}
              href={cat.href}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-2xl overflow-hidden flex flex-col justify-between"
              style={{
                padding: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                minHeight: 'clamp(200px, 28vw, 280px)',
                background: 'linear-gradient(140deg, rgba(6,20,54,0.88) 0%, rgba(4,12,32,0.94) 100%)',
                border: `1px solid ${cat.border}`,
                boxShadow: '0 3px 20px rgba(0,0,0,0.3)',
                textDecoration: 'none',
                transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s',
              }}
              whileHover={{
                y: -6,
                boxShadow: `0 18px 48px rgba(0,0,0,0.45), 0 0 0 1px ${cat.border}, 0 0 32px ${cat.glow}`,
              }}
            >
              {/* hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 30% 80%, ${cat.glow} 0%, transparent 65%)` }}
              />

              {/* top */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                    style={{
                      background: `${cat.color}12`,
                      border: `1px solid ${cat.border}`,
                    }}
                  >
                    {cat.icon}
                  </div>
                  <span
                    className="opacity-25 text-[9px] tracking-[0.35em]"
                    style={{ fontFamily: 'var(--font-mono)', color: cat.color }}
                  >
                    {cat.num}
                  </span>
                </div>
                <span
                  className="block mb-2 text-[9px] tracking-[0.32em] uppercase"
                  style={{ fontFamily: 'var(--font-mono)', color: cat.color }}
                >
                  {cat.label}
                </span>
                <h3
                  className="text-white leading-snug mb-2"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 300,
                    fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                  }}
                >
                  {cat.title}
                </h3>
                <p
                  className="text-white/30 leading-relaxed whitespace-pre-line"
                  style={{ fontSize: 'clamp(0.7rem, 1.1vw, 0.8rem)' }}
                >
                  {cat.desc}
                </p>
              </div>

              {/* arrow */}
              <div
                className="relative z-10 mt-4 self-end w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ background: `${cat.color}18`, border: `1px solid ${cat.border}`, color: cat.color }}
              >
                <ArrowUpRight size={14} />
              </div>

              {/* bottom accent */}
              <div
                className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${cat.color}60, transparent)` }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Linkedin, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import ContactForm from './ContactForm';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <>
      {/* ── Contact section ── */}
      <section id="contact" className="py-28 bg-[#030d1f] relative overflow-hidden">

        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(79,195,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(79,195,247,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Top glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none opacity-[0.08]"
          style={{ background: 'radial-gradient(ellipse, #4FC3F7, transparent 70%)' }}
        />

        {/* Top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4FC3F7]/15 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">

            {/* Left: contact info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8 }}
            >
              <span
                className="text-[#4FC3F7] text-[10px] tracking-[0.4em] uppercase mb-4 block"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                04 — {t('contact_title')}
              </span>
              <h2
                className="text-white leading-tight mb-5"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 4.5vw, 3.8rem)',
                  fontWeight: 300,
                }}
              >
                {t('tagline')}
              </h2>
              <p className="text-white/35 text-sm leading-relaxed mb-12 max-w-md">
                {t('contact_body')}
              </p>

              {/* Contact methods */}
              <div className="flex flex-col gap-4 mb-12">
                {[
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'info@hbrelectronics.com',
                    href: 'mailto:info@hbrelectronics.com',
                  },
                  {
                    icon: Phone,
                    label: 'WhatsApp',
                    value: '+852 8495 0925',
                    href: 'https://wa.me/85284950925',
                  },
                  {
                    icon: MapPin,
                    label: 'Address',
                    value: 'Dongguan, Guangdong, China',
                    href: null,
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={15} className="text-[#4FC3F7]" />
                    </div>
                    <div>
                      <div
                        className="text-white/25 text-[9px] tracking-[0.3em] uppercase mb-1"
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        {label}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="text-white/70 hover:text-[#4FC3F7] text-sm transition-colors duration-200"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="text-white/70 text-sm">{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/julianliu530"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 bg-white/[0.04] hover:bg-[#0A66C2] border border-white/[0.08] hover:border-[#0A66C2] text-white/50 hover:text-white px-4 py-2.5 rounded-lg transition-all duration-300"
                >
                  <Linkedin size={14} />
                  <span className="text-xs tracking-wide">LinkedIn</span>
                </a>
                <a
                  href="https://wa.me/85284950925"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 bg-white/[0.04] hover:bg-[#25D366] border border-white/[0.08] hover:border-[#25D366] text-white/50 hover:text-white px-4 py-2.5 rounded-lg transition-all duration-300"
                >
                  <MessageCircle size={14} />
                  <span className="text-xs tracking-wide">WhatsApp</span>
                </a>
                <a
                  href="mailto:info@hbrelectronics.com"
                  className="group flex items-center gap-2.5 bg-white/[0.04] hover:bg-[#4FC3F7] border border-white/[0.08] hover:border-[#4FC3F7] text-white/50 hover:text-[#061840] px-4 py-2.5 rounded-lg transition-all duration-300"
                >
                  <Mail size={14} />
                  <span className="text-xs tracking-wide">Email</span>
                </a>
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              {/* Form card */}
              <div
                className="rounded-2xl p-8"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.3)',
                }}
              >
                <h3
                  className="text-white text-lg mb-1"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
                >
                  {t('form_heading')}
                </h3>
                <p className="text-white/30 text-xs mb-8">{t('form_sub')}</p>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Footer bar ── */}
      <footer className="bg-[#020810] py-8 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-7 h-7">
              <Image src="/logo.png" alt="HBR" fill className="object-contain" />
            </div>
            <div>
              <span
                className="text-white/40 text-[11px] tracking-[0.25em] uppercase block"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                HBR Electronics
              </span>
              <span
                className="text-white/15 text-[9px] tracking-[0.15em]"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                洪柏荣电子
              </span>
            </div>
          </div>

          <p
            className="text-white/15 text-[11px] tracking-wide text-center"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            © {new Date().getFullYear()} HBR Electronics · {t('rights')}
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/julianliu530"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/15 hover:text-[#4FC3F7] transition-colors"
            >
              <Linkedin size={14} />
            </a>
            <a
              href="https://wa.me/85284950925"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/15 hover:text-[#25D366] transition-colors"
            >
              <MessageCircle size={14} />
            </a>
            <a
              href="mailto:info@hbrelectronics.com"
              className="text-white/15 hover:text-[#4FC3F7] transition-colors"
            >
              <Mail size={14} />
            </a>
          </div>
        </div>
      </footer>

      {/* ── Floating action buttons ── */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <motion.a
          href="https://wa.me/85284950925"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 2, type: 'spring', stiffness: 300 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30"
          title="WhatsApp"
        >
          <MessageCircle size={20} className="text-white" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/julianliu530"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 2.15, type: 'spring', stiffness: 300 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 bg-[#0A66C2] rounded-full flex items-center justify-center shadow-lg shadow-[#0A66C2]/30"
          title="LinkedIn"
        >
          <Linkedin size={18} className="text-white" />
        </motion.a>
      </div>
    </>
  );
}

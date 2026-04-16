'use client';

import { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Mail, MessageSquare, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

interface FieldError {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const t = useTranslations('contact');
  const [values, setValues] = useState<FormValues>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FieldError>({});
  const [state, setState] = useState<FormState>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const validate = (): boolean => {
    const errs: FieldError = {};
    if (!values.name.trim()) errs.name = t('error_name');
    if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      errs.email = t('error_email');
    if (!values.message.trim() || values.message.trim().length < 10)
      errs.message = t('error_message');
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name as keyof FieldError]) {
      setErrors((e) => ({ ...e, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setState('loading');
    try {
      // Simulated submission — replace with your API endpoint or Formspree/Resend
      await new Promise((res) => setTimeout(res, 1800));
      setState('success');
      setValues({ name: '', email: '', message: '' });
    } catch {
      setState('error');
    }
  };

  const fields = [
    {
      key: 'name' as const,
      type: 'text',
      icon: User,
      label: t('label_name'),
      placeholder: t('placeholder_name'),
      multiline: false,
    },
    {
      key: 'email' as const,
      type: 'email',
      icon: Mail,
      label: t('label_email'),
      placeholder: t('placeholder_email'),
      multiline: false,
    },
    {
      key: 'message' as const,
      type: 'text',
      icon: MessageSquare,
      label: t('label_message'),
      placeholder: t('placeholder_message'),
      multiline: true,
    },
  ];

  return (
    <div className="w-full max-w-xl mx-auto">
      <AnimatePresence mode="wait">
        {state === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center justify-center gap-5 py-16 px-8 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-[#4FC3F7]/15 border border-[#4FC3F7]/30 flex items-center justify-center">
              <CheckCircle2 size={28} className="text-[#4FC3F7]" />
            </div>
            <div>
              <h3
                className="text-white text-xl mb-2"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
              >
                {t('success_title')}
              </h3>
              <p className="text-white/40 text-sm">{t('success_body')}</p>
            </div>
            <button
              onClick={() => setState('idle')}
              className="text-[#4FC3F7] text-xs tracking-[0.25em] uppercase border border-[#4FC3F7]/30 hover:border-[#4FC3F7] px-5 py-2.5 rounded transition-colors mt-2"
            >
              {t('send_another')}
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-5"
            noValidate
          >
            {fields.map(({ key, type, icon: Icon, label, placeholder, multiline }) => (
              <div key={key} className="flex flex-col gap-1.5">
                {/* Label */}
                <label
                  htmlFor={key}
                  className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-white/40"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  <Icon size={11} />
                  {label}
                </label>

                {/* Input */}
                <div className="relative">
                  {multiline ? (
                    <textarea
                      id={key}
                      name={key}
                      rows={4}
                      value={values[key]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      className={`w-full bg-white/[0.04] border rounded-lg px-4 py-3.5 text-white text-sm placeholder-white/20 outline-none transition-all duration-200 resize-none ${
                        errors[key]
                          ? 'border-red-400/50 focus:border-red-400'
                          : 'border-white/10 focus:border-[#4FC3F7]/50 focus:bg-white/[0.06]'
                      }`}
                      style={{ fontFamily: 'var(--font-body)' }}
                    />
                  ) : (
                    <input
                      id={key}
                      name={key}
                      type={type}
                      value={values[key]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      className={`w-full bg-white/[0.04] border rounded-lg px-4 py-3.5 text-white text-sm placeholder-white/20 outline-none transition-all duration-200 ${
                        errors[key]
                          ? 'border-red-400/50 focus:border-red-400'
                          : 'border-white/10 focus:border-[#4FC3F7]/50 focus:bg-white/[0.06]'
                      }`}
                      style={{ fontFamily: 'var(--font-body)' }}
                    />
                  )}
                </div>

                {/* Error */}
                <AnimatePresence>
                  {errors[key] && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      className="flex items-center gap-1.5 text-red-400 text-[11px]"
                    >
                      <AlertCircle size={10} />
                      {errors[key]}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Error state */}
            <AnimatePresence>
              {state === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2.5 bg-red-500/10 border border-red-400/20 rounded-lg px-4 py-3 text-red-400 text-sm"
                >
                  <AlertCircle size={14} />
                  {t('error_submit')}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit */}
            <button
              type="submit"
              disabled={state === 'loading'}
              className="group relative mt-2 flex items-center justify-center gap-2.5 bg-[#4FC3F7] hover:bg-white disabled:opacity-60 text-[#061840] font-semibold text-[11px] tracking-[0.18em] uppercase px-8 py-4 rounded-lg transition-all duration-300 shadow-[0_0_32px_rgba(79,195,247,0.25)] hover:shadow-[0_0_48px_rgba(79,195,247,0.4)]"
            >
              {state === 'loading' ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  {t('sending')}
                </>
              ) : (
                <>
                  {t('submit')}
                  <Send size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

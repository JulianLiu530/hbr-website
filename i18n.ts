import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  if (!routing.locales.includes(locale as 'en' | 'zh')) notFound();
  return {
    locale: locale!,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});

import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

type SupportedLocale = 'en' | 'zh' | 'de' | 'sv' | 'fr' | 'es';

interface TranslationMessages {
  [key: string]: string | TranslationMessages;
}

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale as SupportedLocale;
  
  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale as SupportedLocale;
  }
 
  const messages = (await import(`./messages/${locale}.json`)).default as TranslationMessages;
 
  return {
    locale,
    messages
  };
});
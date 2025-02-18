export const locales = ['en', 'zh', 'de', 'sv', 'fr', 'es'] as const;
export type Locale = typeof locales[number];
export const locales = ['en', 'zh', 'de', 'sv', 'fr', 'es', 'id', 'ja', 'nb', 'pt', 'th'] as const;
export type Locale = typeof locales[number];
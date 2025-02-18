import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
    locales: [
        'en',    // 英语
        'zh',    // 中文
        'de',    // 德语
        'sv',    // 瑞典语
        'fr',    // 法语
        'es'     // 西班牙语
    ],
    defaultLocale: 'en'
  });
 
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
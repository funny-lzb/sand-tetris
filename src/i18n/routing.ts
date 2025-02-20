import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
import { locales } from './locale';
 
export const routing = defineRouting({
    locales: locales,
    defaultLocale: 'en',
    localePrefix: 'as-needed',
    localeDetection: false
  });
 
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
import { locals } from '@/locals';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';
// import locales from '../i18n';
const locales = locals;
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({locales});
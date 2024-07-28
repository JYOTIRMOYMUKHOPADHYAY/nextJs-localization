import { locals } from '@/locals';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';
const locales = locals;
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({locales});
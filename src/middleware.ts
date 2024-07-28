import createMiddleware from 'next-intl/middleware';
import { locals } from './locals';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: locals,
 
  // Used when no locale matches
  defaultLocale: locals[0]
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|hi|fr|it)/:path*']
};
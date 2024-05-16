

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


export const isProtectedRoute  = createRouteMatcher([
  '/',
  '/events/:id(.*)',
  '/api/webhook/clerk(.*)',
  '/api/webhook/stripe(.*)',
  '/api/uploadthing(.*)'
])

export default clerkMiddleware();

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
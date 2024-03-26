import type { NextAuthConfig } from 'next-auth';
import { redirect } from "next/navigation";

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request }) {
      const user = !!auth?.user;
      const isOnDashboard = request.nextUrl?.pathname.startsWith("/dashboard");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
      if (isOnDashboard) {
        if (user) return true;
        return false; // Redirect unauthenticated users to login page
      } 
      if (isOnLoginPage) {
        return Response.redirect(new URL('/', request.nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
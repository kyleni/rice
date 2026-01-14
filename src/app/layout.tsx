// Purpose: Root layout that wraps entire application with font, theme, and navigation

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SITE_CONFIG } from '@/lib/config';
import './globals.css';
import TopNav from '@/components/navigation/TopNav';
import SideNav from '@/components/navigation/SideNav';
import ThemeProvider from '@/components/providers/ThemeProvider';

// Inter font
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

// Browser tab label
export const metadata: Metadata = {
  title: `${SITE_CONFIG.companyName} - ${SITE_CONFIG.tagline}`,
};

// Themes, top nav, side nav, main content area
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">

        <ThemeProvider>
          <TopNav />
          
          <SideNav />
          
          <main >
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
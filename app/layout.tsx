import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import Script from 'next/script';
import { ThemeProvider } from 'next-themes';
import { TooltipProvider } from '@radix-ui/react-tooltip';

const inter = Inter({ subsets: ['latin'] });

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Sedot WC Bebas Mampet',
    default: 'Sedot WC Bebas Mampet - Layanan Profesional 24 Jam',
  },
  description: 'Layanan penyedotan WC profesional, cepat, dan terpercaya 24 jam. Bersih, Cepat, Profesional. Hubungi kami di 087784003407',
  keywords: 'sedot WC, sedot limbah, sedot lumpur, cuci tangki air, layanan WC Pontianak',
  openGraph: {
    title: 'Sedot WC Bebas Mampet',
    description: 'Layanan penyedotan WC profesional 24 jam',
    type: 'website',
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html className="h-full" suppressHydrationWarning>
      <head>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W4N4LKDX');`}
        </Script>
      </head>
      <body
        className={cn(
          'antialiased text-base text-foreground bg-background',
          inter.className,
        )}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W4N4LKDX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          storageKey="saas-theme"
          enableSystem
          disableTransitionOnChange
          enableColorScheme
        >
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

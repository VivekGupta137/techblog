import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { JetBrains_Mono } from 'next/font/google'
import { Bungee_Inline } from 'next/font/google'

import Script from 'next/script'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const gtwalsheimpro = localFont({
  src: "./fonts/GTWalsheimProRegular.woff",
  variable: "--font-gt-regular",
  weight: "100 900",
});

const gtwalsheimboldpro = localFont({
  src: "./fonts/GTWalsheimProBold.woff",
  variable: "--font-gt-bold",
  weight: "100 900",
});

const jetbrainsmono = JetBrains_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

const bungeeinline = Bungee_Inline({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bungee-reg',
});



export const metadata: Metadata = {
  title: "Vivek's blog",
  description:
    "this is not a boring but an interactive blog. I am a software engineer and I write about tech, coding, and life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gtwalsheimpro.variable} ${gtwalsheimboldpro.variable} ${jetbrainsmono.variable} ${bungeeinline.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="selection:bg-primary selection:text-secondary">
          {children}
          <Toaster />
          </div>
        </ThemeProvider>
        <SpeedInsights />
      </body>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js"  />
    </html>
  );
}

import Script from "next/script";
import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: "premium-saas-dashboard-ui",
  description:
    "Premium SaaS analytics dashboard built with Next.js, React, Tailwind CSS, and Recharts. Designed for modern admin panels with clean UI, data visualization, and scalable architecture.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${ibmPlexMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            try {
              const savedTheme = window.localStorage.getItem("saas-dashboard-theme");
              const isDark = savedTheme === "dark";
              document.documentElement.classList.toggle("dark", isDark);
            } catch (error) {
              document.documentElement.classList.remove("dark");
            }
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";

import { Header } from "@/components/custom/header";
import { Footer } from "@/components/custom/footer";
import { TwSizeIndicator } from "@/components/tw-size-indicator";
import { getGlobalData } from "@/utils";

import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Шина Мікс",
  description: "Імпортер шин з власним складом в серці Києва",
  alternates: {
    canonical: "https://shinamix.com/"
  },
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    siteName: "Шина Мікс",
    description: "Імпортер шин з власним складом в серці Києва",
  },
};

export const viewport = {
  themeColor: "#4169e1", //accent колір по іншому не підтягується
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  const globalData = await getGlobalData();

  return (
    <html lang="uk" className="scroll-smooth" >
      <head>
        {/* Підключаємо GA4 */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-G3EQ8VFHQT"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){ dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', 'G-G3EQ8VFHQT', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

      </head>
      <body className="bg-body text-base dark:bg-darkmode-body font-primary font-normal leading-relaxed text-text dark:text-darkmode-text
      flex flex-col min-h-screen">

        <TwSizeIndicator />
        <Header data={globalData.data.header} />
        {children}
        <ToastContainer />
        <Footer data={globalData.data.footer} />
      </body>
    </html>
  );
}

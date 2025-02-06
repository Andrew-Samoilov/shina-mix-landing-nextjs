import type { Metadata } from "next";

import { Header } from "@/components/custom/header";
import { Footer } from "@/components/custom/footer";
import { TwSizeIndicator } from "@/components/tw-size-indicator";
import { getGlobalData } from "@/utils/utils-server";

import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Шина Мікс",
  description: "Імпортер шин з власним складом в серці Києва",
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "https://shinamix.com",
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
        {/* Google Analytics */}
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
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-G3EQ8VFHQT', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {/* GTM: Додаємо script у head */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T8WWLL4K');
            `,
          }}
        />
      </head>
      <body className="bg-body text-base dark:bg-darkmode-body font-primary font-normal leading-relaxed text-text dark:text-darkmode-text
      flex flex-col min-h-screen">
        {/* GTM: Додаємо noscript у body */}
        <noscript>
          <iframe
            title="google tag manager"
            src="https://www.googletagmanager.com/ns.html?id=GTM-T8WWLL4K"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
          </noscript>
        <TwSizeIndicator />
        <Header data={globalData.data.header} />
        {children}
        <Footer data={globalData.data.footer} />
      </body>
    </html>
  );
}

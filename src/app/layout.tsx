import type { Metadata } from "next";

import { getGlobalData } from "@/data/loaders";
import { Header } from "@/components/custom/header";
import { Footer } from "@/components/custom/footer";
import { TwSizeIndicator } from "@/components/tw-size-indicator";

import "./globals.css";
// import "@/styles/main.scss";


export const metadata: Metadata = {
  title: "Шина Мікс",
  description: "Імпортер шин з власним складом в серці Києва",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  const globalData = await getGlobalData();

  return (
    <html lang="uk">
      <body>
        <TwSizeIndicator />
        <Header data={globalData.data.header} />
        {children}
        <Footer data={globalData.data.footer} />
      </body>
    </html>
  );
}

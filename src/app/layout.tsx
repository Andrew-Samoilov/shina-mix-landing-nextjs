import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { getGlobalData } from "@/data/loaders";
import { Header } from "@/components/custom/header";

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

export const metadata: Metadata = {
  title: "ShinaMix",
  description: "Імпортер шин з власним складом в серці Києва",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  const globalData = await getGlobalData();
  console.dir(globalData, { depth: null });

  return (
    <html lang="uk">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header data={globalData.data.header} />
        <div>{children}</div>
      </body>
    </html>
  );
}

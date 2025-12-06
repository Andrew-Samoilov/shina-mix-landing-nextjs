import { getHomePageData } from "@/utils";

import { HeroSection } from "@/components/custom/hero-section";
import { SertsSection } from "@/components/custom/sert-section";
import { FeatureSection } from "@/components/custom/features-section";
import { BenefitSection } from "@/components/custom/benefits-section";
import { PriceSection } from "@/components/custom/price-section";
import { ContactSection } from "@/components/custom/contact-section";
import { BrendsSection } from "@/components/custom/brends-section";

import type { BenefitSectionProps, BrandSectionProps, ContactSectionProps, FeatureSectionProps, HeroSectionProps, PriceSectionProps, SertSectionProps } from "./types"
// import fs from 'node:fs';
// import path from 'node:path';

export default async function Home() {
  const strapiData = await getHomePageData();
  const { blocks } = strapiData?.data || [];

  // console.log(JSON.stringify(blocks, null, 2));

  // // Шлях для тимчасового файлу
  // const filePath = path.join(process.cwd(), 'tempStrapiData.json');

  // // Перетворюємо об'єкт у форматований рядок JSON
  // const jsonString = JSON.stringify(blocks, null, 2);

  // // Записуємо у файл
  // fs.writeFileSync(filePath, jsonString);

  // console.log(`Дані Strapi успішно збережено у файл: ${filePath}`);

  return (
    <main>
      <HeroSection data={blocks[0] as HeroSectionProps} />
      <SertsSection data={blocks[1] as SertSectionProps} />
      <FeatureSection data={blocks[2] as FeatureSectionProps} />
      <BenefitSection data={blocks[3] as BenefitSectionProps} />
      <PriceSection data={blocks[4] as PriceSectionProps } />
      <BrendsSection data={blocks[5] as BrandSectionProps} />
      <ContactSection data={blocks[6] as ContactSectionProps} />
    </main>
  )
}

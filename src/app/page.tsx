import { getHomePageData } from "@/data/loaders";

import { HeroSection } from "@/components/custom/hero-section";
import { SertsSection } from "@/components/custom/sert-section";
import { FeatureSection } from "@/components/custom/features-section";
import { BenefitSection } from "@/components/custom/benefits-section";
import { PriceSection } from "@/components/custom/price-section";
import { ContactSection } from "@/components/custom/contact-section";
import { BrendsSection } from "@/components/custom/brends-section";

export default async function Home() {
  const strapiData = await getHomePageData();
  const { blocks } = strapiData?.data || [];

  return (
    <main>
      <HeroSection data={blocks[0]} />
      <SertsSection data={blocks[1]} />
      <FeatureSection data={blocks[2]} />
      <BenefitSection data={blocks[3]} />
      <PriceSection data={blocks[4]} />
      <BrendsSection data={blocks[5]} />
      <ContactSection data={blocks[6]} />
    </main>
  )
}

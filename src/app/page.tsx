import { getHomePageData } from "@/data/loaders";

import { HeroSection } from "@/components/custom/hero-section";
import { FeatureSection } from "@/components/custom/features-section";
import { BenefitSection } from "@/components/custom/benefits-section";
import { PriceSection } from "@/components/custom/price-section";
import { ContactSection } from "@/components/custom/contact-section";
import { SertsSection } from "@/components/custom/sert-section";

export default async function Home() {
  const strapiData = await getHomePageData();
  const { blocks } = strapiData?.data || [];
  // return <main>{blocks.map(blockRenderer)} </main>
  console.dir(blocks);

  return (
    <main>
      <HeroSection data={blocks[0]} />
      <SertsSection data={blocks[1]} />
      <FeatureSection data={blocks[2]} />
      <BenefitSection data={blocks[3]} />
      <PriceSection data={blocks[4]} />
      <ContactSection data={blocks[5]} />

    </main>
  )
}

// const blockComponents = {
//   "layout.hero-section": HeroSection,
//   "layout.features-section": FeatureSection,
//   "layout.benefits-section": BenefitSection,
//   "layout.price-section": PriceSection,
//   "layout.contact-section": ContactSection,
// };

// function blockRenderer(block: any) {
//   // console.dir(blockComponents);

//   const Component = blockComponents[block.__component as keyof typeof blockComponents];
//   return Component ? <Component key={block.id} data={block} /> : null;
// }

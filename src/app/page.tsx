import qs from "qs";
import { HeroSection } from "@/components/custom/hero-section";
import { FeatureSection } from "@/components/custom/features-section";
import { NumberSection } from "@/components/custom/numbers-section";
import { PriceSection } from "@/components/custom/price-section";
import { ContactSection } from "@/components/custom/contact-section";

const homePageQuery = qs.stringify({
  populate: {
    blocks: {
      on: {
        "layout.hero-section": {
          populate: {
            image: {
              fields: ["url", "alternativeText"],
            },
            link: {
              populate: true,
            },
          },
        },
      },
    },
  },
});

async function getStrapiData(path: string) {
  const baseUrl = "http://localhost:1337";

  const url = new URL(path, baseUrl);
  url.search = homePageQuery;

  try {
    const response = await fetch(url.href);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const strapiData = await getStrapiData("/api/landing-page");

  // console.dir(strapiData, { depth: null });

  const { blocks } = strapiData.data;

  return (
    <>
      <header>
        <p>header</p>
      </header>
      <main>
        <HeroSection data={blocks[0]} />
        <FeatureSection />
        <NumberSection />
        <PriceSection />
        <ContactSection />
      </main>
      <footer>footer</footer>
    </>
  );
}

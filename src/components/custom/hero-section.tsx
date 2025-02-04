import Link from "next/link";
// import { StrapiImage } from "@/components/strapi-image";
import Image from "next/image";

interface Image {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string | null;
}

interface Link {
  id: number;
  url: string;
  text: string;
}

interface HeroSectionProps {
  id: number;
  documentId: string;
  __component: string;
  heading: string;
  subHeading: string;
  image: Image;
  link: Link;
}

export function HeroSection({ data }: { readonly data: HeroSectionProps }) {
  const { heading, subHeading, image, link } = data;
  console.log(`image url`, image.url, process.env.NEXT_PUBLIC_STRAPI_URL);

  return (
    <section
      id="hero"
      className="container md:rounded-lg flex flex-col-reverse md:flex-row
     md:bg-linear-to-r from-[#F4F4F4] to-[#F4F4F43D] dark:from-darkmode-theme-light dark:to-darkmode-body
     scroll-mt-[100px]">
      <div className="flex flex-col items-center lg:justify-around xl:justify-center 
      xl:px-20">
        <h1>
          {heading}
        </h1>
        <p className="mb-2 lg:mb-3 text-light dark:text-darkmode-light font-medium 
        md:text-xl">
          {subHeading}
        </p>
        <Link
          href={link.url}
          className="btn btn-primary md:btn-lg font-medium mr-auto "
          aria-label={link.text}
        >
          {link.text}
        </Link>
      </div>
      <Image
        alt={image.alternativeText ?? "Hero image"}
        className="overflow-hidden rounded-md"
        src={process.env.NEXT_PUBLIC_STRAPI_URL+image.url}
        height={1080 / 2.5}
        width={1920 / 2}
        priority={true}
        sizes="(max-width: 640px) 95vw, (min-width: 768px) 33vw"
        unoptimized
      />
    </section>
  );
}

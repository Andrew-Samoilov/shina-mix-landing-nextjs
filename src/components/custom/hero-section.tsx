import Link from "next/link";
import { StrapiImage } from "@/components/strapi-image";

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

  return (
    <section className="container md:rounded-md flex flex-col-reverse md:flex-row
     bg-gradient-to-r from-[#F4F4F4] to-[#F4F4F43D] dark:from-darkmode-theme-light dark:to-darkmode-body
    ">
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
          className="btn md:btn-lg btn-primary mr-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          aria-label={link.text}
        >
          {link.text}
        </Link>
      </div>
      <StrapiImage
        alt={image.alternativeText ?? "Hero image"}
        className="overflow-hidden rounded-md"
        src={image.url}
        height={1080/3}
        width={1920/3}
        priority={true}
        sizes="(max-width: 640px) 95vw, (max-width: 1024px) 50vw, (min-width: 1280px) 33vw"
      />
    </section>
  );
}

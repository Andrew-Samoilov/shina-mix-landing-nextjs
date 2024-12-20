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
    <section className="container py-10 rounded-md flex
     bg-gradient-to-r from-[#F4F4F4] to-[#F4F4F43D] dark:from-darkmode-theme-light dark:to-darkmode-body
    ">
      <div className="flex  flex-col items-center lg:justify-around xl:justify-center text-center ">
        <h1 className="xl:px-6 2xl:px-32">
          {heading}
        </h1>
        <p className="mb-2 lg:mb-3 text-light dark:text-darkmode-light font-medium 
        md:text-xl xl:px-20 2xl:px-0">
          {subHeading}
        </p>
        <Link
          // className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-md shadow hover:bg-gray-100"
          className="btn btn-sm md:btn-lg btn-primary font-medium "
          href={link.url}
        >
          {link.text}
        </Link>
      </div>
      <StrapiImage
        alt={image.alternativeText ?? "no alternative text"}
        className="overflow-hidden rounded-md"
        src={image.url}
        height={1080/3}
        width={1920/3}
        priority={true}
      />
    </section>
  );
}

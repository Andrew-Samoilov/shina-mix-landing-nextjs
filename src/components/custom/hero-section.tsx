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
    <section className="container bg-gradient py-10 rounded-md flex">
      <div className="flex flex-col items-center justify-center text-center ">
        {/* <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl"> */}
        <h1>
          {heading}
        </h1>
        {/* <p className="m-4 text-lg md:text-xl lg:text-2xl"> */}
        <p>
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
        className="overflow-hidden"
        src={image.url}
        height={1080}
        width={1920}
        priority={true}
      />
    </section>
  );
}

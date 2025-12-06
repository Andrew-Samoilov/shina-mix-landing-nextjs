import Link from "next/link";
import Image from "next/image";
import { HeroSectionProps } from "@/app/types";
// import { getStrapiURL } from "@/utils";

export function HeroSection({ data }: { readonly data: HeroSectionProps }) {
  const { heading, subHeading, image, link } = data;

  return (
    <section
      id="hero"
      className="container md:rounded-lg flex flex-col-reverse md:flex-row scroll-mt-[100px]
      md:bg-linear-to-r from-[#F4F4F4] to-[#F4F4F43D] dark:from-darkmode-theme-light dark:to-darkmode-body items-center content-center">
      <div className="flex flex-col items-center lg:px-6 xl:px-12">
        <h1>
          {heading}
        </h1>
        <p className="mb-2 lg:mb-3  text-light dark:text-darkmode-light font-medium md:text-xl">
          {subHeading}
        </p>
        <Link
          href={link.url}
          target="_blank"
          className=" rounded-md bg-theme-dark dark:bg-theme-light text-white dark:text-black inline-block hover:no-underline
                     border border-transparent text-xl font-medium px-4 py-1.5 md:px-8 md:py-4 lg:px-12 lg:py-4 md:font-semibold  cursor-pointer"
          aria-label={link.text}
        >
          {link.text}
        </Link>
      </div>
      <Image
        alt={image.alternativeText ?? "Hero image"}
        className="overflow-hidden rounded-md"
        src={image.url}
        height={1080 / 2.5}
        width={1920 / 2}
        priority={true}
        sizes="(max-width: 640px) 95vw, (min-width: 768px) 33vw"
      />
    </section>
  );
}

"use client"
import { StrapiImage } from "../strapi-image";

import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

interface Image {
    id: number;
    documentId: string;
    url: string;
    alternativeText: string | null;
    width?: number;
    height?: number;
}

interface BrandProps {
    id: number;
    name: string;
    image: Image;
}

interface BrandSectionProps {
    id: number;
    __component: string;
    title: string;
    brand: BrandProps[];
}

export function BrendsSection({ data: { title, brand } }:
    { readonly data: BrandSectionProps }) {
    // console.dir( brand);

    const [emblaRef] = useEmblaCarousel(
        { align: 'start', dragFree: true, loop: true },
        [Autoplay()])

    return (
        <section className=" bg-theme-light dark:bg-darkmode-theme-light">
            <h2 className="text-center">{title}</h2>

            <div className="container overflow-hidden " ref={emblaRef}>
                <div className="flex items-center space-x-4 py-4">

                    {brand.map((brand) => (
                        <div key={brand.id}
                            className="flex-none w-full md:w-1/3 lg:w-1/4  md:h-1/4  items-center justify-center"
                        >
                            <StrapiImage
                                src={brand.image.url}
                                alt={brand.name}
                                height={brand.image.height ?? 0}
                                width={brand.image.width ?? 0}
                                className="dark:filter dark:brightness-0 dark:invert"
                            />
                        </div>
                    ))}

                </div>
            </div>

        </section>
    );
}

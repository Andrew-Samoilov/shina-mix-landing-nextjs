"use client"
import { StrapiImage } from "../strapi-image";
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import './embla.css'

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
        <section className="embla bg-theme-light dark:bg-darkmode-theme-light">
            <h2 className="text-center">{title}</h2>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {brand.map(({ id, image: { url, height = 0, width = 0 }, name }) => (
                        <StrapiImage
                            key={id}
                            src={url}
                            alt={name}
                            height={height}
                            width={width}
                            className="embla__slide dark:invert filter grayscale hover:grayscale-0"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

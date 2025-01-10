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

interface SertProps {
    id: number;
    text: string;
    image: Image;
}

interface SertSectionProps {
    id: number;
    __component: string;
    title: string;
    sert: SertProps[];
}

export function SertsSection({
    data: { title, sert } }:
    { readonly data: SertSectionProps }) {

    const [emblaRef] = useEmblaCarousel(
        { align: 'start', dragFree: true, loop: true },
        [Autoplay()])

    return (
        <section className="embla ">
            <h2 className="text-center">{title}</h2>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container items-center">
                    {sert.map((sert) => (
                        <div key={sert.id} className="embla__slide ">
                            <StrapiImage
                                src={sert.image.url}
                                alt={sert.image.alternativeText ?? sert.text}
                                height={sert.image.height ?? 0}
                                width={sert.image.width ?? 0}
                                // sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33.33vw, 100vw"
                                className="rounded-md"
                            />
                            <div className="text-xl text-center">{sert.text}</div>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
}

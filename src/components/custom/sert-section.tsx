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
        <section className="embla">
            <h2 className="text-center">{title}</h2>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {sert.map(({ id, image: { url, alternativeText, height = 0, width = 0 }, text }) => {
                        console.log("Strapi image URL:", url); // Лог у консолі сервера
                        return (
                            <StrapiImage
                                key={id}
                                src={url}
                                alt={alternativeText ?? text}
                                height={height}
                                width={width}
                                priority={false}
                                sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33.33vw, (min-width: 768px) 50vw, 100vw"
                                className="embla__slide "
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

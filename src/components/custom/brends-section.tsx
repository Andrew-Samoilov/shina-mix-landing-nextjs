"use client"
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import './embla.css'
import { IImage } from '@/app/types'
import { getStrapiURL } from '@/utils'

interface BrandProps {
    id: number;
    name: string;
    image: IImage;
}

interface BrandSectionProps {
    id: number;
    __component: string;
    title: string;
    brand: BrandProps[];
}

export function BrendsSection({ data: { title, brand } }:
    { readonly data: BrandSectionProps }) {

    const [emblaRef] = useEmblaCarousel(
        { align: 'start', dragFree: true, loop: true },
        [Autoplay()])

    return (
        <section className="embla bg-theme-light dark:bg-darkmode-theme-light">
            <h2 className="text-center">{title}</h2>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {brand.map(({ id, image: { url, height = 0, width = 0 }, name }) => (
                        <Image
                            key={id}
                            src={getStrapiURL() + url}
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

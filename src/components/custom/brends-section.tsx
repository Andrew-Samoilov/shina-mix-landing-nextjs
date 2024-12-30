"use client"
import { StrapiImage } from "../strapi-image";

import React from 'react'

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
            <h2>{title}</h2>
            {/* <div className=" lg:container grid gap-8 md:grid-cols-3 items-center">

                {brand.map((brand) => (
                    <div key={brand.id}>
                        <StrapiImage
                            src={brand.image.url}
                            alt={brand.name}
                            height={brand.image.height ?? 0}
                            width={brand.image.width ?? 0}
                            className="w-full h-full object-cover 
                                dark:filter dark:brightness-0 dark:invert"
                        />
                    </div>
                ))}

            </div> */}

            <div className="container overflow-hidden " ref={emblaRef}>
                <div className="flex items-center space-x-4 py-4">

                    {brand.map((brand) => (
                        <div key={brand.id}
                            className="flex-none w-full md:w-1/3 lg:w-1/4  md:h-1/4 flex items-center justify-center"
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



{/* <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    <div className="flex-none w-64 h-40 bg-blue-500 text-white rounded-lg flex items-center justify-center">
                        Слайд 1
                    </div>
                    <div className="flex-none w-64 h-40 bg-red-500 text-white rounded-lg flex items-center justify-center">
                        Слайд 2
                    </div>
                    <div className="flex-none w-64 h-40 bg-green-500 text-white rounded-lg flex items-center justify-center">
                        Слайд 3
                    </div>
                    <div className="flex-none w-64 h-40 bg-slate-600 text-white rounded-lg flex items-center justify-center">
                        Слайд 4
                    </div>
                    <div className="flex-none w-64 h-40 bg-yellow-500 text-white rounded-lg flex items-center justify-center">
                        Слайд 5
                    </div>
                    <div className="flex-none w-64 h-40 bg-blue400 text-white rounded-lg flex items-center justify-center">
                        Слайд 6
                    </div>
                    <div className="flex-none w-64 h-40 bg-red-400 text-white rounded-lg flex items-center justify-center">
                        Слайд 7
                    </div>
                    <div className="flex-none w-64 h-40 bg-green-400 text-white rounded-lg flex items-center justify-center">
                        Слайд 8
                    </div>
                    <div className="flex-none w-64 h-40 bg-slate-400 text-white rounded-lg flex items-center justify-center">
                        Слайд 9
                    </div>
                    <div className="flex-none w-64 h-40 bg-yellow-500 text-white rounded-lg flex items-center justify-center">
                        Слайд 10
                    </div>
                </div>
            </div> */}
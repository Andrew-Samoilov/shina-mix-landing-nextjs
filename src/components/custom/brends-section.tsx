import { StrapiImage } from "../strapi-image";

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
    console.dir( brand);

    return (
        <section className="container">
            <div className="grid gap-8 md:grid-cols-3">
                {brand.map((brand) => (
                    <div key={brand.id} className="flex flex-col items-center text-center md:p-4">
                        <StrapiImage
                            src={brand.image.url}
                            alt={brand.image.alternativeText ?? "no alternative text"}
                            height={brand.image.height ?? 0}
                            width={brand.image.width ?? 0}
                            sizes="33vw"
                            className="rounded-md"
                        />
                        <div className="text-xl">{brand.name}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

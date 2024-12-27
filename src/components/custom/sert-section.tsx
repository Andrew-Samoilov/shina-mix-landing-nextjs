import { StrapiImage } from "../strapi-image";

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

    return (
        <section className="container">
            <h2>{title}</h2>
            <div className="grid gap-8 md:grid-cols-3 items-center">
                {sert.map((sert) => (
                    <div key={sert.id} className="flex flex-col items-center text-center">
                        <StrapiImage
                            src={sert.image.url}
                            alt={sert.image.alternativeText ?? "no alternative text"}
                            height={sert.image.height??0}
                            width={sert.image.width ?? 0}
                            sizes="33vw"
                            className="rounded-md"
                        />
                        <div className="text-xl">{sert.text}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

// import { StrapiImage } from "../strapi-image";

// interface Image {
//   id: number;
//   documentId: string;
//   url: string;
//   alternativeText: string | null;
// }

interface SertProps {
    id: number;
    text: string;
    // image: Image;
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
        <section className="flex-1 container px-4 py-6 mx-auto md:px-6 lg:py-24">
            <h2>{title}</h2>
            <div className="grid gap-8 md:grid-cols-3">
                {sert.map((sert) => (
                    <div key={sert.id} className="flex flex-col items-center text-center">
                        <div className="text-xl font-extrabold">{sert.text}</div>
                        {/* <p>{sert.image.url}</p> */}
                        {/* <StrapiImage
                            src={sert.image.url}
                            alt={sert.image.alternativeText ?? "no alternative text"}
                            height={100}
                            width={100}
                       /> */}
                    </div>
                ))}
            </div>
        </section>
    );
}

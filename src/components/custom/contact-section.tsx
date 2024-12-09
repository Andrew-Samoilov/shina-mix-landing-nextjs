import Link from "next/link";
import { GoogleMap } from "./google-map";

interface Link {
    id: number;
    url: string;
    text: string;
}

interface ContactProps {
    id: number;
    name: string;
    imageUrl?: string;
    link: Link;
}

interface ContactSectionProps {
    id: number;
    __component: string;
    title: string;
    description: string;
    destination: string;
    destinationTitle: string;
    contact: ContactProps[];
}

export function ContactSection({
    data:
    { title, destination, description, destinationTitle, contact } }:
    { readonly data: ContactSectionProps }) {
    // console.dir(contact);

    return (
        <section>
            <div className="flex gap-8 container px-4 py-6 mx-auto md:px-6 lg:py-24">
                <div >
                    <h2 className="text-3xl font-bold md:text-5xl lg:text-6xl">{title}</h2>
                    <p className="text-xl">{description}</p>
                </div>
                <div className="flex flex-col list-disc gap-8 ">
                    {contact.map((contact) => (
                        <div key={contact.id}>
                            <h3 className="text-lg">{contact.name}</h3>
                            <Link
                                href={contact.link.url}
                                target="_blank"
                                className="text-teal-500"
                            >
                                {contact.link.text}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <GoogleMap
                src={destination}
                title={destinationTitle}
                className="w-full h-[60vh]"
            />
        </section>
    )
}

import Link from "next/link";
import { GoogleMap } from "./google-map";
import { StrapiImage } from "../strapi-image";
import { ContactForm } from "./contact-form";

interface Link {
    id: number;
    url: string;
    text: string;
}

interface ContactProps {
    id: number;
    name?: string;
    icon?: {
        url: string;
    };
    link: Link;
    destination?: string;
    destinationTitle?: string;
}

interface ContactSectionProps {
    id: number;
    __component: string;
    title: string;
    description: string;
    contact: ContactProps[];
}

export function ContactSection({
    data:
    { title, description, contact } }:
    { readonly data: ContactSectionProps }) {
    // console.log(`!!! contact`, id);

    return (
        <section className="flex flex-col md:container" id='contacts'>
            <h2>{title}</h2>
            <p className="subHeader text-center">{description}</p>

            <div className='grid lg:grid-cols-2 gap-4 md:gap-6'>
                {contact.map((contact) => (
                    <div key={contact.id} className="p-4 md:p-6 lg:p-10 bg-theme-light dark:bg-darkmode-theme-light rounded-md">
                        <div className="flex items-start ">
                            {contact.icon ? (
                                <StrapiImage
                                    alt={contact.link.text}
                                    src={contact.icon.url}
                                    height={24}
                                    width={24}
                                    className="mr-2 dark:invert"
                                />
                            ) : ''}
                            <div>
                                <h3 className="text-lg">{contact.name}</h3>
                                <Link
                                    href={contact.link.url}
                                    target="_blank"
                                    aria-label={`Open ${contact.link.text} in a new tab`}>
                                    {contact.link.text}
                                </Link>
                            </div>
                        </div>
                        {contact.destination ? (
                            <GoogleMap
                                src={contact.destination}
                                title={contact.destinationTitle}
                                className="w-full h-[40vh]"
                            />
                        ) : ''}

                    </div>
                ))}

            </div>
            <h2 className="mt-8">Лишились питання?</h2>
            <p className="subHeader text-center">Пишіть, ми завжди готові допомогти!</p>
            <ContactForm />
        </section>
    )
}

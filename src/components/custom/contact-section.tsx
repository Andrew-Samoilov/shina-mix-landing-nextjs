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

    return (
        <section className="flex flex-col md:container" id='contacts'>
            <h2 className="text-center">{title}</h2>
            <p className="subHeader text-center">{description}</p>

            <div className='flex flex-col gap-6 lg:container'>
                {contact.map(({ id, icon, link: { text, url }, name, destination, destinationTitle }) => (
                    <div key={id}
                        className="p-4 md:p-6 bg-theme-light dark:bg-darkmode-theme-light rounded-md ">
                        {/* className={`p-4 md:p-6 bg-theme-light dark:bg-darkmode-theme-light rounded-md ${destination ? '' : 'lg:col-span-2'}`}> */}
                        <div className="flex items-start ">
                            {icon ? (
                                <StrapiImage
                                    alt={text}
                                    src={icon.url}
                                    height={24}
                                    width={24}
                                    className="mr-2 dark:invert my-auto"
                                />
                            ) : null}
                            <div>
                                <h3 className="text-lg">{name}</h3>
                                <Link
                                    href={url}
                                    target="_blank"
                                    aria-label={`Open ${text} in a new tab`}>
                                    {text}
                                </Link>
                            </div>
                        </div>
                        {destination ? (
                            <GoogleMap
                                src={destination}
                                title={destinationTitle}
                                className="w-full h-[40vh] rounded-md"
                            />
                        ) : null}
                    </div>
                ))}
            </div>
            <h2 className="mt-8 text-center">Лишились питання?</h2>
            <p className="subHeader text-center">Пишіть, ми завжди готові допомогти!</p>
            <ContactForm />
        </section>
    )
}

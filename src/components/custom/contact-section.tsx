import Link from "next/link";
import { GoogleMap } from "./google-map";
import { StrapiImage } from "../strapi-image";
import { ContactForm } from "./contact-form";

interface Link {
    id: number;
    url: string;
    text: string;
}
interface Address {
    id: number;
    destination: string;
    destinationTitle: string;
}

interface ContactProps {
    id: number;
    name?: string;
    icon?: {
        url: string;
    };
    link: Link[];
}

interface ContactSectionProps {
    id: number;
    __component: string;
    title: string;
    description: string;
    contact: ContactProps[];
    address: Address[];
}

export function ContactSection({
    data:
    { title, description, contact, address } }:
    { readonly data: ContactSectionProps }) {
    // console.dir(address);

    return (
        <section className="flex flex-col md:container" id='contacts'>
            <h2 className="text-center">{title}</h2>
            <p className="subHeader text-center">{description}</p>

            <div className='grid lg:grid-cols-2 gap-6 '>
                {contact.map(({ id, icon, link, name }) => (
                    <div key={id} className="flex flex-col gap-6 p-4 md:p-6  bg-theme-light dark:bg-darkmode-theme-light rounded-md ">
                        <div className="flex gap-4 md:gap-6 justify-center">
                            {icon ? (
                                <StrapiImage
                                    alt={name ?? "Contact Icon"}
                                    src={icon.url}
                                    height={24}
                                    width={24}
                                    className=" dark:invert my-auto"
                                />
                            ) : null}
                            <h3>{name}</h3>
                        </div>

                        <div className="flex gap-4 md:gap-6 flex-col items-center ">
                            {link.map(({ id, text, url }) => (
                                <Link key={id} href={url} target="_blank"
                                    aria-label={`Open ${text} in a new tab`}
                                    className="text-balance text-center"
                                >
                                    {text}
                                </Link>
                            ))}
                        </div>


                        {/* {destination ? (
                            <GoogleMap 
                                src={destination}
                                title={destinationTitle}
                                className="w-full h-[40vh] rounded-md"
                            />
                        ) : null} */}
                    </div>
                ))}
            </div>

            <div className="grid  gap-6  bg-theme-light p-4 md:p-6 rounded-md">
                <h3 className="text-center">Адреса</h3>
                {address.map(({ id, destination, destinationTitle }) => (
                    <div key={id} className=" rounded-md">
                        <h4 className="text-balance ">{destinationTitle}</h4>
                    <GoogleMap
                        src={destination}
                        title={destinationTitle}
                        className="w-full h-[40vh] rounded-md"
                        />
                    </div>
                ))}

            </div>

            <h2 className="mt-8 text-center">Лишились питання?</h2>
            <p className="subHeader text-center">Пишіть, ми завжди готові допомогти!</p>
            <ContactForm />
        </section>
    )
}

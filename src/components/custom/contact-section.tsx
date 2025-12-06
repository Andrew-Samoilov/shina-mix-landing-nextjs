import Link from "next/link";
import Image from "next/image";
import { GoogleMap } from "./google-map";
import { ContactForm } from "./contact-form";
import { ContactSectionProps } from "@/app/types";

export function ContactSection({
    data:
    { title, description, contact, address } }:
    { readonly data: ContactSectionProps }) {

    return (
        <section className="flex flex-col md:container" id='contacts'>
            <h2 className="text-center">{title}</h2>
            <p className="subHeader text-center">{description}</p>

            <div className='grid lg:grid-cols-2 gap-6 '>
                {contact.map(({ id, icon, link, name }) => (
                    <div key={id} className="flex flex-col gap-6 p-4 md:p-6  bg-theme-light dark:bg-darkmode-theme-light rounded-md ">
                        <div className="flex gap-4 md:gap-6 justify-center">
                            {icon ? (
                                <Image
                                    alt={name ?? "Contact Icon"}
                                    src={ icon.url}
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
                    </div>
                ))}
            </div>

            <div className="grid  gap-6  bg-theme-light dark:bg-darkmode-theme-light p-4 md:p-6 rounded-md">
                <h3 className="text-center">Адреса</h3>
                <div className="grid gap-6 xl:grid-cols-2">
                    {address.map(({ id, destination, destinationTitle }) => (
                        <div key={id} className="  rounded-md">
                            <h4 className="text-center ">{destinationTitle}</h4>
                            <GoogleMap
                                src={destination}
                                title={destinationTitle}
                                className="w-full h-[40vh] rounded-md"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <h2 className="mt-8 text-center">Лишились питання?</h2>
            <p className="subHeader text-center">Пишіть, ми завжди готові допомогти!</p>
            <ContactForm />
        </section>
    )
}

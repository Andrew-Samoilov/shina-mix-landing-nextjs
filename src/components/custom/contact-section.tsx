import Link from "next/link";
import { GoogleMap } from "./google-map";
import { StrapiImage } from "../strapi-image";
import Form from "next/form";

interface Link {
    id: number;
    url: string;
    text: string;
}

interface ContactProps {
    id: number;
    name: string;
    icon?: string;
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
                <div className="flex flex-col list-disc gap-4 ">
                    {contact.map((contact) => (
                        <div key={contact.id} className="flex items-start">
                            {contact.icon && (
                                <StrapiImage
                                    alt={contact.link.text}
                                    src={contact.icon.url}
                                    height={24}
                                    width={24}
                                    className="mr-2"
                                />
                            )}

                            <div>
                                <h3 className="text-lg">{contact.name}</h3>
                                <Link
                                    href={contact.link.url}
                                    target="_blank"
                                    className="text-teal-500"
                                >
                                    {contact.link.text}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <GoogleMap
                src={destination}
                title={destinationTitle}
                className="w-full h-[60vh]"
            />
            <Form action='submit'
                className='bg-lime-100 flex flex-col container p-4  mx-auto md:p-6 '>
                <h2 className="text-3xl font-bold md:text-5xl lg:text-6xl">
                    Лишились питання?
                </h2>
                <p>Не соромтесь, пишіть, ми тут, щоб допомогти вам із будь-якими запитами.</p>

                <label htmlFor="name">Ім&apos;я</label>
                <input name='name' type='name' className='border-amber-700 border-2' />

                <label htmlFor="email">Email</label>
                <input name='email' type='email' className='border-amber-700 border-2' />

                <label htmlFor="text">{description}</label>
                <textarea name='text' rows={4} cols={40} className='border-amber-300 border-2' />

                <div>
                    <input type="checkbox" name="ok" className="mr-2" />
                    <label htmlFor="ok">Я погоджуюсь з умовами використання</label>
                </div>

                <button type='submit' className='m-2 p-2 border-2 border-sky-700'>Send</button>
            </Form>
        </section>
    )
}

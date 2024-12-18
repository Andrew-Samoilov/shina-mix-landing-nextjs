import Link from "next/link";
import Form from "next/form";
import { GoogleMap } from "./google-map";
import { StrapiImage } from "../strapi-image";


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
    { id, title, description, contact } }:
    { readonly data: ContactSectionProps }) {
    console.log(`!!! contact`, id);

    return (
        <section className="flex flex-col">
            <h2>{title}</h2>
            <p className="subHeader">{description}</p>

            <div className="flex flex-col gap-4">
                {contact.map((contact) => (
                    <div key={contact.id} className="flex flex-col">
                        <div className="flex items-start ">
                            {contact.icon ? (
                                <StrapiImage
                                    alt={contact.link.text}
                                    src={contact.icon.url}
                                    height={24}
                                    width={24}
                                    className="mr-2"
                                />
                            ) : ''}
                            <div>
                                <h3 className="text-lg">{contact.name}</h3>
                                <Link href={contact.link.url} target="_blank">
                                    {contact.link.text}
                                </Link>
                            </div>
                        </div>
                        {contact.destination ? (
                            <GoogleMap
                                src={contact.destination}
                                title={contact.destinationTitle}
                                className="w-[80vw] h-[40vh]"
                            />
                        ) : ''}

                    </div>
                ))}

                <Form action='submit'
                    className=' flex flex-col p-4
                    rounded-md bg-gradient-to-r from-[#F4F4F4] to-[#F4F4F43D] dark:from-darkmode-theme-light dark:to-darkmode-body
                    '>
                    <h2>
                        Лишились питання?
                    </h2>
                    <p className="subHeader">Не соромтесь, пишіть, ми тут, щоб допомогти вам із будь-якими запитами.</p>

                    <label htmlFor="name">Ім&apos;я</label>
                    <input
                        name='name'
                        type='name'
                        id="name"
                        autoComplete='off'
                        className='border-slate-500 border-2' />

                    <label htmlFor="email">Email</label>
                    <input
                        name='email'
                        type='email'
                        id="email"
                        autoComplete='off'
                        className='border-slate-500 border-2' />

                    <label htmlFor="text">{description}</label>
                    <textarea name='text' id='text' rows={4} cols={40} className='border-slate-500 border-2' />

                    <div>
                        <input type="checkbox" name="ok" id="ok" className="mr-2" />
                        <label htmlFor="ok">Я погоджуюсь з умовами використання</label>
                    </div>

                    <button type='submit' className='m-2 p-2 border-2 border-black'>Send</button>
                </Form>
            </div>
        </section>
    )
}

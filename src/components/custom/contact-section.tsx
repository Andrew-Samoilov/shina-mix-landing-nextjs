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
    // console.log(`!!! contact`, id);

    return (
        <section className="flex flex-col container">
            <h2>{title}</h2>
            <p className="subHeader">{description}</p>

            <div className="flex flex-col gap-8">
                {contact.map((contact) => (
                    <div key={contact.id} className="">
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
                                className="w-full h-[33vh] "
                            />
                        ) : ''}

                    </div>
                ))}
                <h2 className="mt-8">Лишились питання?</h2>
                <Form action='submit'
                    className='flex flex-col items-start min-w-[55vw] xl:min-w-[40vw] mx-auto
                border border-border dark:border-darkmode-border rounded-md p-10'>
                    <p className="subHeader mb-2">Пишіть, ми завжди готові допомогти!</p>
                    <label htmlFor="name" className='form-label'>Ім&apos;я</label>
                    <input
                        name='name'
                        type='name'
                        id="name"
                        autoComplete='off'
                        className='mb-6 form-input' />
                    <label
                        htmlFor="email"
                        className='form-label'>Email <span className='text-red-500'>*</span>
                    </label>
                    <input
                        name='email'
                        type='email'
                        id="email"
                        autoComplete='off'
                        className='mb-6 form-input' />
                    <label htmlFor="text" className='form-label'>Повідомлення</label>
                    <textarea
                        name='text'
                        id='text'
                        rows={4}
                        className='mb-6 form-input' />
                    <div className="mb-6 ">
                        <input
                            type='checkbox'
                            defaultChecked
                            name="ok"
                            id="ok"
                            className="mr-2  rounded
                            " />
                        <label
                            htmlFor="ok"
                            className="font-secondary text-xl max-md:text-base font-normal text-dark dark:text-darkmode-light">Я погоджуюсь з умовами використання</label>
                    </div>

                    <button
                        type='submit'
                        className='ml-auto btn btn-primary md:btn-lg'>
                        Надіслати
                    </button>
                </Form>
            </div>
        </section>
    )
}

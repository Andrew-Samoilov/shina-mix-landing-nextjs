import { getStrapiURL } from '@/lib/utils';
import Form from 'next/form'
import SubmitButton from './submit-button';

interface PriceSectionProps {
    id: number;
    __component: string;
    title: string;
    description: string;
}

async function handleSubmit(formData: FormData) {
    "use server"; 

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const baseUrl = getStrapiURL();
    const url = new URL("/api/prices", baseUrl);

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            data: { name, eMail: email, message },
        }),
    });

    if (!response.ok) {
        throw new Error("Failed to submit data");
    }

}

export function PriceSection({ data: { title, description } }:
    { readonly data: PriceSectionProps }) {

    return (
        <section className='md:container flex flex-col mx-auto' id='price'>
            <h2>{title}</h2>
            <Form action={handleSubmit}
                className='flex flex-col items-start min-w-[55vw] xl:min-w-[40vw] mx-auto
                border border-border dark:border-darkmode-border rounded-md p-10'>
                <label htmlFor="email" className='form-label'>Email <span className='text-red-500'>*</span></label>
                <input
                    name='email'
                    type='email'
                    id='email'
                    required={true}
                    autoComplete='off'
                    className='mb-6 form-input' />
                <label htmlFor="name" className='form-label'>Ім&apos;я</label>
                <input
                    name='name'
                    type='name'
                    id='name'
                    autoComplete='off'
                    className='mb-6 form-input' />
                <label htmlFor="message" className='form-label'>{description}</label>
                <textarea
                    name='message'
                    id='message'
                    rows={4}
                    autoComplete='off'
                    className='mb-6 form-input' />
                <SubmitButton
                    className='ml-auto btn btn-sm md:btn-lg btn-primary font-medium'>
                        Отримати прайс
                </SubmitButton>
            </Form>
        </section>
    )
}

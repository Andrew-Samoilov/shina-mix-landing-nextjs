'use client'
import { useState } from "react";
import Form from 'next/form'
import SubmitButton from './submit-button';
import { priceHandleSubmit } from '@/utils/utils-server';

interface PriceSectionProps {
    id: number;
    __component: string;
    title: string;
    description: string;
}


export function PriceSection({ data: { title, description } }:
    { readonly data: PriceSectionProps }) {
       
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);

    async function handleClientSubmit(formData: FormData) {
        setError(null); // Скидаємо попередню помилку
        setSuccess(false);

        const result = await priceHandleSubmit(formData);

        if (!result.success) {
            setError(result.message);
        } else {
            setSuccess(true);
        }
    }

    return (
        <section className='md:container flex flex-col mx-auto' id='price'>
            <h2 className='text-center'>{title}</h2>
            <Form
                aria-label="Форма підписки на розсилку прайсів"
                id='price-form'
                action={handleClientSubmit}
                className='flex flex-col items-start min-w-[55vw] xl:min-w-[40vw] w-full lg:w-auto mx-auto
                border border-border dark:border-darkmode-border rounded-md p-6 md:p-10 '>
                <div className='flex w-full flex-col md:flex-row gap-6 pb-6'>
                    <div className='flex-1'>
                        <label
                            htmlFor="email"
                            className='form-label'>Email<span className='text-red-500'>*</span>
                        </label>
                        <input
                            name='email'
                            type='email'
                            id='email'
                            required={true}
                            autoComplete='email'
                            className=' form-input' />
                    </div>
                    <div className='flex-1'>
                        <label htmlFor="name" className='form-label'>Ім&apos;я</label>
                        <input
                            name='name'
                            autoComplete='name'
                            type='text'
                            id='name'
                            className=' form-input' />

                    </div>
                </div>
                <label htmlFor="message" className='form-label'>{description}</label>
                <textarea
                    name='message'
                    id='message'
                    rows={4}
                    className='mb-6 form-input' />
                <SubmitButton
                    pendingText="Надсилання ..."
                    className='btn btn-sm md:btn-lg btn-primary font-medium ml-auto'>
                    Отримати прайс
                </SubmitButton>
                {error && <p className="text-red-500 mt-2">{error}</p>}
                {success && <p className="text-green-500 mt-2">Форма успішно відправлена!</p>}
            </Form>
        </section>
    )
}

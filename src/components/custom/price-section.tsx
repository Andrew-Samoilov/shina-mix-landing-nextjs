'use client'
import Form from 'next/form'
import SubmitButton from './submit-button';
import { handleClientSubmit, handleRecaptchaSubmit, priceHandleSubmit } from '@/utils';

interface PriceSectionProps {
    id: number;
    __component: string;
    title: string;
    description: string;
}

export function PriceSection({ data: { title, description } }: { readonly data: PriceSectionProps }) {

    return (
        <section className='md:container flex flex-col mx-auto' id='price'>
            <h2 className='text-center'>{title}</h2>
            <Form
                aria-label="Форма підписки на розсилку прайсів"
                id='price-form'
                action={(formData) => handleClientSubmit('price-form', formData, priceHandleSubmit)}
                className='flex flex-col items-start min-w-[55vw] xl:min-w-[40vw] w-full lg:w-auto mx-auto
                border border-border dark:border-darkmode-border rounded-md p-6 md:p-10 '>
                <div className='flex w-full flex-col md:flex-row gap-6 pb-6'>
                    <div className='flex-1'>
                        <label htmlFor="email" className='form-label'>Email<span className='text-red-500'>*</span></label>
                        <input name='email' type='email' id='email' required autoComplete='email' className='form-input' />
                    </div>
                    <div className='flex-1'>
                        <label htmlFor="name" className='form-label'>Ім&apos;я</label>
                        <input name='name' autoComplete='name' type='text' id='name' className='form-input' />
                    </div>
                </div>
                <label htmlFor="message" className='form-label'>{description}</label>
                <textarea name='message' id='message' rows={4} className='mb-6 form-input' />

                <SubmitButton
                    pendingText="Надсилання ..."
                    className='btn btn-sm md:btn-lg btn-primary font-medium ml-auto'
                    onBeforeSubmit={(recaptchaToken) => handleRecaptchaSubmit("price-form", recaptchaToken, priceHandleSubmit)}
                >
                    Отримати прайс
                </SubmitButton>
            </Form>
        </section>
    );
}

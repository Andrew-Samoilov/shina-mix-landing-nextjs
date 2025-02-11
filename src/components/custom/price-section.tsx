'use client'
import Form from 'next/form'
import SubmitButton from './submit-button';
import { priceHandleSubmit } from '@/utils/utils-server';
import { handleClientSubmit, handleRecaptchaSubmit } from '@/utils';

interface PriceSectionProps {
    id: number;
    __component: string;
    title: string;
    description: string;
}

export function PriceSection({ data: { title, description } }: { readonly data: PriceSectionProps }) {

    // async function handleClientSubmit(formData: FormData) {
    //     const result = await priceHandleSubmit(formData);

    //     if (!result.success) {
    //         toast.error(result.message);
    //     } else {
    //         toast.success("Запит на прайс надіслано!");
    //     }
    // }

    // async function handleRecaptchaSubmit(recaptchaToken: string) {
    //     const form = document.getElementById('price-form') as HTMLFormElement;
    //     if (!form) return;

    //     const formData = new FormData(form);
    //     formData.append("recaptcha", recaptchaToken);

    //     await handleClientSubmit(formData);
    //     form.reset();
    // };

    return (
        <section className='md:container flex flex-col mx-auto' id='price'>
            <h2 className='text-center'>{title}</h2>
            <Form
                aria-label="Форма підписки на розсилку прайсів"
                id='price-form'
                action={(formData) => handleClientSubmit(formData, priceHandleSubmit)}
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

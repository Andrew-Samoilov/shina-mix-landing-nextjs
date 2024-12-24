import Form from 'next/form'

interface PriceSectionProps {
    id: number;
    __component: string;
    title: string;
    description: string;
}

export function PriceSection({ data: { title, description } }:
    { readonly data: PriceSectionProps }) {

    return (
        <section className='container flex flex-col mx-auto'>
            <h2>{title}</h2>
            <Form action='submit'
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
                <label htmlFor="text" className='form-label'>{description}</label>
                <textarea
                    name='text'
                    id='text'
                    rows={4}
                    autoComplete='off'
                    className='mb-6 form-input' />
                <button
                    type='submit'
                    className='ml-auto
                    btn btn-sm md:btn-lg btn-primary font-medium'>
                    Отримати прайс
                </button>
            </Form>
        </section>
    )
}

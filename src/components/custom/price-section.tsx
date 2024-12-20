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
                className='rounded-md border border-slate-200
                flex flex-col p-4 items-start min-w-[50vw] xl:min-w-[40vw] mx-auto'>
                <label htmlFor="email">Email*</label>
                <input
                    name='email'
                    type='email'
                    id='email'
                    required={true}
                    autoComplete='off'
                    className='border rounded-md mb-2' />
                <label htmlFor="name">Ім&apos;я</label>
                <input
                    name='name'
                    type='name'
                    id='name'
                    autoComplete='off'
                    className='border rounded-md mb-2' />
                <label htmlFor="text">{description}</label>
                <textarea
                    name='text'
                    id='text'
                    rows={4}
                    autoComplete='off'
                    className='border rounded-md w-full mb-2' />
                <button
                    type='submit'
                    className='mt-2 ml-auto
                    btn btn-sm md:btn-lg btn-primary font-medium'>
                    Отримувати прайс
                </button>
            </Form>
        </section>
    )
}

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
        <section>
            <Form action='submit'
                className='bg-slate-100 flex flex-col p-4 items-start gap-2'>
                <h2>{title}</h2>

                <label htmlFor="email">Email*</label>
                <input
                    name='email'
                    type='email'
                    id='email'
                    required={true}
                    autoComplete='off'
                    className='border-slate-500 border-2' />

                <label htmlFor="name">Ім&apos;я</label>
                <input
                    name='name'
                    type='name'
                    id='name'
                    autoComplete='off'
                    className='border-slate-500 border-2' />

                <label htmlFor="text">{description}</label>
                <textarea
                    name='text'
                    id='text'
                    rows={4}
                    cols={40}
                    autoComplete='off'
                    className='border-slate-500 border-2' />
                <button type='submit' className='m-2 p-2 border-2 border-black'>Підписатися</button>
            </Form>
        </section>
    )
}

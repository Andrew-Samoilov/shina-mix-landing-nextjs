import Form from 'next/form'

interface PriceSectionProps {
    id: number;
    __component: string;
    title: string;
    description: string;
}

export function PriceSection({ data: { title, description } }: { readonly data: PriceSectionProps }) {
    // console.log(`data`, data.text, data.description);

    return (
        <section className="flex-1 container px-4 py-6 mx-auto md:px-6 lg:py-24">

            <Form action='submit'
                className='bg-teal-100 flex flex-col p-2 items-start gap-2'>
                <h2 className="text-3xl font-bold md:text-5xl lg:text-6xl">{title}</h2>

                <label htmlFor="email">Email*</label>
                <input
                    name='email'
                    type='email'
                    id='email'
                    required={true}
                    autoComplete='off'
                    className='border-amber-700 border-2' />
                
                <label htmlFor="name">Ім&apos;я</label>
                <input
                    name='name'
                    type='name'
                    id='name'
                    autoComplete='off'
                    className='border-amber-700 border-2' />
                
                <label htmlFor="text">{description}</label>
                <textarea
                    name='text'
                    id='text'
                    rows={4}
                    cols={40}
                    autoComplete='off'
                    className='border-amber-300 border-2' />
                <button type='submit' className='m-2 p-2 border-2 border-sky-700'>Підписатися</button>
            </Form>
        </section>
    )
}

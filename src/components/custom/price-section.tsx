interface PriceSectionProps {
    id: number;
    __component: string;
    title: string;
    description: string;
}

export function PriceSection({ data }: { readonly data: PriceSectionProps }) {
    // console.log(`data`, data.text, data.description);

    return (
        <section className="flex-1 container px-4 py-6 mx-auto md:px-6 lg:py-24">
            <h2 className="text-3xl font-bold md:text-5xl lg:text-6xl">Price Section</h2>
            <p className="text-xl">{data.title}</p>
            <p>{data.description}</p>
        </section>
    )
}

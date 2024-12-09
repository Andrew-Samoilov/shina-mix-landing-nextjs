interface BenefitProps {
    id: number;
    title: string;
}

interface BenefitSectionProps {
    id: number;
    __component: string;
    title: string;
    description: string;
    benefit: BenefitProps[];
}

export function BenefitSection({
    data: { title, description, benefit } }: { readonly data: BenefitSectionProps; }) {
    // const { benefit } = data;
    
    // console.dir(benefit);

    return (
        <section className="flex gap-8 container px-4 py-6 mx-auto md:px-6 lg:py-24">
            <div>
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-gray-500">{description}</p>
            </div>
            <ul className="flex flex-col list-disc">
                {benefit.map((benefit) => (
                    <li key={benefit.id}>
                        {benefit.title}
                    </li>
                ))}
            </ul>
        </section>
    )
}

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
    data: { id, title, description, benefit } }: { readonly data: BenefitSectionProps; }) {
    console.log(`!!! benefit`,id);

    return (
        <section className="container flex flex-col md:flex-row gap-8 2xl:justify-around ">
            <div>
                <h2 className="text-left">{title}</h2>
                <p className="subHeader">{description}</p>
            </div>
            <ul className="flex flex-col list-disc">
                {benefit.map((benefit) => (
                    <li key={benefit.id+id}>
                        {benefit.title}
                    </li>
                ))}
            </ul>
        </section>
    )
}

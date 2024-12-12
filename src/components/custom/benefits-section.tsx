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
    // const { benefit } = data;
    
    console.log(`!!! benefit`,id);
    // console.dir(benefit);

    return (
        <section className=" flex gap-8  ">
            <div>
                <h2>{title}</h2>
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

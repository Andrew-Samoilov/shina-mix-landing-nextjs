interface FeatureProps {
    id: number;
    number: string;
    header: string;
    subHeader: string;
}

interface FeatureSectionProps {
    id: number;
    __component: string;
    title: string;
    description: string;
    feature: FeatureProps[];
}

export function FeatureSection({
    data: { id, feature } }:
    { readonly data: FeatureSectionProps; }) {
    // console.log(`!!! feature`, id);

    return (
        <section className="bg-gray-200 dark:bg-gray-800" >
            <div className="grid gap-8 md:grid-cols-4 ">
                {feature.map((feature) => (
                    <div
                        key={feature.id}
                        className="flex flex-col items-center text-center"
                    >
                        <div className="text-8xl font-extrabold">{feature.number}</div>
                        <h2>{feature.header}</h2>
                        <p className="subHeader">{feature.subHeader}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

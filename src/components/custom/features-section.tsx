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
    data,
}: {
    readonly data: FeatureSectionProps;
}) {
    const { feature } = data;
    // console.dir(feature, { depth: null });
    return (
        <div className="">
            <div className="flex-1">
                <section className="container px-4 py-6 mx-auto md:px-6 lg:py-24">
                    <div className="grid gap-8 md:grid-cols-3">
                        {feature.map((feature) => (
                            <div
                                key={feature.id}
                                className="flex flex-col items-center text-center"
                            >
                                {feature.number}
                                <h2 className="mb-4 text-2xl font-bold">{feature.header}</h2>
                                <p className="text-gray-500">
                                    {feature.subHeader}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

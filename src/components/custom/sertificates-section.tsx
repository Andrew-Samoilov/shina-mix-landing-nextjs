interface SertificateProps {
    id: number;
    title: string;
    // image: {
    //     url: string;
    // };
}

interface SertificateSectionProps {
    id: number;
    __component: string;
    name: string;

    sertificate: SertificateProps[];
}

export function SertificateSection({
    data: {  name, sertificate } }:
    { readonly data: SertificateSectionProps }) {

    console.log(name);

    return (
        <section>
            <h2>{name}</h2>
            <div className="grid gap-8 md:grid-cols-3">
                {sertificate.map((sertificate) => (
                    <div key={sertificate.id} className="flex flex-col items-center text-center">
                        <div className="text-8xl font-extrabold">{sertificate.title}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
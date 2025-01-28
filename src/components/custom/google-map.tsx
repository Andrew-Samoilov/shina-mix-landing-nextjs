interface GoogleMapProps {
    src: string;
    className?: string;
    title?: string;
}

export function GoogleMap({ src, title, className, }: Readonly<GoogleMapProps>) {
    return (
        <iframe
            className={className}
            title={title}
            src={src}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        >
        </iframe>
    );
};

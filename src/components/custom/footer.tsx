import Link from "next/link";
import { Logo } from "@/components/custom/logo";

interface SocialLink {
    id: number;
    text: string;
    url: string;
}

interface FooterProps {
    data: {
        logoText: {
            id: number;
            text: string;
            url: string;
        };
        menu: string;
        socialLink: SocialLink[];
    };
}

export function Footer({ data }: Readonly<FooterProps>) {
    const { logoText, socialLink, menu } = data;
    return (
        <div className="dark bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
                <Logo text={logoText.text} />
                <p className="mt-4 md:mt-0 text-sm text-gray-300">{menu}</p>
                <div className="flex items-center space-x-4">
                    {socialLink.map((link) => {
                        return (
                            <Link
                                className="text-white hover:text-gray-300"
                                href={link.url}
                                key={link.id}
                            >
                                {link.url}
                                <span className="sr-only">Visit us at {link.text}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

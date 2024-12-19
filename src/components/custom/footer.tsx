import Link from "next/link";
import { Logo } from "@/components/custom/logo";
import pack from '../../../package.json';

const version = pack.version;

interface SocialLinks {
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
        socialLinks: SocialLinks[];
    };
}

export function Footer({ data }: Readonly<FooterProps>) {
    const { logoText, menu, socialLinks } = data;
    const currentYear = new Date().getFullYear();

    return (
        <footer className=" bg-gray-200 text-gray-600 py-8">

            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
                <Logo text={logoText.text} />
                <p className="mt-4 md:mt-0 text-sm">{menu}</p>
                <div className="flex items-center space-x-4">
                    {socialLinks.map((link) => {
                        return (
                            <Link
                                className=" hover:text-black"
                                target="_blank" rel="noopener noreferrer"
                                href={link.url}
                                key={link.id + link.text}
                            >
                                {link.text}
                                <span className="sr-only">Visit us at {link.text}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div className="container mx-auto flex items-center mt-2 px-4 md:px-6 border-t border-orange-950 justify-between" >
                <span>©&nbsp;{currentYear}. All&nbsp;rights&nbsp;reserved.</span>
                <span className="text-sm text-slate-400">{version}</span>
            </div>
        </footer>
    );
}

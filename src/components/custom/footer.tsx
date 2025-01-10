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
        socialLinks: SocialLinks[];
    };
}

export function Footer({ data }: Readonly<FooterProps>) {
    const { logoText, socialLinks } = data;

    return (
        <footer className="bg-theme-light dark:bg-darkmode-theme-light ">
            <div className="container mx-auto ">
                <nav className="flex flex-col md:flex-row items-center justify-between pb-12 pt-14">
                    <Logo text={logoText.text} />
                    <div className="flex items-center space-x-6">
                        {socialLinks.map((link) => {
                            return (
                                <Link
                                    className="py-2 px-4 rounded-md"
                                    target="_blank" rel="noopener noreferrer"
                                    href={link.url}
                                    key={link.id + link.text}
                                    aria-label={`Завітайте до нас у ${link.text}`}
                                >
                                    {link.text}
                                </Link>
                            );
                        })}
                    </div>
                </nav>

                <div className="flex  items-center py-6 border-t border-slate-300 justify-between" >
                    <Link
                        href="/terms"
                        aria-label='Ознайомитись з умовами користування сайтом'
                    >
                        Умови користування сайтом
                    </Link>
                    <div className="text-sm font-light">
                        <span>©&nbsp;{new Date().getFullYear()}. All&nbsp;rights&nbsp;reserved. </span>
                        <span>{version}</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

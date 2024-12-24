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
    const { logoText, socialLinks } = data;
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-theme-light dark:bg-darkmode-theme-light py-10 md:pt-20 md:pb-14">
            <div className="container mx-auto">
                <nav className="flex flex-col md:flex-row items-center justify-between">
                    <Logo text={logoText.text} />
                    <div className="flex items-center space-x-4">
                        {socialLinks.map((link) => {
                            return (
                                <Link
                                    className=" hover:text-black"
                                    target="_blank" rel="noopener noreferrer"
                                    href={link.url}
                                    key={link.id + link.text}
                                    aria-label={`Visit us at ${link.text}`}
                                >
                                    {link.text}
                                </Link>
                            );
                        })}
                    </div>
                </nav>

                <div className="flex items-center mt-2 border-t border-slate-300 justify-between" >
                    <span>©&nbsp;{currentYear}. All&nbsp;rights&nbsp;reserved.</span>
                    <span className="text-sm text-slate-400">{version}</span>
                </div>
            </div>
        </footer>
    );
}

import Link from "next/link";
import { Logo } from "@/components/custom/logo";

import packageJson from '../../../package.json' assert { type: 'json' };
const version = packageJson.version;

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
                    <span className="hidden md:block"><Logo text={logoText.text} /></span>
                    <div className="flex items-center space-x-6">
                        {socialLinks.map(({id, url, text}) => {
                            return (
                                <Link
                                    className="py-2 px-4 rounded-md"
                                    target="_blank" rel="noopener noreferrer"
                                    href={url}
                                    key={id + text}
                                    aria-label={`Завітайте до нас у ${text}`}
                                >
                                    {text}
                                </Link>
                            );
                        })}
                    </div>
                </nav>

                <div className="flex items-center py-6 border-t border-border dark:border-darkmode-border justify-between" >
                    <Link
                        href="/terms"
                        aria-label='Ознайомитись з умовами користування сайтом'
                    >
                        Умови<span className="hidden md:inline"> користування сайтом</span>
                    </Link>
                    <div>
                        ©&nbsp;{new Date().getFullYear()}<span className="hidden md:inline">. All rights reserved. {version}</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

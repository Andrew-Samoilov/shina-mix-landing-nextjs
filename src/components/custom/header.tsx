import { Logo } from "@/components/custom/logo";
import ThemeSwitcher from "./theme-switcher";
import Link from "next/link";

interface MenuItems {
    id: number;
    text: string;
    url: string;
}

interface HeaderProps {
    data: {
        logoText: {
            id: number;
            text: string;
            url: string;
        };
        menuItems: MenuItems[];
    }
}

export async function Header({ data }: Readonly<HeaderProps>) {
    const { logoText, menuItems } = data;

    return (
        <header
            className="z-30 sticky top-0 px-4 py-6 bg-body dark:bg-darkmode-body"
            id="header">
            <nav
                className="container flex gap-4 flex-col md:flex-row items-center justify-between">
                <Logo text={logoText.text} />
                <div className="flex gap-4 lg:gap-8 xl:gap-16 md:ml-auto">
                   
                    {menuItems.map((link) => {
                        return (
                            <Link
                                className=" hover:text-black"
                                rel="noopener noreferrer"
                                href={link.url}
                                key={link.id}
                                aria-label={link.text}
                            >
                                {link.text}
                            </Link>
                        );
                    })}
                    
                    <ThemeSwitcher />
                </div>

            </nav>
        </header>
    );
}

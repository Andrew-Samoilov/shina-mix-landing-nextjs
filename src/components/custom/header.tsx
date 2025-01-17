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
            id="header"
            className="z-30 sticky top-0  px-4 py-6 backdrop-blur bg-body/95 dark:bg-darkmode-body/95">
            <nav className="lg:container flex gap-6 flex-col md:flex-row items-center justify-between">
                <Logo text={logoText.text} />
                <div className="flex gap-6 lg:gap-12 xl:gap-18 md:ml-auto">
                    {menuItems.map(({ id, url, text }) => {
                        return (
                            <Link
                                href={url}
                                key={id}
                                aria-label={text}
                            >
                                {text}
                            </Link>
                        );
                    })}
                    <ThemeSwitcher />
                </div>
            </nav>
        </header>
    );
}

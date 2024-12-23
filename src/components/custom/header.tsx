import { Logo } from "@/components/custom/logo";
import ThemeSwitcher from "./theme-switcher";

interface HeaderProps {
    data: {
        logoText: {
            id: number;
            text: string;
            url: string;
        }
        Menu: string;
        ctaButton: {
            id: number;
            text: string;
            url: string;
        };
    }
}

export async function Header({ data }: Readonly<HeaderProps>) {
    const { logoText, Menu } = data;

    return (
        <header className="z-30 sticky top-0 px-4 py-6 bg-white dark:bg-gray-800">
            <div className="container flex items-center justify-between">
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <Logo text={logoText.text} />
            <p>{Menu}</p>
                <ThemeSwitcher />
            </div>
        </header>
    );
}

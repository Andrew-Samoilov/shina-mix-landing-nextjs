import { Logo } from "@/components/custom/logo";
import ThemeSwitcher from "./theme-switcher";
import Link from "next/link";

interface HeaderProps {
    data: {
        logoText: {
            id: number;
            text: string;
            url: string;
        }
    }
}

export async function Header({ data }: Readonly<HeaderProps>) {
    const { logoText } = data;

    return (
        <header
            className="z-30 sticky top-0 px-4 py-6 bg-body dark:bg-darkmode-body"
            id="header">
            <nav
                className="container flex gap-4  flex-col md:flex-row items-center justify-between">
                <Logo text={logoText.text} />
                {/* {Menu} */}
                <div
                    className="flex gap-4 lg:gap-8 xl:gap-16 md:ml-auto"
                >
                    <Link href='#price'
                        className=" hover:underline"
                    >Прайс</Link>
                    <Link
                        href='#contacts'
                        className=" hover:underline"
                    >Контакти</Link>
                    <ThemeSwitcher />
                </div>
            </nav>
        </header>
    );
}

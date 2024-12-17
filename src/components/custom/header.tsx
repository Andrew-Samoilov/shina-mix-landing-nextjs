import Link from "next/link";
import { Logo } from "@/components/custom/logo";

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
    const { logoText, Menu, ctaButton } = data;
    return (
        <header className="flex items-center justify-between px-4 py-3 bg-white shadow-md dark:bg-gray-800">
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <Logo text={logoText.text} />
            <p>{Menu}</p>
            <div className="flex items-center gap-4">
                <Link href={ctaButton.url}>{ctaButton.text}</Link>
            </div>
        </header>
    );
}

import Link from "next/link";

import React from 'react';

function MountainIcon(props: Readonly<React.SVGProps<SVGSVGElement>>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    );
}

interface LogoProps {
    text?: string;
}

export function Logo({
    text = "Logo Text",
}: Readonly<LogoProps>) {
    return (
        <Link
            href="/"
            className="flex items-center gap-2 group focus:outline-none  "
            aria-label={`Navigate to ${text}`}
        >
            <MountainIcon className="h-6 w-6 text-teal-600 dark:text-teal-400 group-hover:text-teal-700 group-dark-hover:text-teal-300" />
            <span className="text-lg font-semibold group-hover:text-teal-700 group-dark-hover:text-teal-300">
                {text}
            </span>
        </Link>
    );
}

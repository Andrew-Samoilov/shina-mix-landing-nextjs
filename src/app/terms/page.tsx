import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { getStrapiURL } from "@/utils";
import "../globals.css";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Умови використання – Шина Мікс',
    alternates: {
        canonical: 'https://shinamix.com/terms',
    },
};


export default async function Page() {
    const url = new URL("/api/term", getStrapiURL());
    const res = await fetch(url);
    const terms = await res.json();

    return (
        <section className="container">
            <h1 className='pb-6 text-center'>
                {terms.data.header}
            </h1>
            <ReactMarkdown>
                {terms.data.text}
            </ReactMarkdown>
            <Link href="/"
                className="btn md:btn-lg btn-primary mr-auto hover:no-underline"
            >
                Закрити
            </Link>
        </section>
    );
};

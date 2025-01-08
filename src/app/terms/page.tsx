import React from 'react';
import Link from 'next/link';

const Modal = () => {
    return (
        <section className='flex-grow '>
            <h1>Умови користування сайтом</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae distinctio optio cum alias eum voluptatibus repudiandae hic porro natus ipsum fuga, asperiores atque beatae est earum cupiditate harum quasi quam.</p>
            <Link
                href="/"
                className="block bg-blue-500 text-white text-center py-2 px-4 rounded-md hover:bg-blue-600 transition"
            >
                Закрити
            </Link>
        </section>
    );
};

export default Modal;

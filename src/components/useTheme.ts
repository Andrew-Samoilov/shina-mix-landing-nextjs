"use client";

import { useEffect, useState } from 'react';

export const useTheme = () => {
    const [theme, setTheme] = useState<'light' | 'dark' | null>(null); // Додаємо стан для клієнтського рендеру
    const [isClient, setIsClient] = useState(false); // Стан для перевірки, чи на клієнті

    useEffect(() => {
        setIsClient(true); // Після монтування на клієнті змінюємо стан
    }, []);

    // Тема на клієнті
    useEffect(() => {
        if (!isClient) return; // Перевіряємо, чи це клієнт

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme as 'light' | 'dark');
        } else {
            const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
            setTheme(prefersDarkScheme.matches ? 'dark' : 'light');
        }
    }, [isClient]);

    // Змінюємо тему
    useEffect(() => {
        if (!isClient || theme === null) return; // Перевіряємо, чи на клієнті і чи є тема

        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        localStorage.setItem('theme', theme);
    }, [theme, isClient]);

    // Повертаємо стан тільки після завантаження на клієнті
    if (theme === null) {
        return { theme: 'light', setTheme }; // Повертаємо світлу тему як за замовчуванням
    }

    return { theme, setTheme };
};

"use client";
import { useEffect, useState } from 'react';

export const useTheme = () => {
    const [theme, setTheme] = useState<'light' | 'dark' | null>(null);
    const [isClient, setIsClient] = useState(false); 

    useEffect(() => {
        setIsClient(true); 
    }, []);

    useEffect(() => {
        if (!isClient) return; 

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme as 'light' | 'dark');
        } else {
            const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
            setTheme(prefersDarkScheme.matches ? 'dark' : 'light');
        }
    }, [isClient]);


    useEffect(() => {
        if (!isClient || theme === null) return; 

        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        localStorage.setItem('theme', theme);
    }, [theme, isClient]);

    if (theme === null) {
        return { theme: 'light', setTheme }; 
    }

    return { theme, setTheme };
};

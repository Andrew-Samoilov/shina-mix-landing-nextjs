'use client'
import { useTheme } from '../useTheme';

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <button suppressHydrationWarning
            onClick={toggleTheme}
            className="p-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-md"
        >
            {theme === 'light' ? '🌙' : '☀️'}
        </button>
    );
};

export default ThemeSwitcher;

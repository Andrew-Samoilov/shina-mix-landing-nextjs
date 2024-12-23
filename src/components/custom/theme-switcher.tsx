'use client';


export default function ThemeToggle() {

    const toggleTheme = () => {
        // const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        const currentTheme = localStorage.getItem(`theme`);
        console.log(currentTheme, localStorage.getItem('theme'));
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.classList.remove(currentTheme ?? 'light');
        document.documentElement.classList.add(newTheme);

        console.log(`theme`, newTheme);
    };



    return (
        <button onClick={toggleTheme}>
            Toggle Theme
        </button>
    );
}

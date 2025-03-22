import React, { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === "dark");
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);
    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-md border border-gray-500 hover:bg-gray-700 transition"
        >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
}

export default ThemeToggle

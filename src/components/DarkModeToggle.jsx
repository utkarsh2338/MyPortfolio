import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';

const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            setIsDark(false);
            document.body.classList.add('light-mode');
        } else {
            setIsDark(true);
            document.body.classList.remove('light-mode');
        }
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
        if (isDark) {
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        }
    };

    return (
        <motion.button
            onClick={toggleTheme}
            className="fixed bottom-8 right-8 z-50 p-4 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Light Mode" : "Dark Mode"}
        >
            {isDark ? (
                <FaSun className="text-2xl text-yellow-400" />
            ) : (
                <FaMoon className="text-2xl text-purple-500" />
            )}
        </motion.button>
    );
};

export default DarkModeToggle;

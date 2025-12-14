import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Importing icons from react-icons

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div
            onClick={toggleDarkMode}
            className={`flex items-center w-14 h-7 bg-gray-300 dark:bg-gray-800 rounded-full p-1 cursor-pointer transition-all duration-300 ${isDarkMode ? 'justify-end' : 'justify-start'
                }`}
        >
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center transition-all duration-300">
                {isDarkMode ? (
                    <FaSun className="text-yellow-500" />
                ) : (
                    <FaMoon className="text-gray-700" />
                )}
            </div>
        </div>
    );
};

export default DarkModeToggle;

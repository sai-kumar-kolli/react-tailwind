import React, { useState } from 'react';
import DarkModeToggle from './Darkmodetoggle';
import { FaBars, FaTimes, FaHome, FaBlog, FaBook, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import FlyoutMenu from './FlyoutMenu';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0()


    const handleLogin = async () => {
        await loginWithRedirect(
            // {
            //     appState: {
            //         returnTo: "/profile",
            //     },
            // }
        );
    };
    const handleLogout = () => {
        logout({
            logoutParams: {
                returnTo: window.location.origin,
            },
        });
    }

    return (
        <nav className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition duration-300">
            {/* Left side: Burger Menu and Logo */}
            <div className="flex items-center space-x-4">
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="focus:outline-none"
                    >
                        {menuOpen ? (
                            <FaTimes className=" dark:text-gray-100 text-gray-800 w-6 h-6" />
                        ) : (
                            <FaBars className=" dark:text-gray-100 text-gray-800 w-6 h-6" />
                        )}
                    </button>
                </div>
                <div className="text-lg font-bold">Logo</div>
                <div className="hidden md:block">|</div>
            </div>

            {/* Center on Desktop: Home */}
            <div className="hidden md:flex ml-4 items-center">
                <FaHome className=" dark:text-gray-100 text-gray-600 space-x-2" />
                <span className="hover:text-blue-400 ml-2 cursor-pointer">Home</span>
            </div>

            {/* Right side contents (Blog, Samples, etc.) on Desktop */}
            <div className="md:flex ml-auto space-x-6 items-center">
                <div className='hidden md:flex ml-auto space-x-6 items-center'>
                    <div className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer">
                        <FaBlog className=" dark:text-gray-100 text-gray-600" />
                        <span>Blog</span>
                    </div>
                    <div className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer">
                        <FaBook className=" dark:text-gray-100 text-gray-600" />
                        <span>Samples</span>
                    </div>
                    {!isAuthenticated ? (
                        <div className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer" onClick={handleLogin}>
                            <FaSignInAlt className=" dark:text-gray-100 text-gray-600" />
                            <span>Login</span>
                        </div>
                    ) : (
                        <div className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer" onClick={handleLogout}>
                            <FaSignOutAlt className=" dark:text-gray-100 text-gray-600" />
                            <span>Logout</span>
                        </div>
                    )}
                </div>
                {/* Dark Mode Toggle */}
                <div className="flex items-center">
                    <DarkModeToggle />
                </div>
            </div>


            {/* Flyout Menu for Mobile */}
            {menuOpen && <FlyoutMenu isAuthenticated={isAuthenticated} setMenuOpen={setMenuOpen} handleLogin={handleLogin} />}
        </nav>
    );
};

export default Header;

import React from 'react';
import { FaBlog, FaBook, FaHome } from 'react-icons/fa'; // Import relevant icons
import { FaTimes } from 'react-icons/fa'; // Close button

const FlyoutMenu = ({ setMenuOpen }) => {
    return (
        <div className="fixed top-0 left-0 h-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 z-50 p-6 w-4/5 md:w-64 shadow-lg" style={{ backgroundColor: 'inherit' }}>
            {/* Close Button aligned to the right */}
            <div className="flex justify-end">
                <button className="text-gray-800 dark:text-gray-100" onClick={() => setMenuOpen(false)}>
                    <FaTimes className=" w-6 h-6" />
                </button>
            </div>

            {/* Menu Items aligned to the left */}
            <div className="mt-6 space-y-6">
                {/* Home Menu Item */}
                <div className="border-b pb-2 hover:text-blue-400 dark:hover:dark:text-teal-400 cursor-pointer flex justify-between items-center">
                    <span>Home</span>
                    <FaHome className=" dark:text-gray-100 text-gray-600" />
                </div>

                {/* Blog Menu Item */}
                <div className="border-b pb-2 hover:text-blue-400 dark:hover:dark:text-teal-400 pointer-events-none flex justify-between items-center">
                    <span>Blog</span>
                    <FaBlog className=" dark:text-gray-100 text-gray-600" />
                </div>

                {/* Samples Menu Item */}
                <div className="border-b pb-2 hover:text-blue-400 dark:hover:dark:text-teal-400 cursor-pointer flex justify-between items-center">
                    <span>Samples</span>
                    <FaBook className=" dark:text-gray-100 text-gray-600" />
                </div>
            </div>
        </div>
    );
};

export default FlyoutMenu;



const Footer = () => {


    return (
        <>
            <footer className="bg-gray-100 text-gray-800 py-6">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    {/* Left side - Logo or Brand */}
                    <div className="mb-4 md:mb-0">
                        <div className="text-lg font-bold">Your Brand</div>
                        <div className="text-sm text-gray-600">© 2024 Your Brand. All rights reserved.</div>
                    </div>

                    {/* Center - Links */}
                    <div className="flex space-x-6 mb-4 md:mb-0">
                        <a href="#about" className="hover:text-blue-500">About</a>
                        <a href="#services" className="hover:text-blue-500">Services</a>
                        <a href="#contact" className="hover:text-blue-500">Contact</a>
                        <a href="#privacy" className="hover:text-blue-500">Privacy Policy</a>
                    </div>

                    {/* Right side - Social Media Links */}
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 2a3 3 0 013 3v14a3 3 0 01-3 3H6a3 3 0 01-3-3V5a3 3 0 013-3h12z" />
                            </svg>
                        </a>
                        <a href="#" className="hover:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.75 2.75h-2A1.25 1.25 0 004.5 4v16a1.25 1.25 0 001.25 1.25h13A1.25 1.25 0 0020 20V4a1.25 1.25 0 00-1.25-1.25H14" />
                            </svg>
                        </a>
                        <a href="#" className="hover:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.48 2 2 6.48 2 12c0 4.08 3.06 7.44 7.03 7.93v-5.61h-2.1v-2.32h2.1V9.98c0-2.07 1.27-3.2 3.1-3.2.88 0 1.63.07 1.85.1v2.15h-1.27c-1 0-1.2.47-1.2 1.17v1.53h2.4l-.31 2.32h-2.1v5.61C18.94 19.44 22 16.08 22 12c0-5.52-4.48-10-10-10z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;
import React, { useEffect, useState } from 'react'


const MainContent = () => {
    const [activeSection, setActiveSection] = useState('about'); // 'about' is active by default


    return (
        <>
            <div class="mx-auto h-[calc(100vh-60px)]  bg-gray-100  px-8 sm:px-12 md:px-16 lg:px-32 xl:px-40 font-sans transition-colors duration-300 dark:bg-gray-900">
                <a href="#content" class="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">
                    Skip to Content
                </a>

                <div class="lg:flex lg:justify-between lg:gap-4 lg:items-start lg:min-h-[calc(100vh-60px)]">
                    <section class="lg:w-1/4 lg:sticky lg:top-[60px] lg:h-[calc(100vh-60px)] lg:flex lg:flex-col lg:justify-center text-center lg:text-left">
                        <div>
                            <h1 class="text-4xl font-extrabold tracking-tight text-gray-800 dark:text-gray-200 sm:text-5xl">
                                <a href="/">Sai Kumar K</a>
                            </h1>
                            <h2 class="mt-3 text-lg font-medium tracking-tight text-gray-600 dark:text-gray-300 sm:text-xl">
                                Frontend Engineer
                            </h2>
                            <p class="mt-4 max-w-xs mx-auto lg:mx-0 leading-normal text-gray-500 dark:text-gray-400">
                                I build pixel-perfect, engaging, and accessible digital experiences.
                            </p>

                            <ul class="ml-1 mt-8 flex justify-center lg:justify-start space-x-5" aria-label="Social media">
                                <li class="text-xs shrink-0">
                                    <a class="block hover:text-gray-800 dark:hover:text-gray-100" href="https://github.com/sai-kumar-kolli" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-6 w-6">
                                        </svg>
                                    </a>
                                </li>
                                <li class="text-xs shrink-0">
                                    <a class="block hover:text-gray-800 dark:hover:text-gray-100" href="https://www.linkedin.com/in/sai-kumar-kolli/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="lg:w-1/4 lg:sticky lg:top-[60px] lg:h-[calc(100vh-60px)] lg:flex lg:flex-col lg:justify-center lg:items-center">
                        <nav className="nav mt-10 lg:mt-0" aria-label="In-page jump links">
                            <ul className="space-y-6">
                                <li>
                                    <a
                                        className={`group relative block py-3 ${activeSection === 'about' ? 'text-blue-500 dark:text-teal-400' : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-teal-400'} transition-colors duration-300`}
                                        href="#about"
                                        onClick={() => setActiveSection('about')}
                                    >
                                        <span className="relative z-10 text-xs font-bold uppercase tracking-widest">
                                            About
                                        </span>
                                        <span
                                            className={`absolute inset-x-0 bottom-0 h-[2px] bg-blue-500 dark:bg-teal-400 transform ${activeSection === 'about' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'} transition-transform duration-300 ease-out origin-left`}
                                        ></span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={`group relative block py-3 ${activeSection === 'experience' ? 'text-blue-500 dark:text-teal-400' : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-teal-400'} transition-colors duration-300`}
                                        href="#experience"
                                        onClick={() => setActiveSection('experience')}
                                    >
                                        <span className="relative z-10 text-xs font-bold uppercase tracking-widest">
                                            Experience
                                        </span>
                                        <span
                                            className={`absolute inset-x-0 bottom-0 h-[2px] bg-blue-500 dark:bg-teal-400 transform ${activeSection === 'experience' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'} transition-transform duration-300 ease-out origin-left`}
                                        ></span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={`group relative block py-3 ${activeSection === 'projects' ? 'text-blue-500 dark:text-teal-400' : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-teal-400'} transition-colors duration-300`}
                                        href="#projects"
                                        onClick={() => setActiveSection('projects')}
                                    >
                                        <span className="relative z-10 text-xs font-bold uppercase tracking-widest">
                                            Projects
                                        </span>
                                        <span
                                            className={`absolute inset-x-0 bottom-0 h-[2px] bg-blue-500 dark:bg-teal-400 transform ${activeSection === 'projects' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'} transition-transform duration-300 ease-out origin-left`}
                                        ></span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </section>



                    <section class="lg:w-1/2 lg:h-[calc(100vh-60px)] py-16 lg:overflow-y-auto">
                        <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-colors duration-300">
                            <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-200">Main Content Area</h3>
                            <p class="mt-4 text-gray-600 dark:text-gray-300">Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text .</p>
                        </div>
                    </section>
                </div>
            </div>



        </>
    )
}
export default MainContent;
import React, {  useState } from 'react'


const MainContent = () => {
    const [activeSection, setActiveSection] = useState('about'); // 'about' is active by default


    return (
        <>
            <div class="mx-auto   bg-gray-100  px-8 sm:px-12 md:px-16 lg:px-32 xl:px-40 font-sans transition-colors duration-300 dark:bg-gray-900">
                {/* <a href="#content" class="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">
                    Skip to Content
                </a> */}
                <div class="lg:flex lg:justify-between lg:gap-4 lg:items-start lg:min-h-[calc(100vh-82px)]">
                    <section class="lg:w-1/4 lg:sticky lg:top-[60px] lg:h-[calc(100vh-82px)] lg:flex lg:flex-col lg:justify-center text-center lg:text-left">
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

                    <section className="lg:w-1/4 lg:sticky lg:top-[60px] lg:h-[calc(100vh-82px)] lg:flex lg:flex-col lg:justify-center ">
                        <nav className="nav mt-10 lg:mt-0" aria-label="In-page jump links">
                            <ul className="space-y-6">
                                <li>
                                    <a
                                        className={`group relative block py-3 ${activeSection === 'about' ? 'text-blue-500 dark:text-teal-400' : 'text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-teal-400'} transition-colors duration-300`}
                                        href="#about"
                                        onClick={() => setActiveSection('about')}
                                    >
                                        <span className="relative z-10 text-xs font-bold uppercase tracking-widest">
                                            About
                                        </span>
                                        <span
                                            className={`absolute inset-x-0 bottom-0 h-[2px] w-[120px] bg-blue-500 dark:bg-teal-400 transform ${activeSection === 'about' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'} transition-transform duration-300 ease-out origin-left`}
                                        ></span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={`group relative block py-3 ${activeSection === 'experience' ? 'text-blue-500 dark:text-teal-400' : 'text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-teal-400'} transition-colors duration-300`}
                                        href="#experience"
                                        onClick={() => setActiveSection('experience')}
                                    >
                                        <span className="relative z-10 text-xs font-bold uppercase tracking-widest">
                                            Experience
                                        </span>
                                        <span
                                            className={`absolute inset-x-0 bottom-0 h-[2px] w-[120px] bg-blue-500 dark:bg-teal-400 transform ${activeSection === 'experience' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'} transition-transform duration-300 ease-out origin-left`}
                                        ></span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={`group relative block py-3 ${activeSection === 'projects' ? 'text-blue-500 dark:text-teal-400' : 'text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-teal-400'} transition-colors duration-300`}
                                        href="#projects"
                                        onClick={() => setActiveSection('projects')}
                                    >
                                        <span className="relative z-10 text-xs font-bold uppercase tracking-widest">
                                            Projects
                                        </span>
                                        <span
                                            className={`absolute inset-x-0 bottom-0 h-[2px] w-[120px] bg-blue-500 dark:bg-teal-400 transform ${activeSection === 'projects' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'} transition-transform duration-300 ease-out origin-left`}
                                        ></span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </section>
                    <main id="content" class="pt-24 lg:w-1/2 lg:py-24 text-gray-500 dark:text-gray-400 transition-colors duration-300">
                        <section id="about" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
                            <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-100 dark:bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                                <h2 class="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 lg:sr-only">About</h2>
                            </div>
                            <div>
                                <p class="mb-6 leading-relaxed">
                                    I started my journey in web development with a passion for creating interactive and dynamic user experiences.
                                    Fast forward to today, I have built engaging digital experiences for various clients ranging from start-ups to large-scale corporations.
                                </p>
                                <p class="mb-6 leading-relaxed">
                                    Currently, my focus is on building highly accessible and performant web applications at
                                    <a class="font-medium text-teal-500 hover:text-teal-500 dark:hover:text-teal-300 focus-visible:text-teal-500 transition-colors"
                                        href="https://accenture.com" target="_blank" rel="noreferrer noopener" aria-label="Company (opens in a new tab)"> Accenture</a>.
                                    I specialize in building well-architected software that marries clean design with top-notch engineering practices.
                                </p>
                                <p class="leading-relaxed">
                                    Outside of work, I enjoy hiking, reading books on technology and innovation, and contributing to open-source projects. When I'm not coding,
                                    you'll likely find me experimenting with new recipes in the kitchen or playing guitar.
                                </p>
                            </div>
                        </section>
                        <section id="experience" className="py-16 lg:py-24 text-gray-500 dark:text-gray-400 transition-colors duration-300">
                            <div className="container mx-auto">
                                <div className="relative lg:flex lg:flex-col lg:items-start lg:justify-between lg:space-y-16">

                                    {/* Vertical Line */}
                                    <div className="absolute left-[50px] w-[2px] bg-gray-300 dark:bg-gray-700 h-full top-0"></div>

                                    {/* Experience 1 */}
                                    <div className="relative lg:flex lg:items-center mb-12">
                                        {/* Circle */}
                                        <div className="absolute left-[50px] transform -translate-x-1/2 w-6 h-6 bg-teal-400 rounded-full flex items-center justify-center z-10">
                                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                        </div>
                                        {/* Year */}
                                        <div className="ml-[100px] w-40 text-lg font-semibold text-gray-600 dark:text-gray-400">
                                            Nov 2019 - Oct 2020
                                        </div>
                                        {/* Content */}
                                        <div className="ml-12 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Company A</h3>
                                            <p className="mt-2 text-gray-600 dark:text-gray-400">Frontend Developer</p>
                                            <p className="mt-4 text-gray-600 dark:text-gray-400">
                                                Built accessible and performant web applications.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Experience 2 */}
                                    <div className="relative lg:flex lg:items-center mb-12">
                                        <div className="absolute left-[50px] transform -translate-x-1/2 w-6 h-6 bg-teal-400 rounded-full flex items-center justify-center z-10">
                                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                        </div>
                                        <div className="ml-[100px] w-40 text-lg font-semibold text-gray-600 dark:text-gray-400">
                                            May 2021 - Sept 2021
                                        </div>
                                        <div className="ml-12 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Company B</h3>
                                            <p className="mt-2 text-gray-600 dark:text-gray-400">Senior Frontend Engineer</p>
                                            <p className="mt-4 text-gray-600 dark:text-gray-400">
                                                Led the frontend team to create scalable web applications.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Experience 3 */}
                                    <div className="relative lg:flex lg:items-center mb-12">
                                        <div className="absolute left-[50px] transform -translate-x-1/2 w-6 h-6 bg-teal-400 rounded-full flex items-center justify-center z-10">
                                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                        </div>
                                        <div className="ml-[100px] w-40 text-lg font-semibold text-gray-600 dark:text-gray-400">
                                            Apr 2022 - Present
                                        </div>
                                        <div className="ml-12 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Company C</h3>
                                            <p className="mt-2 text-gray-600 dark:text-gray-400">Principal Engineer</p>
                                            <p className="mt-4 text-gray-600 dark:text-gray-400">
                                                Leading frontend architecture and innovation.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>

                    </main>
                </div>
            </div>
        </>
    )
}
export default MainContent;
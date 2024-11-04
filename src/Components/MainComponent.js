import React, { useState, useRef, useEffect } from 'react'
const experiences = [
    {
        date: "Apr 2022 - Present",
        company: "Accenture",
        position: "Application Development Analyst",
        url: "https://www.accenture.com/",
        description: "Translated wireframes into modular, reusable React components, ensuring consistency and scalability across the application. Integrated Azure AD authentication, optimized UI with Ant Design and Apex charts, and improved app performance using code splitting and lazy loading. Leveraged Redux Toolkit and custom hooks for efficient state management, and streamlined build processes with Webpack, Babel, and Jest unit testing."
    },
    {
        date: "Nov 2019 - Oct 2020",
        company: "Cognizant",
        position: "Programmer Analyst Trainee",
        url: "https://www.cognizant.com/",
        description: "Developed responsive, high-performance web applications using React, Bootstrap, and TypeScript. Focused on component reusability and optimization techniques like memoization and lazy loading. Enhanced UI with reusable components and complex tables, profiling and optimizing load times with Chrome DevTools."
    }
];


const MainContent = () => {
    const [activeSection, setActiveSection] = useState('about'); // 'about' is active by default
    // Refs for each section
    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const projectsRef = useRef(null);

    useEffect(() => {
        const sections = [
            { name: 'about', ref: aboutRef },
            { name: 'experience', ref: experienceRef },
            { name: 'projects', ref: projectsRef },
        ];
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 } // Adjust as needed
        );

        sections.forEach(({ ref }) => {
            console.log(ref.current)
            if (ref.current)
                observer.observe(ref.current)
        });

        return () => observer.disconnect();
    }, [])

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
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-6 w-6 text-gray-800 dark:text-gray-100">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.1 0 0 .67-.21 2.2.82a7.54 7.54 0 012.01-.27c.68 0 1.36.09 2.01.27 1.52-1.04 2.2-.82 2.2-.82.44 1.09.16 1.9.08 2.1.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.64 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
                                        </svg>
                                    </a>
                                </li>
                                <li class="text-xs shrink-0">
                                    <a class="block hover:text-gray-800 dark:hover:text-gray-100" href="https://linkedin.com/in/sai-kumar-k-140385312" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6 text-gray-800 dark:text-gray-100">
                                            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.78-1.75-1.73s.78-1.73 1.75-1.73 1.75.78 1.75 1.73-.78 1.73-1.75 1.73zm13.5 11.27h-3v-5.6c0-1.3-.03-2.98-1.82-2.98-1.82 0-2.1 1.42-2.1 2.88v5.7h-3v-10h2.88v1.37h.04c.4-.76 1.38-1.57 2.84-1.57 3.04 0 3.6 2 3.6 4.6v5.6z" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="lg:w-1/4 lg:sticky lg:top-[60px] lg:h-[calc(100vh-82px)] lg:flex lg:flex-col lg:justify-center hidden sm:flex">
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
                    <main id="content" class="pt-8 sm:pt-24 lg:w-1/2 lg:py-24 text-gray-500 dark:text-gray-400 transition-colors duration-300">
                        <section ref={aboutRef} id="about" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
                            <div class="sticky top-0 z-20 mb-4  bg-gray-100 dark:bg-slate-900/75 px-6 py-5 backdrop-blur md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0" style={{ backgroundColor: 'inherit', paddingLeft: '0px' }}>
                                <h2 class="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 lg:sr-only">About</h2>
                            </div>
                            <div>
                                <p class="mb-6 leading-relaxed">
                                    I started my journey in web development with a passion for creating interactive and dynamic user experiences. Over the years, I’ve had the opportunity to work on a variety of projects, from building small-scale websites to developing complex web applications for businesses.
                                    My love for clean design and efficient engineering practices has helped me craft user-friendly and performant digital experiences.
                                </p>
                                <p class="mb-6 leading-relaxed">
                                    Currently, my focus is on building highly accessible and performant web applications at
                                    <a class="font-medium text-blue-500 dark:text-teal-300 hover:text-teal-500 dark:hover:text-teal-300 focus-visible:text-teal-500 transition-colors"
                                        href="https://accenture.com" target="_blank" rel="noreferrer noopener" aria-label="Company (opens in a new tab)"> Accenture</a>.
                                    I enjoy working on projects where design meets engineering, ensuring both form and function are seamlessly integrated. I believe in writing well-structured, maintainable code that contributes to long-term project success.
                                </p>
                                <p className="mb-6 leading-relaxed">
                                    In addition to my core work, I'm currently expanding my knowledge in Python, Azure Cloud, and Next.js. Im always eager to learn new technologies, as I believe continuous growth is key in this fast-paced field.
                                </p>
                                <p class="leading-relaxed">
                                    Outside of work, I enjoy swimming, reading books on technology and innovation, and contributing to open-source projects. When I'm not coding,
                                    you'll likely find me experimenting with new recipes in the kitchen or playing guitar.
                                </p>
                            </div>
                        </section>

                        <section ref={experienceRef} id="experience" className="py-8 mb-8 lg:py-12 text-gray-500 dark:text-gray-400 transition-colors duration-300">
                            <div class="sticky top-0 z-20  bg-slate-100 dark:bg-slate-900/75 px-6 py-5 backdrop-blur md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0" style={{ backgroundColor: 'inherit', paddingLeft: '0px' }}>
                                <h2 class="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 lg:sr-only">Experience</h2>
                            </div>
                            <div className="container mx-auto relative">
                                <div className="absolute top-0 bottom-8 flex flex-col h-full hidden sm:flex">
                                    <div className="absolute w-[2px] bg-gray-300 dark:bg-gray-700 h-full top-0"></div>
                                </div>


                                {/* Experience Items */}
                                <div className="space-y-12 relative z-10">
                                    {experiences
                                        .map((experience, index, arr) => (
                                            <div
                                                key={index}
                                                className={`grid grid-cols-1 sm:grid-cols-[16px_150px_1fr] sm:gap-4 relative ${index === 0 ? "mt-8" : index === arr.length - 1 ? "mb-4" : ""
                                                    }`}
                                            >
                                                {/* Circle */}
                                                <div className="flex justify-center sm:block relative hidden sm:flex">
                                                    <div className="absolute transform -translate-x-1/2 w-4 h-4 bg-blue-500 dark:bg-teal-400 rounded-full flex items-center justify-center z-10">
                                                    </div>
                                                </div>

                                                {/* Timeline */}
                                                <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mt-2 sm:mt-0">
                                                    {experience.date}
                                                </div>
                                                {/* Content */}
                                                <a
                                                    href={experience.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="mt-4 sm:mt-0 p-6 cursor-pointer dark:hover:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                                                >
                                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                                        {experience.company}
                                                    </h3>
                                                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                                                        {experience.position}
                                                    </p>
                                                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                                                        {experience.description}
                                                    </p>
                                                </a>

                                            </div>
                                        ))}
                                </div>
                            </div>
                        </section>

                        <section ref={projectsRef} id="projects" className="py-8 lg:py-12 text-gray-500 dark:text-gray-400 transition-colors duration-300">
                            <div className="sticky top-0 z-20  bg-slate-100 dark:bg-slate-900/75 px-6 py-5 backdrop-blur  md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0" style={{ backgroundColor: 'inherit', paddingLeft: '0px' }}>
                                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 lg:sr-only">
                                    Projects
                                </h2>
                            </div>

                            <div className="container mx-auto space-y-12 my-6">
                                {/* Project 1 */}
                                <div className="group relative p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">
                                        CollabSync
                                    </h3>
                                    <p className="mt-2 text-gray-600 dark:text-gray-400 transition-colors duration-300">
                                        Real-time collaborative code editor designed for seamless document sharing, live coding sessions, and interview practice.
                                        Equipped with WebSocket integration, It allows multiple users to edit the same document simultaneously, providing an interactive and dynamic workspace ideal for tech interviews, peer coding, and project collaboration.
                                    </p>
                                    <div className="mt-4 flex space-x-2 text-sm">
                                        <span className="px-2 py-1 bg-teal-500 text-white rounded-full">React</span>
                                        <span className="px-2 py-1 bg-blue-500 text-white rounded-full">Node.js</span>
                                        <span className="px-2 py-1 bg-gray-500 text-white rounded-full">Socket.IO</span>
                                    </div>
                                    <div className="mt-6 flex justify-between items-center">
                                        <a
                                            href="https://github.com/sai-kumar-kolli/collabsync"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 dark:text-teal-400 font-medium hover:underline transition-colors duration-300"
                                        >
                                            View Code
                                        </a>
                                        <a
                                            href="https://collabsync-yywi.onrender.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 dark:text-teal-400 font-medium hover:underline transition-colors duration-300"
                                        >
                                            Live Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="container mx-auto space-y-12 my-6">
                                <div className="group relative p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">
                                        DevOps Visualized <span className="text-sm text-blue-500 dark:text-teal-500">(In Progress)</span>
                                    </h3>
                                    <p className="mt-2 text-gray-600 dark:text-gray-400 transition-colors duration-300">
                                        An ongoing project aimed at creating a comprehensive visualization tool for DevOps processes. This project focuses on simplifying complex CI/CD workflows, infrastructure monitoring, and real-time deployment insights to provide an intuitive and visual approach for managing DevOps pipelines.
                                    </p>
                                    <p className="mt-4 text-gray-600 dark:text-gray-400 transition-colors duration-300">
                                        The idea is to bridge the gap between DevOps engineering and non-technical stakeholders by providing clear, graphical representations of deployment processes, cloud resource allocations, and pipeline statuses, ensuring seamless communication and better project alignment.
                                    </p>
                                    <div className="mt-4 flex space-x-2 text-sm">
                                        <span className="px-2 py-1 bg-teal-500 text-white rounded-full">React.js</span>
                                        <span className="px-2 py-1 bg-blue-500 text-white rounded-full">Node.js</span>
                                        <span className="px-2 py-1 bg-blue-500 text-white rounded-full">Docker</span>
                                        <span className="px-2 py-1 bg-gray-500 text-white rounded-full">Kubernetes</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div >
        </>
    )
}
export default MainContent;
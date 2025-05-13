import React, { useState, useRef, useEffect } from 'react';

const MainContent = () => {
    const [activeSection, setActiveSection] = useState('about'); // Default active section

    // Section refs
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
                let visibleSection = activeSection; // Preserve the default section initially

                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        visibleSection = entry.target.id; // Update visible section
                    }
                });

                setActiveSection(visibleSection);
            },
            { threshold: 0.5 } // Ensures only one section is active at a time
        );

        sections.forEach(({ ref }) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => {
            sections.forEach(({ ref }) => {
                if (ref.current) observer.unobserve(ref.current);
            });
            observer.disconnect(); // Cleanup observer
        };
    }, []);

    return (

        <div class="mx-auto   bg-gray-100  px-8 sm:px-12 md:px-16 lg:px-32 xl:px-40 font-sans transition-colors duration-300 dark:bg-gray-900">
            {/* <a href="#content" class="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">
                    Skip to Content
                </a> */}
            <div class="lg:flex lg:justify-between lg:gap-4 lg:items-start lg:min-h-[calc(100vh-82px)]">
                <section class="w-full lg:w-1/4 lg:sticky lg:top-16 lg:h-[calc(100vh-82px)] flex flex-col justify-center text-center lg:text-left">
                    <div>
                        <h1 class="text-4xl sm:text-4xl font-extrabold tracking-tight text-gray-800 dark:text-gray-200 sm:text-5xl">
                            <a href="/">Sai Kumar K</a>
                        </h1>
                        <h2 class="mt-3 text-lg sm:text-xl font-medium tracking-tight text-gray-600 dark:text-gray-300">
                            Frontend Engineer
                        </h2>
                        <p class="mt-4 max-w-xs mx-auto lg:mx-0 text-gray-500 dark:text-gray-400 leading-relaxed">
                            I build smooth, interactive, and accessible UIs with React.
                        </p>

                        <ul class="mt-6 flex justify-center lg:justify-start space-x-6">
                            <li>
                                <a href="https://github.com/sai-kumar-kolli" target="_blank" rel="noopener noreferrer"
                                    aria-label="GitHub (opens in a new tab)"
                                    class="block hover:text-gray-800 dark:hover:text-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-8 h-8 text-gray-800 dark:text-gray-100">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.1 0 0 .67-.21 2.2.82a7.54 7.54 0 012.01-.27c.68 0 1.36.09 2.01.27 1.52-1.04 2.2-.82 2.2-.82.44 1.09.16 1.9.08 2.1.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.64 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com/in/sai-kumar-k-140385312" target="_blank" rel="noopener noreferrer"
                                    aria-label="LinkedIn (opens in a new tab)"
                                    class="block hover:text-gray-800 dark:hover:text-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-gray-800 dark:text-gray-100">
                                        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.78-1.75-1.73s.78-1.73 1.75-1.73 1.75.78 1.75 1.73-.78 1.73-1.75 1.73zm13.5 11.27h-3v-5.6c0-1.3-.03-2.98-1.82-2.98-1.82 0-2.1 1.42-2.1 2.88v5.7h-3v-10h2.88v1.37h.04c.4-.76 1.38-1.57 2.84-1.57 3.04 0 3.6 2 3.6 4.6v5.6z" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Navigation */}
                <section className="lg:w-1/4 lg:sticky lg:top-[60px] lg:h-[calc(100vh-82px)] lg:flex lg:flex-col lg:justify-center hidden sm:flex">
                    <nav className="nav mt-10 lg:mt-0" aria-label="In-page jump links">
                        <ul className="space-y-6">
                            {['about', 'experience', 'projects'].map((section) => (
                                <li key={section}>
                                    <a
                                        className={`group relative block py-3 ${activeSection === section
                                            ? 'text-blue-500 dark:text-teal-400'
                                            : 'text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-teal-400'
                                            } transition-colors duration-300`}
                                        href={`#${section}`}
                                        onClick={() => setActiveSection(section)}
                                    >
                                        <span className="relative z-10 text-xs font-bold uppercase tracking-widest">
                                            {section === "projects" ? "Personal " + section.charAt(0).toUpperCase() + section.slice(1) : section.charAt(0).toUpperCase() + section.slice(1)}
                                        </span>
                                        <span
                                            className={`absolute inset-x-0 bottom-0 h-[2px] w-[160px] bg-blue-500 dark:bg-teal-400 transform ${activeSection === section
                                                ? 'scale-x-100'
                                                : 'scale-x-0 group-hover:scale-x-100'
                                                } transition-transform duration-300 ease-out origin-left`}
                                        ></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </section>

                {/* Main Content */}
                <main id="content" className="w-full lg:w-1/2 transition-colors duration-300 px-4 sm:px-8">
                    {/* About Section */}
                    <section
                        ref={aboutRef}
                        id="about"
                        className="min-h-screen flex flex-col justify-center items-center text-gray-500 dark:text-gray-400 py-12 sm:py-16"
                    >
                        <h2 className="text-xl font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400 mb-4 text-center">
                            About
                        </h2>
                        <div className="max-w-2xl lg:max-w-3xl text-center sm:text-left text-base leading-relaxed">
                            <p class="mb-6 leading-relaxed">
                                I started my journey in web development with a passion for creating interactive and dynamic user experiences. Over the years, I’ve had the opportunity to work on a variety of projects, from building small-scale websites to developing complex web applications for businesses.
                                My love for clean design and efficient engineering practices has helped me craft user-friendly and performant digital experiences.
                            </p>
                            <p class="mb-6 leading-relaxed">
                                Currently, I work at
                                <a class="font-medium text-blue-500 dark:text-teal-300 hover:text-teal-500 dark:hover:text-teal-300 focus-visible:text-teal-500 transition-colors" aria-label="Company"> Accenture</a>.
                                I enjoy working on projects where design meets engineering, ensuring both form and function are seamlessly integrated. I believe in writing well-structured, maintainable code that contributes to long-term project success.
                            </p>
                            <p className="mb-6 leading-relaxed">
                                In addition to my core development work, Im currently focusing on sharpening my skills in Python for automation, exploring Azure Cloud for deploying scalable applications, and building modern interfaces using Next.js. Im also experimenting with architectural best practices and performance optimization techniques.
                            </p>
                            <p class="leading-relaxed">
                                Outside of work, I enjoy swimming and playing badminton, and I value quiet moments that help me recharge.
                                I spend time with my nephew who somehow manages to beat me at board games far more often than I'd like to admit.

                            </p>
                        </div>
                    </section>

                    {/* Experience Section */}
                    <section
                        ref={experienceRef}
                        id="experience"
                        className="min-h-screen flex flex-col justify-center items-center text-gray-500 dark:text-gray-400 py-12 sm:py-16"
                    >
                        <h2 className="text-xl font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400 mb-4 text-center">
                            Experience
                        </h2>
                        <div className="max-w-2xl lg:max-w-3xl text-center sm:text-left text-base leading-relaxed">
                            <p className=" max-w-2xl">
                                <p className='pt-2 pb-3'>
                                    Experienced React Developer with a strong background in building scalable and high-performance web applications, integrating seamlessly with .NET Core (Frontend for Backend) and Python-based backends. Expertise in modern front-end technologies, state management, and UI optimization, with a focus on delivering efficient, maintainable, and secure solutions.
                                </p>

                                <p className='pt-2 pb-3'>
                                    Skilled in Azure Cloud Development, holding the Azure AZ-204 certification, with hands-on experience deploying and managing cloud-based applications, implementing authentication, and leveraging Azure services for scalability and performance. Proficient in integrating RESTful APIs and GraphQL, utilizing Azure Functions, App Services, and Cosmos DB for backend efficiency.
                                </p>
                                <p className='pt-2 pb-3'>
                                    Passionate about writing clean, reusable code, optimizing application performance with lazy loading, code splitting, and virtualization, and leveraging cloud-native solutions to streamline development. Strong ability to collaborate with cross-functional teams, implement CI/CD pipelines, and follow best practices to deliver high-quality applications aligned with business needs.
                                </p>
                            </p>
                        </div>
                    </section>

                    {/* Projects Section */}
                    <section
                        ref={projectsRef}
                        id="projects"
                        className="min-h-screen flex flex-col justify-center items-center text-gray-500 dark:text-gray-400 py-12 sm:py-16"
                    >
                        <h2 className="text-xl font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400 mb-4 text-center">
                            Personal Projects
                        </h2>

                        {/* CollabSync */}
                        <div className="w-full max-w-2xl sm:max-w-4xl mx-auto space-y-8">
                            <div className="group p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                    CollabSync
                                </h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-400 transition-colors duration-300">
                                    Real-time collaborative code editor designed for seamless document sharing, live coding sessions, and interview practice.
                                    Equipped with WebSocket integration, It allows multiple users to edit the same document simultaneously, providing an interactive and dynamic workspace ideal for tech interviews, peer coding, and project collaboration.
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2 text-sm">
                                    <span className="px-3 py-1 bg-teal-500 text-white rounded-full">React</span>
                                    <span className="px-3 py-1 bg-blue-500 text-white rounded-full">Node.js</span>
                                    <span className="px-3 py-1 bg-gray-500 text-white rounded-full">Socket.IO</span>
                                </div>
                                <div className="mt-6 flex justify-between items-center">
                                    <a
                                        href="https://collabsync-yywi.onrender.com"
                                        target="_blank"
                                        rel="noopener noreferrer" className="text-blue-500 dark:text-teal-400 font-medium hover:underline">
                                        Live Demo
                                    </a>
                                </div>
                            </div>

                            <div className="group p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                    URL Shortener
                                </h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-400 transition-colors duration-300">
                                    A secure and high-performance URL shortener that allows users to generate clean, reliable short links without tracking. Built with a strong focus on speed, safety, and simplicity.
                                </p>
                                <p className="mt-4 text-gray-600 dark:text-gray-400 transition-colors duration-300">
                                    The app uses a layered validation system — starting with client-side checks, followed by server-side sanitization and threat detection. Technologies like Bloom Filters, Redis caching, and Google Safe Browsing ensure that all links are verified and safe before shortening.
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2 text-sm">
                                    <span className="px-2 py-1 bg-teal-500 text-white rounded-full">React.js</span>
                                    <span className="px-2 py-1 bg-blue-500 text-white rounded-full">Node.js</span>
                                    <span className="px-2 py-1 bg-yellow-500 text-white rounded-full">Redis</span>
                                    <span className="px-2 py-1 bg-pink-500 text-white rounded-full">Bloom Filter</span>
                                    <span className="px-2 py-1 bg-red-600 text-white rounded-full">Google Safe Browsing API</span>
                                </div>
                                <div className="mt-6 flex justify-between items-center">
                                    <a
                                        href="https://quycklink.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer" className="text-blue-500 dark:text-teal-400 font-medium hover:underline">
                                        Live Demo
                                    </a>
                                </div>
                            </div>

                            {/* DevOps Visualized */}
                            <div className="group p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                    DevOps Visualized <span className="text-sm text-blue-500 dark:text-teal-500">(In Progress)</span>
                                </h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-400 transition-colors duration-300">
                                    An ongoing project aimed at creating a comprehensive visualization tool for DevOps processes. This project focuses on simplifying complex CI/CD workflows, infrastructure monitoring, and real-time deployment insights to provide an intuitive and visual approach for managing DevOps pipelines.
                                </p>
                                <p className="mt-4 text-gray-600 dark:text-gray-400 transition-colors duration-300">
                                    The idea is to bridge the gap between DevOps engineering and non-technical stakeholders by providing clear, graphical representations of deployment processes, cloud resource allocations, and pipeline statuses, ensuring seamless communication and better project alignment.
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2 text-sm">
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
        </div>
    );
};

export default MainContent;

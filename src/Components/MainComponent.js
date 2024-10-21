import React, { useEffect, useState } from 'react'


const MainContent = () => {


    return (
        <>
            {/* <div class="mx-auto min-h-screen max-w-screen-lg px-6 py-12 font-sans md:px-12 md:py-16 lg:flex lg:justify-between lg:px-16 lg:py-20">
                <a href="#content" class="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">Skip to Content</a>

                <header class="lg:sticky lg:top-0 lg:w-1/2 lg:py-20">
                    <div class="lg:space-y-4">
                        <h1 class="text-5xl font-extrabold tracking-tight text-gray-100 sm:text-6xl">
                            <a href="/">Sai Kumar K</a>
                        </h1>
                        <h2 class="mt-3 text-lg font-semibold text-teal-400 sm:text-xl">Frontend Engineer</h2>
                        <p class="mt-4 max-w-xs text-base leading-7 text-gray-400">
                            I build pixel-perfect, engaging, and accessible digital experiences.
                        </p>
                    </div>

                    <nav class="mt-12 hidden lg:block" aria-label="In-page jump links">
                        <ul class="space-y-6">
                            <li><a href="#about" class="group flex items-center py-2 text-gray-500 hover:text-gray-100">
                                <span class="nav-indicator h-px w-8 bg-teal-400 group-hover:w-16"></span>
                                <span class="ml-4 uppercase font-semibold tracking-wider text-xs">About</span></a></li>
                            <li><a href="#experience" class="group flex items-center py-2 text-gray-500 hover:text-gray-100">
                                <span class="nav-indicator h-px w-8 bg-teal-400 group-hover:w-16"></span>
                                <span class="ml-4 uppercase font-semibold tracking-wider text-xs">Experience</span></a></li>
                            <li><a href="#projects" class="group flex items-center py-2 text-gray-500 hover:text-gray-100">
                                <span class="nav-indicator h-px w-8 bg-teal-400 group-hover:w-16"></span>
                                <span class="ml-4 uppercase font-semibold tracking-wider text-xs">Projects</span></a></li>
                        </ul>
                    </nav>
                </header>

                <div class="mt-12 lg:mt-0">
                    <ul class="flex justify-start space-x-6">
                        <li><a href="https://github.com/bchiang7" class="text-gray-400 hover:text-teal-400"><svg class="h-6 w-6" viewBox="0 0 16 16">...</svg></a></li>
                        <li><a href="https://www.linkedin.com/in/bchiang7/" class="text-gray-400 hover:text-teal-400"><svg class="h-6 w-6" viewBox="0 0 24 24">...</svg></a></li>
                        <li><a href="https://codepen.io/bchiang7" class="text-gray-400 hover:text-teal-400"><svg class="h-6 w-6" viewBox="0 0 64 64">...</svg></a></li>
                        <li><a href="https://instagram.com/bchiang7" class="text-gray-400 hover:text-teal-400"><svg class="h-6 w-6" viewBox="0 0 1000 1000">...</svg></a></li>
                        <li><a href="https://twitter.com/bchiang7" class="text-gray-400 hover:text-teal-400"><svg class="h-6 w-6" viewBox="0 0 1200 1227">...</svg></a></li>
                    </ul>
                </div>
            </div> */}
            {/* <div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 transition-colors duration-300 dark:bg-gray-900 bg-white">
                <a href="#content" class="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">
                    Skip to Content
                </a>

                <div class="lg:flex lg:justify-between lg:gap-4">
                    <section class="lg:w-1/2 lg:py-24 lg:flex lg:flex-col lg:justify-between">
                        <div>
                            <h1 class="text-4xl font-extrabold tracking-tight text-gray-800 dark:text-gray-200 sm:text-5xl">
                                <a href="/">Sai Kumar K</a>
                            </h1>
                            <h2 class="mt-3 text-lg font-medium tracking-tight text-gray-600 dark:text-gray-300 sm:text-xl">
                                Frontend Engineer
                            </h2>
                            <p class="mt-4 max-w-xs leading-normal text-gray-500 dark:text-gray-400">
                                I build pixel-perfect, engaging, and accessible digital experiences.
                            </p>

                            <nav class="nav hidden lg:block mt-10" aria-label="In-page jump links">
                                <ul class="space-y-6">
                                    <li>
                                        <a class="group flex items-center py-3 active text-gray-600 dark:text-gray-300" href="#about">
                                            <span class="nav-indicator mr-4 h-px w-8 bg-gray-400 dark:bg-gray-600 transition-all group-hover:w-16 group-hover:bg-gray-500"></span>
                                            <span class="nav-text text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white">About</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="group flex items-center py-3 text-gray-600 dark:text-gray-300" href="#experience">
                                            <span class="nav-indicator mr-4 h-px w-8 bg-gray-400 dark:bg-gray-600 transition-all group-hover:w-16 group-hover:bg-gray-500"></span>
                                            <span class="nav-text text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white">Experience</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="group flex items-center py-3 text-gray-600 dark:text-gray-300" href="#projects">
                                            <span class="nav-indicator mr-4 h-px w-8 bg-gray-400 dark:bg-gray-600 transition-all group-hover:w-16 group-hover:bg-gray-500"></span>
                                            <span class="nav-text text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white">Projects</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <ul class="ml-1 mt-8 flex items-center space-x-5" aria-label="Social media">
                            <li class="text-xs shrink-0">
                                <a class="block hover:text-gray-800 dark:hover:text-gray-100" href="https://github.com/bchiang7" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-6 w-6">
                                    </svg>
                                </a>
                            </li>
                            <li class="text-xs shrink-0">
                                <a class="block hover:text-gray-800 dark:hover:text-gray-100" href="https://www.linkedin.com/in/bchiang7/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </section>

                    <section class="lg:w-1/2 lg:py-24">
                        <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-colors duration-300">
                            <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-200">Main Content Area</h3>
                            <p class="mt-4 text-gray-600 dark:text-gray-300">This is where the main content will go. You can add various sections or elements here that align with the overall page.</p>
                        </div>
                    </section>
                </div>
                
            </div>
 */}

            {/* <div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 transition-colors duration-300 dark:bg-gray-900 bg-white">
                <a href="#content" class="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">
                    Skip to Content
                </a>

                <div class="lg:flex lg:justify-between lg:gap-4">
                    <section class="lg:w-1/2 lg:flex lg:flex-col lg:justify-between">
                        <div class="lg:flex lg:items-center lg:space-x-10">
                            <div>
                                <h1 class="text-4xl font-extrabold tracking-tight text-gray-800 dark:text-gray-200 sm:text-5xl">
                                    <a href="/">Sai Kumar K</a>
                                </h1>
                                <h2 class="mt-3 text-lg font-medium tracking-tight text-gray-600 dark:text-gray-300 sm:text-xl">
                                    Frontend Engineer
                                </h2>
                                <p class="mt-4 max-w-xs leading-normal text-gray-500 dark:text-gray-400">
                                    I build pixel-perfect, engaging, and accessible digital experiences.
                                </p>

                                <ul class="ml-1 mt-8 flex items-center space-x-5" aria-label="Social media">
                                    <li class="text-xs shrink-0">
                                        <a class="block hover:text-gray-800 dark:hover:text-gray-100" href="https://github.com/bchiang7" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-6 w-6">
                                            </svg>
                                        </a>
                                    </li>
                                    <li class="text-xs shrink-0">
                                        <a class="block hover:text-gray-800 dark:hover:text-gray-100" href="https://www.linkedin.com/in/bchiang7/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <nav class="nav hidden lg:block mt-10" aria-label="In-page jump links">
                                <ul class="space-y-6">
                                    <li>
                                        <a class="group flex items-center py-3 active text-gray-600 dark:text-gray-300" href="#about">
                                            <span class="nav-indicator mr-4 h-px w-8 bg-gray-400 dark:bg-gray-600 transition-all group-hover:w-16 group-hover:bg-gray-500"></span>
                                            <span class="nav-text text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white">About</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="group flex items-center py-3 text-gray-600 dark:text-gray-300" href="#experience">
                                            <span class="nav-indicator mr-4 h-px w-8 bg-gray-400 dark:bg-gray-600 transition-all group-hover:w-16 group-hover:bg-gray-500"></span>
                                            <span class="nav-text text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white">Experience</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="group flex items-center py-3 text-gray-600 dark:text-gray-300" href="#projects">
                                            <span class="nav-indicator mr-4 h-px w-8 bg-gray-400 dark:bg-gray-600 transition-all group-hover:w-16 group-hover:bg-gray-500"></span>
                                            <span class="nav-text text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white">Projects</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </section>

                    <section class="lg:w-1/2 lg:py-24">
                        <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-colors duration-300">
                            <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-200">Main Content Area</h3>
                            <p class="mt-4 text-gray-600 dark:text-gray-300">This is where the main content will go. You can add various sections or elements here that align with the overall page.</p>
                        </div>
                    </section>
                </div>
            </div> */}
            {/* <div class="mx-auto min-h-screen max-w-screen-xl px-4 py-8 font-sans md:px-12 md:py-20 lg:px-16 lg:py-0 transition-colors duration-300 dark:bg-gray-900 bg-white">
                <a href="#content" class="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">
                    Skip to Content
                </a>

                <div class="lg:flex lg:justify-between lg:gap-4 min-h-screen">
                    <section class="lg:w-1/2 flex flex-col justify-center lg:justify-center lg:min-h-screen">
                        <div class="lg:flex lg:items-start lg:space-x-6">
                            <div class="text-center lg:text-left">
                                <h1 class="text-4xl font-extrabold tracking-tight text-gray-800 dark:text-gray-200 sm:text-5xl">
                                    <a href="/">Sai Kumar K</a>
                                </h1>
                                <h2 class="mt-3 text-lg font-medium tracking-tight text-gray-600 dark:text-gray-300 sm:text-xl">
                                    Frontend Engineer
                                </h2>
                                <p class="mt-4 max-w-xs leading-normal text-gray-500 dark:text-gray-400">
                                    I build pixel-perfect, engaging, and accessible digital experiences.
                                </p>

                                <ul class="ml-1 mt-8 flex items-center justify-center lg:justify-start space-x-5" aria-label="Social media">
                                    <li class="text-xs shrink-0">
                                        <a class="block hover:text-gray-800 dark:hover:text-gray-100" href="https://github.com/bchiang7" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-6 w-6">
                                            </svg>
                                        </a>
                                    </li>
                                    <li class="text-xs shrink-0">
                                        <a class="block hover:text-gray-800 dark:hover:text-gray-100" href="https://www.linkedin.com/in/bchiang7/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <nav class="nav hidden lg:block mt-10 lg:mt-0" aria-label="In-page jump links">
                                <ul class="space-y-6">
                                    <li>
                                        <a class="group flex items-center py-3 active text-gray-600 dark:text-gray-300" href="#about">
                                            <span class="nav-indicator mr-4 h-px w-8 bg-gray-400 dark:bg-gray-600 transition-all group-hover:w-16 group-hover:bg-gray-500"></span>
                                            <span class="nav-text text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white">About</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="group flex items-center py-3 text-gray-600 dark:text-gray-300" href="#experience">
                                            <span class="nav-indicator mr-4 h-px w-8 bg-gray-400 dark:bg-gray-600 transition-all group-hover:w-16 group-hover:bg-gray-500"></span>
                                            <span class="nav-text text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white">Experience</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="group flex items-center py-3 text-gray-600 dark:text-gray-300" href="#projects">
                                            <span class="nav-indicator mr-4 h-px w-8 bg-gray-400 dark:bg-gray-600 transition-all group-hover:w-16 group-hover:bg-gray-500"></span>
                                            <span class="nav-text text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white">Projects</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </section>

                    <section class="lg:w-1/2 lg:py-24">
                        <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-colors duration-300">
                            <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-200">Main Content Area</h3>
                            <p class="mt-4 text-gray-600 dark:text-gray-300">This is where the main content will go. You can add various sections or elements here that align with the overall page.</p>
                        </div>
                    </section>
                </div>
            </div> */}

            {/* <div class="mx-auto min-h-screen max-w-screen-xl px-6 py-8 font-sans md:px-12 md:py-16 lg:px-28 lg:py-20 transition-colors duration-300 dark:bg-gray-900 bg-white">
                <a href="#content" class="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">
                    Skip to Content
                </a>

                <div class="lg:flex lg:justify-between lg:gap-8 min-h-screen">
                    <section class="lg:w-1/2 flex flex-col justify-center lg:justify-center lg:min-h-screen">
                        <div class="lg:flex lg:items-start lg:space-x-8">
                            <div class="text-center lg:text-left lg:ml-8">
                                <h1 class="text-4xl font-extrabold tracking-tight text-gray-800 dark:text-gray-200 sm:text-5xl">
                                    <a href="/">Sai Kumar K</a>
                                </h1>
                                <h2 class="mt-3 text-lg font-medium tracking-tight text-gray-600 dark:text-gray-300 sm:text-xl">
                                    Frontend Engineer
                                </h2>
                                <p class="mt-4 max-w-xs leading-normal text-gray-500 dark:text-gray-400">
                                    I build pixel-perfect, engaging, and accessible digital experiences.
                                </p>

                                <ul class="ml-1 mt-8 flex items-center justify-center lg:justify-start space-x-5" aria-label="Social media">
                                    <li class="text-xs shrink-0">
                                        <a class="block hover:text-gray-800 dark:hover:text-gray-100" href="https://github.com/bchiang7" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-6 w-6">
                                            </svg>
                                        </a>
                                    </li>
                                    <li class="text-xs shrink-0">
                                        <a class="block hover:text-gray-800 dark:hover:text-gray-100" href="https://www.linkedin.com/in/bchiang7/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <nav class="nav hidden lg:block mt-10 lg:mt-0 lg:ml-8" aria-label="In-page jump links">
                                <ul class="space-y-6">
                                    <li>
                                        <a class="group flex items-center py-3 active text-gray-600 dark:text-gray-300" href="#about">
                                            <span class="nav-indicator mr-4 h-px w-8 bg-gray-400 dark:bg-gray-600 transition-all group-hover:w-16 group-hover:bg-gray-500"></span>
                                            <span class="nav-text text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white">About</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="group flex items-center py-3 text-gray-600 dark:text-gray-300" href="#experience">
                                            <span class="nav-indicator mr-4 h-px w-8 bg-gray-400 dark:bg-gray-600 transition-all group-hover:w-16 group-hover:bg-gray-500"></span>
                                            <span class="nav-text text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white">Experience</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="group flex items-center py-3 text-gray-600 dark:text-gray-300" href="#projects">
                                            <span class="nav-indicator mr-4 h-px w-8 bg-gray-400 dark:bg-gray-600 transition-all group-hover:w-16 group-hover:bg-gray-500"></span>
                                            <span class="nav-text text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white">Projects</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </section>

                    <section class="lg:w-1/2 lg:py-24">
                        <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-colors duration-300">
                            <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-200">Main Content Area</h3>
                            <p class="mt-4 text-gray-600 dark:text-gray-300">This is where the main content will go. You can add various sections or elements here that align with the overall page.</p>
                        </div>
                    </section>
                </div>
            </div> */}
            {/* <div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-28 lg:py-20 transition-colors duration-300 dark:bg-gray-900 bg-white">
                <a href="#content" class="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">
                    Skip to Content
                </a>

                <div class="lg:flex lg:justify-between lg:gap-8">
                    <section class="lg:w-1/3 flex flex-col justify-center lg:min-h-screen text-center lg:text-left">
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
                                    <a class="block hover:text-gray-800 dark:hover:text-gray-100" href="https://github.com/bchiang7" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-6 w-6">
                                        </svg>
                                    </a>
                                </li>
                                <li class="text-xs shrink-0">
                                    <a class="block hover:text-gray-800 dark:hover:text-gray-100" href="https://www.linkedin.com/in/bchiang7/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section class="lg:w-1/3 lg:flex lg:flex-col lg:justify-center">
                        <nav class="nav mt-10 lg:mt-0" aria-label="In-page jump links">
                            <ul class="space-y-6">
                                <li>
                                    <a class="group flex items-center py-3 active text-gray-600 dark:text-gray-300" href="#about">
                                        <span class="nav-indicator mr-4 h-px w-8 bg-gray-400 dark:bg-gray-600 transition-all group-hover:w-16 group-hover:bg-gray-500"></span>
                                        <span class="nav-text text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white">About</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="group flex items-center py-3 text-gray-600 dark:text-gray-300" href="#experience">
                                        <span class="nav-indicator mr-4 h-px w-8 bg-gray-400 dark:bg-gray-600 transition-all group-hover:w-16 group-hover:bg-gray-500"></span>
                                        <span class="nav-text text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white">Experience</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="group flex items-center py-3 text-gray-600 dark:text-gray-300" href="#projects">
                                        <span class="nav-indicator mr-4 h-px w-8 bg-gray-400 dark:bg-gray-600 transition-all group-hover:w-16 group-hover:bg-gray-500"></span>
                                        <span class="nav-text text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white">Projects</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </section>

                    <section class="lg:w-1/3 lg:py-24">
                        <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-colors duration-300">
                            <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-200">Main Content Area</h3>
                            <p class="mt-4 text-gray-600 dark:text-gray-300">This is where the main content will go. You can add various sections or elements here that align with the overall page.</p>
                        </div>
                    </section>
                </div>
            </div> */}
            {/* mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 lg:px-24 lg:py-0 transition-colors duration-300 dark:bg-gray-900 bg-white */}
            <div class="mx-auto  px-8 sm:px-12 md:px-16 lg:px-40 xl:px-52 font-sans transition-colors duration-300 dark:bg-gray-900 bg-white">
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
                                    <a class="block hover:text-gray-800 dark:hover:text-gray-100" href="https://github.com/bchiang7" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-6 w-6">
                                        </svg>
                                    </a>
                                </li>
                                <li class="text-xs shrink-0">
                                    <a class="block hover:text-gray-800 dark:hover:text-gray-100" href="https://www.linkedin.com/in/bchiang7/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section class="lg:w-1/4 lg:sticky lg:top-[60px] lg:h-[calc(100vh-60px)] lg:flex lg:flex-col lg:justify-center">
                        <nav class="nav mt-10 lg:mt-0" aria-label="In-page jump links">
                            <ul class="space-y-6">
                                <li>
                                    <a class="group flex items-center py-3 active text-gray-600 dark:text-gray-300" href="#about">
                                        <span class="nav-indicator mr-4 h-px w-8 bg-gray-400 dark:bg-gray-600 transition-all group-hover:w-16 group-hover:bg-gray-500"></span>
                                        <span class="nav-text text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white">About</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="group flex items-center py-3 text-gray-600 dark:text-gray-300" href="#experience">
                                        <span class="nav-indicator mr-4 h-px w-8 bg-gray-400 dark:bg-gray-600 transition-all group-hover:w-16 group-hover:bg-gray-500"></span>
                                        <span class="nav-text text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white">Experience</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="group flex items-center py-3 text-gray-600 dark:text-gray-300" href="#projects">
                                        <span class="nav-indicator mr-4 h-px w-8 bg-gray-400 dark:bg-gray-600 transition-all group-hover:w-16 group-hover:bg-gray-500"></span>
                                        <span class="nav-text text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white">Projects</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </section>

                    <section class="lg:w-1/2 lg:h-[calc(100vh-60px)] lg:overflow-y-auto">
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
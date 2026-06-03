"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 mt-4 w-full md:mt-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* The main flex container */}
        <div className="flex h-14 items-center">
          
          {/* 1. Left aligned: Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* 2. Centered: Navigation Links */}
          <ul className="flex items-center justify-center gap-6 text-sm font-medium text-gray-300">
            <li>
              <Link href="#skills" className="transition hover:text-indigo-400">
                Skills
              </Link>
            </li>
            <li>
              <a className="group flex items-center gap-2 text-gray-400 transition-colors hover:text-white" href="#experience">
                <span className="h-1.5 w-1.5 rounded-full bg-gray-800 transition-all group-hover:bg-indigo-500 group-hover:shadow-[0_0_8px_rgba(99,102,241,0.8)]"></span>
                Experience
              </a>
            </li>
            <li>
              <Link href="#projects" className="transition hover:text-indigo-400">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="transition hover:text-indigo-400">
                Contact
              </Link>
            </li>
          </ul>

          {/* 3. Right aligned: GitHub Link */}
          <div className="flex flex-1 items-center justify-end">
            <a
              href="https://github.com/vineethyadav110"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm font-medium text-gray-300 transition hover:text-white"
            >
              <svg className="h-4 w-4 fill-current text-gray-400 transition group-hover:text-white" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
              </svg>
              {/* Hide the word 'GitHub' on tiny mobile screens to prevent crowding */}
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
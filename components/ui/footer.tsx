import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        
        {/* Horizontal Flex Layout */}
        <div className="flex flex-col items-center justify-between gap-8 py-10 md:flex-row md:py-12 border-t border-gray-800/30">
          
          {/* 1. Left: Copyright */}
          <div className="text-sm text-center md:text-left order-3 md:order-1">
            <p className="text-indigo-200/65">
              © 2026 Vineeth Yadav.<br className="hidden lg:block" /> All rights reserved.
            </p>
          </div>

          {/* 2. Center: Navigation Links (Data Node Style) */}
          <ul className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium order-1 md:order-2">
            <li>
              <a className="group flex items-center gap-2 text-gray-400 transition-colors hover:text-white" href="#skills">
                <span className="h-1.5 w-1.5 rounded-full bg-gray-800 transition-all group-hover:bg-indigo-500 group-hover:shadow-[0_0_8px_rgba(99,102,241,0.8)]"></span>
                Skills
              </a>
            </li>
            <li>
              <a className="group flex items-center gap-2 text-gray-400 transition-colors hover:text-white" href="#projects">
                <span className="h-1.5 w-1.5 rounded-full bg-gray-800 transition-all group-hover:bg-indigo-500 group-hover:shadow-[0_0_8px_rgba(99,102,241,0.8)]"></span>
                Projects
              </a>
            </li>
            <li>
              <a className="group flex items-center gap-2 text-gray-400 transition-colors hover:text-white" href="#contact">
                <span className="h-1.5 w-1.5 rounded-full bg-gray-800 transition-all group-hover:bg-indigo-500 group-hover:shadow-[0_0_8px_rgba(99,102,241,0.8)]"></span>
                Contact
              </a>
            </li>
          </ul>

          {/* 3. Right: Connect Icons with Brand Colors */}
          <ul className="flex flex-wrap items-center justify-center gap-6 text-sm order-2 md:order-3">
            <li>
              <a
                className="group flex items-center gap-2 text-gray-200 transition hover:text-white"
                href="https://github.com/vineethyadav110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
                <span className="font-medium">GitHub</span>
              </a>
            </li>
            <li>
              <a
                className="group flex items-center gap-2 text-[#0077b5] transition hover:opacity-80"
                href="https://linkedin.com/in/vineethyadav-ms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="font-medium">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                className="group flex items-center gap-2 text-[#EA4335] transition hover:opacity-80"
                href="mailto:vineethyadavk@gmail.com"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 10H8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2Zm-1 2.5-7 4.5-7-4.5V11l7 4.5 7-4.5v1.5Z" />
                </svg>
                <span className="font-medium">Email</span>
              </a>
            </li>
          </ul>

        </div>
      </div>
    </footer>
  );
}
import Link from "next/link";

export default function HeroHome() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          <div className="mx-auto max-w-3xl text-center">
            
            {/* The "Eyebrow" (Your Name) */}
            <div className="mb-6">
              <div className="inline-flex items-center rounded-full border border-gray-700 bg-gray-900/50 px-4 py-1.5 text-sm font-medium text-gray-300 backdrop-blur-md">
                <span className="mr-2 flex h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></span>
                Hi, I'm Vineeth Yadav
              </div>
            </div>

            {/* Main Headline - Clean, reliable Tailwind gradient */}
            <h1 className="pb-6 font-nacelle text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-indigo-300 to-gray-100 md:text-5xl lg:text-6xl">
              Architecting Scalable Intelligence.
            </h1>
            
            {/* Sub-headline */}
            <p className="mb-8 text-lg text-gray-400 md:text-xl">
              Data Analyst specializing in AI-driven analytics, complex relational data modeling, and translating enterprise datasets into actionable business strategies.
            </p>
            
            {/* Action Buttons - Completely stripped of the buggy template CSS */}
            <div className="mx-auto flex max-w-xs flex-col justify-center gap-4 sm:max-w-none sm:flex-row text-center">
              
              <Link
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-500 shadow-lg shadow-indigo-500/25"
              >
                View My Projects
              </Link>
              
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-gray-700 bg-gray-800/40 px-6 py-3 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
              >
                Let's Connect
              </Link>
              
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
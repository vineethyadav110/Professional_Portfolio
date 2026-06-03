import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative border-t border-gray-800/50 bg-gray-900/20 py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          
          {/* Header Column */}
          <div className="md:col-span-4">
            <h2 className="font-nacelle text-2xl font-semibold text-gray-200 md:text-3xl">
              Beyond the <span className="text-indigo-500">Code.</span>
            </h2>
            <p className="mt-2 text-gray-400">
              Who I am and what drives my engineering philosophy.
            </p>
          </div>

          {/* Bio Column */}
          <div className="space-y-6 text-gray-300 md:col-span-8">
            <p className="text-lg leading-relaxed">
              With three years of professional experience at the intersection of data engineering and analytics, I specialize in transforming raw enterprise data into intelligent, automated systems. My core focus is building robust cloud-based pipelines and deploying AI agents that solve complex business bottlenecks.
            </p>
            <p className="text-lg leading-relaxed">
              After earning my Master's degree in Data Analytics, I developed a deep appreciation for the entire data lifecycle—from database architecture to final dashboard deployment. Beyond my daily enterprise work, I actively volunteer my technical skills to build software and data initiatives for community-driven foundations, ensuring technology creates a positive, tangible impact.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not configuring Azure environments or writing advanced SQL CTEs, you can usually find me at the gym fine-tuning my weight training routine, or exploring the latest developments in generative AI.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
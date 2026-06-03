import Image from "next/image";

export default function Features() {
  return (
    <section id="projects" className="relative py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
          <h2 className="font-nacelle text-3xl font-semibold text-gray-200 md:text-4xl pb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400">
            Real-world applications of data engineering and AI architecture.
          </p>
        </div>

        {/* Featured Projects List */}
        <div className="space-y-16">
          
          {/* Project 1: Digital Pharmacy AI */}
          <div className="grid gap-8 md:grid-cols-12 items-center">
            <div className="md:col-span-6 lg:col-span-5">
              <div className="inline-flex items-center rounded-full border border-gray-700 bg-gray-900/50 px-3 py-1 text-xs font-medium text-indigo-400 mb-4">
                AI Agent Development
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-gray-200">
                Digital Pharmacy AI Assistant
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Built a conversational AI agent designed to safely recommend over-the-counter pharmacy products based on user symptoms. To make it enterprise-ready, I implemented strict healthcare compliance logic within a RAG architecture, ensuring responses are accurate, empathetic, and completely free of hallucinations.
              </p>
              <ul className="flex flex-wrap gap-2 text-sm text-gray-300">
                <li className="rounded bg-gray-800 px-2 py-1">Node.js</li>
                <li className="rounded bg-gray-800 px-2 py-1">LangChain</li>
                <li className="rounded bg-gray-800 px-2 py-1">ChromaDB</li>
              </ul>
            </div>
            
            {/* Interactive Image Container */}
            <div className="md:col-span-6 lg:col-span-7">
              <div className="group relative overflow-hidden rounded-2xl border border-gray-700 bg-gray-900 shadow-xl">
                <Image 
                  src="/images/project-pharmacy.png" 
                  alt="Digital Pharmacy AI Chat Interface" 
                  width={800} 
                  height={600} 
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* The Hidden Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex gap-4 translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                    <a href="https://github.com/vineethyadav110/Digital-Pharmacy-AI-Agent/blob/main/app.py" target="_blank" rel="noreferrer" className="rounded-lg border border-gray-600 bg-gray-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700">
                      View Source Code
                    </a>
                    <a href="#" target="_blank" rel="noreferrer" className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-500">
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: Claims Analysis */}
          <div className="grid gap-8 md:grid-cols-12 items-center">
            <div className="md:col-span-6 md:order-2 lg:col-span-5 lg:col-start-8">
              <div className="inline-flex items-center rounded-full border border-gray-700 bg-gray-900/50 px-3 py-1 text-xs font-medium text-indigo-400 mb-4">
                Data Pipeline Architecture
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-gray-200">
                E-commerce Claims Analysis
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Designed an end-to-end data pipeline that connects the dots between user web traffic and financial outcomes. By mapping simulated web sessions to insurance claims data, this project uncovers hidden drop-off points, demonstrating how clean data infrastructure can directly impact a company's bottom line.
              </p>
              <ul className="flex flex-wrap gap-2 text-sm text-gray-300">
                <li className="rounded bg-gray-800 px-2 py-1">Data Modeling</li>
                <li className="rounded bg-gray-800 px-2 py-1">SQL</li>
                <li className="rounded bg-gray-800 px-2 py-1">Power BI</li>
              </ul>
            </div>
            
            {/* Interactive Image Container */}
            <div className="md:col-span-6 md:order-1 lg:col-span-7">
              <div className="group relative overflow-hidden rounded-2xl border border-gray-700 bg-gray-900 shadow-xl">
                <Image 
                  src="/images/project-claims.png" 
                  alt="Architecture diagram for E-commerce Claims Pipeline" 
                  width={800} 
                  height={600} 
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* The Hidden Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex gap-4 translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                    <a href="https://github.com/vineethyadav110/health-ecommerce-cart-analysis/blob/main/app.py" target="_blank" rel="noreferrer" className="rounded-lg border border-gray-600 bg-gray-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700">
                      View Source Code
                    </a>
                    <a href="#" target="_blank" rel="noreferrer" className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-500">
                      View Dashboard
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3: Airflow HR Pipeline */}
          <div className="grid gap-8 md:grid-cols-12 items-center">
            <div className="md:col-span-6 lg:col-span-5">
              <div className="inline-flex items-center rounded-full border border-gray-700 bg-gray-900/50 px-3 py-1 text-xs font-medium text-indigo-400 mb-4">
                ETL Orchestration
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-gray-200">
                Automated HR Data Pipeline
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                This project is an automated Data Engineering pipeline built with Apache Airflow. It orchestrates the end-to-end extraction, screening, scheduling, and onboarding of job candidates. By replacing manual HR tracking with a scheduled Directed Acyclic Graph (DAG), 
                this pipeline ensures data integrity, eliminates lost candidate records, and accelerates the hiring lifecycle.
              </p>
              <ul className="flex flex-wrap gap-2 text-sm text-gray-300">
                <li className="rounded bg-gray-800 px-2 py-1">Apache Airflow</li>
                <li className="rounded bg-gray-800 px-2 py-1">Python</li>
                <li className="rounded bg-gray-800 px-2 py-1">Snowflake</li>
              </ul>
            </div>
            
            {/* Interactive Image Container */}
            <div className="md:col-span-6 lg:col-span-7">
              <div className="group relative overflow-hidden rounded-2xl border border-gray-700 bg-gray-900 shadow-xl">
                <Image 
                  src="/images/project-airflow.png" 
                  alt="Apache Airflow DAG Graph View" 
                  width={800} 
                  height={600} 
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* The Hidden Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex gap-4 translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                    <a href="https://github.com/vineethyadav110/Airflow-HR-Pipeline/blob/main/%3Adags/airflow_dag.py" target="_blank" rel="noreferrer" className="rounded-lg border border-gray-600 bg-gray-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700">
                      View Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
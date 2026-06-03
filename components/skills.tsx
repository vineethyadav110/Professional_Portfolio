export default function Skills() {
  return (
    <section id="skills" className="relative py-12 md:py-20 border-t border-gray-800/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="font-nacelle text-3xl font-semibold text-gray-200 md:text-4xl pb-4">
            Technical Arsenal
          </h2>
          <p className="text-xl text-gray-400">
            The core competencies I use to build intelligent data systems.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          
          <div className="rounded-2xl bg-gray-900/50 p-6 border border-gray-800 transition hover:border-indigo-500/50 hover:bg-gray-800/50">
            <h3 className="mb-2 text-xl font-semibold text-gray-200">Data Engineering</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Architecting the backbone of data systems. I build resilient ETL pipelines, optimize complex queries, and design scalable databases that keep enterprise data clean, secure, and highly accessible.
              <br/><br/>
              <span className="text-indigo-400 font-medium">PostgreSQL • Snowflake • Advanced SQL</span>
            </p>
          </div>

          <div className="rounded-2xl bg-gray-900/50 p-6 border border-gray-800 transition hover:border-indigo-500/50 hover:bg-gray-800/50">
            <h3 className="mb-2 text-xl font-semibold text-gray-200">AI Architecture</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Designing AI that actually works in production. I build intelligent RAG systems using vector databases, focusing on strict compliance and guardrails to completely eliminate model hallucinations.
              <br/><br/>
              <span className="text-indigo-400 font-medium">Python • LangGraph • Vector Databases</span>
            </p>
          </div>

          <div className="rounded-2xl bg-gray-900/50 p-6 border border-gray-800 transition hover:border-indigo-500/50 hover:bg-gray-800/50">
            <h3 className="mb-2 text-xl font-semibold text-gray-200">Analytics & BI</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Turning raw numbers into the full story. I create enterprise-grade dashboards that help non-technical stakeholders visualize trends and make confident, data-driven decisions.
              <br/><br/>
              <span className="text-indigo-400 font-medium">Tableau • Microsoft Azure • Pandas</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
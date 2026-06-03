export default function Experience() {
  return (
    <section id="experience" className="relative py-12 md:py-20 border-t border-gray-800/30 bg-gray-900/20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <h2 className="font-nacelle text-3xl font-semibold text-gray-200 md:text-4xl pb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-400">
            Delivering measurable enterprise impact through data and AI.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="mx-auto max-w-3xl">
          <div className="relative border-l-2 border-gray-800 pl-8 md:pl-0 md:border-l-0">
            
            {/* Center Line for Desktop (Now stretches full length!) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 -translate-x-1/2"></div>

            {/* 1. Tenet Healthcare Role */}
            <div className="relative mb-12 md:flex md:justify-between md:items-start w-full group">
              <div className="hidden md:block absolute left-1/2 top-2 w-4 h-4 rounded-full bg-gray-900 border-2 border-gray-600 -translate-x-1/2 z-10 transition-colors group-hover:border-indigo-500"></div>
              <div className="md:hidden absolute -left-[37px] top-2 w-4 h-4 rounded-full bg-gray-900 border-2 border-gray-600 z-10"></div>

              <div className="md:w-5/12 md:text-right pr-8 mb-4 md:mb-0 pt-1">
                <h3 className="text-xl font-bold text-gray-200">Tenet Healthcare</h3>
                <div className="text-gray-300 font-medium mb-1">Data Analyst</div>
                <div className="text-sm text-gray-500 font-mono">August 2025 - Present</div>
              </div>

              <div className="md:w-5/12 pl-0 md:pl-8">
                <div className="rounded-2xl bg-gray-800/40 p-6 border border-gray-700/50 transition hover:border-indigo-500/50">
                  <ul className="space-y-4 text-sm text-gray-300 leading-relaxed list-outside ml-4">
                    <li className="relative before:absolute before:-left-4 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray-600 group-hover:before:bg-indigo-500 transition-colors">
                      <strong className="text-gray-200">BI & Dashboards:</strong> Built Power BI dashboards via Azure SQL, saving <span className="text-indigo-400">10+ hours/week</span> in manual reporting.
                    </li>
                    <li className="relative before:absolute before:-left-4 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray-600 group-hover:before:bg-indigo-500 transition-colors">
                      <strong className="text-gray-200">ETL Automation:</strong> Architected automated data pipelines using <span className="text-indigo-400">Python, Airflow, and Azure Data Factory</span>.
                    </li>
                    <li className="relative before:absolute before:-left-4 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray-600 group-hover:before:bg-indigo-500 transition-colors">
                      <strong className="text-gray-200">Machine Learning:</strong> Applied Scikit-learn models to identify system bottlenecks, improving analysis speed by <span className="text-indigo-400">30%</span>.
                    </li>
                    <li className="relative before:absolute before:-left-4 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray-600 group-hover:before:bg-indigo-500 transition-colors">
                      <strong className="text-gray-200">Query Optimization:</strong> Optimized T-SQL queries and Azure Synapse architecture, boosting performance by <span className="text-indigo-400">35%</span>.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2. CVS Role */}
            <div className="relative mb-12 md:flex md:justify-between md:items-start w-full group">
              <div className="hidden md:block absolute left-1/2 top-2 w-4 h-4 rounded-full bg-gray-900 border-2 border-gray-600 -translate-x-1/2 z-10 transition-colors group-hover:border-indigo-500"></div>
              <div className="md:hidden absolute -left-[37px] top-2 w-4 h-4 rounded-full bg-gray-900 border-2 border-gray-600 z-10"></div>

              <div className="md:w-5/12 md:text-right pr-8 mb-4 md:mb-0 pt-1">
                <h3 className="text-xl font-bold text-gray-200">CVS Health | Chicago, IL</h3>
                <div className="text-gray-300 font-medium mb-1">Clinical Analyst Intern</div>
                <div className="text-sm text-gray-500 font-mono">November 2024 - February 2025</div>
              </div>

              <div className="md:w-5/12 pl-0 md:pl-8">
                <div className="rounded-2xl bg-gray-800/40 p-6 border border-gray-700/50 transition hover:border-indigo-500/50">
                  <ul className="space-y-4 text-sm text-gray-300 leading-relaxed list-outside ml-4">
                    <li className="relative before:absolute before:-left-4 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray-600 group-hover:before:bg-indigo-500 transition-colors">
                      <strong className="text-gray-200"></strong> Queried and transformed healthcare datasets within <span className="text-indigo-400">AWS Redshift and Snowflake, </span>  utilizing Python (Pandas,
Scikit-learn) to map patient behavior trends and reduce query execution time by 25%
                    </li>
                    <li className="relative before:absolute before:-left-4 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray-600 group-hover:before:bg-indigo-500 transition-colors">
                      <strong className="text-gray-200">Process Automation:</strong> Built repeatable Power Query (M) transformations and <span className="text-indigo-400">Python pipelines </span>to clean, process, and automate the reporting
                        of large-scale clinical datasets, identifying <span className="text-indigo-400">15+ operational gaps.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. Practo */}
            <div className="relative md:flex md:justify-between md:items-start w-full group">
              <div className="hidden md:block absolute left-1/2 top-2 w-4 h-4 rounded-full bg-gray-900 border-2 border-gray-600 -translate-x-1/2 z-10 transition-colors group-hover:border-indigo-500"></div>
              <div className="md:hidden absolute -left-[37px] top-2 w-4 h-4 rounded-full bg-gray-900 border-2 border-gray-600 z-10"></div>

              <div className="md:w-5/12 md:text-right pr-8 mb-4 md:mb-0 pt-1">
                <h3 className="text-xl font-bold text-gray-200">Practo | Hyderabad, India</h3>
                <div className="text-gray-300 font-medium mb-1">IT Claims Analyst</div>
                <div className="text-sm text-gray-500 font-mono">July 2021 - July 2023</div>
              </div>

              <div className="md:w-5/12 pl-0 md:pl-8">
                <div className="rounded-2xl bg-gray-800/40 p-6 border border-gray-700/50 transition hover:border-indigo-500/50">
                  <ul className="space-y-4 text-sm text-gray-300 leading-relaxed list-outside ml-4">
                    <li className="relative before:absolute before:-left-4 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray-600 group-hover:before:bg-indigo-500 transition-colors">
                      <strong className="text-gray-200"></strong> Analyzed <span className="text-indigo-400">50,000+ </span> records and partnered directly with domain SMEs to define metrics, validate results, and resolve
                            underlying data issues, mitigating <span className="text-indigo-400">compliance risks by 30%</span>.
                    </li>
                    <li className="relative before:absolute before:-left-4 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray-600 group-hover:before:bg-indigo-500 transition-colors">
                      <strong className="text-gray-200"></strong> Applied statistical analysis and data modeling <span className="text-indigo-400">(Python, R) </span> to conduct pattern analysis, supporting fraud
                        detection, risk assessment, and predictive decision-making.
                    </li>
                    <li className="relative before:absolute before:-left-4 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray-600 group-hover:before:bg-indigo-500 transition-colors">
                      <strong className="text-gray-200"></strong> Developed dashboards and reports <span className="text-indigo-400">(Tableau, Excel)</span> to monitor KPIs such as claim volumes, approval/denial rates, and
                            processing turnaround times.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
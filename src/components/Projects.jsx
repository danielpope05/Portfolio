export default function Projects() {
  return (
    <section id="projects" className="py-12 px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Risk Engine */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 transition">
            <h3 className="text-xl font-semibold text-white mb-3">
              Risk-Driven Threat Prioritization Engine
            </h3>

            <p className="text-slate-300 mb-4">
              Built a likelihood × impact risk model using 8+ weighted signals
              (CVSS, exploitability, exposure, detection gaps, business
              criticality), generating 0–100 scores to prioritize vulnerabilities.
            </p>

            <ul className="text-slate-300 text-sm mb-4 list-disc pl-5 space-y-1">
              <li>Developed explainable scoring with 10+ weighted drivers and breakdown analytics</li>
              <li>Exposed 5+ RESTful API endpoints using FastAPI</li>
              <li>Designed normalized relational schema with SQLAlchemy ORM and SQLite</li>
              <li>Automated validation with Pytest unit tests</li>
            </ul>

            <p className="text-sm text-blue-400 font-medium">
              Python • FastAPI • SQLAlchemy • SQLite • Pytest • REST APIs
            </p>
          </div>

          {/* Roomble */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 transition">
            <h3 className="text-xl font-semibold text-white mb-3">
              Roomble — Tinder-Style Roommate Matcher (QHacks)
            </h3>

            <p className="text-slate-300 mb-4">
              Developed a Tinder-style roommate matching application as a
              Full-Stack Developer in a multidisciplinary hackathon team.
            </p>

            <ul className="text-slate-300 text-sm mb-4 list-disc pl-5 space-y-1">
              <li>Engineered swipe-based matching logic</li>
              <li>Implemented secure form validation and authentication</li>
              <li>Built responsive UI components for smooth user experience</li>
              <li>Worked in Git-based collaborative development environment</li>
            </ul>

            <p className="text-sm text-blue-400 font-medium">
              Flutter • Dart • Firebase • Git • UI/UX Design
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
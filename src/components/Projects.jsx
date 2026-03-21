export default function Projects() {
  return (
    <section id="projects" className="py-20 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Risk Engine */}
          <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Risk-Driven Threat Prioritization Engine
            </h3>

            <p className="text-gray-600 mb-4">
              Built a likelihood × impact risk model using 8+ weighted signals (CVSS, exploitability, exposure, detection gaps, business criticality), generating 0–100 scores to prioritize vulnerabilities.
            </p>

            <ul className="text-gray-600 text-sm mb-4 list-disc pl-5 space-y-1">
              <li>Developed explainable scoring with 10+ weighted drivers and breakdown analytics</li>
              <li>Exposed 5+ RESTful API endpoints using FastAPI</li>
              <li>Designed normalized relational schema with SQLAlchemy ORM and SQLite</li>
              <li>Automated validation with Pytest unit tests</li>
            </ul>

            <p className="text-sm text-gray-500">
              Python • FastAPI • SQLAlchemy • SQLite • Pytest • REST APIs
            </p>
          </div>

          {/* Roomble */}
          <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Roomble — Tinder-Style Roommate Matcher (QHacks)
            </h3>

            <p className="text-gray-600 mb-4">
              Developed a Tinder-style roommate matching application as a Full-Stack Developer in a multidisciplinary hackathon team.
            </p>

            <ul className="text-gray-600 text-sm mb-4 list-disc pl-5 space-y-1">
              <li>Engineered swipe-based matching logic</li>
              <li>Implemented secure form validation and authentication</li>
              <li>Built responsive UI components for smooth user experience</li>
              <li>Worked in Git-based collaborative development environment</li>
            </ul>

            <p className="text-sm text-gray-500">
              Flutter • Dart • Firebase • Git • UI/UX Design
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
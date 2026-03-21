export default function Projects() {
  return (
    <section id="projects" className="py-20 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              LogLens Security Monitor
            </h3>
            <p className="text-gray-600 mb-4">
              A security monitoring tool that parses logs and helps detect suspicious activity.
            </p>
            <p className="text-sm text-gray-500">
              Python • FastAPI • Security Monitoring
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Threat Prioritization Engine
            </h3>
            <p className="text-gray-600 mb-4">
              A risk scoring system that helps prioritize vulnerabilities based on severity and impact.
            </p>
            <p className="text-sm text-gray-500">
              Python • SQL • Risk Analysis
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Secure Login System
            </h3>
            <p className="text-gray-600 mb-4">
              A login and authentication project focused on secure sessions and user protection.
            </p>
            <p className="text-sm text-gray-500">
              React • Authentication • Web Security
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
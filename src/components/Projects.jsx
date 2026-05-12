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
              Built a backend risk scoring system that prioritizes vulnerabilities
              using likelihood, impact, exploitability, exposure, detection gaps,
              and business criticality.
            </p>

            <ul className="text-slate-300 text-sm mb-4 list-disc pl-5 space-y-1">
              <li>Designed explainable 0–100 risk scoring with weighted drivers and breakdown analytics</li>
              <li>Exposed RESTful API endpoints for vulnerability intake, scoring, and reporting</li>
              <li>Created normalized database models using SQLAlchemy ORM and SQLite</li>
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
              Developed a swipe-based roommate matching app as a Full-Stack
              Developer in a multidisciplinary QHacks hackathon team.
            </p>

            <ul className="text-slate-300 text-sm mb-4 list-disc pl-5 space-y-1">
              <li>Engineered matching logic for roommate compatibility and user preferences</li>
              <li>Implemented secure form validation and authentication flows</li>
              <li>Built responsive UI components for a smooth mobile-first experience</li>
              <li>Collaborated using Git in a fast-paced team development environment</li>
            </ul>

            <p className="text-sm text-blue-400 font-medium">
              Flutter • Dart • Firebase • Git • UI/UX Design
            </p>
          </div>

          {/* Portfolio Website */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 transition">
            <h3 className="text-xl font-semibold text-white mb-3">
              Personal Portfolio Website
            </h3>

            <p className="text-slate-300 mb-4">
              Developed and maintained a responsive portfolio website to showcase
              technical projects, skills, certifications, and experience using
              modern frontend development practices.
            </p>

            <ul className="text-slate-300 text-sm mb-4 list-disc pl-5 space-y-1">
              <li>Built 8+ reusable React components and structured sections for scalable and maintainable development</li>
              <li>Designed and implemented responsive UI layouts optimized for desktop and mobile usability</li>
              <li>Managed version control and continuous project updates using Git and GitHub workflows</li>
              <li>Organized technical content and project presentation to improve clarity, accessibility, and user navigation</li>
            </ul>

            <p className="text-sm text-blue-400 font-medium">
              React • JavaScript • Tailwind CSS • HTML • CSS • Vite • Git • GitHub • Vercel
            </p>
          </div>

          {/* Conference Management System */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 transition">
            <h3 className="text-xl font-semibold text-white mb-3">
              Conference Management Database System
            </h3>

            <p className="text-slate-300 mb-4">
              Designed and developed a conference management system to support
              attendee registration, session scheduling, speaker management,
              and business requirement analysis through a structured relational
              database and web interface.
            </p>

            <ul className="text-slate-300 text-sm mb-4 list-disc pl-5 space-y-1">
              <li>Analyzed business and user requirements to design an efficient conference management solution</li>
              <li>Designed normalized relational database schemas using MySQL to improve data integrity and reduce redundancy</li>
              <li>Developed SQL queries and backend functionality for registrations, scheduling, reporting, and data retrieval</li>
              <li>Built and maintained website interface components while collaborating through Git-based version control workflows</li>
            </ul>

            <p className="text-sm text-blue-400 font-medium">
              PHP • MySQL • SQL • HTML • CSS • Git • Database Design • Relational Databases • ER Diagrams
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}



// export default function Projects() {
//   return (
//     <section id="projects" className="py-12 px-8 bg-slate-950">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center text-white mb-12">
//           Projects
//         </h2>

//         <div className="grid md:grid-cols-2 gap-8">

//           {/* Risk Engine */}
//           <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 transition">
//             <h3 className="text-xl font-semibold text-white mb-3">
//               Risk-Driven Threat Prioritization Engine
//             </h3>

//             <p className="text-slate-300 mb-4">
//               Built a likelihood × impact risk model using 8+ weighted signals
//               (CVSS, exploitability, exposure, detection gaps, business
//               criticality), generating 0–100 scores to prioritize vulnerabilities.
//             </p>

//             <ul className="text-slate-300 text-sm mb-4 list-disc pl-5 space-y-1">
//               <li>Developed explainable scoring with 10+ weighted drivers and breakdown analytics</li>
//               <li>Exposed 5+ RESTful API endpoints using FastAPI</li>
//               <li>Designed normalized relational schema with SQLAlchemy ORM and SQLite</li>
//               <li>Automated validation with Pytest unit tests</li>
//             </ul>

//             <p className="text-sm text-blue-400 font-medium">
//               Python • FastAPI • SQLAlchemy • SQLite • Pytest • REST APIs
//             </p>
//           </div>

//           {/* Roomble */}
//           <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 transition">
//             <h3 className="text-xl font-semibold text-white mb-3">
//               Roomble — Tinder-Style Roommate Matcher (QHacks)
//             </h3>

//             <p className="text-slate-300 mb-4">
//               Developed a Tinder-style roommate matching application as a
//               Full-Stack Developer in a multidisciplinary hackathon team.
//             </p>

//             <ul className="text-slate-300 text-sm mb-4 list-disc pl-5 space-y-1">
//               <li>Engineered swipe-based matching logic</li>
//               <li>Implemented secure form validation and authentication</li>
//               <li>Built responsive UI components for smooth user experience</li>
//               <li>Worked in Git-based collaborative development environment</li>
//             </ul>

//             <p className="text-sm text-blue-400 font-medium">
//               Flutter • Dart • Firebase • Git • UI/UX Design
//             </p>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }





// {
//   title: "Personal Portfolio Website",
//   description:
//     "Developed and maintained a responsive portfolio website to showcase technical projects, skills, certifications, and experience using modern frontend development practices.",

//   points: [
//     "Built 8+ reusable React components and structured sections for scalable and maintainable development",
//     "Designed and implemented responsive UI layouts optimized for desktop and mobile usability",
//     "Managed version control and continuous project updates using Git and GitHub workflows",
//     "Organized technical content and project presentation to improve clarity, accessibility, and user navigation",
//   ],

//   tools:
//     "React • JavaScript • Tailwind CSS • HTML • CSS • Vite • Git • GitHub • Vercel",
// },


// {
//   title: "Conference Management Database System",
//   description:
//     "Designed and developed a conference management system to support attendee registration, session scheduling, speaker management, and business requirement analysis through a structured relational database and web interface.",

//   points: [
//     "Analyzed business and user requirements to design an efficient conference management solution",
//     "Designed normalized relational database schemas using MySQL to improve data integrity and reduce redundancy",
//     "Developed SQL queries and backend functionality for registrations, scheduling, reporting, and data retrieval",
//     "Built and maintained website interface components while collaborating through Git-based version control workflows",
//   ],

//   tools:
//     "PHP • MySQL • SQL • HTML • CSS • Git • Database Design • Relational Databases • ER Diagrams",
// },
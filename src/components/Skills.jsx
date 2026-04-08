export default function Skills() {
  const skillGroups = [
    {
      title: "Programming",
      skills: ["Python", "Java", "C/C++", "C#", "JavaScript", "PHP", "SQL"],
    },
    {
      title: "Frontend",
      skills: ["React", "JSX", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      title: "Backend & APIs",
      skills: ["FastAPI", "Flask", "Node.js", "Express", "REST APIs", "SQLAlchemy"],
    },
    {
      title: "Security",
      skills: ["Wireshark", "Nmap", "Splunk", "TryHackMe", "Linux", "Kali Linux"],
    },
    {
      title: "Testing",
      skills: ["Pytest", "Selenium", "Playwright"],
    },
    {
      title: "Mobile",
      skills: ["Flutter", "Dart"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "npm", "Vite", "Docker", "Jira", "Figma"],
    },
    {
      title: "Deployment & Libraries",
      skills: ["Vercel", "React Icons"],
    },
    {
      title: "Systems",
      skills: ["Bash", "PowerShell", "VirtualBox", "VMware", "SQLite"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Skills
        </h2>

        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
          A growing toolkit across software development, cybersecurity, systems, and modern web technologies.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 transition"
            >
              <h3 className="text-lg font-semibold text-blue-400 mb-4">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm bg-slate-800 text-slate-200 border border-slate-700 hover:border-blue-500 hover:text-white transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}





// export default function Skills() {
//   const skillGroups = [
//     {
//       title: "Programming Languages",
//       skills: ["Python", "Java", "C/C++", "C#", "JavaScript", "SQL"],
//     },
//     {
//       title: "Frontend Development",
//       skills: ["React", "JSX", "HTML", "CSS", "Tailwind CSS"],
//     },
//     {
//       title: "Backend & APIs",
//       skills: ["FastAPI", "Flask", "Node.js", "Express", "REST APIs", "SQLAlchemy"],
//     },
//     {
//       title: "Databases",
//       skills: ["SQLite"],
//     },
//     {
//       title: "Security & Networking",
//       skills: ["Wireshark", "Nmap", "Splunk", "TryHackMe", "Linux", "Kali Linux"],
//     },
//     {
//       title: "Testing & Automation",
//       skills: ["Pytest", "Playwright"],
//     },
//     {
//       title: "Mobile Development",
//       skills: ["Flutter", "Dart"],
//     },
//     {
//       title: "Developer Tools",
//       skills: ["Git", "GitHub", "VS Code", "npm", "Vite", "Docker", "Jira", "Figma"],
//     },
//     {
//       title: "Deployment & UI Libraries",
//       skills: ["Vercel", "React Icons"],
//     },
//     {
//       title: "Systems & Virtualization",
//       skills: ["Bash", "PowerShell", "VirtualBox", "VMware"],
//     },
//   ]

//   return (
//     <section id="skills" className="py-16 px-8 bg-gray-50">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
//           Skills
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {skillGroups.map((group) => (
//             <div
//               key={group.title}
//               className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition"
//             >
//               <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                 {group.title}
//               </h3>

//               <div className="flex flex-wrap gap-2">
//                 {group.skills.map((skill) => (
//                   <span
//                     key={skill}
//                     className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
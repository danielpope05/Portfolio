export default function Skills() {
  const skillGroups = [
    {
      title: "Programming",
      skills: ["Python", "Java", "C/C++", "C#", "JavaScript"],
    },
    {
      title: "Web Development",
      skills: ["React", "Node.js", "Express", "HTML"],
    },
    {
      title: "Backend & APIs",
      skills: ["FastAPI", "Flask", "REST APIs", "SQLAlchemy"],
    },
    {
      title: "Databases",
      skills: ["SQL", "SQLite"],
    },
    {
      title: "Security & Networking",
      skills: ["Wireshark", "Nmap", "Splunk", "TryHackMe"],
    },
    {
      title: "Testing & Automation",
      skills: ["Pytest", "Playwright"],
    },
    {
      title: "Mobile Development",
      skills: ["Flutter", "Dart"],
    },
    {
      title: "Systems & Scripting",
      skills: ["Bash", "PowerShell", "Linux", "Kali Linux"],
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "VirtualBox",
        "VMware",
        "VS Code",
        "Jira",
        "Figma",
      ],
    },
  ]

  return (
    <section id="skills" className="py-16 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm"
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
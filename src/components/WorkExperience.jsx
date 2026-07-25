export default function WorkExperience() {
  const experiences = [
    {
      title: "Activity Leader",
      organization: "Centre of English Studies (CES)",
      location: "Toronto, ON",
      date: "June 2026 – July 2026",
      highlights: [
        "Guided and supervised 100+ international students during cultural and recreational activities across Toronto.",
        "Collaborated with 24+ activity leaders and external partners to deliver 25+ activities for over 400 international students.",
        "Applied established safety and incident-response procedures to manage emergencies, transportation delays, and logistical challenges while ensuring students remained safe and on schedule.",
        "Promoted English language development and cultural immersion through daily conversations.",
        "Tracked attendance, allergies, medical considerations, and participant accommodations.",
      ],
    },
  ];

  return (
    <section id="work-experience" className="py-20 px-8 bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Work Experience
        </h2>

        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
          Professional experience supporting international students through
          leadership, communication, safety, and program coordination.
        </p>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 transition"
            >
              <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {exp.title}
                  </h3>

                  <p className="text-sm text-slate-400 mt-1">
                    {exp.organization}
                  </p>

                  <p className="text-sm text-slate-500">
                    {exp.location}
                  </p>
                </div>

                <span className="text-sm text-blue-400 font-medium">
                  {exp.date}
                </span>
              </div>

              <ul className="list-disc pl-5 mt-4 text-sm text-slate-300 space-y-2 marker:text-blue-400">
                {exp.highlights.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
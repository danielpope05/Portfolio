export default function Experience() {
  const experiences = [
    {
      title: "Orientation Coordinator",
      organization: "COMPSA (Computing Students’ Association), Queen’s University",
      date: "Feb 2024 – Sep 2024",
      highlights: [
        "Led logistics, scheduling, and cross-team coordination for 40+ orientation events",
        "Supported onboarding experience for 200+ incoming computing students",
        "Coordinated with 30+ student leaders to deliver programming, group activities, and campus tours",
      ],
    },
    {
      title: "First-Year Representative",
      organization: "BlackCompSci Club, Queen’s University",
      date: "Oct 2023 – Sep 2024",
      highlights: [
        "Represented 50+ first-year students, delivering structured feedback to executive team",
        "Organized 20+ social and technical events to increase student engagement",
        "Managed event logistics, promotion, and community outreach initiatives",
      ],
    },
    {
      title: "Youth Leadership Retreat Volunteer",
      organization: "YMCA Cedar Glen Outdoor Centre (YMCA of Greater Toronto)",
      date: "Mar 2023",
      highlights: [
        "Contributed to building 20+ garden boxes for the Educational Farm & Apiary",
        "Supported sustainability efforts promoting pollination, biodiversity, and environmental education",
        "Participated in leadership workshops focused on teamwork and community impact",
      ],
    },
    {
      title: "Community Event Lead",
      organization: "YMCA of Greater Toronto",
      date: "Dec 2022",
      highlights: [
        "Planned and executed a community holiday event and toy drive initiative",
        "Led coordination for a large-scale community program serving families",
        "Supported collection and distribution of 100+ toys for children and families",
      ],
    },
    {
      title: "Camp Operations Volunteer",
      organization: "YMCA Camp Pine Crest",
      date: "Apr 2022",
      highlights: [
        "Prepared camp facilities for spring and summer programming",
        "Cleared and maintained 3+ km of trails across campgrounds",
        "Handled and organized 100+ pieces of equipment including canoes, kayaks, and program tools",
        "Managed inventory, setup, and maintenance of activity spaces and equipment",
      ],
    },
    {
      title: "Peer Leadership Facilitator",
      organization: "NOW Program, Queen’s University",
      date: "Apr 2022 – Sep 2022",
      highlights: [
        "Supported 30+ international students through onboarding and mentorship",
        "Delivered 10+ presentations and facilitated orientation sessions",
        "Provided academic and social guidance to ease cultural and academic transition",
      ],
    },
    {
      title: "Peer Tutor",
      organization: "Licence 2 Learn",
      date: "Sep 2022 – Apr 2023",
      highlights: [
        "Tutored 5+ students in English, Math, and French",
        "Helped students achieve an average grade improvement of 20%",
        "Delivered structured, personalized learning sessions to improve academic performance",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-8 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Experience
        </h2>

        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
          Leadership, mentorship, community engagement, and hands-on experience across academic and volunteer roles.
        </p>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 transition"
            >
              <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                <h3 className="text-xl font-semibold text-white">
                  {exp.title}
                </h3>

                <span className="text-sm text-blue-400 font-medium">
                  {exp.date}
                </span>
              </div>

              <p className="text-sm text-slate-400 mb-4">
                {exp.organization}
              </p>

              <ul className="list-disc pl-5 text-sm text-slate-300 space-y-2 marker:text-blue-400">
                {exp.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


// export default function Experience() {
//   const experiences = [
//     {
//       title: "Orientation Coordinator",
//       organization: "COMPSA (Computing Students’ Association), Queen’s University",
//       date: "Feb 2024 – Sep 2024",
//       highlights: [
//         "Led logistics, scheduling, and cross-team coordination for 40+ orientation events",
//         "Supported onboarding experience for 200+ incoming computing students",
//         "Coordinated with 30+ student leaders to deliver programming, group activities, and campus tours",
//       ],
//     },
//     {
//       title: "First-Year Representative",
//       organization: "BlackCompSci Club, Queen’s University",
//       date: "Oct 2023 – Sep 2024",
//       highlights: [
//         "Represented 50+ first-year students, delivering structured feedback to executive team",
//         "Organized 20+ social and technical events to increase student engagement",
//         "Managed event logistics, promotion, and community outreach initiatives",
//       ],
//     },
//     {
//       title: "Youth Leadership Retreat Volunteer",
//       organization: "YMCA Cedar Glen Outdoor Centre (YMCA of Greater Toronto)",
//       date: "Mar 2023",
//       highlights: [
//         "Contributed to building 20+ garden boxes for the Educational Farm & Apiary",
//         "Supported sustainability efforts promoting pollination, biodiversity, and environmental education",
//         "Participated in leadership workshops focused on teamwork and community impact",
//       ],
//     },
//     {
//       title: "Community Event Lead",
//       organization: "YMCA of Greater Toronto",
//       date: "Dec 2022",
//       highlights: [
//         "Planned and executed a community holiday event and toy drive initiative",
//         "Led coordination for a large-scale community program serving families",
//         "Supported collection and distribution of 100+ toys for children and families",
//       ],
//     },
//     {
//       title: "Camp Operations Volunteer",
//       organization: "YMCA Camp Pine Crest",
//       date: "Apr 2022",
//       highlights: [
//         "Prepared camp facilities for spring and summer programming",
//         "Cleared and maintained 3+ km of trails across campgrounds",
//         "Handled and organized 100+ pieces of equipment including canoes, kayaks, and program tools",
//         "Managed inventory, setup, and maintenance of activity spaces and equipment",
//       ],
//     },
//     {
//       title: "Peer Leadership Facilitator",
//       organization: "NOW Program, Queen’s University",
//       date: "Apr 2022 – Sep 2022",
//       highlights: [
//         "Supported 30+ international students through onboarding and mentorship",
//         "Delivered 10+ presentations and facilitated orientation sessions",
//         "Provided academic and social guidance to ease cultural and academic transition",
//       ],
//     },
//     {
//       title: "Peer Tutor",
//       organization: "Licence 2 Learn",
//       date: "Sep 2022 – Apr 2023",
//       highlights: [
//         "Tutored 5+ students in English, Math, and French",
//         "Helped students achieve an average grade improvement of 20%",
//         "Delivered structured, personalized learning sessions to improve academic performance",
//       ],
//     },
//   ]

//   return (
//     <section id="experience" className="py-16 px-8 bg-white">
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
//           Experience
//         </h2>

//         <div className="space-y-8">
//           {experiences.map((exp) => (
//             <div
//               key={exp.title}
//               className="bg-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
//             >
//               <div className="flex justify-between items-start mb-2 flex-wrap">
//                 <h3 className="text-xl font-semibold text-gray-900">
//                   {exp.title}
//                 </h3>

//                 <span className="text-sm text-gray-500">
//                   {exp.date}
//                 </span>
//               </div>

//               <p className="text-sm text-gray-500 mb-3">
//                 {exp.organization}
//               </p>

//               <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
//                 {exp.highlights.map((item, i) => (
//                   <li key={i}>{item}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
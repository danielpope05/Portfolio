import { FaFutbol, FaCamera, FaCube, FaBook, FaPen, FaTshirt } from "react-icons/fa"

export default function Interests() {
  const interests = [
    {
      title: "Sports",
      icon: <FaFutbol />,
      description: "Play a variety of sports and aim to try as many as possible. Football is my favorite, along with basketball, volleyball, tchoukball, ping pong, golf, and pickleball.",
    },
    {
      title: "Photography",
      icon: <FaCamera />,
      description: "Capture moments and explore creative perspectives through visual storytelling.",
    },
    {
      title: "Fashion",
      icon: <FaTshirt />,
      description: "Enjoy putting together outfits and always aiming to look presentable."
    },
    {
      title: "3D Modeling and Animation",
      icon: <FaCube />,
      description: "Create 3D designs using Blender and explore creativity in digital environments.",
    },
     // ✅ NEW ONE
  {
    title: "Reading",
    icon: <FaBook />,
    description: "Read a wide range of books to explore new ideas and perspectives.",
  },

  // ✅ NEW ONE
  {
    title: "Journaling",
    icon: <FaPen />,
    description: "Write down goals and reflections, tracking progress and setting short- and long-term objectives.",
  },
  ]

  return (
    <section id="interests" className="py-20 px-8 bg-slate-50">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
          Interests
        </h2>

        <p className="text-slate-500 text-center max-w-2xl mx-auto mb-12">
          Beyond technology, I enjoy activities that challenge creativity, discipline, and exploration.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {interests.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition group"
            >
              <div className="flex items-center gap-3 mb-3">

                <div className="text-blue-600 text-xl bg-blue-50 p-2 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition">
                  {item.title}
                </h3>

              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}


// export default function Interests() {
//   const interests = [
//     {
//       title: "Football",
//       description: "Passionate about playing and following the sport, building teamwork and discipline.",
//     },
//     {
//       title: "Photography",
//       description: "Enjoy capturing moments and exploring creative perspectives through visual storytelling.",
//     },
//     {
//       title: "Hiking",
//       description: "Interested in outdoor exploration and staying active through nature-based activities.",
//     },
//     {
//       title: "3D Modeling",
//       description: "Create 3D designs using Blender, exploring creativity in digital environments.",
//     },
//   ]

//   return (
//     <section id="interests" className="py-16 px-8 bg-gray-50">
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
//           Interests
//         </h2>

//         <div className="grid md:grid-cols-2 gap-6">
//           {interests.map((item) => (
//             <div
//               key={item.title}
//               className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition"
//             >
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                 {item.title}
//               </h3>

//               <p className="text-gray-600 text-sm">
//                 {item.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
import profileImg from "../assets/p26.jpg"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 px-8 flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT */}
        <div className="text-center md:text-left animate-[fadeUp_0.9s_ease-out]">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 whitespace-nowrap">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Ayobami Popoola
            </span>
          </h1>

          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-lg mb-10">
            Building secure, practical, and user-focused software systems with
            interests in cybersecurity, backend development, and real-world problem solving.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-7 py-3.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/30"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-7 py-3.5 border border-slate-700 text-slate-300 rounded-xl hover:bg-slate-900 hover:border-slate-500 hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center md:justify-end animate-[fadeIn_1.2s_ease-out]">
          <div className="relative animate-[float_5s_ease-in-out_infinite]">
            
            {/* Glow */}
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-3xl animate-pulse"></div>

            {/* Square Image */}
            <img
              src={profileImg}
              alt="Ayobami Popoola"
              className="relative w-72 h-72 md:w-[400px] md:h-[400px] object-cover object-[50%_20%] rounded-3xl border border-slate-800 shadow-2xl transition duration-500 hover:scale-[1.03]"
            />
          </div>
        </div>

      </div>
    </section>
  )
}


// import profileImg from "../assets/p18.JPG"

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="min-h-screen bg-slate-950 px-8 flex items-center overflow-hidden"
//     >
//       <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
//         {/* LEFT */}
//         <div className="text-center md:text-left animate-[fadeUp_0.9s_ease-out]">
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 whitespace-nowrap">
//             <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
//               Ayobami Popoola
//             </span>
//           </h1>

//           <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-lg mb-10">
//             Building secure, practical, and user-focused software systems with
//             interests in cybersecurity, backend development, and real-world problem solving.
//           </p>

//           <div className="flex flex-wrap gap-4 justify-center md:justify-start">
//             <a
//               href="#projects"
//               className="px-7 py-3.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/30"
//             >
//               View Projects
//             </a>

//             <a
//               href="#contact"
//               className="px-7 py-3.5 border border-slate-700 text-slate-300 rounded-xl hover:bg-slate-900 hover:border-slate-500 hover:text-white transition"
//             >
//               Contact Me
//             </a>
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div className="flex justify-center md:justify-end animate-[fadeIn_1.2s_ease-out]">
//           <div className="relative animate-[float_5s_ease-in-out_infinite]">
//             {/* Blurred background layer */}
//             <div className="absolute inset-0 rounded-full overflow-hidden scale-125 blur-3xl opacity-40">
//               <img
//                 src={profileImg}
//                 alt=""
//                 className="w-full h-full object-cover object-[50%_18%]"
//               />
//             </div>

//             {/* Main large oval portrait */}
//             <div className="relative w-[280px] h-[360px] md:w-[420px] md:h-[520px] rounded-[50%] overflow-hidden border border-slate-800 shadow-2xl">
//               <img
//                 src={profileImg}
//                 alt="Ayobami Popoola"
//                 className="w-full h-full object-cover object-[50%_18%] scale-110 transition duration-500 hover:scale-[1.13]"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }



import { useEffect, useState } from "react"

export default function Navbar() {
  const [active, setActive] = useState("home")

  useEffect(() => {
    const sections = ["home", "about", "projects", "skills", "contact"]

    const handleScroll = () => {
      const scrollY = window.scrollY + 150
      const pageHeight = document.documentElement.scrollHeight
      const viewportHeight = window.innerHeight

      // 🔥 FIX: If at bottom → force contact active
      if (window.scrollY + viewportHeight >= pageHeight - 10) {
        setActive("contact")
        return
      }

      for (let section of sections) {
        const el = document.getElementById(section)
        if (!el) continue

        const top = el.offsetTop
        const height = el.offsetHeight

        if (scrollY >= top && scrollY < top + height) {
          setActive(section)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const linkClass = (section) =>
    `transition ${
      active === section
        ? "text-blue-400 font-semibold"
        : "text-slate-300 hover:text-white"
    }`

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-8 py-5 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-white hover:text-blue-400 transition"
        >
          Ayobami Popoola
        </a>

        {/* Links */}
        <div className="flex gap-8 text-sm md:text-base">
          <a href="#home" className={linkClass("home")}>Home</a>
          <a href="#about" className={linkClass("about")}>About</a>
          <a href="#projects" className={linkClass("projects")}>Projects</a>
          <a href="#skills" className={linkClass("skills")}>Skills</a>
          <a href="#contact" className={linkClass("contact")}>Contact</a>
        </div>

      </div>
    </nav>
  )
}
// import { useEffect, useState } from "react"

// export default function Navbar() {
//   const [active, setActive] = useState("home")

//   useEffect(() => {
//     const sections = ["home", "about", "projects", "skills", "contact"]

//     const handleScroll = () => {
//       const scrollY = window.scrollY + 100

//       for (let section of sections) {
//         const el = document.getElementById(section)
//         if (!el) continue

//         const top = el.offsetTop
//         const height = el.offsetHeight

//         if (scrollY >= top && scrollY < top + height) {
//           setActive(section)
//         }
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const linkClass = (section) =>
//     `transition ${
//       active === section
//         ? "text-gray-900 font-semibold"
//         : "text-gray-500 hover:text-gray-900"
//     }`

//   return (
//     <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
//       <div className="max-w-6xl mx-auto px-8 py-5 flex justify-between items-center">
//         <a
//           href="#home"
//           className="text-2xl font-bold text-gray-900"
//         >
//           Ayobami Popoola
//         </a>

//         <div className="flex gap-8">
//           <a href="#home" className={linkClass("home")}>Home</a>
//           <a href="#about" className={linkClass("about")}>About</a>
//           <a href="#projects" className={linkClass("projects")}>Projects</a>
//           <a href="#skills" className={linkClass("skills")}>Skills</a>
//           <a href="#contact" className={linkClass("contact")}>Contact</a>
//         </div>
//       </div>
//     </nav>
//   )
// }
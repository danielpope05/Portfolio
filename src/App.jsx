import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Interests from "./components/Interests"
import Certificates from "./components/Certificates";
import Contact from "./components/Contact"


function App() {
  return (
    <div className="bg-gray-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Interests />
      <Certificates />
      <Contact />
    </div>
  )
}

export default App

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-800">

//       {/* Hero Section */}
//       <section className="h-screen flex flex-col items-center justify-center text-center">
//         <h1 className="text-5xl font-bold mb-4">
//           Hi, I'm Ayobami Popoola
//         </h1>

//         <p className="text-xl text-gray-600 mb-6">
//           3rd Year Computing Student at Queen's University specializing in Cybersecurity
//         </p>

//         <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//           View My Projects
//         </button>
//       </section>

//       {/* Projects Section */}
//       <section className="py-20 px-10 bg-white">
//         <h2 className="text-3xl font-bold mb-8 text-center">
//           Projects
//         </h2>

//         <div className="grid md:grid-cols-3 gap-6">

//           <div className="p-6 bg-gray-100 rounded-xl shadow">
//             <h3 className="font-semibold text-xl mb-2">
//               LogLens Security Monitor
//             </h3>
//             <p className="text-gray-600">
//               A security monitoring tool that parses logs and detects threats.
//             </p>
//           </div>

//           <div className="p-6 bg-gray-100 rounded-xl shadow">
//             <h3 className="font-semibold text-xl mb-2">
//               Threat Prioritization Engine
//             </h3>
//             <p className="text-gray-600">
//               Risk scoring system that prioritizes vulnerabilities.
//             </p>
//           </div>

//           <div className="p-6 bg-gray-100 rounded-xl shadow">
//             <h3 className="font-semibold text-xl mb-2">
//               Secure Login System
//             </h3>
//             <p className="text-gray-600">
//               Authentication system with secure session handling.
//             </p>
//           </div>

//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-20 text-center">
//         <h2 className="text-3xl font-bold mb-4">
//           Contact
//         </h2>

//         <p className="text-gray-600">
//           ayobami@example.com
//         </p>
//       </section>

//     </div>
//   )
// }


// export default App
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

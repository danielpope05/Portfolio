export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center bg-gray-100">
      <h1 className="text-5xl font-bold mb-4 text-gray-900">
        Hi, I'm Ayobami Popoola
      </h1>

      <p className="text-xl text-gray-600 mb-6">
        3rd year Computing student at Queen's University specializing in Cybersecurity
      </p>

      <a
        href="#projects"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        View My Projects
      </a>
    </section>
  )
}
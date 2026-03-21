export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm py-4 px-8 flex justify-between items-center z-50">
      <h1 className="font-bold text-lg text-gray-900">Ayobami Popoola</h1>

      <div className="flex gap-6 text-gray-600">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#projects" className="hover:text-blue-600">Projects</a>
        <a href="#skills" className="hover:text-blue-600">Skills</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>
      </div>
    </nav>
  )
}
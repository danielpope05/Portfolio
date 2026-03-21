export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <h1 className="font-bold text-lg">Ayobami Popoola</h1>

      <div className="flex gap-6 text-gray-600">
        <a href="#">Home</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}
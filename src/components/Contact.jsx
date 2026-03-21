import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Let’s Connect
        </h2>

        <p className="text-gray-600 mb-8">
          I’m open to internship opportunities, collaborations, and professional connections.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 flex-wrap mb-10">

          <a
            href="https://github.com/danielpope05"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ayobami-popoola-961038303/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            href="mailto:ayobamipopoola65@gmail.com"
            className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            <FaEnvelope />
            Email
          </a>

        </div>

        {/* Details */}
        <div className="space-y-3 text-gray-600">

          <p className="flex items-center justify-center gap-2">
            <FaPhone /> +1 (647) 915-3080
          </p>

          <p className="flex items-center justify-center gap-2">
            <FaMapMarkerAlt /> Toronto, Ontario, Canada
          </p>

          <p className="text-sm text-gray-500">
            109 Generation Boulevard, Scarborough, Ontario, M1B 2K5
          </p>

        </div>
      </div>
    </section>
  )
}
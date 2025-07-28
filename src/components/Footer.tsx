import { Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black text-gray-100 py-12 px-4 border-t border-gray-800">
    <div className="max-w-6xl mx-auto text-center">
      <div className="text-2xl font-bold mb-4">
        Asmita<span className="text-amber-400">&nbsp;Sarkar</span>
      </div>
      <p className="text-gray-400 mb-6">
        Building digital experiences that make a difference.
      </p>
      <div className="flex justify-center gap-6">
        <a href="https://www.linkedin.com/in/asmita-sarkar/" className="text-gray-400 hover:text-amber-400 transition-colors">
          <Linkedin size={24} />
        </a>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500 text-sm">
      © 2025 Asmita Sarkar. A blend of art, code, and soul. 🎭💻 ✨
      </div>
    </div>
  </footer>
  )
}

export default Footer
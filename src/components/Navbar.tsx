import { NavbarProps } from "@/interface";
import { Menu, X } from "lucide-react"; 

const Navbar = ({ activeSection, isMenuOpen, scrollToSection, setIsMenuOpen }: NavbarProps) => {
  return (
    <nav className="fixed top-0 w-full bg-gray-950/95 backdrop-blur-sm z-50 border-b border-gray-800">
    <div className="max-w-6xl mx-auto px-4 py-4">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-100">
          Asmita<span className="text-amber-400">&nbsp;Sarkar</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {['home', 'work', 'skills', 'about', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`capitalize transition-colors duration-200 ${
                activeSection === item 
                  ? 'text-amber-400 font-medium' 
                  : 'text-gray-300 hover:text-gray-100'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
          <div className="flex flex-col space-y-4 pt-4">
            {['home', 'work', 'skills', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize text-left text-gray-300 hover:text-gray-100 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  </nav>
  )
}

export default Navbar
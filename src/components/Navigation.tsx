import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-blue-950/95 to-purple-950/80 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity tracking-wider"
          >
            LIVE MUSIC
          </button>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-purple-400 transition-colors font-medium">About</button>
            <button onClick={() => scrollToSection('video')} className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Performance</button>
            <button onClick={() => scrollToSection('repertoire')} className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Repertoire</button>
            <button onClick={() => scrollToSection('hotels')} className="text-gray-300 hover:text-purple-400 transition-colors font-medium">For Hotels</button>
            <button onClick={() => scrollToSection('contact')} className="btn-primary !px-6 !py-2 text-sm">
              Book Now
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-purple-400"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-blue-950/98 to-purple-950/95 border-t border-purple-500/20">
          <div className="px-4 py-4 space-y-4">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-300 hover:text-purple-400 py-2 font-medium">About</button>
            <button onClick={() => scrollToSection('video')} className="block w-full text-left text-gray-300 hover:text-purple-400 py-2 font-medium">Performance</button>
            <button onClick={() => scrollToSection('repertoire')} className="block w-full text-left text-gray-300 hover:text-purple-400 py-2 font-medium">Repertoire</button>
            <button onClick={() => scrollToSection('hotels')} className="block w-full text-left text-gray-300 hover:text-purple-400 py-2 font-medium">For Hotels</button>
            <button onClick={() => scrollToSection('contact')} className="btn-primary w-full !px-6 !py-3 text-sm mt-2">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

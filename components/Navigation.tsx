import { useState, useEffect } from 'react';
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import logo from 'figma:asset/a197a8cf338010d7241f971d69857d1a4ea2030b.png';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: "Por que usar", href: "#porque-usar" },
    { label: "Nossa essência", href: "#essencia" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Categorias", href: "#categorias" },
    { label: "Depoimentos", href: "#depoimentos" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  if (!isScrolled) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm animate-in slide-in-from-top duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Vizinho App" className="h-8 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="text-black/70 hover:text-black font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('#download')}
              className="bg-yellow-400 text-black hover:bg-yellow-500 font-medium px-6 py-2 rounded-full"
            >
              Baixar App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black/70 hover:text-black p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="space-y-3">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-2 py-2 text-black/70 hover:text-black font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2">
                <Button 
                  onClick={() => scrollToSection('#download')}
                  className="w-full bg-yellow-400 text-black hover:bg-yellow-500 font-medium py-2 rounded-full"
                >
                  Baixar App
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
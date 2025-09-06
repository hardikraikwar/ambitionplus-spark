import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl lg:text-3xl font-bold text-brand-primary">
              Ambition Plus
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-brand-primary transition-colors duration-300 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('courses')}
                className="text-foreground hover:text-brand-primary transition-colors duration-300 font-medium"
              >
                Courses
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-brand-primary transition-colors duration-300 font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-brand-primary transition-colors duration-300 font-medium"
              >
                Contact
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('courses')}
              className="bg-gradient-accent text-white hover:shadow-accent transition-all duration-300"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-brand-primary focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className={!isMobileMenuOpen ? 'block' : 'hidden'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  className={isMobileMenuOpen ? 'block' : 'hidden'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
              <button
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-brand-primary transition-colors duration-300 w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('courses')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-brand-primary transition-colors duration-300 w-full text-left"
              >
                Courses
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-brand-primary transition-colors duration-300 w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-brand-primary transition-colors duration-300 w-full text-left"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button
                  onClick={() => scrollToSection('courses')}
                  className="w-full bg-gradient-accent text-white hover:shadow-accent transition-all duration-300"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
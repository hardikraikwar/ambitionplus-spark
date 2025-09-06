const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-primary text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4">Ambition Plus</h3>
            <p className="text-white/80 text-lg leading-relaxed mb-6 max-w-md">
              Empowering learners worldwide with cutting-edge education and practical skills 
              for the digital age. Transform your career, achieve your ambitions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.404-5.965 1.404-5.965s-.359-.219-.359-1.219c0-1.142.662-1.995 1.487-1.995.701 0 1.039.525 1.039 1.155 0 .703-.448 1.754-.719 2.73-.205.866.433 1.572 1.286 1.572 1.543 0 2.73-1.628 2.73-3.976 0-2.08-1.496-3.534-3.638-3.534-2.477 0-3.93 1.857-3.93 3.783 0 .75.289 1.557.649 1.994.071.087.082.163.061.251-.067.281-.216.865-.245.986-.037.163-.123.198-.285.119-1.08-.503-1.756-2.08-1.756-3.349 0-2.741 1.991-5.257 5.74-5.257 3.016 0 5.361 2.148 5.361 5.022 0 2.995-1.888 5.402-4.508 5.402-.88 0-1.709-.457-1.99-1.001l-.542 2.065c-.196.754-.725 1.699-1.08 2.276C8.816 23.551 10.334 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-white/80 hover:text-brand-accent transition-colors duration-300 text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('courses')}
                  className="text-white/80 hover:text-brand-accent transition-colors duration-300 text-left"
                >
                  Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-white/80 hover:text-brand-accent transition-colors duration-300 text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white/80 hover:text-brand-accent transition-colors duration-300 text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-brand-accent transition-colors duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-brand-accent transition-colors duration-300">
                  Student Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Popular Courses</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-brand-accent transition-colors duration-300">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-brand-accent transition-colors duration-300">
                  Data Science
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-brand-accent transition-colors duration-300">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-brand-accent transition-colors duration-300">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-brand-accent transition-colors duration-300">
                  Mobile Development
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-brand-accent transition-colors duration-300">
                  Cybersecurity
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-white/20 pt-12 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-xl font-semibold mb-4">Stay Updated</h4>
            <p className="text-white/80 mb-6">
              Get the latest courses, tips, and industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-brand-accent"
              />
              <button className="bg-brand-accent hover:bg-brand-accent-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60">
              © 2024 Ambition Plus. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/60 hover:text-brand-accent transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-brand-accent transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-brand-accent transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
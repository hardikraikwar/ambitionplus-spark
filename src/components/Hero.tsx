import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Learn. Grow. Achieve.';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Students learning with technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/80 via-brand-primary/60 to-brand-accent/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Transform Your Future with
            <br />
            <span className="text-brand-accent">Digital Skills</span>
          </h1>
        </div>
        
        <div className="animate-slide-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
          <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-8 min-h-[3rem] flex items-center justify-center">
            <span className="border-r-2 border-brand-accent pr-1 animate-typing overflow-hidden whitespace-nowrap">
              {displayText}
            </span>
          </div>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Unlock your potential with our cutting-edge courses designed for the digital age. 
            Join thousands of learners transforming their careers.
          </p>
        </div>

        <div className="animate-scale-in" style={{ animationDelay: '0.9s', animationFillMode: 'both' }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection('courses')}
              size="lg"
              className="bg-gradient-accent text-white hover:shadow-accent hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold"
            >
              Explore Courses
            </Button>
            <Button
              onClick={() => scrollToSection('about')}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-primary hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="animate-fade-in mt-16 grid grid-cols-2 md:grid-cols-4 gap-8" style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-brand-accent mb-2">50K+</div>
            <div className="text-white/80">Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-brand-accent mb-2">100+</div>
            <div className="text-white/80">Courses</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-brand-accent mb-2">95%</div>
            <div className="text-white/80">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-brand-accent mb-2">24/7</div>
            <div className="text-white/80">Support</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
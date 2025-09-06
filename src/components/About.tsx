import { useEffect, useRef, useState } from 'react';
import aboutImage from '@/assets/about-team.jpg';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    experience: 0,
    instructors: 0,
    countries: 0,
    satisfaction: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate counters
          if (!hasAnimated.current) {
            hasAnimated.current = true;
            animateCounters();
          }
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const targets = {
      experience: 10,
      instructors: 50,
      countries: 30,
      satisfaction: 98
    };

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    Object.keys(targets).forEach((key) => {
      const target = targets[key as keyof typeof targets];
      const increment = target / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        current += increment;
        step++;

        setCounters(prev => ({
          ...prev,
          [key]: Math.min(Math.floor(current), target)
        }));

        if (step >= steps) {
          clearInterval(timer);
          setCounters(prev => ({
            ...prev,
            [key]: target
          }));
        }
      }, stepDuration);
    });
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="mb-8">
              <span className="text-brand-accent font-semibold text-lg">About Ambition Plus</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-2 mb-6">
                Empowering Learners <br />
                <span className="text-brand-primary">Worldwide</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Ambition Plus, we believe that education is the key to unlocking human potential. 
                Founded with the vision of making quality education accessible to everyone, we've been 
                at the forefront of the EdTech revolution.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our comprehensive platform combines cutting-edge technology with proven pedagogical 
                methods to create an engaging, effective, and personalized learning experience. 
                From coding bootcamps to data science masterclasses, we're here to help you achieve your ambitions.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Industry-Led Curriculum</h4>
                  <p className="text-muted-foreground">Courses designed by industry experts and updated regularly to match current market demands.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Hands-On Learning</h4>
                  <p className="text-muted-foreground">Real-world projects and interactive exercises that prepare you for actual workplace challenges.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Lifetime Support</h4>
                  <p className="text-muted-foreground">Continuous mentorship, career guidance, and access to our alumni network even after course completion.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`} style={{ transitionDelay: '0.3s' }}>
            <div className="relative">
              <img
                src={aboutImage}
                alt="Ambition Plus team working together"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-brand-accent/20 rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`mt-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '0.6s' }}>
          <div className="bg-gradient-hero rounded-3xl p-12 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  {counters.experience}+
                </div>
                <div className="text-white/80 text-lg">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  {counters.instructors}+
                </div>
                <div className="text-white/80 text-lg">Expert Instructors</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  {counters.countries}+
                </div>
                <div className="text-white/80 text-lg">Countries Served</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  {counters.satisfaction}%
                </div>
                <div className="text-white/80 text-lg">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
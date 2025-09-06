import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Full Stack Developer',
    company: 'Tech Innovations Inc.',
    content: 'Ambition Plus transformed my career completely. The hands-on approach and real-world projects gave me the confidence to land my dream job in tech. The instructors are incredibly knowledgeable and supportive.',
    rating: 5,
    avatar: 'SJ'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Data Scientist',
    company: 'Analytics Pro',
    content: 'The Data Science course exceeded my expectations. The curriculum is cutting-edge and the practical applications are immediately useful. I got promoted within 3 months of completing the course!',
    rating: 5,
    avatar: 'MC'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Digital Marketing Manager',
    company: 'Growth Marketing LLC',
    content: 'Outstanding quality and excellent support. The digital marketing course helped me increase our company\'s online presence by 300%. The strategies I learned are pure gold.',
    rating: 5,
    avatar: 'ER'
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Software Engineer',
    company: 'StartupTech',
    content: 'Best investment I ever made in my education. The course structure is perfect, and the community is amazing. I went from beginner to confident developer in just a few months.',
    rating: 5,
    avatar: 'DT'
  },
  {
    id: 5,
    name: 'Lisa Wang',
    role: 'Product Manager',
    company: 'Innovation Labs',
    content: 'The skills I gained here directly contributed to my promotion. The instructors really care about your success and the course material is always up-to-date with industry standards.',
    rating: 5,
    avatar: 'LW'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-brand-primary">Students</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our successful graduates have to say about their transformative learning experience.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Testimonial Card */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl mx-4">
                    <CardContent className="p-8 sm:p-12">
                      <div className="text-center">
                        {/* Avatar */}
                        <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                          <span className="text-2xl font-bold text-white">
                            {testimonial.avatar}
                          </span>
                        </div>

                        {/* Rating Stars */}
                        <div className="flex justify-center mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-6 h-6 text-yellow-400 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          ))}
                        </div>

                        {/* Content */}
                        <blockquote className="text-lg sm:text-xl text-foreground leading-relaxed mb-8 italic">
                          "{testimonial.content}"
                        </blockquote>

                        {/* Author Info */}
                        <div>
                          <div className="font-bold text-xl text-brand-primary mb-1">
                            {testimonial.name}
                          </div>
                          <div className="text-muted-foreground">
                            {testimonial.role} at {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-brand-primary w-8' 
                    : 'bg-muted-foreground/30 hover:bg-brand-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-2xl p-8 sm:p-12 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of successful graduates who transformed their careers with our courses.
            </p>
            <button className="bg-white text-brand-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg">
              Start Learning Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
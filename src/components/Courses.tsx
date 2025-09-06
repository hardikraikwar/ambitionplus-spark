import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import webDevImage from '@/assets/course-web-dev.jpg';
import dataScienceImage from '@/assets/course-data-science.jpg';
import digitalMarketingImage from '@/assets/course-digital-marketing.jpg';

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  level: string;
  price: string;
  features: string[];
}

const courses: Course[] = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    description: 'Master modern web development with React, Node.js, and cutting-edge technologies.',
    image: webDevImage,
    duration: '12 weeks',
    level: 'Beginner to Advanced',
    price: '$299',
    features: ['React & Next.js', 'Node.js & Express', 'MongoDB & PostgreSQL', 'AWS Deployment']
  },
  {
    id: 2,
    title: 'Data Science & AI',
    description: 'Dive into machine learning, data analysis, and artificial intelligence.',
    image: dataScienceImage,
    duration: '16 weeks',
    level: 'Intermediate',
    price: '$399',
    features: ['Python & R', 'Machine Learning', 'Data Visualization', 'AI & Deep Learning']
  },
  {
    id: 3,
    title: 'Digital Marketing Mastery',
    description: 'Learn modern marketing strategies, SEO, social media, and analytics.',
    image: digitalMarketingImage,
    duration: '8 weeks',
    level: 'Beginner',
    price: '$199',
    features: ['SEO & SEM', 'Social Media Marketing', 'Google Analytics', 'Content Strategy']
  }
];

const Courses = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(courses.length).fill(false));
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        },
        { threshold: 0.2 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section id="courses" className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-brand-primary">Popular</span> Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive selection of courses designed by industry experts 
            to help you master the skills that matter most in today's digital world.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              ref={el => cardRefs.current[index] = el}
              className={`transform transition-all duration-700 ${
                visibleCards[index] 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className="h-full hover-lift hover-glow group cursor-pointer border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-brand-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {course.price}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-brand-primary font-semibold bg-brand-primary/10 px-3 py-1 rounded-full">
                      {course.level}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {course.duration}
                    </span>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-brand-primary transition-colors duration-300">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {course.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">What you'll learn:</h4>
                      <ul className="space-y-1">
                        {course.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-brand-accent rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button 
                      className="w-full bg-gradient-primary text-white hover:shadow-brand transition-all duration-300 group-hover:scale-105"
                    >
                      Enroll Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Can't find what you're looking for?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              We offer personalized learning paths and custom courses tailored to your specific needs.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-accent text-white hover:shadow-accent hover:scale-105 transition-all duration-300"
            >
              Request Custom Course
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

// Testimonial Card Component
const TestimonialCard = ({ image, quote, name, university, country }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-xl shadow-md p-6 flex flex-col w-80 h-[32rem]"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center mb-4">
        <div className="w-20 h-20 rounded-full overflow-hidden mb-2 flex-shrink-0">
          <Image 
            src={image} 
            alt={name} 
            width={64} 
            height={64} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-lg">{name}</h4>
          <p className="text-sm text-gray-600">{university}</p>
          <p className="text-xs text-gray-500">{country}</p>
        </div>
      </div>
      <div>
        <div className="flex-1 overflow-y-auto mt-2">
          <p className="italic text-gray-700 text-sm">"{quote}"</p>
        </div>
      </div>
    </motion.div>
  );
};

const StudentStories = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: 'Ashutosh Khadse',
      program: 'B.Tech, Computer Science Engineering',
      university: 'Woosong University',
      country: 'South Korea',
      quote: 'Studying at Woosong University was an eye-opening experience. The exposure to international teaching methods and interaction with students from around the world helped me gain confidence and global awareness. I sincerely thank the Office of International Affairs at Medi-Caps University for guiding me through the entire process — from documentation to settling in South Korea. It wouldn\'t have been possible without their constant support.',
      image: '/images/students/ashutosh.jpg'
    },
    {
      name: 'Sourabh Jawle',
      program: 'B.Tech, Computer Science Engineering',
      university: 'Woosong University',
      country: 'South Korea',
      quote: 'This exchange program transformed my perspective on learning and life. The academic curriculum, campus environment, and cultural experiences were truly enriching. I am especially thankful to Dr. Ravindra Pathak and his team at the Office of International Affairs. Their encouragement and seamless coordination made the transition smooth and memorable.',
      image: '/images/students/sourabh.jpg'
    },
    {
      name: 'Nancy Srivastava',
      program: 'B.Tech, Computer Science Engineering',
      university: 'Woosong University',
      country: 'South Korea',
      quote: 'Being a part of this international exchange program was like stepping into a new world. I got to experience advanced labs, group projects with international peers, and even learn a bit of Korean! I appreciate the efforts of the OIA team at Medi-Caps, who made sure we were prepared, safe, and well-supported throughout the journey.',
      image: '/images/students/nancy.jpg'
    },
    {
      name: 'Aayushi Joshi',
      program: 'B.Tech, Computer Science Engineering',
      university: 'Woosong University',
      country: 'South Korea',
      quote: 'My semester at Woosong University helped me grow both personally and professionally. From classroom learning to weekend cultural trips, every experience added value. I thank the leadership of Medi-Caps University\'s Office of International Affairs for creating this opportunity and being with us at every step. It’s a proud feeling to represent our university on a global platform.',
      image: '/images/students/aayushi.jpg'
    },
    {
      name: 'Sakina Bohra',
      program: 'B.Tech, Computer Science Engineering',
      university: 'INTI International University',
      country: 'Malaysia',
      quote: 'My semester at INTI University was an incredible journey filled with learning, cultural exposure, and self-growth. The modern teaching approach and interaction with international students truly expanded my global perspective. I am extremely grateful to the Office of International Affairs at Medi-Caps University for making this opportunity possible. Their continuous guidance and timely support made the entire process smooth and stress-free.',
      image: '/images/students/sakina.jpg'
    },
    {
      name: 'Irifa Khaishagi',
      program: 'B.Tech, Computer Science Engineering',
      university: 'INTI International University',
      country: 'Malaysia',
      quote: 'Being part of the student exchange program at INTI Malaysia helped me step out of my comfort zone. I learned to adapt, communicate across cultures, and understand new ways of thinking. I sincerely thank Dr. Ravindra Pathak and the entire OIA team at Medi-Caps University for their encouragement and strong coordination that ensured we were well-prepared and confident during our stay.',
      image: '/images/students/irifa.jpg'
    },
    {
      name: 'Vansika Soni',
      program: 'MBA',
      university: 'INTI International University',
      country: 'Malaysia',
      quote: 'The experience at INTI University was academically enriching and personally fulfilling. I had the chance to explore diverse learning environments and make friends from different countries. A big thank you to the Office of International Affairs at Medi-Caps for their excellent planning and support before and during the exchange. This journey wouldn\'t have been possible without their proactive efforts and leadership.',
      image: '/images/students/vansika.jpg'
    }
  ];

  // Carousel state (show 3 cards at a time)
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;
  const visibleCount = 3;
  const next = () => setCurrent((prev) => (prev + visibleCount) % total);
  const prev = () => setCurrent((prev) => (prev - visibleCount + total) % total);

  // auto-slide every 7 seconds
  useEffect(() => {
    const id = setInterval(next, 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Student Stories
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hear from students who have embraced global educational opportunities through our programs.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-nowrap justify-center gap-4 overflow-hidden min-h-[512px]">
          {Array.from({ length: visibleCount }).map((_, idx) => {
              const t = testimonials[(current + idx) % total];
              return (
                <TestimonialCard
                  key={`${t.name}-${idx}`}
                  image={t.image}
                  quote={t.quote}
                  name={t.name}
                  university={t.university}
                  country={t.country}
                />
              );
            })}
          </div>
          <div className="flex justify-center mt-6 space-x-6">
            <button onClick={prev} className="p-2 bg-primary/10 rounded-full hover:bg-primary/20">
              <MdNavigateBefore className="text-2xl text-primary" />
            </button>
            <button onClick={next} className="p-2 bg-primary/10 rounded-full hover:bg-primary/20">
              <MdNavigateNext className="text-2xl text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentStories;
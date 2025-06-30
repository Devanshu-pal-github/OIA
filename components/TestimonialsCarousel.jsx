'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft } from 'react-icons/fa';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

const testimonials = [
  {
    name: 'Ashutosh Khadse',
    program: 'B.Tech, Computer Science Engineering',
    uni: 'Woosong University, South Korea',
    quote: 'Studying at Woosong University was an eye-opening experience. The exposure to international teaching methods and interaction with students from around the world helped me gain confidence and global awareness. I sincerely thank the Office of International Affairs at Medi-Caps University for guiding me through the entire process — from documentation to settling in South Korea.'
  },
  {
    name: 'Sourabh Jawle',
    program: 'B.Tech, Computer Science Engineering',
    uni: 'Woosong University, South Korea',
    quote: 'This exchange program transformed my perspective on learning and life. The academic curriculum, campus environment, and cultural experiences were truly enriching. I am especially thankful to Dr. Ravindra Pathak and his team at the Office of International Affairs.'
  },
  {
    name: 'Nancy Srivastava',
    program: 'B.Tech, Computer Science Engineering',
    uni: 'Woosong University, South Korea',
    quote: 'Being a part of this international exchange program was like stepping into a new world. I got to experience advanced labs, group projects with international peers, and even learn a bit of Korean!'
  },
  {
    name: 'Aayushi Joshi',
    program: 'B.Tech, Computer Science Engineering',
    uni: 'Woosong University, South Korea',
    quote: 'My semester at Woosong University helped me grow both personally and professionally. From classroom learning to weekend cultural trips, every experience added value.'
  },
  {
    name: 'Sakina Bohra',
    program: 'B.Tech, Computer Science Engineering',
    uni: 'INTI International University, Malaysia',
    quote: 'My semester at INTI University was an incredible journey filled with learning, cultural exposure, and self-growth. The modern teaching approach and interaction with international students truly expanded my global perspective.'
  },
  {
    name: 'Irifa Khaishagi',
    program: 'B.Tech, Computer Science Engineering',
    uni: 'INTI International University, Malaysia',
    quote: 'Being part of the student exchange program at INTI Malaysia helped me step out of my comfort zone. I learned to adapt, communicate across cultures, and understand new ways of thinking.'
  },
  {
    name: 'Vansika Soni',
    program: 'MBA',
    uni: 'INTI International University, Malaysia',
    quote: 'The experience at INTI University was academically enriching and personally fulfilling. I had the chance to explore diverse learning environments and make friends from different countries.'
  }
];

const TestimonialsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;
  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const { name, program, uni, quote } = testimonials[current];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <FaQuoteLeft className="text-4xl text-primary mb-4 mx-auto" />
          <p className="text-lg mb-6 italic font-medium text-gray-700">"{quote}"</p>
          <p className="font-semibold text-primary">{name}</p>
          <p className="text-sm text-gray-600">{program}</p>
          <p className="text-sm text-gray-600 mb-6">{uni}</p>
          <div className="flex justify-center space-x-6">
            <button onClick={prev} className="p-2 bg-primary/10 rounded-full hover:bg-primary/20">
              <MdNavigateBefore className="text-2xl text-primary" />
            </button>
            <button onClick={next} className="p-2 bg-primary/10 rounded-full hover:bg-primary/20">
              <MdNavigateNext className="text-2xl text-primary" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;

'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const leaders = [
  {
    name: 'Prof. D. K. Patnaik',
    role: 'Vice-Chancellor',
    image: '/images/leadership/vc.jpg',
    message: 'At OIA we encourage our students and faculty to broaden their horizons and embrace global perspectives.'
  },
  {
    name: 'Prof. (Dr.) P. Siluvainathan',
    role: 'Registrar',
    image: '/assets/registrarimg.jpg',
    message: 'We provide seamless administrative support to help you venture beyond borders.'
  },
  {
    name: 'Dr. Ravindra Pathak',
    role: 'Head – Office of International Affairs',
    image: '/images/leadership/oia-head.jpg',
    message: 'Join our globally minded community and excel yourself for international opportunities.'
  }
];

const LeadershipCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % leaders.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % leaders.length);
  const prev = () => setIndex((prev) => (prev - 1 + leaders.length) % leaders.length);

  const leader = leaders[index];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10">Words from Our Leadership</h2>
        <div className="relative max-w-xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 relative">
                <Image src={leader.image} alt={leader.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-1">{leader.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{leader.role}</p>
              <p className="italic text-gray-700 max-w-md">"{leader.message}"</p>
            </motion.div>
          </AnimatePresence>
          {/* Nav Buttons */}
          <button onClick={prev} aria-label="Previous" className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-primary text-white rounded-full hover:bg-primary-light">
            ‹
          </button>
          <button onClick={next} aria-label="Next" className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-primary text-white rounded-full hover:bg-primary-light">
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default LeadershipCarousel;

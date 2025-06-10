'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

// Testimonial Card Component
const TestimonialCard = ({ image, quote, name, university, country }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-xl shadow-md p-6 flex flex-col h-full"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
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
      <div className="flex-1">
        <p className="italic text-gray-700">"{quote}"</p>
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
      image: "/images/student1.jpg",
      quote: "My semester abroad opened my new perspectives and understanding...",
      name: "Yamada Ryo",
      university: "KSU University",
      country: "Japan"
    },
    {
      image: "/images/student2.jpg",
      quote: "The exchange program exceeded my expectations in every way...",
      name: "Maria Gonzalez",
      university: "UPM University",
      country: "Spain"
    },
    {
      image: "/images/student3.jpg",
      quote: "An unforgettable experience that shaped my career path...",
      name: "Li Wei",
      university: "BIT University",
      country: "China"
    }
  ];

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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              image={testimonial.image}
              quote={testimonial.quote}
              name={testimonial.name}
              university={testimonial.university}
              country={testimonial.country}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentStories;
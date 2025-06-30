'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import Image from 'next/image';

const students = [
  {
    name: 'Sakina Bohra',
    year: 'Third Year, B.Tech CSE',
    university: 'INTI International University, Malaysia',
    image: '/assets/sakina-bohra.jpg'
  },
  {
    name: 'Irifa Khaishagi',
    year: 'Third Year, B.Tech CSE',
    university: 'INTI International University, Malaysia',
    image: '/assets/irifa-khaishagi.jpg'
  },
  {
    name: 'Vanshika Soni',
    year: 'First Year, MBA',
    university: 'INTI International University, Malaysia',
    image: '/assets/vanshika-soni.jpg'
  },
  {
    name: 'Ayushi Joshi',
    year: 'Fourth Year, B.Tech CSE',
    university: 'Woosong University, South Korea',
    image: '/assets/ayushi-joshi.jpg'
  },
  {
    name: 'Nancy Srivastava',
    year: 'Fourth Year, B.Tech CSE',
    university: 'Woosong University, South Korea',
    image: '/assets/nancy-srivastava.jpg'
  }
];

// Additional candid/achievement photos to showcase exchange moments
const galleryImages = [
  '/assets/irifa-inti-heart.jpg',
  '/assets/irifa-cert-lobby.jpg',
  '/assets/irifa-cert-stairs.jpg',
  '/assets/irifa-cert-lawn.jpg',
  '/assets/irifa-ceremony-stage.jpg',
  '/assets/irifa-inti-setup.jpg',
  '/assets/irifa-cert-front.jpg',
  '/assets/irifa-ceremony-stage-close.jpg'
];

const Card = ({ student }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition p-6 flex flex-col items-center"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-40 h-40 rounded-full overflow-hidden mb-4 relative">
        <Image src={student.image} alt={student.name} fill className="object-cover" />
      </div>
      <h3 className="text-lg font-semibold text-primary mb-1 text-center">{student.name}</h3>
      <p className="text-sm text-gray-600 mb-1 text-center">{student.year}</p>
      <p className="text-sm text-gray-600 text-center italic">{student.university}</p>
    </motion.div>
  );
};

const ExchangeProfiles = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
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
            Student Exchange Participants & Moments
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These students are currently representing Medicaps University at partner institutions abroad.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {students.map((s) => (
            <Card student={s} key={s.name} />
          ))}
        </div>

        {/* Exchange Gallery */}
        <motion.div
          className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {galleryImages.map((src, idx) => (
            <motion.div
              key={idx}
              className="break-inside-avoid overflow-hidden rounded-lg shadow hover:shadow-xl cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={src}
                alt={`Exchange moment ${idx + 1}`}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                onClick={() => setSelectedImage(src)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh]">
              <Image src={selectedImage} alt="Enlarged view" fill className="object-contain" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExchangeProfiles;

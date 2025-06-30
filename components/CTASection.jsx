'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';

const CTASection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Key partner universities to display
  const partners = [
    'Woosong University, South Korea',
    'INTI International University, Malaysia',
    'TAR UMT University, Malaysia',
    'City University of Seattle, USA',
    'DPU, Thailand',
    'Southern Methodist University (SMU), USA',
    'Aivancity University, France',
    'LIGMR University',
    'National Taipei University of Technology, Taiwan',
    'Asia University, Taiwan',
    'Lunghwa University, Taiwan',
    'Cheng Shiu University, Taiwan',
  ];

  return (
    <section className="gradient-bg text-white py-16">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Take Off with OIA Medicaps?
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {/* Fill Form Button */}
            <a
              href="https://forms.gle/your-form" // TODO: replace with real link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-6 py-3 rounded-md hover:bg-gray-100 transition-all duration-300 font-medium"
            >
              Fill the Form
            </a>
            <Link href="/contact">
              <button className="bg-white text-primary px-6 py-3 rounded-md hover:bg-gray-100 transition-all duration-300 font-medium">
                Contact OIA Office
              </button>
            </Link>
            <Link href="/opportunities">
              <button className="border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-primary transition-all duration-300 font-medium">
                Discover All Opportunities
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                className="text-white text-sm md:text-base font-medium"
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection; 
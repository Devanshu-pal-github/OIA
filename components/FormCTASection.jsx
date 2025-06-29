'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const GOOGLE_FORM_URL = 'https://forms.gle/your-form'; // TODO: replace with real link

const FormCTASection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto text-center">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          If this resonates with you, don’t wait – take action now!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 text-lg max-w-3xl mx-auto"
        >
          Fill out our quick form and embark on your international journey with OIA.
        </motion.p>
        <motion.a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="inline-block bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300"
        >
          Fill the Form
        </motion.a>
      </div>
    </section>
  );
};

export default FormCTASection;

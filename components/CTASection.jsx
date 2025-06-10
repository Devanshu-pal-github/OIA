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

  // Partner logos
  const partners = [
    { name: "NTU Singapore", logo: "/images/partners/ntu-logo.png" },
    { name: "LMU Germany", logo: "/images/partners/lmu-logo.png" },
    { name: "OIA", logo: "/images/partners/oia-logo.png" },
    { name: "Telkom University", logo: "/images/partners/telkom-logo.png" },
    { name: "OMNES Education", logo: "/images/partners/omnes-logo.png" },
    { name: "Tamayoz", logo: "/images/partners/tamayoz-logo.png" },
    { name: "DPU", logo: "/images/partners/dpu-logo.png" }
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
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="w-24 h-16 relative grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection; 
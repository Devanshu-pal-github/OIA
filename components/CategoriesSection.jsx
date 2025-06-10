'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

// Category Card Component
const CategoryCard = ({ title, items, icon, link }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-xl shadow-md p-6 h-full"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center mb-4">
        <div className="p-3 rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-center mb-4 text-primary">
        {title}
      </h3>
      <ul className="space-y-3 mb-6">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 text-secondary mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="text-center mt-auto">
        <Link href={link}>
          <span className="text-primary font-medium hover:underline transition-all">
            Learn More →
          </span>
        </Link>
      </div>
    </motion.div>
  );
};

const CategoriesSection = () => {
  // Icon components using SVG
  const StudentIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 14l9-5-9-5-9 5 9 5z"/>
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
    </svg>
  );

  const FacultyIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 14l9-5-9-5-9 5 9 5z"/>
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
    </svg>
  );

  const PartnersIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
    </svg>
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* For Students */}
          <CategoryCard
            title="For Students"
            icon={<StudentIcon />}
            items={[
              "International exchange programs, dual degree opportunities",
              "Study Abroad Programs",
              "Global Research Opportunities",
              "Scholarships",
              "Application Guide"
            ]}
            link="/students"
          />

          {/* For Faculty */}
          <CategoryCard
            title="For Faculty"
            icon={<FacultyIcon />}
            items={[
              "Research collaborations and partnerships",
              "Research Opportunities",
              "Teaching Abroad",
              "Appointments",
              "Fellowship Models"
            ]}
            link="/faculty"
          />

          {/* For Partners */}
          <CategoryCard
            title="For Partners"
            icon={<PartnersIcon />}
            items={[
              "Academic & research partnerships and collaboration",
              "Partnership Models",
              "Join OIA Team",
              "Get in Touch"
            ]}
            link="/partners"
          />
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection; 
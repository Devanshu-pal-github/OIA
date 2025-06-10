'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';

// Program Card Component
const ProgramCard = ({ icon, title, description, link, iconColor }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`p-3 rounded-full ${iconColor} text-white mb-4`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
      <p className="text-sm text-gray-600 text-center mb-4">{description}</p>
      <Link href={link} className="mt-auto">
        <span className="text-primary text-sm font-medium hover:underline">
          Learn More →
        </span>
      </Link>
    </motion.div>
  );
};

const GlobalPrograms = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Icons
  const StudentExchangeIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
    </svg>
  );

  const DualDegreesIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
    </svg>
  );

  const SummerSchoolIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
    </svg>
  );

  const FacultyMobilityIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
    </svg>
  );

  const JointResearchIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
    </svg>
  );

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
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Global Programs</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our diverse range of international programs designed to enrich your academic journey and global perspective.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Student Exchange */}
          <ProgramCard 
            icon={<StudentExchangeIcon />}
            title="Student Exchange"
            description="Experience study abroad opportunities"
            link="/student-exchange"
            iconColor="bg-primary"
          />

          {/* Dual Degrees */}
          <ProgramCard 
            icon={<DualDegreesIcon />}
            title="Dual Degrees"
            description="Get two degrees at once"
            link="/dual-degrees"
            iconColor="bg-indigo-600"
          />

          {/* Summer Schools */}
          <ProgramCard 
            icon={<SummerSchoolIcon />}
            title="Summer Schools"
            description="Short-term global study"
            link="/summer-schools"
            iconColor="bg-amber-500"
          />

          {/* Faculty Mobility */}
          <ProgramCard 
            icon={<FacultyMobilityIcon />}
            title="Faculty Mobility"
            description="Teach and research abroad"
            link="/faculty-mobility"
            iconColor="bg-emerald-600"
          />

          {/* Joint Research */}
          <ProgramCard 
            icon={<JointResearchIcon />}
            title="Joint Research"
            description="Collaborative research"
            link="/joint-research"
            iconColor="bg-violet-600"
          />
        </div>
      </div>
    </section>
  );
};

export default GlobalPrograms; 
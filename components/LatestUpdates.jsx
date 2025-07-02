'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';

// Event Card component
const EventCard = ({ date, title, description, link }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="flex items-start gap-4 mb-8"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-primary/10 rounded-lg p-2 min-w-[60px] text-center">
        <span className="block text-primary text-xs font-medium">{date.month}</span>
        <span className="block text-primary text-lg font-bold">{date.day}</span>
        <span className="block text-primary text-xs">{date.year}</span>
      </div>
      <div>
        <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <Link href={link}>
          <span className="text-primary text-sm font-medium hover:underline">Learn more →</span>
        </Link>
      </div>
    </motion.div>
  );
};

// News Card component
const NewsCard = ({ image, date, title, description, category, link }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col md:flex-row gap-4 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full md:w-1/4 h-40 md:h-auto relative rounded-lg overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>
      <div className="w-full md:w-3/4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-gray-500">{date}</span>
          <span className="w-1 h-1 rounded-full bg-gray-400"></span>
          <span className="text-xs text-primary font-medium">{category}</span>
        </div>
        <h4 className="font-semibold text-lg text-gray-800 mb-2">{title}</h4>
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        <Link href={link}>
          <span className="text-primary text-sm font-medium hover:underline">Read more →</span>
        </Link>
      </div>
    </motion.div>
  );
};

const LatestUpdates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Sample events data
  const events = [
    {
      date: { day: '15', month: 'Feb', year: '2024' },
      title: "International Student Orientation",
      description: "Virtual orientation session for all incoming international students for Spring semester.",
      link: "/events/orientation"
    },
    {
      date: { day: '28', month: 'Feb', year: '2024' },
      title: "Study in South Korea Information Session",
      description: "Learn about exchange opportunities with our partner universities in South Korea.",
      link: "/events/south-korea"
    }
  ];

  // Sample news data
  const news = [
    {
      image: "/eventsAndNews/japanmeeting.jpg",
      date: "January 22, 2024",
      title: "Japanese Delegation Visits Medicaps to Discuss Future Collaborations",
      description: "A high-level delegation from Japan visited Medicaps University to explore research and academic exchange opportunities.",
      category: "Delegation",
      link: "/news/japanese-delegation"
    },
    {
      image: "/eventsAndNews/medicapsjoinsinternationaledu.jpg",
      date: "February 15, 2024",
      title: "Medicaps University Joins International Education Consortium",
      description: "Medicaps has been accepted into the prestigious global consortium of universities focused on international mobility and research.",
      category: "Announcement",
      link: "/news/consortium"
    },
    {
      image: "/eventsAndNews/discussionofindianedu.jpg",
      date: "January 10, 2024",
      title: "Assistant Director Vasudev Krishna of Northumbria University Discusses Indian Education",
      description: "An insightful presentation on opportunities for Indian students in UK education system.",
      category: "Visit",
      link: "/news/northumbria-visit"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Latest Updates And Events
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Stay updated with our recent activities, upcoming events, and international collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Upcoming Events */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-6 text-primary border-b pb-2">
              Upcoming Events
            </h3>
            <div className="space-y-4">
              {events.map((event, index) => (
                <EventCard 
                  key={index}
                  date={event.date}
                  title={event.title}
                  description={event.description}
                  link={event.link}
                />
              ))}
            </div>
          </div>

          {/* Latest News */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-6 text-primary border-b pb-2">
              Latest News
            </h3>
            <div className="space-y-8">
              {news.map((item, index) => (
                <NewsCard 
                  key={index}
                  image={item.image}
                  date={item.date}
                  title={item.title}
                  description={item.description}
                  category={item.category}
                  link={item.link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates; 
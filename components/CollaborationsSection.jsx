
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

// List of universities with real-life images and names
const universities = [
  {
    name: 'Woosong University, South Korea',
    image: '/universities/woosong.jpeg',
  },
  {
    name: 'INTI University, Malaysia',
    image: '/universities/inti.jpeg',
  },
  {
    name: 'TAR UMT University, Malaysia',
    image: '/universities/tar.jpeg',
  },
  {
    name: 'City University of Seattle, USA',
    image: '/universities/city.jpeg',
  },
  {
    name: 'DPU, Thailand',
    image: '/universities/dpu.jpeg',
  },
  {
    name: 'SMU University, USA',
    image: '/universities/smu.jpeg',
  },
  {
    name: 'LIGMR University',
    image: '/universities/ligmar.jpeg',
  },
  {
    name: 'National Taipei University Technology, Taiwan',
    image: '/universities/nationaltaiwan.jpeg',
  },
  {
    name: 'Asia University, Taiwan',
    image: '/universities/asiauniversitytaiwan.jpeg',
  },
  {
    name: 'Lunghwa University, Taiwan',
    image: '/universities/lunghwa.jpeg',
  },
  {
    name: 'Cheng Shiu University, Taiwan',
    image: '/universities/chenshiutaiwan.jpeg',
  },
  {
    name: 'Aivancity University, France',
    image: '/universities/aivancity.jpeg',
  },
];

const CollaborationsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-primary mb-10">Global University Partners</h2>
        {/* Carousel for mobile, grid for desktop */}
        <div className="block md:hidden overflow-x-auto pb-4">
          <div className="flex gap-6 min-w-[340px]">
            {universities.map((uni, idx) => (
              <motion.div
                key={idx}
                className="min-w-[260px] bg-gray-50 rounded-lg shadow p-4 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                style={{ flex: '0 0 auto' }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <div className="w-full h-40 relative mb-3 flex items-center justify-center">
                  <Image
                    src={uni.image}
                    alt={uni.name}
                    fill
                    className="object-cover rounded-md"
                    sizes="260px"
                  />
                </div>
                <h3 className="text-base font-semibold text-gray-800 mt-2">{uni.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
          {universities.map((uni, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 rounded-lg shadow p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className="w-full h-40 relative mb-4 flex items-center justify-center">
                <Image
                  src={uni.image}
                  alt={uni.name}
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mt-2">{uni.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationsSection;

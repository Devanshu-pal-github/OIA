'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Partner universities list – consistent across site
const partners = [
  { logo: 'woosong.png',   name: 'Woosong University, South Korea',               blurb: 'Semester exchange and joint research projects.' },
  { logo: 'inti.png',      name: 'INTI University, Malaysia',                    blurb: 'Student mobility and collaborative academics.' },
  { logo: 'tarumt.png',    name: 'TAR UMT University, Malaysia',                 blurb: 'Dual-degree pathways and faculty exchange.' },
  { logo: 'cityu.png',     name: 'City University of Seattle, USA',              blurb: 'Global MBA articulation and online learning cooperation.' },
  { logo: 'dpu.png',       name: 'DPU, Thailand',                                blurb: 'Cultural-immersion programmes and study tours.' },
  { logo: 'smu.png',       name: 'SMU University, USA',                          blurb: 'Joint research conferences and internships.' },
  { logo: 'aivancity.png', name: 'Aivancity University, France',                 blurb: 'AI & Data-science focused summer schools.' },
  { logo: 'ligmr.png',     name: 'LIGMR University',                             blurb: 'Collaborative innovation labs and faculty visits.' },
  { logo: 'ntut.png',      name: 'National Taipei University Technology, Taiwan', blurb: 'Engineering capstone exchanges and hackathons.' },
  { logo: 'asia.png',      name: 'Asia University, Taiwan',                      blurb: 'Short-term exchanges and language programmes.' },
  { logo: 'lunghwa.png',   name: 'Lunghwa University, Taiwan',                   blurb: 'Joint seminars and cultural engagement.' },
  { logo: 'chengshiu.png', name: 'Cheng Shiu University, Taiwan',                blurb: 'Collaborative research and student internships.' },
];

const CollaborationsSection = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-primary mb-12"
        >
          Global University Partners
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {partners.map((p, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition-shadow p-8 flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <div className="w-32 h-20 relative mb-4 flex items-center justify-center">
                <Image src={`/university-logos/${p.logo}`} alt={p.name} fill className="object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                {p.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{p.blurb}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationsSection;

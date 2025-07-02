
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// List of student exchange moment images
const exchangeMoments = [
  {
    image: "/studentExchangeAndMoments/studentexchang(inti11).jpg",
    alt: "Student Exchange INTI 11"
  },
  {
    image: "/studentExchangeAndMoments/studentexchange(inti).jpg",
    alt: "Student Exchange INTI"
  },
  {
    image: "/studentExchangeAndMoments/studentexchange(inti10).jpg",
    alt: "Student Exchange INTI 10"
  },
  {
    image: "/studentExchangeAndMoments/studentexchange(inti2).jpg",
    alt: "Student Exchange INTI 2"
  },
  {
    image: "/studentExchangeAndMoments/studentexchange(inti3).jpg",
    alt: "Student Exchange INTI 3"
  },
  {
    image: "/studentExchangeAndMoments/studentexchange(inti4).jpg",
    alt: "Student Exchange INTI 4"
  },
  {
    image: "/studentExchangeAndMoments/studentexchange(inti5).jpg",
    alt: "Student Exchange INTI 5"
  },
  {
    image: "/studentExchangeAndMoments/studentexchange(inti6).jpg",
    alt: "Student Exchange INTI 6"
  },
  {
    image: "/studentExchangeAndMoments/studentexchange(inti7).jpg",
    alt: "Student Exchange INTI 7"
  },
  {
    image: "/studentExchangeAndMoments/studentexchange(inti8).jpg",
    alt: "Student Exchange INTI 8"
  },
  {
    image: "/studentExchangeAndMoments/studentexchange(inti9).jpg",
    alt: "Student Exchange INTI 9"
  },
  {
    image: "/studentExchangeAndMoments/studentexchange(japan).jpg",
    alt: "Student Exchange Japan"
  },
  {
    image: "/studentExchangeAndMoments/studentexchange(students).jpg",
    alt: "Student Exchange Students"
  },
  {
    image: "/studentExchangeAndMoments/studentexchange(woosong).jpg",
    alt: "Student Exchange Woosong"
  },
  {
    image: "/studentExchangeAndMoments/studentexchange(woosong2).jpg",
    alt: "Student Exchange Woosong 2"
  },
  {
    image: "/studentExchangeAndMoments/studentexchange(woosong3).jpg",
    alt: "Student Exchange Woosong 3"
  }
];

export default function StudentExchangePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-10">Student Exchange Moments</h2>
          {/* Carousel for mobile, grid for desktop */}
          <div className="block md:hidden overflow-x-auto pb-4">
            <div className="flex gap-6 min-w-[340px]">
              {exchangeMoments.map((moment, idx) => (
                <motion.div
                  key={idx}
                  className="min-w-[260px] bg-gray-50 rounded-lg shadow p-4 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                  style={{ flex: "0 0 auto" }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                >
                  <div className="w-full aspect-[4/3] relative mb-3 flex items-center justify-center">
                    <Image
                      src={moment.image}
                      alt={moment.alt}
                      fill
                      className="object-cover rounded-md"
                      style={{ objectPosition: "center top" }}
                      sizes="260px"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
            {exchangeMoments.map((moment, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-50 rounded-lg shadow p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <div className="w-full aspect-[4/3] relative mb-4 flex items-center justify-center">
                  <Image
                    src={moment.image}
                    alt={moment.alt}
                    fill
                    className="object-cover rounded-md"
                    style={{ objectPosition: "center top" }}
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import HeroTopLeft from '../assets/heroimgtopleft.jpg';
import HeroTopRight from '../assets/heroimgtopright.jpg';
import HeroBottomLeft from '../assets/heroimgbottomleft.jpg';
import HeroBottomRight from '../assets/heroimgbottomright.jpg';

const HeroSection = () => {
  return (
    <section className="gradient-bg text-white overflow-hidden">
      <div className="container mx-auto py-12 md:py-16">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <motion.div 
            className="w-full lg:w-1/2 mb-8 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Campus to Continents — Learning Beyond Borders
            </h1>
            <p className="text-lg mb-8">
              Excel yourself for global opportunities with expert guidance from OIA Medicaps University
            </p>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/programs">
                <button className="btn-outline">
                  Explore Our Programs
                </button>
              </Link>
              <Link href="/collaborations">
                <button className="btn-outline">
                  View Global Collaborations
                </button>
              </Link>
              <Link href="/partners">
                <button className="btn-outline">
                  Partner With Us
                </button>
              </Link>
            </div>
          </motion.div>
          
          {/* Right Content - Image Grid */}
          <motion.div 
            className="w-full lg:w-1/2 pl-0 lg:pl-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-xl">
                <Image 
                  src={HeroTopLeft} 
                  alt="International students at campus" 
                  width={300} 
                  height={300} 
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-xl">
                <Image 
                  src={HeroTopRight} 
                  alt="Global partnership signing ceremony" 
                  width={300} 
                  height={300} 
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-xl">
                <Image 
                  src={HeroBottomLeft} 
                  alt="Award ceremony" 
                  width={300} 
                  height={300} 
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-xl">
                <Image 
                  src={HeroBottomRight} 
                  alt="International faculty" 
                  width={300} 
                  height={300} 
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 
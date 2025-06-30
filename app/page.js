'use client';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CategoriesSection from '../components/CategoriesSection';
import OIASection from '../components/OIASection';
import GlobalPrograms from '../components/GlobalPrograms';
import dynamic from 'next/dynamic';
const WorldMap = dynamic(() => import('../components/WorldMap'), { ssr: false, loading: () => <div className="text-center py-10">Loading map...</div> });
import StudentStories from '../components/StudentStories';
import LatestUpdates from '../components/LatestUpdates';
import LeadershipCarousel from '../components/LeadershipCarousel';

import CTASection from '../components/CTASection';
import LogoMarquee from '../components/LogoMarquee';
import Footer from '../components/Footer';

export default function Home() {

  return (
    <main className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Categories Section */}
      <CategoriesSection />

      {/* OIA Section */}
      <OIASection />

      {/* Global Programs */}
      <GlobalPrograms />

      {/* World Map */}
      <WorldMap />

      {/* Leadership Carousel */}
      <LeadershipCarousel />

      {/* Student Stories */}
      <StudentStories />

      {/* Latest Updates */}
      <LatestUpdates />

      {/* Partner Logos Strip */}
      <LogoMarquee />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
} 
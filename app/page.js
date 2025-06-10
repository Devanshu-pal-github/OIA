'use client';
import { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CategoriesSection from '../components/CategoriesSection';
import OIASection from '../components/OIASection';
import GlobalPrograms from '../components/GlobalPrograms';
import WorldMap from '../components/WorldMap';
import StudentStories from '../components/StudentStories';
import LatestUpdates from '../components/LatestUpdates';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function Home() {
  // Lazy load the world map JSON file
  useEffect(() => {
    const preloadMapData = async () => {
      try {
        await fetch('/world-110m.json');
      } catch (error) {
        console.error('Error preloading map data:', error);
      }
    };
    
    preloadMapData();
  }, []);

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

      {/* Student Stories */}
      <StudentStories />

      {/* Latest Updates */}
      <LatestUpdates />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
} 
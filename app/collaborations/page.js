// ...existing code...
import CollaborationsSection from '../../components/CollaborationsSection';

export const metadata = {
  title: 'Collaborations | Office of International Affairs - Medicaps University',
  description: 'Explore Medicaps University\'s global collaborations.',
};

export default function CollaborationsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Intro */}
      <section className="bg-gradient-to-r from-primary/90 to-secondary/80 py-24 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Global Collaborations</h1>
          <p className="max-w-3xl mx-auto text-lg opacity-90">
            Medicaps University partners with world-class institutions to provide students and faculty with unparalleled international opportunities.
          </p>
        </div>
      </section>
      {/* Collaborations Grid */}
      <CollaborationsSection />
    </main>
  );
}

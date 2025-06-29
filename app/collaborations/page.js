import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Collaborations | Office of International Affairs - Medicaps University',
  description: 'Explore Medicaps University\'s global collaborations.',
};

export default function CollaborationsPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Placeholder Content */}
      <section className="container mx-auto py-20 text-center">
        <h1 className="text-4xl font-semibold mb-4">Collaborations</h1>
        <p className="text-gray-600">Content coming soon.</p>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

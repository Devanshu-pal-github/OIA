import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Dual Degrees | Office of International Affairs - Medicaps University',
  description: 'Learn about dual degree opportunities at Medicaps University.',
};

export default function DualDegreesPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Placeholder Content */}
      <section className="container mx-auto py-20 text-center">
        <h1 className="text-4xl font-semibold mb-4">Dual Degrees</h1>
        <p className="text-gray-600">Content coming soon.</p>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

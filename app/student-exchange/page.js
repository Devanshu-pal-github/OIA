import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Student Exchange | Office of International Affairs - Medicaps University',
  description: 'Discover student exchange programs at Medicaps University.',
};

export default function StudentExchangePage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Placeholder Content */}
      <section className="container mx-auto py-20 text-center">
        <h1 className="text-4xl font-semibold mb-4">Student Exchange</h1>
        <p className="text-gray-600">Content coming soon.</p>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

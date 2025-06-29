import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Contact | Office of International Affairs - Medicaps University',
  description: 'Get in touch with Medicaps University\'s Office of International Affairs.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Placeholder Content */}
      <section className="container mx-auto py-20 text-center">
        <h1 className="text-4xl font-semibold mb-4">Contact Us</h1>
        <p className="text-gray-600">Content coming soon.</p>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

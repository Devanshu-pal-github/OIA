import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ExchangeProfiles from '../../components/ExchangeProfiles';

export const metadata = {
  title: 'Student Exchange | Office of International Affairs - Medicaps University',
  description: 'Discover student exchange programs at Medicaps University.',
};

export default function StudentExchangePage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Exchange Profiles */}
      <ExchangeProfiles />

      {/* Footer */}
      <Footer />
    </main>
  );
}

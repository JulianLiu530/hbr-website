import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategoryNav from '@/components/CategoryNav';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <CategoryNav />
      <Footer />
    </main>
  );
}

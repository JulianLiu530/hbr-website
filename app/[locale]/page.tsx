import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategoryNav from '@/components/CategoryNav';
import Products from '@/components/Products';
import Features from '@/components/Features';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <CategoryNav />
      <Products />
      <Features />
      <About />
      <Footer />
    </main>
  );
}

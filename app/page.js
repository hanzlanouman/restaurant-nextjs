import BookTable from '@/components/BookTable';
import Deals from '@/components/Deals';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className='mx-auto'>
      <Hero />
      <Deals />
      <BookTable />
      <About />
    </main>
  );
}

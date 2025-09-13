
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Blog from './Blog';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zanimljivostis',
  description: 'Pročitajte zanimljive i edukativne članke na blogu Poliklinike Fokus. Saznajte više o oftalmologiji, optici, estetskoj medicini i zdravlju.',
  robots: 'index, follow',
};

const page = () => {
    
  return (
    <>
        <Navbar></Navbar>
        <main className='bg-white text-black'>
            <Blog></Blog>
        </main>
        <Footer></Footer>
    </>
    
  )
}

export default page
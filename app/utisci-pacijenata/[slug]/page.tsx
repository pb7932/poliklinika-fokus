import React from 'react'
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Testimonial from './Testimonial';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Utisci pacijenata',
  description: 'Pročitajte iskrene utiske naših zadovoljnih pacijenata i saznajte kako Poliklinika Fokus pomaže ljudima u očuvanju zdravlja očiju i postizanju estetskih ciljeva.',
  robots: 'index, follow',
};

const page = () => {
   
  return (
    <>
        <Navbar></Navbar>
        <main className='bg-white text-black'>
            <Testimonial></Testimonial>
        </main>
        <Footer></Footer>
    </>
    
  )
}

export default page
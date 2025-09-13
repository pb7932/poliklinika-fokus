import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TestimonialList from './TestimonialList'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Utisci pacijenata',
  description: 'Pročitajte iskrene utiske naših zadovoljnih pacijenata i saznajte kako Poliklinika Fokus pomaže ljudima u očuvanju zdravlja očiju i postizanju estetskih ciljeva.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.poliklinikafokus.hr/utisci-pacijenata',
  }
};

const page = () => {
  return (
    <div className="relative z-0 font-open-sans">
        <Navbar></Navbar>
        <main className="relative font-open-sans overflow-x-hidden bg-white text-black">
            <TestimonialList></TestimonialList>
        </main>
        <Footer></Footer>
    </div>
  )
}

export default page
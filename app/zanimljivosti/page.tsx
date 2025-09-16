import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BlogList from './BlogList'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zanimljivostis',
  description: 'Pročitajte zanimljive i edukativne članke na blogu specijalističke ordinacije za oftalmologiju, estetska medicina i Optike Fokus. Saznajte više o oftalmologiji, optici, estetskoj medicini i zdravlju.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.poliklinikafokus.hr/zanimljivosti',
  }
};

const page = () => {
  return (
    <div className="relative z-0 font-open-sans">
        <Navbar></Navbar>
        <main className="relative font-open-sans overflow-x-hidden bg-white text-black">
            <BlogList></BlogList>
        </main>
        <Footer></Footer>
    </div>
  )
}

export default page
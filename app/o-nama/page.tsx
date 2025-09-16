import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from './About'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O nama',
  description: 'Specijalistička ordinacija za oftalmologiju, estetska medicina i Optika Fokuss u Varaždinu pruža vrhunsku medicinsku skrb u području oftalmologije, optike i estetske medicine. Nudi preglede vida, operacije sive mrene, Botox tretmane i više.',
  openGraph: {
    title: 'O nama | Specijalistička ordinacija za oftalmologiju, estetska medicina i Optika Fokus',
    description: 'Specijalistička ordinacija za oftalmologiju, estetska medicina i Optika Fokus u Varaždinu pruža vrhunsku medicinsku skrb u području oftalmologije, optike i estetske medicine. Nudi preglede vida, operacije sive mrene, Botox tretmane i više.',
    url: 'https://www.poliklinikafokus.hr/o-nama',
    images: ['/images/onama-hero2.jpeg'],
    type: 'website',
  },
  twitter: {
    title: 'O nama | Specijalistička ordinacija za oftalmologiju, estetska medicina i Optika Fokus',
    description: 'Specijalistička ordinacija za oftalmologiju, estetska medicina i Optika Fokus u Varaždinu pruža vrhunsku medicinsku skrb u području oftalmologije, optike i estetske medicine. Nudi preglede vida, operacije sive mrene, Botox tretmane i više.',
    images: ['/images/onama-hero2.jpeg'],
    card: 'summary_large_image',
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.poliklinikafokus.hr/o-nama',
  }
};

const page = () => {
  return (
    <div className="relative z-0 font-open-sans">
        <Navbar></Navbar>
        <main className="relative font-open-sans overflow-x-hidden bg-white text-black">
            <About></About>
        </main>
        <Footer></Footer>
    </div>
  )
}

export default page
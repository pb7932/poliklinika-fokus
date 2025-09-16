import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OrderPopup from '../sections/OrderPopup'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Naručivanje termina',
    description: 'Naručite svoj termin za oftalmološke preglede, optičke usluge i estetske tretmane u specijalističkoj ordinacija za oftalmologiju, estetska medicina i Optici Fokus. Brzo, jednostavno i profesionalno.',
    alternates: {
      canonical: 'https://www.poliklinikafokus.hr/narucivanje',
    }
};


const page = () => {
  return (
    <div className="relative z-0 font-open-sans">
        <Navbar></Navbar>
        <main className="relative font-open-sans overflow-x-hidden text-black">
            <OrderPopup></OrderPopup>
        </main>
        <Footer></Footer>
    </div>
  )
}

export default page
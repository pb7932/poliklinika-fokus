import { Metadata } from 'next';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { ophthalmologyServices, aestheticServices } from '../constants/priceList'; // Importing data
import React from 'react';
import PriceCard from './PriceCard';

export const metadata: Metadata = {
    title: 'Cjenik usluga',
    description: 'Saznajte cjenik usluga Poliklinike Fokus za oftalmološke preglede, operacije i estetske zahvate. Pružamo vrhunsku medicinsku skrb u Varaždinu.',
    alternates: {
      canonical: 'https://www.poliklinikafokus.hr/cjenik-usluga',
    }
};

const PriceListSection = () => {
  return (
    <div className='relative z-0 font-open-sans'>
        <Navbar></Navbar>
        <main className='bg-white text-black'>
            <section id="price-list" className="pb-20">
                <section
                    className="relative w-full h-[70vh]
                               bg-[url('/images/laser-eye-surgery-main-velika.jpg')]
                               bg-center bg-cover bg-blend-darken bg-black/50
                               flex items-end justify-end px-4 lg:px-24 py-24"
                >
                    <h1 className="text-3xl md:text-4xl lg:text-6xl max-w-6xl font-bold text-white text-center px-4 flex justify-end">
                      CJENIK USLUGA
                    </h1>
                </section>
            
            
               <div className='container mx-auto px-4 py-20'>
                 <div className="mb-32">
                   <h2 className="text-2xl lg:text-3xl font-semibold mb-6">Cjenik oftalmoloških usluga</h2>
                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                     {ophthalmologyServices.map((service, index) => (
                       <PriceCard key={index} service={service.service} price={service.price} notes={service.notes}></PriceCard>
                     ))}
                   </div>
                 </div>
                
                 <div>
                   <h2 className="text-2xl lg:text-3xl font-semibold mb-6">Cjenik estetskih tretmana</h2>
                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                     {aestheticServices.map((service, index) => (
                       <PriceCard key={index} service={service.service} price={service.price}></PriceCard>
                     ))}
                   </div>
                 </div>
               </div>
            </section>
        </main>
        <Footer></Footer>
    </div>
  );
};

export default PriceListSection;

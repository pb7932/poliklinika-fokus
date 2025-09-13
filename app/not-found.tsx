import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Poliklinika Fokus'
};

const page = () => {
  return (
    <div className="relative z-0 font-open-sans bg-white text-black">
        <Navbar></Navbar>
        <main className="relative font-open-sans overflow-x-hidden min-h-[90vh] flex flex-col justify-center items-center gap-8 px-4">
            <section>
                <p className='text-3xl font-semibold'>404 | Stranica nije pronađena</p>
            </section>
        </main>
        <Footer></Footer>
    </div>
  )
}

export default page
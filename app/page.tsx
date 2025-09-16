import React, { Suspense } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Info from "./sections/Info";

const Testimonials = React.lazy(() => import("./components/Testimonials"));
const AboutUs = React.lazy(() => import("./sections/AboutUs"));
const BlogSection = React.lazy(() => import("./sections/Blog"));
const Contact = React.lazy(() => import("./sections/Contact"));
const CallToAction = React.lazy(() => import("./sections/CTA"));
const Services = React.lazy(() => import("./sections/Services"));
const Steps = React.lazy(() => import("./sections/Steps"));
import { Metadata } from 'next';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Specijalistička ordinacija za oftalmologiju, estetska medicina i Optika Fokus Varaždin',
  description:
    'Specijalistička ordinacija za oftalmologiju, estetska medicina i Optika Fokus u Varaždinu nudi stručne usluge optike, oftalmologije i estetske medicine. Više od 20 godina iskustva u njezi vida i kože.',
  alternates: {
    canonical: 'https://www.poliklinikafokus.hr/',
  },
};

export default function Home() {
  return (
    <div className="relative z-0 font-open-sans bg-white text-black">
        <Navbar isHome={true} />
        <main className="relative font-open-sans overflow-x-hidden" role="main">
            <Hero />
            <Info />
            <Suspense fallback={<div>Loading...</div>}>
                <Services />
                <AboutUs />
                <Steps />
                <Testimonials />
                <CallToAction />
                {/* <BlogSection /> */}
                <section className="pt-1 px-4" id="contact">
                    <Contact />
                </section>
            </Suspense>
        </main>
        
        <Footer isHome={true} />
    </div>
  );
}

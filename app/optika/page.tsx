// app/optika/page.tsx
import Image from 'next/image';
import { Metadata } from 'next';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  HiComputerDesktop,
  HiAdjustmentsHorizontal, // kontrola kratkovidnosti
  HiTruck,                 // vožnja
  HiSquares2X2,            // progresivne linije
  HiSun,
  HiPhone,                   // anti‑refleks
} from 'react-icons/hi2';
import OptikaCard from '../components/OptikaCard';

export const metadata: Metadata = {
  title: "Optika | Rodenstock leće",
  description: "Vrhunske Rodenstock leće za jasan i udoban vid u svim uvjetima. Saznajte više o našim lećama za srednju udaljenost, kontrolu kratkovidnosti, vožnju i progresivne linije.",
  openGraph: {
    title: "Optika – Specijalistička ordinacija za oftalmologiju, estetska medicina i Optika Fokus",
    description: "Vrhunske Rodenstock leće za jasan i udoban vid u svim uvjetima. Saznajte više o našim lećama za srednju udaljenost, kontrolu kratkovidnosti, vožnju i progresivne linije.",
    images: ["/images/optika-hero.jpg"],
  },
  alternates: {
    canonical: 'https://www.poliklinikafokus.hr/optika',
  }
};

const features = [
  {
    title: "Rodenstock leće za srednju udaljenost",
    description: "Idealne za rad i svakodnevne aktivnosti na srednjoj udaljenosti – rad za računalom, čitanje dokumenata ili kućni poslovi. Smanjuju naprezanje očiju i omogućuju jasan vid bez stalne promjene naočala.",
    icon: <HiComputerDesktop  size={48} className="text-cyan-300"  />,
  },
  {
    title: "Rodenstock MyCon – leće za kontrolu kratkovidnosti",
    description: "Posebno razvijene za usporavanje progresije miopije (kratkovidnosti) kod djece i tinejdžera. MyCon leće predstavljaju modernu i znanstveno potvrđenu metodu zaštite vida kod mlađih uzrasta, nudeći dugoročnu dobrobit za zdravlje oka.",
    icon: <HiAdjustmentsHorizontal  size={48} className="text-cyan-300"  />,
  },
  {
    title: "Rodenstock Road – sigurnost u vožnji",
    description: "Vožnja nikada nije bila sigurnija i udobnija! Rodenstock Road leće dizajnirane su za optimalnu vidljivost tijekom dana i noći, smanjuju odsjaj svjetala i poboljšavaju kontrast. Idealne su za sve koji provode puno vremena za volanom.",
    icon: <HiTruck  size={48} className="text-cyan-300"  />,
  },
  {
    title: "Rodenstock progresivne leće za prirodan vid",
    description: "Savršen prijelaz između gledanja na blizinu, srednju udaljenost i daljinu – bez neugodnog skakanja slike. Rodenstock progresivne leće personalizirane su prema vašoj anatomiji oka, pružajući besprijekoran i prirodan vid u svim situacijama.",
    icon: <HiSquares2X2  size={48} className="text-cyan-300"  />,
  },
  {
    title: " Rodenstock X-tra Clean – kristalna čistoća svaki dan",
    description: "Revolucionarna nano-premaz tehnologija koja leće čini iznimno glatkima, otpornima na ogrebotine i izuzetno jednostavnima za čišćenje. Prašina, voda i otisci prstiju više nisu problem – vid ostaje bistar i jasan cijeli dan.",
    icon: <HiSun  size={48} className="text-cyan-300"  />,
  },
];

export default function OptikaPage() {
  return (
      <div className="relative z-0 font-open-sans bg-white text-black">
        <Navbar></Navbar>
        <main className="space-y-12">
          {/* Hero */}
          <section
            className="relative w-full h-[70vh]
                       bg-[url('/images/optika-hero.jpg')]
                       bg-center bg-cover bg-blend-darken bg-black/50
                       flex items-end justify-end px-4 lg:px-24 py-24"
          >
            <h1 className="text-3xl md:text-4xl lg:text-6xl max-w-6xl font-bold text-white text-center px-4 flex justify-end">
              OPTIKA
            </h1>
          </section>

          <section className="max-w-5xl mx-auto pb-6 px-4 text-center">
          <p className="text-lg md:text-xl text-gray-700">
            U našoj poliklinici vjerujemo da kvaliteta vida znači kvalitetu života.
                      Zato u suradnji s renomiranim brendom Rodenstock nudimo vrhunske oftalmološke
                      leće koje pružaju preciznost, udobnost i prilagodbu svakom načinu života.
          </p>
        </section>

          {/* Desktop */}
          <section className="hidden xl:flex mx-auto flex-row py-12">
            <div className="flex-2 flex flex-row justify-center items-center gap-8 px-4 lg:px-4">
              <div className='flex flex-col'>
                  <div className='max-w-xl mb-12'>
                    <p className="md:text-xl text-gray-700">
                      
                    </p>
                  </div>
                  <div className='grid grid-cols-1 gap-8 self-end'>
                    <OptikaCard title={features[0].title} icon={features[0].icon} description={features[0].description} />
                    <OptikaCard title={features[1].title} icon={features[1].icon} description={features[1].description} />
                    <OptikaCard title={features[2].title} icon={features[2].icon} description={features[2].description} />
                  </div>
              </div>
              
              <div className='grid grid-cols-1 gap-8 mt-24'>
                <OptikaCard title={features[3].title} icon={features[3].icon} description={features[3].description} />
                <OptikaCard title={features[4].title} icon={features[4].icon} description={features[4].description} />
              </div>
            </div>
            <div className="flex-1 w-full min-h-full bg-[url('/images/optika-lece.jpg')] filter brightness-80 bg-cover bg-center bg-no-repeat">

            </div>
          </section>

          {/* Mobile */}
          <section className="xl:hidden mx-auto flex flex-col lg:flex-row py-12 gap-12 px-4 xl:px-0">
              <div className="flex-1 flex flex-col gap-12">
                <div className='flex flex-col md:flex-row gap-8'>
                    <div className="flex-1 max-w-xl">
                      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                        Vrhunske Rodenstock leće za jasan i udoban vid u svim uvjetima
                      </h2>
                      <p className="lg:text-xl text-gray-700">
                        U našoj poliklinici vjerujemo da kvaliteta vida znači kvalitetu života.
                        Zato u suradnji s renomiranim brendom Rodenstock nudimo vrhunske oftalmološke
                        leće koje pružaju preciznost, udobnost i prilagodbu svakom načinu života.
                      </p>
                    </div>
                    
                    <div className="flex-1 w-full min-h-[300px] bg-[url('/images/optika-lece.jpg')] filter brightness-80 bg-cover bg-center bg-no-repeat rounded-lg" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 mx-auto">
                  {features.map((f, idx) => (
                    <OptikaCard key={idx} title={f.title} icon={f.icon} description={f.description} />
                  ))}
                </div>
              </div>
          </section>

          <div>
            {/* Znate li? Call‑out */}
            <section className="bg-cyan-700 text-white py-8 px-4 mb-24">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-2xl font-semibold mb-2">Znate li?</h3>
                <p className="text-lg">
                  Rodenstock koristi tehnologiju{" "}
                  <span className="font-semibold">DNEye® skeniranja</span> koja omogućuje
                  izradu leća potpuno prilagođenih vašem oku – za oštriji i kontrastniji vid,
                  osobito u uvjetima slabog osvjetljenja.
                </p>
              </div>
            </section>
            
            {/* CTA / Contact */}
            {/* <section className="py-48 px-4 text-center bg-[url('/images/laser-eye-surgery-main-velika.jpg')] bg-center bg-cover bg-no-repeat bg-blend-darken bg-black/50">
                <p className="text-2xl lg:font-4xl font-semibold max-w-4xl mx-auto text-white font-xl mb-12">Nazovite nas za besplatno savjetovanje:</p>
                <a
                  href="tel:+38542200443"
                  className="inline-flex items-center px-8 py-3 bg-cyan-700 text-white font-semibold
                             rounded-md hover:bg-cyan-800 transition"
                >
                  <HiPhone size={20} className="mr-2" />
                  042 200 443
                </a>
            </section> */}
          </div>
        </main>
        <Footer></Footer>
      </div>
  );
}

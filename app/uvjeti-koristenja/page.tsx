import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uvjeti korištenja',
  description: 'Pročitajte uvjete korištenja Internet stranice specijalističke ordinacije za oftalmologiju, estetska medicina i Optike Fokus. Saznajte odgovornosti, prava i ograničenja u vezi s korištenjem naših usluga.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.poliklinikafokus.hr/uvjeti-koristenja',
  }
};


const page = () => {
  return (
    <div className="relative z-0 font-open-sans">
        <Navbar></Navbar>
        <main className="relative font-open-sans overflow-x-hidden bg-white text-black">
            <div className="max-w-4xl mx-auto px-4 py-20 pt-36">
              <h1 className="text-3xl font-bold mb-6">Uvjeti korištenja</h1>
  
              <p className="mb-4">
                Korištenjem Internet stranice <strong>Poliklinike Fokus</strong> (dalje u tekstu: <em>Poliklinika</em>) smatra se da su korisnici u svakom trenutku upoznati s ovim uvjetima korištenja te da ih u potpunosti razumiju i prihvaćaju. Internet stranicama Poliklinike smatraju se i sve pridružene stranice i servisi koji pripadaju domeni <code>poliklinikafokus.hr</code>.
              </p>

              <p className="mb-4">
                Poliklinika zadržava pravo izmjene sadržaja i uvjeta korištenja Internet stranice bez obaveze prethodne najave te nije odgovorna za bilo kakvu štetu nastalu tim promjenama.
              </p>

              <p className="mb-4">
                Svrha Internet stranice Poliklinike je obavještavanje javnosti s područjem zdravstvene zaštite u cilju pružanja zdravstvenih usluga.
              </p>

              <p className="mb-4">
                Poliklinika se u potpunosti odriče svake odgovornosti koja je na bilo koji način vezana uz korištenje stranice od strane korisnika bilo uporabom ili zlouporabom sadržaja, te za bilo kakvu štetu koja može nastati korisniku ili bilo kojoj trećoj strani u vezi s uporabom ili zlouporabom sadržaja stranice.
              </p>

              <p className="mb-4">
                Poliklinika nastoji smanjiti tehničke pogreške prilikom korištenja Internet stranice, no ne može jamčiti da će sve funkcionalnosti biti uvijek dostupne niti odgovara za eventualnu nedostupnost stranice.
              </p>

              <p className="mb-4">
                Poliklinika ne odgovara za sadržaje niti za raspoloživost drugih stranica na koje upućuje poveznicama.
              </p>

              <p className="mb-4">
                Dokumenti, fotografije, podaci, informacije kao i bilo koji dio sadržaja objavljeni na stranici ne smiju se reproducirati, distribuirati ili na bilo koji način koristiti u komercijalne svrhe.
              </p>

              <p>
                Dopušteno je stavljati poveznicu Internet stranice Poliklinike ili njenog sastavnog dijela na druge stranice.
              </p>
            </div>

        </main>
        <Footer></Footer>
    </div>
  )
}

export default page
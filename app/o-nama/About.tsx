import React from 'react'
import EmployeeCard from '../components/EmplyeeCard'
import { employees } from '../constants/employeeData'
import Image from 'next/image'

const About = () => {
  return (
    <section className=''>
        <section
          className="relative w-full h-[70vh]
                     bg-[url('/images/onama-hero.jpeg')]
                     bg-top bg-cover bg-blend-darken bg-black/50
                     flex items-end justify-end px-4 lg:px-24 py-24"
        >
          <h1 className="text-3xl md:text-4xl lg:text-6xl max-w-6xl font-bold text-white text-center px-4 flex justify-end">
            O NAMA
          </h1>
        </section>
        
        <section id="about" className="py-20">
            <div className="w-full mx-auto px-4 lg:px-24">
                {/* First Part: Description and first image */}
                <div className="lg:flex lg:items-center lg:space-x-12 mb-24">
                  <div className="lg:w-1/2">
                    <h3 className="text-2xl lg:text-3xl font-semibold mb-2">Specijalistička ordinacija za oftalmologiju, estetsku medicinu i Optika Fokus</h3>
                    <div className='bg-cyan-700 min-w-24 max-w-24 min-h-2 mb-4'></div>

                    <h4 className='text-lg mb-6 mt-4'><i>Vaš vid i ljepota u sigurnim rukama.</i></h4>

                    <p className="text-base lg:text-lg text-gray-700 mb-4">
                      Naša ordinacija u Varaždinu pruža vrhunsku medicinsku skrb u području oftalmologije i estetske
                        medicine. U sklopu ustanove omogućeni su cjeloviti oftalmološki pregledi, operacija sive mrene,
                        dijagnostika i liječenje glaukoma, precizno određivanje dioptrije te prilagodba i primjena
                        kontaktnih leća.
                    </p>

                    <p className="text-base lg:text-lg text-gray-700 mb-4">
                    Optika Fokus nudi širok asortiman dioptrijskih i sunčanih naočala renomiranih svjetskih
                    proizvođača, dok se u segmentu estetske medicine izvode <strong>tretmani koji pomažu u ublažavanju
                    godina i naglašavanju prirodne ljepote.</strong>
                    </p>

                    <p className="text-base lg:text-lg text-gray-700 mb-4">
                    Stručni tim, u kombinaciji s najsuvremenijom medicinskom opremom, jamči sigurnost, kvalitetu i
                    individualiziran pristup svakom pacijentu. Operacija sive mrene izvodi se ultrazvučnom metodom
                    najnovije generacije, potpuno bezbolno, uz topičku anesteziju, u moderno opremljenoj
                    operacijskoj dvorani.
                    </p>
                  </div>

                  <div className="lg:w-1/2 mb-6 lg:mb-0">
                    <Image 
                      src="/images/onama-1.jpeg" 
                      alt="Poliklinika Fokus" 
                      width={500} 
                      height={400} 
                      className="rounded-xl shadow-lg w-full mx-auto"
                      loading='lazy'
                    />
                  </div>
                </div>

                {/* Second Part: More details and second image */}
                <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:space-x-12">
                  <div className="lg:w-1/2 mb-6 lg:mb-0">
                    <Image 
                      src="/images/onama-2.jpg" 
                      alt="Poliklinka Fokus Lece" 
                      width={500} 
                      height={400} 
                      className="rounded-xl shadow-lg mx-auto"
                      loading='lazy'
                    />
                  </div>

                  <div className="lg:w-1/2">
                    <h3 className="text-2xl lg:text-3xl font-semibold mb-2">Kompletna briga za Vaš vid</h3>
                    <div className='bg-cyan-700 min-w-24 max-w-24 min-h-2 mb-4'></div>

                    <p className="text-base lg:text-lg text-gray-700 mb-4">
                      Nositelji kontaktnih leća kod nas mogu pronaći sve vrste mekih i polutvrdih kontaktnih leća uz
                        obavezan liječnički pregled. Posebna pažnja posvećuje se progresivnim kontaktnim lećama koje
                        omogućuju jasan vid i na daljinu i na blizinu.
                    </p>

                    <p className="text-base lg:text-lg text-gray-700 mb-4">
                      Naši najmlađi pacijenti – <strong>predškolska i školska djeca</strong> – mogu obaviti potpuno bezbolne i
                        detaljne preglede vida za naočale i kontaktne leće.
                    </p>
                    
                    <p className="text-base lg:text-lg text-gray-700 mb-4">
                      U sklopu ordinacije nalazi se suvremeno opremljena <strong>Optika Fokus</strong>, koja nudi bogat izbor
                        ioptrijskih i sunčanih naočala renomiranih svjetskih brendova.
                    </p>

                    <p className="text-base lg:text-lg text-gray-700 mb-4">
                      Stručno medicinsko osoblje, najmoderniji dijagnostički uređaji, individualiziran pristup svakom
                        pacijentu te ugodan ambijent razlozi su zbog kojih nam brojni pacijenti povjeravaju zdravlje svoga
                        vida.
                    </p>
                  </div>
                </div>
            </div>
        </section>
        <section className='px-4 py-20 bg-gray-100'>
            <div className='w-full max-w-7xl mx-auto'>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6">Upoznajte naš tim</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 container mx-auto">
                {employees.map((employee, index) => <EmployeeCard key={index} {...employee}></EmployeeCard>
                )}
              </div>
            </div>
        </section>
    </section>
  )
}

export default About
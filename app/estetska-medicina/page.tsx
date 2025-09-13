// app/estetska-medicina/page.tsx
import React from 'react'
import { Metadata } from 'next'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Estetska medicina',
  description:
    'Vrhunski estetski tretmani za očuvanje mladolikog izgleda, regeneraciju kože i prirodno naglašavanje ljepote – bez potrebe za kirurškim zahvatima.',
  openGraph: {
    title: 'Estetska medicina – Poliklinika Fokus',
    description: 'Vrhunski estetski tretmani za očuvanje mladolikog izgleda, regeneraciju kože i prirodno naglašavanje ljepote – bez potrebe za kirurškim zahvatima.',
    images: ["/images/estetska-hero.jpeg"],
  },
  alternates: {
    canonical: 'https://www.poliklinikafokus.hr/estetska-medicina',
  }
}

type InfoCardProps = {
  title: string
  description: string
  notes?: string[]
}

function InfoCard({ title, description, notes }: InfoCardProps) {
  return (
    <div className="bg-cyan-700 rounded-xl shadow-lg p-6 hover:shadow-xl transition text-left">
      <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>
      {description && (
        <p className="text-gray-200 mb-4">{description}</p>
      )}
      {notes && notes.length > 0 && (
        <ul className="list-disc list-inside text-gray-100 space-y-1">
          {notes.map((note, idx) => (
            <li key={idx}>{note}</li>
          ))}
        </ul>
      )}
    </div>
  )
}


export default function EstetskaMedicinaPage() {
  const rejuvenation = [
    {
      title: 'SkinPen mikroneedling',
      description:
        'Minimalno invazivna mikroiglična terapija koja poboljšava teksturu kože i potiče njenu regeneraciju.',
    },
    {
      title: 'MEZOTERAPIJA',
      description: '',
      notes: [
        'MesoEye C71',
        'MesoSculpt C71',
        'Meso-Wharton P199',
        'Meso-Xanthin F199'
      ]
    },
    {
      title: 'Kolagen stimulirajući tretmani',
      description: '',
      notes: [
        'PROFHILO',
        'PROFHILO Structura',
        'PROFHILO Body',
        'Revive'
      ]
    },
    {
      title: 'PRP tretmani',
      description: '',
      notes: [
        'Pomlađivanje lica vlastitom krvlju',
        'Terapija prorijeđene kose vlastitom krvlju'
      ]
    },
    {
      title: 'Kemijski piling',
      description: ''
    },
    {
      title: 'Parafinska njega ruku',
      description: ''
    },
    {
      title: 'Egzosomi',
      description: ''
    },
  ]

  const nonSurgical = [
    {
      title: 'Botox tretmani',
      description: '',
      notes: [
        'Bore oko očiju',
        'Bore na čelu',
        'Lip flip',
        'Smanjenje mišića massetera',
        'Pojačano znojenje (hiperhidroza)'
      ]
    },
    {
      title: 'Hijaluronski fileri za usne i lice',
      description: ''
    },
    {
      title: 'PBserum enzimska terapija (LOW, MEDIUM, HIGH)',
      description: ''
    },
    {
      title: ' Nekirurški lifting',
      description: '',
      notes: [
        'Sculptra',
        'Radiesse',
        'APTOS niti za lice i tijelo'
      ]
    },
  ]

  return (
    <div className="relative z-0 font-open-sans bg-white text-black">
      <Navbar />

      <main className="space-y-16">
         {/* Hero */}
        <section
          className="relative w-full h-[70vh]
                     bg-[url('/images/estetska-hero.jpeg')]
                     bg-top bg-cover bg-blend-darken bg-black/50
                     flex items-end justify-end px-4 lg:px-24 py-24"
        >
          <h1 className="text-3xl md:text-4xl lg:text-6xl max-w-6xl font-bold text-white text-center px-4 flex justify-end">
            ESTETSKA MEDICINA
          </h1>
        </section>

        {/* Intro */}
        <section className="max-w-5xl mx-auto pb-6 px-4 text-center">
          <p className="text-lg md:text-xl text-gray-700">
            Vrhunski estetski tretmani za očuvanje mladolikog izgleda,
            regeneraciju kože i prirodno naglašavanje ljepote – bez potrebe za
            kirurškim zahvatima.
          </p>
        </section>

        {/* Section 1: Pomlađivanje i regeneracija kože */}
        <section className="hidden xl:block pb-12">
            <div className="mx-auto flex flex-row py-12">
                <div className="flex-2 flex flex-row justify-center items-center gap-8 px-4 lg:px-4">
                    <div className='flex flex-col'>
                        <div className='max-w-xl mb-12'>
                          <h2 className="flex items-center mb-8">
                              <span className="text-4xl font-semibold">Pomlađivanje i regeneracija kože</span>
                          </h2>
                        </div>
                        <div className='grid grid-cols-1 gap-8 self-end lg:self-start max-w-lg'>
                          <InfoCard title={rejuvenation[0].title} description={rejuvenation[0].description} />
                          <InfoCard title={rejuvenation[1].title} description={rejuvenation[1].description} notes={rejuvenation[1].notes} />
                          <InfoCard title={rejuvenation[2].title} description={rejuvenation[2].description} notes={rejuvenation[2].notes} />
                        </div>
                    </div>
                    
                    <div className='grid grid-cols-1 gap-8 mt-12 max-w-lg'>
                          <InfoCard title={rejuvenation[3].title} description={rejuvenation[3].description} notes={rejuvenation[3].notes} />
                          <InfoCard title={rejuvenation[4].title} description={rejuvenation[4].description} />
                          <InfoCard title={rejuvenation[5].title} description={rejuvenation[5].description} />
                          <InfoCard title={rejuvenation[6].title} description={rejuvenation[6].description} />
                    
                      
                    </div>
                  </div>
                  <div className="flex-1 w-full min-h-full bg-[url('/images/estetska-1.png')] filter brightness-80 bg-cover bg-center bg-no-repeat">
                </div>
            </div>

            {/* <div className="mx-auto flex flex-row py-12">
                <div className="flex-1 w-full min-h-full bg-[url('/images/estetska-3.jpg')] filter brightness-80 bg-cover bg-center bg-no-repeat"></div>

                <div className="flex-2 flex flex-row justify-center items-center gap-8 px-4 lg:px-4">
                    <div className='flex flex-col'>
                        <div className='grid grid-cols-1 gap-8 self-end max-w-lg mt-24'>
                          <InfoCard title={rejuvenation[7].title} description={rejuvenation[7].description} />
                          <InfoCard title={rejuvenation[8].title} description={rejuvenation[8].description} />
                          <InfoCard title={rejuvenation[9].title} description={rejuvenation[9].description} />

                        </div>
                    </div>
                    
                    <div className='grid grid-cols-1 gap-8 max-w-lg'>
                          <InfoCard title={rejuvenation[10].title} description={rejuvenation[10].description} />
                          <InfoCard title={rejuvenation[11].title} description={rejuvenation[11].description} />
                          <InfoCard title={rejuvenation[12].title} description={rejuvenation[12].description} />
                    
                      
                    </div>
                  </div>
            </div> */}
        </section>

        {/* Mobile */}
        <section className="xl:hidden mx-auto flex flex-col lg:flex-row py-12 gap-12 px-4 xl:px-0">
            <div className="flex-1 flex flex-col gap-12">
              <div className='flex flex-col md:flex-row'>
                  <div className='flex-1 max-w-xl mb-12'>
                    <h2 className="flex items-center mb-4">
                        <span className="text-2xl lg:text-4xl font-semibold">Pomlađivanje i regeneracija kože</span>
                    </h2>
                  </div>
                  
                  <div className="flex-1 w-full min-h-[300px] bg-[url('/images/estetska-1.png')] filter brightness-80 bg-cover bg-center bg-no-repeat rounded-lg" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 mx-auto">
                {rejuvenation.map((f, idx) => (
                  <InfoCard key={idx} title={f.title} description={f.description} notes={f.notes} />
                ))}
              </div>

              <div className="flex-1 w-full min-h-[300px] bg-[url('/images/estetska-3.jpg')] filter brightness-80 bg-cover bg-center bg-no-repeat rounded-lg" />

            </div>
        </section>

        {/* Section 2: Nekirurški estetski tretmani */}
        <section className="hidden xl:block mx-auto py-12">
            <div className="mx-auto flex flex-row py-12">
                <div className="flex-2 flex flex-row justify-center items-center gap-8 px-4 lg:px-4">
                    <div className='flex flex-col justify-start w-full max-w-3xl'>
                        <div className='max-w-xl mb-12'>
                          <h2 className="flex items-center mb-8">
                              <span className="text-4xl font-semibold">Nekirurški estetski tretmani</span>
                          </h2>
                        </div>
                        <div className='grid grid-cols-1 gap-8 max-w-lg'>
                          <InfoCard title={nonSurgical[0].title} description={nonSurgical[0].description} />
                          <InfoCard title={nonSurgical[1].title} description={nonSurgical[1].description} />
                          <InfoCard title={nonSurgical[2].title} description={nonSurgical[2].description} />
                          <InfoCard title={nonSurgical[3].title} description={nonSurgical[3].description} />
                        </div>
                    </div>
                    
                    <div className='grid grid-cols-1 gap-8 mt-12 max-w-lg'>
                          
                    </div>
                  </div>
                  <div className="flex-1 w-full min-h-full bg-[url('/images/estetska-4.JPG')] filter brightness-80 bg-cover bg-center bg-no-repeat">
                </div>
            </div>
        </section>

        {/* Mobile */}
        <section className="xl:hidden mx-auto flex flex-col lg:flex-row py-12 gap-12 px-4 xl:px-0">
            <div className="flex-1 flex flex-col gap-12">
              <div className='flex flex-col md:flex-row'>
                  <div className='flex-1 max-w-xl'>
                    <h2 className="flex items-center mb-4">
                        <span className="text-2xl lg:text-4xl font-semibold">Nekirurški estetski tretmani</span>
                    </h2>
                  </div>
                  
                  <div className="flex-1 w-full min-h-[300px] bg-[url('/images/estetska-4.JPG')] filter brightness-80 bg-cover bg-center bg-no-repeat rounded-lg" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 mx-auto">
                {nonSurgical.map((f, idx) => (
                  <InfoCard key={idx} title={f.title} description={f.description} notes={f.notes} />
                ))}
              </div>
            </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}

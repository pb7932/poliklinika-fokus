// app/oftalmologija/page.tsx
import React from 'react'
import { Metadata } from 'next'
import Navbar from '@/app/components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Oftalmologija',
  description:
    'Sveobuhvatna oftalmološka skrb: pregledi, dijagnostika i kirurški zahvati za očuvanje i poboljšanje vida.',
  openGraph: {
    title: 'Oftalmologija – Specijalistička ordinacija za oftalmologiju, estetska medicina i Optika Fokus',
    description: 'Sveobuhvatna oftalmološka skrb: pregledi, dijagnostika i kirurški zahvati za očuvanje i poboljšanje vida.',
    images: ["/images/oftalmologija-hero.jpg"],
  },
  alternates: {
    canonical: 'https://www.poliklinikafokus.hr/oftalmologija',
  }
}

// Card component extracted to top
type InfoCardProps = {
  title: string
  description: string
}

function InfoCard({ title, description }: InfoCardProps) {
  return (
    <div className="bg-cyan-700 rounded-xl shadow-lg shadow-black/40 p-6 hover:shadow-xl transition text-left">
      <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-200">{description}</p>
    </div>
  )
}

export default function OftalmologijaPage() {
  const pregledi = [
    {
      title: 'Pregled za dioptrijske naočale',
      description:
        'Temeljit oftalmološki pregled kojim se precizno utvrđuje dioptrija i eventualne refrakcijske greške poput kratkovidnosti, dalekovidnosti ili astigmatizma. Na temelju rezultata preporučujemo optimalna optička pomagala za jasan i udoban vid.',
    },
    {
      title: 'Pregled za kontaktne leće',
      description:
        'Specijalizirani pregled kojim se određuje dioptrija za kontaktne leće, te se procjenjuje zakrivljenost i zdravlje rožnice. Pacijent dobiva individualne preporuke za vrstu leća, način nošenja i održavanja.',
    },
    {
      title: 'Kompletan oftalmološki pregled odraslih i djece',
      description:
        'Sveobuhvatan pregled vida koji uključuje mjerenje vidne oštrine i očnog tlaka te pregled prednjeg i stražnjeg segmenta oka (fundus). Pregled je idealan za rano otkrivanje očnih bolesti i praćenje zdravlja vida kroz sve životne faze.',
    },
    {
      title: 'Kompletna glaukomska obrada',
      description:
        'Detaljan dijagnostički pregled uključuje mjerenje očnog tlaka, pahimetriju, pregled vidnog živca, test vidnog polja i OCT analizu. Ova obrada omogućuje rano otkrivanje glaukoma – tihe bolesti vida koja, ako se ne dijagnosticira na vrijeme, može dovesti do trajnog gubitka vida.',
    },
  ]

  const diagnostika = [
    {
      title: 'OCT – Optička koherentna tomografija',
      description:
        'Neinvazivna i visoko precizna dijagnostička metoda kojom se slojevito prikazuju strukture mrežnice i vidnog živca. Ključna za rano otkrivanje glaukoma, degeneracije makule i drugih mrežničnih bolesti.',
    },
    {
      title: 'Fundus kamera',
      description:
        'Digitalni sustav za snimanje pozadine oka (fundusa) koji omogućuje dokumentiranje i praćenje promjena na mrežnici, krvnim žilama i optičkom živcu. Koristi se kod dijabetičke retinopatije, hipertenzije i drugih sistemskih bolesti.',
    },
    {
      title: 'Ultrazvuk oka (UZV)',
      description:
        'Sigurna i bezbolna metoda prikaza unutarnjih struktura oka, posebno korisna kada nije moguće obaviti klasični pregled zbog zamućenih medija (npr. kod mrene ili krvarenja).',
    },
    {
      title: 'Vidno polje – perimetrija',
      description:
        'Test kojim se procjenjuje širina i osjetljivost perifernog vida. Ključan je za dijagnozu i praćenje glaukoma, neuroloških oštećenja i drugih bolesti vidnog puta.',
    },
    {
      title: 'Pahimetrija (mjerenje debljine rožnice)',
      description:
        'Mjerenje debljine rožnice pomoću ultrazvučne sonde ili optičkog uređaja. Važan parametar kod dijagnostike glaukoma i pripreme za refrakcijsku kirurgiju.',
    },
    {
      title: 'Biometrija (ultrazvučna i optička)',
      description:
        'Precizno mjerenje duljine oka i zakrivljenosti rožnice, nužno za točan izračun intraokularne leće prije operacije sive mrene. Provodi se ultrazvučno ili bezdodirno – optički.',
    },
    {
      title: 'Gonioskopija',
      description:
        'Specijalizirani pregled kuta prednje očne sobice pomoću kontaktne leće. Neophodan za dijagnostiku i klasifikaciju glaukoma.',
    },
  ]

  const dryEyePackage = [
    {
      title: 'Fluoresceinski test',
      description: 'Otkriva oštećenja površine rožnice.',
    },
    {
      title: 'TBUT (Tear Break‑Up Time)',
      description: 'Mjeri stabilnost suznog filma.',
    },
    {
      title: 'Schirmerov test',
      description: 'Određuje količinu suza koje oko proizvodi.',
    },
  ]

  const zahvati = [
    {
      title: 'Operacija sive mrene (katarakta)',
      description:
        'Sigurna i učinkovita zamjena zamućene očne leće.',
    },
    {
      title: 'Gornja blefaroplastika',
      description:
        'Estetska i funkcionalna korekcija spuštenih kapaka.',
    },
    {
      title: 'Operacija pterigija (vanjska mrena)',
      description:
        'Uklanjanje izraslina na bjeloočnici koje utječu na vid i estetiku.',
    },
  ]

  const izrasline = [
    'Virusne bradavice',
    'Ateroma',
    'Halaciona (ječmenac)',
    'Fibroma',
    'Ksantelazma',
    'Strana tijela u oku',
  ]

  return (
    <div className="relative z-0 font-open-sans bg-white text-black">
      <Navbar />
      <main className="space-y-16">

        {/* Hero */}
        <section
          className="relative w-full h-[70vh]
                     bg-[url('/images/oftalmologija-hero.jpg')]
                     bg-center bg-cover bg-blend-darken bg-black/50
                     flex items-end justify-end px-4 lg:px-24 py-24"
        >
          <h1 className="text-3xl md:text-4xl lg:text-6xl max-w-6xl font-bold text-white text-center px-4 flex justify-end">
            OFTALMOLOGIJA
          </h1>
        </section>

        {/* Intro */}
        <section className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-lg md:text-xl text-gray-700">
            U našoj poliklinici nudimo sveobuhvatnu oftalmološku skrb koja
            obuhvaća dijagnostiku, liječenje i kirurške zahvate za odrasle i
            djecu. Naš stručni tim koristi najsuvremeniju tehnologiju za
            pravovremeno otkrivanje i liječenje očnih bolesti, uz individualan
            pristup svakom pacijentu.
          </p>
        </section>

        {/* Pregledi */}
        <section className="hidden xl:block mx-auto pb-12">
          <div className="mx-auto flex flex-row py-12">
            <div className="flex-2 flex flex-row justify-center items-center gap-8 px-4 lg:px-4">
                <div className='flex flex-col'>
                    <div className='max-w-xl mb-12'>
                      <h2 className="flex items-center mb-8">
                          <span className="text-4xl font-semibold">Oftalmološki pregledi</span>
                      </h2>
                      <p className='mb-8 text-lg font-semibold text-neutral-700'>Preventivni i specijalistički pregledi vida prvi su korak u očuvanju zdravlja vaših očiju. Nudimo:</p>
                    </div>
                    <div className='grid grid-cols-1 gap-8 self-end max-w-xl'>
                      <InfoCard title={pregledi[0].title} description={pregledi[0].description} />
                      <InfoCard title={pregledi[1].title} description={pregledi[1].description} />
                    </div>
                </div>
                
                <div className='grid grid-cols-1 gap-8 mt-12 max-w-xl'>
                  <InfoCard title={pregledi[2].title} description={pregledi[2].description} />
                  <InfoCard title={pregledi[3].title} description={pregledi[3].description} />
                </div>
              </div>
              <div className="flex-1 w-full min-h-full bg-[url('/images/oftalmologija-1.jpeg')] filter brightness-80 bg-cover bg-center bg-no-repeat">
            </div>
          </div>
         
          <p className="mt-6 text-gray-700 px-4 lg:px-12 text-lg font-semibold">
            Redoviti pregledi ključni su za rano otkrivanje bolesti poput
            glaukoma, mrene i degeneracije makule.
          </p>
        </section>

        {/* Mobile */}
        <section className="xl:hidden mx-auto flex flex-col lg:flex-row pt-12 gap-12 px-4 xl:px-0">
            <div className="flex-1 flex flex-col gap-12">
              <div className='flex flex-col md:flex-row'>
                  <div className='flex-1 max-w-xl'>
                      <h2 className="flex items-center mb-4">
                          <span className="text-2xl lg:text-4xl font-semibold">Oftalmološki pregledi</span>
                      </h2>
                      <p className='mb-8 text-lg font-semibold text-neutral-700'>Preventivni i specijalistički pregledi vida prvi su korak u očuvanju zdravlja vaših očiju. Nudimo:</p>
                    </div>
                  
                  <div className="flex-1 w-full min-h-[300px] bg-[url('/images/oftalmologija-1.jpeg')] filter brightness-80 bg-cover bg-center bg-no-repeat rounded-lg" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 mx-auto">
                {pregledi.map((f, idx) => (
                  <InfoCard key={idx} title={f.title} description={f.description} />
                ))}
              </div>
            </div>
        </section>

        <p className="xl:hidden text-gray-700 px-4 lg:px-12 text-lg font-semibold">
                Redoviti pregledi ključni su za rano otkrivanje bolesti poput
                glaukoma, mrene i degeneracije makule.
        </p>

        {/* Dijagnostika */}
        <section className="hidden xl:block mx-auto py-12">
            <div className="mx-auto flex flex-row py-12">
                <div className="flex-1 w-full min-h-full bg-[url('/images/oftalmologija-2.jpg')] filter brightness-80 bg-cover bg-center bg-no-repeat"></div>
                <div className="flex-2 flex flex-row justify-center items-center gap-8 px-4 lg:px-4">
                    <div className='flex flex-col'>
                        <div className='max-w-xl mb-12'>
                          <h2 className="flex items-center mb-8">
                            <span className="text-4xl font-semibold">Oftalmološka dijagnostika</span>
                          </h2>
                          <p className='mb-8 font-semibold text-lg text-neutral-700'>Precizna dijagnostika omogućuje pravovremeno prepoznavanje očnih problema i kreiranje ciljanog plana liječenja. U našoj ordinaciji dostupni su:</p>
                        </div>
                        <div className='grid grid-cols-1 gap-8 self-end max-w-xl'>
                          <InfoCard title={diagnostika[0].title} description={diagnostika[0].description} />
                          <InfoCard title={diagnostika[1].title} description={diagnostika[1].description} />
                          <InfoCard title={diagnostika[2].title} description={diagnostika[2].description} />
                        </div>
                    </div>
                    
                    <div className='grid grid-cols-1 gap-8 mt-12 max-w-xl'>
                      <InfoCard title={diagnostika[3].title} description={diagnostika[3].description} />
                      <InfoCard title={diagnostika[4].title} description={diagnostika[4].description} />
                      <InfoCard title={diagnostika[5].title} description={diagnostika[5].description} />
                      <InfoCard title={diagnostika[6].title} description={diagnostika[6].description} />
                    </div>
                </div>
            </div>

          
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diagnostika.map((item) => (
              <InfoCard
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div> */}

          <div className='max-w-7xl mx-auto'>
            <h3 className="mt-12 text-2xl font-semibold mb-6">
              Paket za dijagnostiku suhog oka
            </h3>
            <p className="text-gray-700 font-semibold pb-6 text-lg">
              Svi testovi su brzi, bezbolni i prilagođeni maksimalnoj udobnosti pacijenta.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dryEyePackage.map((item) => (
                <InfoCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
            
          </div>
        </section>


        {/* Mobile */}
        <section className="xl:hidden mx-auto flex flex-col lg:flex-row pt-12 gap-12 px-4 xl:px-0">
            <div className="flex-1 flex flex-col gap-12">
              <div className='flex flex-col md:flex-row'>
                  <div className='flex-1 max-w-xl'>
                    <h2 className="flex items-center mb-4">
                      <span className="text-2xl lg:text-4xl font-semibold">Oftalmološka dijagnostika</span>
                    </h2>
                    <p className='mb-8 font-semibold text-lg text-neutral-700'>Precizna dijagnostika omogućuje pravovremeno prepoznavanje očnih problema i kreiranje ciljanog plana liječenja. U našoj ordinaciji dostupni su:</p>
                  </div>
                  
                  <div className="flex-1 w-full min-h-[300px] bg-[url('/images/oftalmologija-2.jpg')] filter brightness-80 bg-cover bg-center bg-no-repeat rounded-lg" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 mx-auto">
                {diagnostika.map((f, idx) => (
                  <InfoCard key={idx} title={f.title} description={f.description} />
                ))}
              </div>
            </div>
        </section>

        <section className='xl:hidden px-4 pb-12'>
            <div className='max-w-7xl mx-auto'>
                <h3 className="mt-12 text-2xl font-semibold mb-6">
                  Paket za dijagnostiku suhog oka
                </h3>
                <p className="text-gray-700 font-semibold pb-6 text-lg">
                  Svi testovi su brzi, bezbolni i prilagođeni maksimalnoj udobnosti pacijenta.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {dryEyePackage.map((item) => (
                    <InfoCard
                      key={item.title}
                      title={item.title}
                      description={item.description}
                    />
                  ))}
                </div>
            </div>
        </section>

        {/* Kirurški zahvati */}
        <section className="hidden xl:block mx-auto py-12">
            <div className="mx-auto flex flex-row py-12">

                <div className="flex-2 flex flex-row justify-center items-center gap-8 px-4 lg:px-4 py-24">
                    <div className='flex flex-col'>
                        <div className='max-w-xl mb-12'>
                            <h2 className="flex items-center mb-8">
                                <span className="text-4xl font-semibold">Kirurški zahvati – preciznost, sigurnost i estetika</span>
                            </h2>
                            <p className='pb-8 text-lg font-semibold text-neutral-700'>
                                Naš tim visoko specijaliziranih oftalmoloških kirurga izvodi širok spektar 
                                minimalno invazivnih zahvata usmjerenih na očuvanje vida, uklanjanje 
                                neželjenih promjena i poboljšanje estetskog izgleda periokularne regije.
                            </p>
                             <p className='pb-8 text-lg font-semibold text-neutral-700'>
                                Operacije se provode u lokalnoj anesteziji, uz brz oporavak i maksimalnu 
                                udobnost pacijenta, osiguravajući visoku sigurnost i optimalne rezultate.
                            </p>
                        </div>
                    </div>
                    
                    <div className='grid grid-cols-1 gap-8 mt-12 max-w-xl'>
                          <InfoCard title={zahvati[1].title} description={zahvati[1].description} />
                      <InfoCard title={zahvati[2].title} description={zahvati[2].description} />
                      <InfoCard title={zahvati[0].title} description={zahvati[0].description} />
                    </div>
                </div>
                <div className="flex-1 w-full min-h-full bg-[url('/images/oftalmologija-4.jpeg')] filter brightness-80 bg-cover bg-center bg-no-repeat"></div>

            </div>
          
          <div className='max-w-7xl mx-auto'>
            <h3 className="mt-12 text-2xl font-semibold mb-6">
              Uklanjanje manjih izraslina oko oka
            </h3>
            <p className="mt-6 text-gray-700 text-lg font-semibold pb-6">
              Svaka promjena zahtijeva individualan pristup, stoga smo za vas
              pripremili posebne stranice s detaljnim opisima i fotografijama kako
              biste se informirali prije dolaska i donijeli sigurnu odluku o zahvatu.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {izrasline.map((name) => (
                <InfoCard
                  key={name}
                  title={name}
                  description={''}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Mobile */}
        <section className="xl:hidden mx-auto flex flex-col lg:flex-row pt-12 gap-12 px-4 xl:px-0">
            <div className="flex-1 flex flex-col gap-12">
              <div className='flex flex-col md:flex-row gap-4'>
                  <div className='flex-1 max-w-xl'>
                       <h2 className="flex items-center mb-4">
                           <span className="text-2xl lg:text-4xl font-semibold">Kirurški zahvati – preciznost, sigurnost i estetika</span>
                       </h2>
                       <p className='pb-8 text-lg font-semibold text-neutral-700'>Naš tim visoko specijaliziranih oftalmoloških kirurga izvodi širok spektar 
                                minimalno invazivnih zahvata usmjerenih na očuvanje vida, uklanjanje 
                                neželjenih promjena i poboljšanje estetskog izgleda periokularne regije.
                       </p>
                       <p className='pb-8 text-lg font-semibold text-neutral-700'>
                                Operacije se provode u lokalnoj anesteziji, uz brz oporavak i maksimalnu 
                                udobnost pacijenta, osiguravajući visoku sigurnost i optimalne rezultate.
                       </p>
                   </div>
                  
                  <div className="flex-1 w-full min-h-[576px] bg-[url('/images/oftalmologija-4.jpeg')] filter brightness-80 bg-cover bg-center bg-no-repeat rounded-lg" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 mx-auto">
                {zahvati.map((f, idx) => (
                  <InfoCard key={idx} title={f.title} description={f.description} />
                ))}
              </div>
            </div>
        </section>

        <section className='xl:hidden px-4 pb-12'>
            <div className='max-w-7xl mx-auto'>
              <h3 className="mt-12 text-2xl font-semibold mb-6">
                Uklanjanje manjih izraslina oko oka
              </h3>
              <p className="mt-6 text-gray-700 text-lg font-semibold pb-6">
                Svaka promjena zahtijeva individualan pristup, stoga smo za vas
                pripremili posebne stranice s detaljnim opisima i fotografijama kako
                biste se informirali prije dolaska i donijeli sigurnu odluku o zahvatu.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {izrasline.map((name) => (
                  <InfoCard
                    key={name}
                    title={name}
                    description={''}
                  />
                ))}
              </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

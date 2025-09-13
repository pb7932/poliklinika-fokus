import React from 'react'
import StepComponent from '../components/StepComponent'
import Link from 'next/link'
import glasses from '../../public/images/glasses.png'
import Image from 'next/image'

const Steps = () => {
  return (
    <section id="steps" className='px-4 py-20' role="region" aria-labelledby="steps-heading">
        <div className='relative rounded-xl bg-cyan-800 text-white w-full max-w-6xl mx-auto py-16 px-4 lg:px-16'>
            <h2 id="steps-heading" className="text-2xl lg:text-4xl font-semibold mb-8">Naručite se u nekoliko koraka</h2>
            <div className='flex flex-col gap-4' aria-label="Koraci naručivanja">
                <StepComponent index={1} text={"Unesite osobne podatke"}/>
                <StepComponent index={2} text={"Odaberite željenu uslugu i termin"}/>
                <StepComponent index={3} text={"Ubrzo ćete dobiti povratnu informaciju o terminu mail-om"}/>
            </div>
            <Link href="/narucivanje" className='z-10 flex justify-center md:justify-start' role="button" aria-label="Otvorite stranicu za naručivanje pregleda">
              <p className="inline-block z-10 px-6 lg:px-8 py-2 lg:py-3 mt-8 bg-white border-[3px] border-white text-black lg:text-lg font-semibold rounded-md hover:bg-transparent hover:text-white transition duration-300">
                Zakažite pregled
              </p>
            </Link>
            <Image aria-hidden="true" src={glasses} alt={'Naočale'} className='hidden lg:block max-w-sm absolute top-1/2 -translate-y-1/2 right-8' loading='lazy'/>
        </div>
    </section>
  )
}

export default Steps
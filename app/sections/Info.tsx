import React from 'react'
import InfoCard from '../components/InfoCard'
import { FaUserMd, FaUserGraduate, FaHeartbeat } from 'react-icons/fa';


const Info = () => {
  return (
    <section className='relative max-w-7xl mx-auto w-full mt-10 md:-mt-24 z-10 pb-12 px-4' aria-labelledby="info-section-heading" role="region">
        <h2 id="info-section-heading" className="sr-only">
            Ključne prednosti Poliklinike Fokus
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
            <InfoCard key={'info1'} icon={<FaUserMd />} heading={'Profesionalnost osoblja'} text={'Naš tim iskusnih i visokoeduciranih stručnjaka pruža individualiziranu i profesionalnu skrb temeljenu na najnovijim medicinskim standardima.'}></InfoCard>
            <InfoCard key={'info2'} icon={<FaHeartbeat />} heading={'Individualni pristup pacijentima'} text={'Svakom pacijentu pristupamo individualno, osiguravajući stručnu njegu, sigurnost i potpunu udobnost tijekom cijelog postupka.'}></InfoCard>
            <InfoCard key={'info3'} icon={<FaUserGraduate />} heading={'Više od 30 godina iskustva'} text={'Više od 30 godina iskustva u oftalmologiji i estetskoj medicni osnova je naše profesionalnosti, stručnosti i sigurnih ishoda.'}></InfoCard>
        </div>
    </section>
  )
}

export default Info
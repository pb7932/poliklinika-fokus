import ServicesCard from "../components/ServicesCard";

const ServiceOverview = () => {
  return (
    <section className="bg-white" role="region" aria-labelledby="usluge-heading">
      <h2
        id="usluge-heading"
        className="sr-only"
      >
        Usluge koje nudimo
      </h2>
      <div className="mx-auto">
        {/* <h2 className="text-4xl font-semibold mb-2">Usluge koje nudimo</h2> */}
        {/* <div className='bg-cyan-700 min-w-24 max-w-24 min-h-2'></div> */}
        <div className="grid grid-cols-1 lg:grid-cols-3 max-md:gap-0">
          <ServicesCard link={'/optika'} bgImage={'/images/ocni-pregled.jpg'} heading={'Optika'} text={"Naša optika nudi Rodenstock leće i naočale najviše kvalitete, prilagođene Vašim individualnim potrebama, jer vrhunski vid započinje preciznom dijagnostikom i stručnim savjetovanjem."}></ServicesCard>
          <ServicesCard link={'/oftalmologija'} bgImage={'/images/operacija_mrene3.jpeg'} heading={"Oftalmologija"} text={"Vrhunska oftalmološka skrb – detaljnih pregleda i precizne dijagnostike do suvremenih zahvata. Brinemo o zdravlju Vaših očiju stručno, sigurno i s povjerenjem."}></ServicesCard>
          <ServicesCard link={'/estetska-medicina'} bgImage={'/images/fileri_usta.png'} heading={"Estetska medicina"} text={"Profesionalna i sigurna estetska skrb obuhvaća individualne konzultacije i napredne tretmane, uz pažnju na svaki detalj i Vašu udobnost."}></ServicesCard>
          {/* <ServicesCard bgImage={'/images/estetski_operativni_zahvati.png'} heading={"Estetski operativni zahvati - blepharoplastika"} text={"Uklanjanje viška kože oko očiju za pomlađeni i otvoreniji pogled prirodnog izgleda."}></ServicesCard> */}
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;

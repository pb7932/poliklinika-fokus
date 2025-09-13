import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="text-white py-48 bg-[url('/images/laser-eye-surgery-main-velika.jpg')] bg-center bg-cover bg-no-repeat bg-blend-darken bg-black/50" id="akcija"role="region" aria-labelledby="cta-heading">
      <div className="container mx-auto text-center">
        <h2 id="cta-heading" className="text-2xl lg:text-4xl font-semibold mb-6">Poboljšajte svoj vid danas!</h2>
        <p className="text-lg mb-8 px-4">
          Rezervirajte pregled i osigurajte zdravlje svojih očiju uz naš stručni tim.
        </p>
        <Link href="/narucivanje" role="button" aria-label="Zakažite svoj oftalmološki pregled"
             className="inline-block px-6 lg:px-8 py-2 lg:py-3 bg-white border-[3px] border-white text-black lg:text-lg font-semibold rounded-md hover:bg-transparent hover:text-white transition duration-300"
        >
            Zakažite pregled
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;

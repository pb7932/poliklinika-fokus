import Image from 'next/image';
import { IoIosEye } from 'react-icons/io';
import { FaArrowRight } from 'react-icons/fa'
import CarouselSlider from '../components/CarouselSlider';
import Link from 'next/link';


const AboutUsSection = () => {
  return (
    <section id='about' className="py-12 relative bg-white" role="region" aria-labelledby="about-section-heading">
      <div className="relative mx-auto px-4 lg:px-16 z-10 py-12">
        {/* Content Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 *:lg:space-x-12 py-16 z-10">
          <div className="relative w-full lg:w-1/2">
            <div className="w-full aspect-[3/2] relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/o-nama.jpeg"
                alt="Poliklinika Fokus - dr. Natasa Brijacak"
                fill
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:w-1/2 space-y-12">
           {/* Heading */}
            <h2 id="about-section-heading" className="text-2xl lg:text-4xl font-semibold mb-2">Specijalistička ordinacija za oftalmologiju, estetska medicina i Optika Fokus</h2>
            <div className='bg-cyan-700 min-w-24 max-w-24 min-h-2'></div>

            <p className="text-gray-700 mb-4">
              Specijalistička ordinacija pruža vrhunske <strong>oftalmološke i estetske medicinske usluge</strong>,
              kombinirajući najnoviju tehnologiju s individualnim pristupom svakom pacijentu. Naša misija je
              osigurati visoko <strong>kvalitetnu njegu vida za sve dobne skupine</strong>.
            </p>
            <p className="text-gray-700">
              Nudimo širok spektar usluga – od detaljnih oftalmoloških pregleda i operacija katarakte do
              naprednih estetskih i anti- age regenerativnih tretmana. Stručnost i posvećenost našeg tima
              jamče očuvanje zdravlja Vaših očiju i postizanje optimalnih rezultata.
            </p>

            <Link href="/o-nama" role="button" aria-label="Saznajte više o Poliklinici Fokus">
                <button className='px-4 py-2 border-[3px] border-cyan-700 bg-cyan-700 hover:bg-transparent text-white hover:text-black transition-all duration-300 rounded-md cursor-pointer group'>
                    <span className='flex flex-row justify-center items-center gap-2'>Saznajte više <FaArrowRight className='w-0 group-hover:w-6 transition-all duration-300 text-black' /></span>
                </button>
             </Link>
          </div>
          
        </div>
      </div>

      <section  className='px-4 lg:px-16 py-24 bg-gray-100' role="region" aria-labelledby="carousel-heading">
        <div className='max-w-7xl mx-auto mb-8'>
            <h2 id="carousel-heading" className="text-2xl lg:text-4xl font-semibold mb-2">Naša ordinacija kroz objektiv</h2>
            <div className='bg-cyan-700 min-w-24 max-w-24 min-h-2'></div>
        </div>
        <CarouselSlider/>
      </section>

      <section className='w-full pt-24 pb-12' role="region" aria-labelledby="location-heading">
          <div className="flex flex-col items-center gap-12 ">
            
            {/* TEXT LEFT */}
            <div className="w-full space-y-6 max-w-4xl px-4 lg:px-16">
              <div>
                <h2 id="location-heading" className="text-2xl lg:text-4xl font-semibold mb-2">Gdje se nalazimo</h2>
                <div className='bg-cyan-700 min-w-24 max-w-24 min-h-2'></div>
              </div>
              <p className='text-gray-700'>
                Poliklinika Fokus nalazi se u samom srcu Varaždina, na lako dostupnoj lokaciji s osiguranim parkirnim mjestima. Naša adresa je <strong>Ulica Vinka Međerala 9</strong>, svega nekoliko minuta udaljena od centra grada.
              </p>
            </div>

            {/* MAP RIGHT */}
            <div className="w-full h-[488px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2756.5047604285273!2d16.32394829098039!3d46.29981210279152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4768aace7031df2b%3A0xafd8e1cc968a35dc!2sPoliklinika%20Fokus!5e0!3m2!1sen!2shr!4v1754054166119!5m2!1sen!2shr"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title='Varazdin lokacija'
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
      </section>
    </section>
  );
};

export default AboutUsSection;

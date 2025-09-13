import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = ({isHome=false}) => {
  return (
    <footer role="contentinfo" aria-label="Podnožje stranice" className={`bg-cyan-950 text-white relative -z-10 ${isHome ? 'pt-[28rem] -mt-96' : ''}`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-start md:justify-evenly items-start gap-12 px-4 py-12 text-base">
        
        {/* Left Column */}
        <div className="flex flex-col justify-between space-y-6">
            {/* <Image
              src="/images/logo.png" // Replace with your logo image path
              alt="Poliklinika Logo"
              width={150}
              height={50}
            /> */}
            <div>
                <h3 className="text-lg lg:text-xl font-semibold pb-2">Specijalistička ordinacija za oftalmologiju</h3>
                <p className="">Specijalizirani oftalmološki tretmani za Vaš vid.</p>
            </div>
          <p className="">Vinka Međerala 9, 42000, Varaždin, Hrvatska</p>
        </div>

        <div className='flex flex-col gap-8'>
            {/* Working Hours for Optical Store */}
            <div className="">
              <h3 className="text-lg lg:text-xl font-semibold mb-4">Radno vrijeme Optike</h3>
              <p className="">
                <span className=''>Ponedjeljak do petak:</span> 8.00 – 20.00 sati
              </p>
              <p className="">
                <span className=''>Subota:</span> 8.00 – 13.00 sati
              </p>
            </div>
            
            {/* Working Hours for Clinic */}
            <div className="">
              <h3 className="text-lg lg:text-xl font-semibold mb-4">Radno vrijeme Ordinacije</h3>
              <p className="">
                <span className=''>Ponedjeljak do petak:</span> 9.00 – 20.00 sati
              </p>
              <p className="">
                <span className=''>Subota:</span> 8.00 – 13.00 sati
              </p>
            </div>
        </div>
     

        {/* Right Column */}
        <div className="flex flex-col justify-between space-y-6">

          <div>
            <h3 className="text-lg lg:text-xl font-semibold mb-4">Kontaktirajte Nas</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <FaPhoneAlt className="text-teal-200 text-xl" />
                <a href='tel:042 200 443'>042 200 443</a>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-teal-200 text-xl" />
                <p className=" ">n.brijacak@gmail.com</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg lg:text-xl font-semibold mb-4">Pratite Nas</h3>
            <div className="flex flex-col justify-start items-start gap-4">
              <div className='flex flex-row justify-start items-center gap-4'>
                <div className='flex flex-row justify-start items-center gap-4'>
                  <a href="https://www.instagram.com/poliklinika_fokus/" target="_blank" rel="noopener noreferrer" aria-label="Instagram profil Poliklinike Fokus" className='border-2 border-white hover:border-cyan-400 p-2 rounded-full'>
                      <FaInstagram className="text-white text-2xl hover:text-cyan-400 transition duration-300" />
                  </a>
                </div>
                <a href="https://www.instagram.com/poliklinika_fokus/" target="_blank" rel="noopener noreferrer" aria-label="Instagram profil Poliklinike Fokus">@poliklinika_fokus</a>
              </div>
              <div className='flex flex-row justify-start items-center gap-4'>
                <div className='flex flex-row justify-start items-center gap-4'>
                  <a href="https://www.instagram.com/dr.laura_mrsic/" target="_blank" rel="noopener noreferrer" aria-label="Instagram profil Poliklinike Fokus" className='border-2 border-white hover:border-cyan-400 p-2 rounded-full'>
                      <FaInstagram className="text-white text-2xl hover:text-cyan-400 transition duration-300" />
                  </a>
                </div>
                <a href="https://www.instagram.com/dr.laura_mrsic/" target="_blank" rel="noopener noreferrer" aria-label="Instagram profil Poliklinike Fokus">@dr.laura_mrsic</a>
              </div>
              <div className='flex flex-row justify-start items-center gap-4'>
                <div className='flex flex-row justify-start items-center gap-4'>
                  <a href="https://www.instagram.com/dr.dora_brijacak/" target="_blank" rel="noopener noreferrer" aria-label="Instagram profil Poliklinike Fokus" className='border-2 border-white hover:border-cyan-400 p-2 rounded-full'>
                      <FaInstagram className="text-white text-2xl hover:text-cyan-400 transition duration-300" />
                  </a>
                </div>
                <a href="https://www.instagram.com/dr.dora_brijacak/" target="_blank" rel="noopener noreferrer" aria-label="Instagram profil Poliklinike Fokus">@dr.dora_brijacak</a>
              </div>
            </div>
          </div>

          <div className='flex flex-col'>
            <a href='/politika-privatnosti' className='hover:text-cyan-400'>Politika privatnosti</a>
            <a href='/uvjeti-koristenja' className='hover:text-cyan-400'>Uvjeti korištenja</a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-cyan-700 text-center py-4 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-8 text-sm">
        <p className="  text-white">
          © 2025 OPTIKA "FOKUS". Sva Prava Pridržana.
        </p>
        <p className='  text-white'>
            WebDesign by Patrick&Petar
        </p>
      </div>
    </footer>
  );
};

export default Footer;

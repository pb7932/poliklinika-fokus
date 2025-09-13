'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { RiCloseLargeLine } from "react-icons/ri";
import { FaCircle, FaPhoneAlt, FaRegEye } from 'react-icons/fa';
import Image from 'next/image'
import { AiOutlineEye } from 'react-icons/ai';
import { GiHeartPlus } from 'react-icons/gi';

const Navbar = ({isHome=false}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    useEffect(() => {
        const handleScroll = () => {
            const scrollDiv = document.getElementById('hero');
            if (scrollDiv) {
                // const scrollDivBottom = scrollDiv.getBoundingClientRect().bottom + window.scrollY;

                const isScrolled = window.scrollY > 24;
                if (isScrolled !== scrolled) {
                    setScrolled(isScrolled);
                }
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);
  return (
    <>
    <header className={`fixed w-full top-0 z-[1000] transition-all duration-300 ${isMenuOpen && !scrolled && isHome ? 'max-md:bg-black/85 max-md:bg-blend-darken' : ''} ${!scrolled && isHome ? 'bg-transparent text-white' : 'bg-neutral-900/70 shadow-lg shadow-black/40 text-white'}`}>
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center text-base lg:text-3xl p-4 py-2 lg:py-4 lg:-ml-12">
          <Link href="/" aria-label="Go to homepage" className='flex flex-row justify-center items-center gap-0 lg:gap-4'>
            {/* <Image
              src="/poliklinika-fokus-logo-2.svg" // Replace with the actual path to your logo
              alt="Ophthalmology Polyclinic Logo"
              width={50}
              height={50}
              unoptimized={true}
              className='bg-transparent w-10 lg:w-20 h-auto'
            /> */}
            <span className='text-libertinus'>Specijalitička ordinacija za oftalmologiju i Optika Fokus</span>
          </Link>
          
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex justify-center items-center space-x-6 py-2 lg:py-2 lg:-mr-12">
          <Link href="/" className="nav-link">Početna</Link>
          <Link href="/o-nama" className="nav-link whitespace-nowrap">O nama</Link>
          <div className="group h-full flex items-center">
              <p className="nav-link cursor-pointer h-full flex items-center">Usluge</p>
              <div className="absolute left-0 right-9 top-full w-screen bg-white m-auto text-black overflow-hidden max-h-0 group-hover:max-h-[300px] transition-all duration-500 ease-in-out z-50 shadow-md group-hover:border-t">
                <div className="container mx-auto px-4 py-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: 'Optika', href: '/optika', icon: <AiOutlineEye className="text-cyan-800 w-6 h-6" />, text: 'Naša optika nudi Rodenstock leće i naočale najviše kvalitete, prilagođene Vašim individualnim potrebama, jer vrhunski vid započinje preciznom dijagnostikom i stručnim savjetovanjem.' },
                    { title: 'Oftalmologija', href: '/oftalmologija', icon: <FaRegEye className="text-cyan-800 w-6 h-6" />, text: 'Vrhunska oftalmološka skrb – detaljnih pregleda i precizne dijagnostike do suvremenih zahvata. Brinemo o zdravlju Vaših očiju stručno, sigurno i s povjerenjem.' },
                    { title: 'Estetska medicina', href: '/estetska-medicina', icon: <GiHeartPlus className="text-cyan-800 w-6 h-6" />, text: 'Profesionalna i sigurna estetska skrb obuhvaća individualne konzultacije i napredne tretmane, uz pažnju na svaki detalj i Vašu udobnost.' },
                  ].map(({ title, href, icon, text }) => (
                    <Link key={title} href={href} className="flex items-center justify-center space-x-4 hover:shadow-md hover:shadow-black/40 border-2 border-transparent p-4 rounded-md transition-all">
                      <div>{icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold">{title}</h3>
                        {/* <p className="text-sm text-gray-600">{text}</p> */}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
          </div>
          {/* <Link href="/utisci-pacijenata" className="nav-link">Utisci pacijenata</Link> */}
          <Link href="/cjenik-usluga" className="nav-link whitespace-nowrap">Cjenik usluga</Link>
          <div className="flex items-center space-x-2">
                          <FaPhoneAlt className="text-teal-200 text-base lg:text-xl" />
                          <a href='tel:042 200 443' className='whitespace-nowrap'>042 200 443</a>
          </div>
          {/* <Link href="/zanimljivosti" className="nav-link">Zanimljivosti</Link> */}
          {/* <Link href="/#contact" className="nav-link">Kontakt</Link> */}
          <Link href="/narucivanje" className='px-4 py-2 font-semibold uppercase border-2 border-white bg-white text-black rounded-md transition-all duration-300 hover:bg-transparent hover:text-white'>Naručivanje</Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden abolute top-2 right-2 flex flex-row gap-4 lg:gap-2 p-4 py-2 lg:py-4">
            <div className="flex lg:hidden items-center space-x-2 text-sm lg:text-xl">
                          <FaPhoneAlt className="text-teal-200 text-sm lg:text-xl" />
                          <a href='tel:042 200 443' className='whitespace-nowrap'>042 200 443</a>
          </div>
          <button
            className={`text-white cursor-pointer ${isMenuOpen ? 'hidden' : 'block'}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <button
            className={`text-white cursor-pointer px-1 ${isMenuOpen ? 'block' : 'hidden'}`}
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <RiCloseLargeLine fill='white' width={"32px"} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden h-screen absolute top-[4rem] w-full p-4 space-y-4 flex flex-col justify-start items-start bg-white text-black">
          <Link href="/" className="nav-link-mobile" onClick={toggleMenu}>Početna</Link>
          <Link href="/o-nama" className="nav-link-mobile" onClick={toggleMenu}>O nama</Link>
          <div>
            <h3 className='nav-link-mobile mb-2'>Usluge</h3>
            <ul className='pl-6 flex flex-col gap-2'>
                <li className='flex flex-row gap-2 items-center justify-start'><FaCircle className='w-2'/><Link href="/optika" className="nav-link-mobile" onClick={toggleMenu}>Optika</Link></li>
                <li className='flex flex-row gap-2 items-center justify-start'><FaCircle className='w-2'/><Link href="/oftalmologija" className="nav-link-mobile" onClick={toggleMenu}>Oftalmologija</Link></li>
                <li className='flex flex-row gap-2 items-center justify-start'><FaCircle className='w-2'/><Link href="/estetska-medicina" className="nav-link-mobile" onClick={toggleMenu}>Estetska Medicina</Link></li>
            </ul>
          </div>
          <Link href="/cjenik-usluga" className="nav-link-mobile" onClick={toggleMenu}>Cjenik usluga</Link>
          {/* <Link href="/zanimljivosti" className="nav-link-mobile" onClick={toggleMenu}>Zanimljivosti</Link> */}
          <Link href="/#contact" className="nav-link-mobile" onClick={toggleMenu}>Kontakt</Link>
          <Link href="/narucivanje" className='text-base mx-auto px-4 py-2 mt-4 font-semibold uppercase border-2 border-cyan-800 bg-cyan-800 text-white rounded-md transition-all duration-300 hover:bg-transparent hover:text-black' onClick={toggleMenu}>Naručivanje</Link>
        </div>
      )}
    </header>
    </>
  );
};

export default Navbar;

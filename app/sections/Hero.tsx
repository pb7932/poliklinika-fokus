'use client'
import { useEffect, useRef, useState } from 'react';
import Slider, {Settings} from 'react-slick';
import HeroSliderCard from '../components/HeroSliderCard';

const HeroSection = () => {
  const sliderRef = useRef<Slider | null>(null)

  const [currentSlide, setCurrentSlide] = useState<number>(0)

  // 2) Call methods via .current
  const play = () => {
    sliderRef.current?.slickPlay()
  }

  const goTo = (index: number) => {
    sliderRef.current?.slickGoTo(index)
  }

  // 3) (Optional) explicitly type your settings
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
  }

  useEffect(() => {
    const intervalId = setInterval(play, 7000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <section id='hero' className="relative w-full h-[90vh] overflow-hidden text-white bg-white" role="region" aria-label="Glavni banner">
      <Slider {...settings} ref={sliderRef}>
        <HeroSliderCard key={'slide1'} bgClass={"bg-[url('/images/laser-eye-surgery-main-velika.jpg')]"} heading={'Operacija sive mrene'} ctaText={'Saznajte više'} url={'/oftalmologija'}></HeroSliderCard>
        <HeroSliderCard key={'slide3'} bgClass={"bg-[url('/images/eye-exams.jpg')]"} heading={'Zdravlje i ljepota idu zajedno'} ctaText={'Saznajte više'} url={'/estetska-medicina'}></HeroSliderCard>
        <HeroSliderCard key={'slide2'} bgClass={"bg-[url('/images/Castaway-Model-Management-Bali-Model-work-for-Rixx-Eyewear-1.jpg')]"} heading={'Dioptrijske i sunčane naočale'} ctaText={'Saznajte više'} url={'/optika'}></HeroSliderCard>
      </Slider>
      <div className='absolute top-1/2 -translate-y-1/2 right-2 flex flex-col justify-center items-center gap-2'>
        <div className={`w-4 h-4 lg:w-4 lg:h-4 border-2 border-white rounded-full transition-all duration-300 cursor-pointer ${currentSlide == 0 ? 'bg-white' : 'bg-transparent'}`} onClick={() => goTo(0)}></div>
        <div className={`w-4 h-4 lg:w-4 lg:h-4 border-2 border-white rounded-full transition-all duration-300 cursor-pointer ${currentSlide == 1 ? 'bg-white' : 'bg-transparent'}`} onClick={() => goTo(1)}></div>
        <div className={`w-4 h-4 lg:w-4 lg:h-4 border-2 border-white rounded-full transition-all duration-300 cursor-pointer ${currentSlide == 2 ? 'bg-white' : 'bg-transparent'}`} onClick={() => goTo(2)}></div>
      </div>
    </section>
  );
};

export default HeroSection;

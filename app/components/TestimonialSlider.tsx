'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import TestimonialCard from './TestimonialCard'
import { testimonials } from '../constants/testimonials'

export default function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
  })

  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative" aria-label="Slider s izjavama pacijenata">
      <div className="embla overflow-hidden z-10" ref={emblaRef}>
        <div className="embla__container flex px-4 z-10 py-8">
          {testimonials.slice(0, 8).map((t, idx) => (
            <div
              key={t.id || idx}
              className="embla__slide px-4 w-full flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.3333%] xl:flex-[0_0_25%] z-10"
              role="group"
              aria-roledescription="slide"
              aria-label={`Iskustvo pacijenta ${t.name}`}
            >
              <TestimonialCard
                id={t.id}
                heading={t.heading}
                text={t.text}
                imageSrc={t.imgUrl || '/images/man-icon.png'}
                name={t.name}
                about={t.about}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Arrow Buttons */}
      <div className="absolute -bottom-12 right-4 flex space-x-2 z-20">
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          aria-label="Prethodno iskustvo"
          className={`p-4 bg-white border border-gray-300 rounded-full shadow transition cursor-pointer ${
            !canScrollPrev ? 'opacity-40 cursor-default' : 'hover:bg-gray-100'
          }`}
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className={`p-4 bg-white border border-gray-300 rounded-full shadow transition cursor-pointer ${
            !canScrollNext ? 'opacity-40 cursor-default' : 'hover:bg-gray-100'
          }`}
          aria-label="Sljedeće iskustvo"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  )
}

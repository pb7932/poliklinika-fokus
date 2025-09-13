import TestimonialCard from './TestimonialCard';
import { FaQuoteRight, FaArrowRight  } from 'react-icons/fa';
import {testimonials} from '../constants/testimonials'
import TestimonialSlider from './TestimonialSlider';


const TestimonialsSection = () => {
  return (
    <section className="pt-16 pb-24 px-4 bg-gray-100 relative" id="iskustva" role="region" aria-labelledby="testimonials-heading">
      <div className="container mx-auto">
        <h2 id="testimonials-heading" className="text-2xl lg:text-4xl font-semibold mb-2">Iskustva naših pacijenata</h2>
        <div className='bg-cyan-700 min-w-24 max-w-24 min-h-2'></div>

        <div className='z-10 mt-4 lg:mt-12'>
            <TestimonialSlider />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

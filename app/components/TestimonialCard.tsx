import { FaQuoteRight } from 'react-icons/fa';
import Image from 'next/image';

const TestimonialCard = ({ id, heading, text, imageSrc, name, about='Zadovoljni pacijent' }) => {
    function truncateString(inputString) {
        if (inputString.length > 100) {
          return inputString.substring(0, 100) + ' ...';
        } else {
          return inputString;
        }
      }
  return (
    <article className="relative bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between items-start h-full z-10">
      <h3 className="text-lg lg:text-xl font-semibold text-cyan-700 mb-2 lg:mb-4 text-left">{heading}</h3>

      <p className="text-gray-700 mb-2 lg:mb-4 text-left">{truncateString(text)}</p>
      <a aria-label={`Pročitajte cijelo iskustvo pacijenta ${name}`} href={'/utisci-pacijenata/' + id} className='text-cyan-600 underline hover:text-cyan-800 mb-6 cursor-pointer'>Saznajte više</a>

      <div className="flex flex-col md:flex-row items-start justify-start space-x-4">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <Image
            src={imageSrc} // Image of the patient
            alt={name}
            width={50}
            height={50}
            className="w-full h-full object-cover"
            loading='lazy'
          />
        </div>
        <div className="flex flex-col justify-start text-left">
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-gray-500 max-w-48">{about || 'Zadovoljni pacijent'}</p>
        </div>
      </div>

      <FaQuoteRight className="text-cyan-700 text-3xl absolute bottom-4 right-4" />
    </article>
  );
};

export default TestimonialCard;

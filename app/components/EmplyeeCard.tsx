// EmployeeCard.tsx
import React from 'react';
import Image from 'next/image';
import { FaUser } from 'react-icons/fa';

const EmployeeCard = ({ name, title, image }) => {
  return (
    <div className="bg-white shadow-lg shadow-black/30 rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl">
        {image ? 
            <div className='w-full h-auto'>
                <Image src={image} alt={name} width={400} height={800} className="w-full object-cover rounded-full mb-4" loading='lazy' />
            </div>
            :
            <div className="w-full object-cover rounded-full h-full min-h-[33rem] md:min-h-[24rem]  mb-4 bg-cyan-800 flex flex-row justify-center items-center"><FaUser className='w-28 h-28 fill-white'/></div>
        }
      <h3 className="text-xl font-semibold text-cyan-700">{name}</h3>
      <p className="text-lg text-gray-600">{title}</p>
    </div>
  );
};

export default EmployeeCard;

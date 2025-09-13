import React from 'react';

type PriceCardProps = {
  service: string;
  price: string;
  notes?: string[];
};

const PriceCard = ({ service, price, notes }: PriceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md shadow-black/30">
      <h4 className="text-lg font-semibold mb-2">{service}</h4>
      {price && <p className="text-xl text-cyan-700">{price}</p>}
      {notes && notes.length > 0 && (
        <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">
          {notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PriceCard;

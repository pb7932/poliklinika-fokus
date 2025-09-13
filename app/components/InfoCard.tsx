import { FaUserMd, FaUserGraduate, FaHeartbeat } from 'react-icons/fa';

const InfoCard = ({ icon, heading, text }) => {
  const headingId = `info-card-${heading.toLowerCase().replace(/\s+/g, '-')}`;
  return (
    <div className="bg-white rounded-xl shadow-lg shadow-black/40 p-6 transition-all duration-300 hover:shadow-xl" role="region" aria-labelledby={headingId}>
      <div className="flex justify-center mb-4">
        <div className="text-cyan-700 text-4xl">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold text-center mb-4">{heading}</h3>
      <p className=" text-gray-700 text-center">{text}</p>
    </div>
  );
};

export default InfoCard;

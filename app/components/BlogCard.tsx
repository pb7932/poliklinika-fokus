import Link from 'next/link';

const BlogCard = ({ title, excerpt, date, link, imgUrl }) => {
    function truncateString(inputString) {
        if (inputString.length > 100) {
          return inputString.substring(0, 100) + ' ...';
        } else {
          return inputString;
        }
      }
  return (
    <article className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
      <div className="w-full h-80 bg-cover bg-center rounded-lg mb-6" style={{ backgroundImage: imgUrl }}>
              {/* Image placeholder */}
      </div>
      <h3 className="text-lg lg:text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-700 mb-4">{truncateString(excerpt)}</p>
      <div className="flex items-center justify-between mt-4">
        <p className="text-sm text-gray-500">{date}</p>
        <Link href={link} className="text-cyan-700 hover:text-cyan-800 text-sm" aria-label={`Pročitajte cijeli blog: ${title}`}>
          Pročitajte više
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;

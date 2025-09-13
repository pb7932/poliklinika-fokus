import BlogCard from "../components/BlogCard";
import blogs from "../constants/blog";

const BlogSection = () => {
    const blogList = blogs.slice(0,3)
  return (
    <section className="py-20" id="blog" role="region" aria-labelledby="blog-section-heading"> 
      <div className="container mx-auto px-4">
        <h2 id="blog-section-heading" className="text-2xl lg:text-4xl font-semibold mb-2">Savjeti liječnika za zdraviji život</h2>
        <div className='bg-cyan-700 min-w-24 max-w-24 min-h-2'></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            {blogList.map((blog, index) => (
                <BlogCard key={index} {...blog}></BlogCard>
            ))}
        </div>

        <a href="/zanimljivosti" role="button" aria-label="Prikaži sve objave na blogu">
            <button className='px-4 py-2 border-[3px] border-cyan-700 bg-cyan-700 hover:bg-transparent text-white hover:text-black transition-all duration-300 rounded-md mt-8 cursor-pointer'>
                Pogledajte sve objave
            </button>
        </a>
      </div>
        
    </section>
  );
};

export default BlogSection;

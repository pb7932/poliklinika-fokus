import React from 'react'
import BlogCard from '../components/BlogCard'
import {blogs} from '../constants/blog'

const BlogList = () => {
    
  return (
    <section className='pb-20 pt-12'>
        <section
          className="relative w-full h-[70vh]
                     bg-[url('/images/laser-eye-surgery-main-velika.jpg')]
                     bg-top bg-cover bg-blend-darken bg-black/50
                     flex items-end justify-end px-4 lg:px-24 py-24"
        >
          <h1 className="text-3xl md:text-4xl lg:text-6xl max-w-6xl font-bold text-white text-end px-4 flex justify-end uppercase">
            Zanimljivosti
          </h1>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 container mx-auto px-4">
          {blogs.map((blog,index) => (
            <BlogCard key={index} {...blog}></BlogCard>
          ))}
        </div>
    </section>
  )
}

export default BlogList
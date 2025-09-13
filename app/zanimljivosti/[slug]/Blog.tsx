'use client'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import blogs from '@/app/constants/blog';

const Blog = () => {
    const pathname = usePathname();
    const slug = pathname.split('/').filter(Boolean).pop();
    const [blog, setBlog] = useState({id: '', title: '', excerpt: '', date: '', link: '', imgUrl: ''})

    useEffect(() => {
        setBlog(blogs.filter(blog => blog.id == slug)[0])
    }, [slug])
  return (
    <section className='pt-12'>
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
            
                <div className='text-black w-full max-w-6xl mx-auto py-24 px-4'>
                    {blog &&
                        <>
                            <h2 className='text-2xl gl:text-4xl font-semibold mb-8'>{blog.title}</h2>
                            <p className='mb-6'>{blog.excerpt}</p>
                            <p className="text-gray-500">{blog.date}</p>
                        </>
                    }
                </div>
    </section>
  )
}

export default Blog
'use client'

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { BookOpen } from 'lucide-react'
import { getAllPosts, categories } from '@/lib/blogPosts'
import { useState } from 'react'
import type { BlogPost } from '@/lib/blogPosts'
import BlogCard from '@/components/BlogCard'

export default function BlogPage() {
  const allPosts = getAllPosts()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredPosts = selectedCategory
    ? allPosts.filter(post => post.category === selectedCategory)
    : allPosts

  return (
    <>
      {/* Hero Section */}
      <MaxWidthWrapper className="pt-20 pb-12">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
            <BookOpen className="w-4 h-4 text-green-600" />
            <p className="text-sm font-semibold text-gray-700">
              Insights & Resources
            </p>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
            The Pastures <span className="text-green-600">Blog</span>
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Behind the scenes of building Christ-centered tools for daily growth.
          </p>
          
        </div>

        {/* Category Filter */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === null
                ? 'bg-green-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Posts
          </button>
          {Object.entries(categories).map(([key, { label }]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === key
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </MaxWidthWrapper>

      {/* Background Gradient */}
      <div className='relative isolate'>
        <div
          aria-hidden="true"
          className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
          <div style={{
            clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          }} className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#a7f3d0] to-[#93c5fd] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
          />
        </div>

        {/* Blog Posts Grid */}
        <MaxWidthWrapper className="pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No posts found in this category.</p>
            </div>
          )}
        </MaxWidthWrapper>

        <div
          aria-hidden="true"
          className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
          <div style={{
            clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          }} className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#c084fc] to-[#86efac] opacity-15 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
          />
        </div>
      </div>
    </>
  )
}


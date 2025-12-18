import { getAllPosts } from '@/lib/blogPosts'
import BlogList from '@/components/BlogList'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Pastures',
  description: 'Insights and resources for your spiritual journey. Behind the scenes of building Christ-centered tools for daily growth.',
}

export default function BlogPage() {
  const allPosts = getAllPosts()

  return <BlogList allPosts={allPosts} />
}



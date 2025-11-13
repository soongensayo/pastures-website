import Link from 'next/link'
import { Calendar, Clock, Tag } from 'lucide-react'
import type { BlogPost } from '@/lib/blogPosts'
import { categories, formatDate } from '@/lib/blogPosts'

interface BlogCardProps {
  post: BlogPost
  compact?: boolean
}

export default function BlogCard({ post, compact = false }: BlogCardProps) {
  const getCategoryColor = (category: BlogPost['category']) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-800 border-blue-200',
      purple: 'bg-purple-100 text-purple-800 border-purple-200',
      green: 'bg-green-100 text-green-800 border-green-200',
      indigo: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      amber: 'bg-amber-100 text-amber-800 border-amber-200',
    }
    return colorMap[categories[category].color as keyof typeof colorMap] || colorMap.blue
  }

  if (compact) {
    return (
      <Link href={`/blog/${post.slug}`} className="group block">
        <article className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all duration-300">
          <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold border mb-2 ${getCategoryColor(post.category)}`}>
            {categories[post.category].label}
          </span>
          <h3 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-green-600 transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2 mb-2">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
        {/* Category Badge */}
        <div className="p-6 pb-4">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(post.category)}`}>
            {categories[post.category].label}
          </span>
        </div>

        {/* Content */}
        <div className="px-6 pb-6 flex-1 flex flex-col">
          <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
            {post.title}
          </h2>
          
          <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
            {post.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Read More Link */}
        <div className="px-6 pb-6">
          <span className="text-green-600 font-semibold text-sm group-hover:underline">
            Read more →
          </span>
        </div>
      </article>
    </Link>
  )
}


import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'
import Link from 'next/link'
import { getPostBySlug, getRelatedPosts, formatDate, categories } from '@/lib/blogPosts'
import { notFound } from 'next/navigation'
import type { BlogPost } from '@/lib/blogPosts'
import { Metadata } from 'next'
import ShareButton from '@/components/ShareButton'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Pastures Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post)

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

  return (
    <>
      {/* Back Navigation */}
      <MaxWidthWrapper className="pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blog</span>
        </Link>
      </MaxWidthWrapper>

      {/* Article Header */}
      <MaxWidthWrapper className="pt-8 pb-12">
        <article className="max-w-4xl mx-auto">
          {/* Category Badge */}
          <div className="mb-6">
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold border ${getCategoryColor(post.category)}`}>
              {categories[post.category].label}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-700 font-semibold text-sm">
                  {post.author.charAt(0)}
                </span>
              </div>
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>

            <ShareButton title={post.title} text={post.excerpt} />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed space-y-6">
              {typeof post.content === 'string' ? (
                <div
                  className="markdown-content"
                  dangerouslySetInnerHTML={{
                    __html: post.content.split('\n').map(line => {
                      // Simple markdown-like formatting
                      if (line.startsWith('# ')) {
                        return `<h1 class="text-3xl font-bold mt-8 mb-4 text-gray-900">${line.slice(2)}</h1>`
                      } else if (line.startsWith('## ')) {
                        return `<h2 class="text-2xl font-bold mt-6 mb-3 text-gray-900">${line.slice(3)}</h2>`
                      } else if (line.startsWith('### ')) {
                        return `<h3 class="text-xl font-semibold mt-4 mb-2 text-gray-900">${line.slice(4)}</h3>`
                      } else if (line.startsWith('> ')) {
                        let quotedText = line.slice(2)
                        // Apply formatting to blockquotes
                        quotedText = quotedText.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-800">$1</strong>')
                        quotedText = quotedText.replace(/\*(.*?)\*/g, '<em>$1</em>')
                        return `<blockquote class="border-l-4 border-green-500 pl-4 italic text-gray-600 my-4">${quotedText}</blockquote>`
                      } else if (line.startsWith('- ') || line.startsWith('* ')) {
                        let listText = line.slice(2)
                        // Apply formatting to list items
                        listText = listText.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
                        listText = listText.replace(/\*(.*?)\*/g, '<em>$1</em>')
                        return `<li class="ml-6 mb-2">${listText}</li>`
                      } else if (line.startsWith('---')) {
                        return `<hr class="my-8 border-gray-300" />`
                      } else if (line.trim() === '') {
                        return '<br />'
                      } else {
                        // Replace **bold** with <strong>
                        let formatted = line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
                        // Replace *italic* with <em>
                        formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>')
                        return `<p class="mb-4">${formatted}</p>`
                      }
                    }).join('')
                  }}
                />
              ) : (
                post.content
              )}
            </div>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>
      </MaxWidthWrapper>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="bg-gray-50 py-16 mt-16">
          <MaxWidthWrapper>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <article className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 h-full">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border mb-3 ${getCategoryColor(relatedPost.category)}`}>
                        {categories[relatedPost.category].label}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="mt-4 text-sm text-gray-500 flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      )}

      {/* Call to Action */}
      <div className="bg-white py-16">
        <MaxWidthWrapper>
          <div className="max-w-4xl mx-auto text-center space-y-6 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold">
              Start Your Journey with Pastures
            </h2>
            <p className="text-lg opacity-90">
              Experience the power of AI-enhanced spiritual journaling.
            </p>
            <Link
              href="https://apps.apple.com/sg/app/pastures/id6740173765"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Download on the App Store
            </Link>
          </div>
        </MaxWidthWrapper>
      </div>
    </>
  )
}


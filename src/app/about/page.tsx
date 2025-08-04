import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import { ArrowRight, Heart, Users, Target } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <MaxWidthWrapper className="pt-20 pb-16">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
            <Heart className="w-4 h-4 text-green-600" />
            <p className="text-sm font-semibold text-gray-700">
              Our Story
            </p>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
            About <span className="text-green-600">Pastures</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Connecting daily experiences with God's Word through thoughtful reflection and community.
          </p>
        </div>
      </MaxWidthWrapper>

      {/* Mission Section */}
      <div className="bg-gray-50 py-16">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
              <p className="text-gray-600">
                To help believers find deeper meaning in everyday moments through biblical reflection.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Our Community</h3>
              <p className="text-gray-600">
                Building a supportive community of believers growing together in faith.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Our Heart</h3>
              <p className="text-gray-600">
                Rooted in love for God and His Word, we seek to make faith practical and personal.
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      {/* Call to Action */}
      <div className="bg-white py-16">
        <MaxWidthWrapper>
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Join Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to start connecting your daily experiences with God's Word?
            </p>
            <Link href="/contact">
              <Button size="lg">
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </MaxWidthWrapper>
      </div>
    </>
  )
}
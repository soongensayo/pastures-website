import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import { ArrowRight, Heart, Eye, RefreshCw, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <MaxWidthWrapper className="pt-20 pb-12">
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

      {/* Story Section with Grainy Background */}
      <div>
        <div className='relative isolate'>
          <div
            aria-hidden="true"
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            }} className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#a7f3d0] to-[#93c5fd] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />
          </div>

        {/* The Journey Section */}
        <MaxWidthWrapper className="pb-20">
          {/* Section Header */}
          <div className="text-left space-y-4 mb-16 mt-20">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              From Problem to <span className="text-green-600">Purpose</span>
            </h2>
            <p className="max-w-2xl text-lg text-gray-600">
              How a widespread spiritual challenge became a mission to help believers thrive.
            </p>
          </div>

          {/* Story Timeline */}
          <div className="space-y-12">
            {/* Problem & Solution Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Left Column - Problem & Solution Cards */}
              <div className="lg:col-span-2 space-y-8">
                {/* The Problem */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Eye className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">The Problem</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      In our fast-paced, hyperconnected world, believers face an overwhelming challenge: 
                      <strong className="text-gray-800"> information overload meets spiritual disconnect</strong>.
                    </p>
                    
                    <p className="text-gray-600 leading-relaxed">
                      As Christians, we consume a plethora of information - sermons, Bible studies, devotionals, 
                      spiritual conversations, and personal insights. Over the years, we accumulate countless 
                      experiences, thoughts, and learnings scattered across notebooks, apps, and memory.
                    </p>
                    
                    <p className="text-gray-600 leading-relaxed">
                      Yet when life challenges arise, <strong className="text-gray-800">we struggle to intelligently 
                      reference and apply</strong> these spiritual treasures. The very abundance that should strengthen 
                      our faith becomes a fragmented collection we can't navigate effectively.
                    </p>
                    
                    <p className="text-gray-600 leading-relaxed">
                      Traditional journaling and note-taking, while valuable, often becomes inconsistent and 
                      disconnected from daily life. Without intuitive tools, maintaining spiritual disciplines 
                      feels like a chore rather than a life-giving practice.
                    </p>
                  </div>
                </div>

                {/* The Breakthrough */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">The Breakthrough</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      The emergence of AI and Large Language Models presents an unprecedented opportunity: 
                      <strong className="text-gray-800"> transforming technology from distraction to discipleship tool</strong>.
                    </p>
                    
                    <p className="text-gray-600 leading-relaxed">
                      Instead of adding to the noise, AI can intelligently connect the dots between our scattered 
                      spiritual inputs - linking daily experiences with relevant Scripture, surfacing past insights 
                      when needed, and creating meaningful patterns from our spiritual journey.
                    </p>
                    
                    <p className="text-gray-600 leading-relaxed">
                      This technology enables a <strong className="text-gray-800">holistic spiritual ecosystem</strong> 
                       that unifies three critical domains: our daily experiences, God's Word, and prayer life - 
                      making spiritual growth both intuitive and sustainable.
                    </p>
                    
                    <p className="text-gray-600 leading-relaxed">
                      By engineering technology for God's glory, we can finally have tools that make it easy to 
                      love God and love people in our digital age, turning information abundance into spiritual abundance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Video Demo */}
              <div className="lg:col-span-1 flex justify-center items-center">
                <div className="relative max-w-sm w-full">
                  <div className="relative bg-black rounded-3xl p-2 shadow-2xl">
                    <video 
                      className="w-full h-auto rounded-2xl" 
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                    >
                      <source src="/videos/homepage.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 -left-4 w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Statement */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white shadow-2xl">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <RefreshCw className="w-6 h-6" />
                <h3 className="text-xl font-semibold">Our Vision</h3>
              </div>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                A world where Christians seamlessly integrate their spiritual disciplines into every facet of life, 
                nurturing a resiliant & vibrant faith in an increasingly digital age - for the glory of Jesus Christ.
              </p>
            </div>
          </div>
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
            <div className="pt-4">
              <Link href="/contact">
                <Button size="lg">
                  Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </>
  )
}
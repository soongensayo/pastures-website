'use client'

import React, { useRef, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Map, List, Settings } from 'lucide-react'

interface JourneyVideoProps {
  src: string
  title: string
  description: string
  features: string[]
  icon: React.ReactNode
}

const JourneyVideo: React.FC<JourneyVideoProps> = ({ 
  src, 
  title, 
  description, 
  features, 
  icon
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    
    const video = videoRef.current
    const container = containerRef.current
    if (!video || !container) return

    // Respect user's motion preferences - only on client
    const prefersReducedMotion = typeof window !== 'undefined' 
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
      : false
    
    // Intersection Observer for visibility and video control
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (!prefersReducedMotion) {
              video.play().then(() => setIsPlaying(true)).catch(() => {})
            }
          } else {
            setIsVisible(false)
            video.pause()
            setIsPlaying(false)
          }
        })
      },
      { threshold: 0.3, rootMargin: '50px' }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [isMounted])

  // Don't render interactive elements until mounted
  if (!isMounted) {
    return (
      <div className="flex flex-col items-center text-center space-y-6">
        {/* Video Section - Static version */}
        <div className="flex justify-center">
          <div className="relative max-w-[220px]">
            <div className="relative bg-gray-800 rounded-[1.25rem] p-1 shadow-2xl">
              <div className="relative bg-black rounded-[1rem] overflow-hidden">
                <div className="w-full bg-gray-900 rounded-[1rem]" style={{ aspectRatio: '390/844' }}>
                  <div className="flex items-center justify-center h-full text-white text-xs">
                    Loading...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-4 max-w-xs">
          <div className="flex items-center justify-center">
            <h3 className="text-lg font-semibold text-gray-900">
              {title}
            </h3>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>

          <div className="space-y-2 text-center">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-zinc-700 text-xs">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div 
      ref={containerRef}
      className={cn(
        "flex flex-col items-center text-center space-y-6 transition-all duration-1000 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      {/* Video Section - Interactive version */}
      <div className="flex justify-center">
        <div className="relative group max-w-[220px]">
          <div className="relative bg-gray-800 rounded-[1.25rem] p-1 shadow-2xl transform transition-transform duration-500 group-hover:scale-105">
            <div className="relative bg-black rounded-[1rem] overflow-hidden">
              <video
                ref={videoRef}
                className="w-full h-full object-cover rounded-[1rem]"
                muted
                loop
                playsInline
                preload="metadata"
                style={{ aspectRatio: '390/844' }}
              >
                <source src={src} type="video/mp4" />
                <p className="text-white p-2 text-xs">Your browser doesn't support video playback.</p>
              </video>

              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 rounded-[1rem]">
                  <div className="w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-3 border-l-gray-800 border-y-1.5 border-y-transparent ml-0.5"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-4 max-w-xs">
        <div className="flex items-center justify-center">
          <h3 className="text-lg font-semibold text-gray-900">
            {title}
          </h3>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>

        <div className="space-y-2 text-center">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "flex items-start gap-2 transition-all duration-500 ease-out",
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
              )}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
            >
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-zinc-700 text-xs">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const Journeys: React.FC = () => {
  return (
    <div className='mx-auto mb-32 mt-32 max-w-7xl sm:mt-35'>
      <div className='mb-16 px-6 lg:px-8'>
        <div className='mx-auto max-w-3xl sm:text-center'>
          <h2 className='mt-2 font-bold text-4xl text-gray-900 sm:text-5xl'>
            Journeys.
          </h2>
          <p className='mt-4 text-lg text-gray-600'>
            Discover meaningful patterns in your spiritual journey through intelligent categorization. Navigate through emotions, relationships, prayers, and more with intuitive organization and powerful insights.
          </p>
        </div>
      </div>

      {/* Three-Video Layout */}
      <div className="px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Video - Graze Pastures */}
          <JourneyVideo
            src="/videos/grazePastures.mp4"
            title="Category-Based Review"
            description="Navigate your journal entries through intelligent categories. Instead of raw chronological entries, explore your spiritual journey through AI-discovered themes like emotions, people, prayer requests, and life events."
            features={[
              "AI-powered thematic categorization",
              "Emotions, people, and prayer groupings", 
              "Beyond chronological organization",
              "Discover hidden spiritual patterns"
            ]}
            icon={<Map className="w-5 h-5" />}
          />

          {/* Center Video - Journeys List */}
          <JourneyVideo
            src="/videos/journeys.mp4"
            title="Journey Management"
            description="Customize and organize your spiritual journeys with powerful management tools. Rename, merge, delete, and edit journeys within each category. View timeline progressions and trace back to original journal entries."
            features={[
              "Rename and merge related journeys",
              "Category-specific customization options",
              "Timeline view for spiritual progression",
              "Source entry traceability"
            ]}
            icon={<List className="w-5 h-5" />}
          />

          {/* Right Video - Journey Details */}
          <JourneyVideo
            src="/videos/journeyDetails.mp4"
            title="Intelligent Actions"
            description="Experience context-aware spiritual tools within each journey. Generate personalized prayer points for people in your life, get devotional insights, and access intelligent recommendations based on your journey patterns."
            features={[
              "Context-aware action menus",
              "Generated prayer points for individuals",
              "Personalized spiritual recommendations",
              "Journey-specific insights and tools"
            ]}
            icon={<Settings className="w-5 h-5" />}
          />
        </div>
      </div>
    </div>
  )
}

export default Journeys
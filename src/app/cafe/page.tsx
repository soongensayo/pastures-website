'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function CafePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentDrink, setCurrentDrink] = useState(0)
  const [isHydrated, setIsHydrated] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const drinks = ['iced matcha', 'strawberry matcha latte']
  
  const heroImage = '/cafe-pics/setup.JPG'
  
  const galleryImages = [
    '/cafe-pics/IMG_0540.JPG',
    '/cafe-pics/IMG_0544.JPG',
    '/cafe-pics/small smiski.JPG'
  ]
  
  useEffect(() => {
    setIsHydrated(true)
    setTimeout(() => setIsVisible(true), 200)
    
    // Cycle through drinks
    const drinkInterval = setInterval(() => {
      setCurrentDrink((prev) => (prev + 1) % drinks.length)
    }, 3000)
    
    // Cycle through gallery images slowly
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
    }, 5000)
    
    return () => {
      clearInterval(drinkInterval)
      clearInterval(imageInterval)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-stone-50 to-amber-50/30 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {galleryImages.map((image, index) => (
            <Image
              key={image}
              src={image}
              alt="Cafe atmosphere"
              fill
              className={`object-cover transition-opacity duration-2000 ease-in-out ${
                index === currentImageIndex ? 'opacity-15' : 'opacity-0'
              }`}
              priority={index === 0}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/92 via-white/88 to-white/85"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Spacer to push content lower */}
        <div className="h-24 md:h-32"></div>
        
        <div className="flex-1 flex items-start justify-center px-6 py-12">
          <div className="max-w-6xl mx-auto">
            
            {/* Hero Section */}
            <div className="text-center mb-16 md:mb-24">
              <div className={`transition-all duration-1500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}>
                <h1 
                  className="text-7xl md:text-9xl lg:text-[10rem] font-light text-stone-800 mb-6 tracking-tight leading-none"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Agape Cafe
                </h1>
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent mx-auto mb-8"></div>
                <p className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
                  a quiet space for meaningful conversations
                </p>
              </div>
            </div>

            {/* Hero Image */}
            <div className={`mb-16 md:mb-20 transition-all duration-1500 delay-300 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <div className="max-w-4xl mx-auto">
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-2xl group">
                  <Image
                    src={heroImage}
                    alt="Agape Cafe setup - cozy atmosphere with beautiful lighting"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Gallery Images */}
            <div className={`mb-16 md:mb-24 transition-all duration-1500 delay-500 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
                {galleryImages.map((image, index) => (
                  <div key={image} className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
                    <Image
                      src={image}
                      alt={`Cafe photo ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Content Card */}
            <div className={`transition-all duration-1500 delay-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl border border-white/30 max-w-4xl mx-auto">
                
                {/* Location */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-light text-stone-700 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
                    Sheares Hall, NUS
                  </h2>
                  <p className="text-stone-600 text-lg">my room • by invitation</p>
                </div>

                {/* Offer */}
                <div className="text-center mb-12">
                  <h3 className="text-2xl font-medium text-stone-800 mb-6">
                    free drink made by me
                  </h3>
                  <div className="text-stone-600 mb-4 text-lg">
                    currently brewing:
                  </div>
                  <div className="h-12 flex items-center justify-center">
                    {isHydrated ? (
                      <span 
                        key={currentDrink}
                        className="text-3xl md:text-4xl font-light text-amber-700 transition-all duration-500"
                        style={{ fontFamily: 'var(--font-playfair)' }}
                      >
                        {drinks[currentDrink]}
                      </span>
                    ) : (
                      <span className="text-3xl md:text-4xl font-light text-amber-700" style={{ fontFamily: 'var(--font-playfair)' }}>
                        {drinks[0]}
                      </span>
                    )}
                  </div>
                </div>

                {/* Conditions */}
                <div className="mb-12">
                  <h3 className="text-2xl font-medium text-stone-800 text-center mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
                    simple asks
                  </h3>
                  
                  <div className="space-y-6 text-stone-600 leading-relaxed max-w-2xl mx-auto">
                    <div className="flex items-start space-x-4 group">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                      <p className="text-lg">bring 1 friend along: both get free drinks</p>
                    </div>
                    
                    <div className="flex items-start space-x-4 group">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                      <p className="text-lg">get to know one another through some conversation prompts</p>
                    </div>
                    
                    <div className="flex items-start space-x-4 group">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                      <p className="text-lg">give me 5 minutes to share about the person I love most: Jesus Christ</p>
                    </div>
                    
                    <div className="flex items-start space-x-4 group">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                      <p className="text-lg">would love to hear something that has been on your heart as well!</p>
                    </div>
                  </div>
                </div>

                {/* Promise */}
                <div className="p-8 bg-gradient-to-r from-stone-50/80 to-amber-50/80 rounded-2xl border border-stone-200/50 backdrop-blur-sm">
                  <p className="text-stone-600 italic font-light leading-relaxed text-center text-lg mb-4">
                    no strings attached • no pressure at all • not trying to shove anything down your throat
                  </p>
                  <p className="text-stone-700 font-medium text-center text-lg">
                    doing this out of love and to make use of my hall room
                  </p>
                </div>

              </div>
            </div>

            {/* Footer */}
            <div className={`text-center mt-16 transition-all duration-1500 delay-900 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <p className="text-stone-500 font-light text-lg">
                interested? reach out to <span className="font-medium text-stone-600">@soongen</span> via telegram and we&apos;ll find a time
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

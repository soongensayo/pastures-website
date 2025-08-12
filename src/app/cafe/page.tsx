'use client'

import { useState, useEffect } from 'react'

export default function CafePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentDrink, setCurrentDrink] = useState(0)
  const [isHydrated, setIsHydrated] = useState(false)
  
  const drinks = ['iced matcha', 'strawberry matcha latte']
  
  useEffect(() => {
    setIsHydrated(true)
    setIsVisible(true)
    
    // Only start cycling after hydration
    const interval = setInterval(() => {
      setCurrentDrink((prev) => (prev + 1) % drinks.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50 flex items-center justify-center p-6">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        
        {/* Header */}
        <div className={`transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-6xl md:text-8xl font-light text-stone-800 mb-4">
            Agape Cafe
          </h1>
          <div className="w-24 h-0.5 bg-stone-300 mx-auto"></div>
        </div>

        {/* Subtitle */}
        <div className={`transition-all duration-1000 delay-300 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed">
            a quiet space for meaningful conversations
          </p>
        </div>

        {/* Main Content */}
        <div className={`transition-all duration-1000 delay-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20">
            
            {/* Location */}
            <div className="mb-8">
              <h2 className="text-2xl font-light text-stone-700 mb-3">
                sheares hall, nus
              </h2>
              <p className="text-stone-600">my room • by invitation</p>
            </div>

            {/* Offer */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-stone-800 mb-4">
                free drink made by me
              </h3>
              <div className="text-stone-600 mb-2">
                currently brewing:
              </div>
              <div className="h-8 flex items-center justify-center">
                {isHydrated ? (
                  <span 
                    key={currentDrink}
                    className="text-2xl font-light text-amber-700 animate-pulse"
                  >
                    {drinks[currentDrink]}
                  </span>
                ) : (
                  <span className="text-2xl font-light text-amber-700">
                    {drinks[0]}
                  </span>
                )}
              </div>
            </div>

            {/* Conditions */}
            <div className="space-y-6 text-left">
              <h3 className="text-lg font-medium text-stone-800 text-center mb-6">
                simple asks
              </h3>
              
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>bring 1 friend along: both get free drinks</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>get to know one another through some conversation prompts</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>give me 5 minutes to share about the person I love most: Jesus Christ</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>would love to hear something that has been on your heart as well!</p>
                </div>
              </div>
            </div>

            {/* Promise */}
            <div className="mt-8 p-6 bg-stone-50/50 rounded-2xl border border-stone-200/50">
              <p className="text-stone-600 italic font-light leading-relaxed">
                no strings attached • no pressure at all • not trying to shove anything down your throat
              </p>
              <p className="text-stone-700 mt-3 font-medium">
                doing this out of love and to make use of my hall room
              </p>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className={`transition-all duration-1000 delay-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-stone-500 text-sm font-light">
            interested? reach out to @soongen via telegram and we&apos;ll find a time
          </p>
        </div>

      </div>
    </div>
  )
}

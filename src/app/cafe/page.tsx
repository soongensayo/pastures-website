'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function CafePage() {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  const [currentDrink, setCurrentDrink] = useState(0)
  const [isHydrated, setIsHydrated] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [showGuestModal, setShowGuestModal] = useState(false)
  const [password, setPassword] = useState('')
  const [guests, setGuests] = useState(['', ''])
  const [passwordError, setPasswordError] = useState('')
  
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

  const handlePasswordSubmit = () => {
    if (password === 'agapecafe') {
      setShowPasswordModal(false)
      setShowGuestModal(true)
      setPassword('')
      setPasswordError('')
    } else {
      setPasswordError('Incorrect password')
    }
  }

  const handleGuestSubmit = () => {
    const validGuests = guests.filter(guest => guest.trim() !== '')
    if (validGuests.length >= 1) {
      // Store guests in sessionStorage for the session page
      sessionStorage.setItem('cafeGuests', JSON.stringify(validGuests))
      router.push('/cafe/session')
    }
  }

  const addGuest = () => {
    setGuests([...guests, ''])
  }

  const updateGuest = (index: number, value: string) => {
    const newGuests = [...guests]
    newGuests[index] = value
    setGuests(newGuests)
  }

  const removeGuest = (index: number) => {
    if (guests.length > 2) {
      setGuests(guests.filter((_, i) => i !== index))
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-stone-50 to-amber-50/30 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {isHydrated && galleryImages.map((image, index) => (
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

            {/* Video Reel Section */}
            <div className={`mb-20 md:mb-28 transition-all duration-1500 delay-300 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <div className="max-w-5xl mx-auto">
                {/* Video Title */}
                <div className="text-center mb-8">
                  
                  <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
                </div>
                
                {/* Video Container */}
                <div className="relative group">
                  {/* Video Background Glow */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 via-orange-400/20 to-amber-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
                  
                  {/* Main Video */}
                  <div className="relative aspect-[9/16] md:aspect-video max-w-4xl mx-auto overflow-hidden rounded-3xl shadow-2xl border border-white/20 group-hover:shadow-3xl transition-all duration-700">
                    <video
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
                      autoPlay
                      loop
                      muted={false}
                      playsInline
                      controls={false}
                      preload="auto"
                    >
                      <source src="/cafe-vids/cafe_reel.MOV" type="video/mp4" />
                      <source src="/cafe-vids/cafe_reel.MOV" type="video/quicktime" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Subtle Overlay for Modern Feel */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
                    
                    {/* Floating Play Indicator */}
                    <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md rounded-full p-3 border border-white/20">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>

            {/* Main Content Card */}
            <div className={`transition-all duration-1500 delay-500 ease-out ${
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
                <span 
                  className="text-3xl md:text-4xl font-light text-amber-700 transition-all duration-500"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {isHydrated ? drinks[currentDrink] : drinks[0]}
                </span>
              </div>
                </div>

                {/* Conditions */}
                <div className="mb-12">
                  <h3 className="text-2xl font-medium text-stone-800 text-center mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
                    simple notes
                  </h3>
                  
                  <div className="space-y-6 text-stone-600 leading-relaxed max-w-2xl mx-auto">
                    <div className="flex items-start space-x-4 group">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                      <p className="text-lg">bring 1 friend along: both get free drinks</p>
                    </div>
                    
                    <div className="flex items-start space-x-4 group">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                      <p className="text-lg">get to know one another through some intentional conversation prompts </p>
                    </div>
                    
                    <div className="flex items-start space-x-4 group">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                      <p className="text-lg">let me know if you are not comfortable with this: because being a Christian is a huge part of my identity, I will inevitably share about Jesus Christ as I share about myself</p>
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
                    no strings attached • no pressure at all • no expectations
                  </p>
                  <p className="text-stone-700 font-medium text-center text-lg">
                    doing this out of love for God, to befriend and encourage you, & to make use of my hall room
                  </p>
                </div>

              </div>
            </div>

            {/* Gallery Images */}
            <div className={`mb-16 md:mb-24 transition-all duration-1500 delay-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <div className="text-center mb-8">
                
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent mx-auto"></div>
              </div>
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

            {/* Hero Image */}
            <div className={`mb-16 md:mb-20 transition-all duration-1500 delay-800 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h3 
                    className="text-2xl md:text-3xl font-light text-stone-700 mb-4"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    the space
                  </h3>
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent mx-auto"></div>
                </div>
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

            {/* Session Button */}
            <div className={`text-center mt-20 mb-8 transition-all duration-1500 delay-900 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <button
                onClick={() => setShowPasswordModal(true)}
                className="group relative bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-medium px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <span className="relative" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Begin Cafe Session
                </span>
              </button>
            </div>

            {/* Footer */}
            <div className={`text-center mt-8 transition-all duration-1500 delay-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <p className="text-stone-500 font-light text-lg">
                interested? reach out to <span className="font-medium text-stone-600">@soongen</span> via telegram and we&apos;ll find a time
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 max-w-md w-full shadow-2xl border border-white/20">
            <h3 
              className="text-2xl font-light text-stone-800 mb-6 text-center"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Enter Session Password
            </h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handlePasswordSubmit()}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-200"
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-2">{passwordError}</p>
            )}
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => {
                  setShowPasswordModal(false)
                  setPassword('')
                  setPasswordError('')
                }}
                className="flex-1 px-4 py-3 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 transition-all duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handlePasswordSubmit}
                className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 transition-all duration-200"
              >
                Enter
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Guest Modal */}
      {showGuestModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 max-w-md w-full shadow-2xl border border-white/20">
            <h3 
              className="text-2xl font-light text-stone-800 mb-6 text-center"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Guest Names
            </h3>
            <div className="space-y-3">
              {guests.map((guest, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={guest}
                    onChange={(e) => updateGuest(index, e.target.value)}
                    placeholder={`Guest ${index + 1}`}
                    className="flex-1 px-4 py-3 rounded-xl border border-stone-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-200"
                  />
                  {guests.length > 2 && (
                    <button
                      onClick={() => removeGuest(index)}
                      className="px-3 py-3 rounded-xl border border-red-200 text-red-500 hover:bg-red-50 transition-all duration-200"
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={addGuest}
              className="w-full mt-3 px-4 py-2 rounded-xl border-2 border-dashed border-stone-300 text-stone-500 hover:border-amber-400 hover:text-amber-600 transition-all duration-200"
            >
              + Add Guest
            </button>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => {
                  setShowGuestModal(false)
                  setGuests(['', ''])
                }}
                className="flex-1 px-4 py-3 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 transition-all duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleGuestSubmit}
                className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 transition-all duration-200"
                disabled={guests.filter(g => g.trim()).length === 0}
              >
                Start Session
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

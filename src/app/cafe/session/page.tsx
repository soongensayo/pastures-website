'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface PromptCard {
  id: number
  question: string
  category: string
}

interface SessionStats {
  completed: number
  skipped: number
  total: number
}

export default function CafeSessionPage() {
  const router = useRouter()
  const [guests, setGuests] = useState<string[]>([])
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [stats, setStats] = useState<SessionStats>({ completed: 0, skipped: 0, total: 0 })
  const [isExiting, setIsExiting] = useState(false)
  const [showSummary, setShowSummary] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const galleryImages = [
    '/cafe-pics/IMG_0540.JPG',
    '/cafe-pics/IMG_0544.JPG',
    '/cafe-pics/small smiski.JPG'
  ]

  const prompts: PromptCard[] = [
    { id: 1, question: "What is your name, age, and major?", category: "introduction" },
    { id: 2, question: "What do you like to do in your free time? List out whatever you can think of", category: "hobbies" },
    { id: 3, question: "Fun fact/s about yourself", category: "personal" },
    { id: 4, question: "How has it been like staying in hall? Pros and cons?", category: "hall life" },
    { id: 5, question: "How are you feeling these days?", category: "current state" },
    { id: 6, question: "Do you have any dreams in life?", category: "aspirations" },
    { id: 7, question: "What is your favourite colour and why?", category: "preferences" },
    { id: 8, question: "What is one thing you hope to achieve in your time in NUS/hall?", category: "goals" },
    { id: 9, question: "Has any topic/thing been on your heart recently?", category: "reflection" },
    { id: 10, question: "What's something you've learned about yourself recently?", category: "growth" },
    { id: 11, question: "If you could have dinner with anyone, who would it be?", category: "imagination" },
    { id: 12, question: "What's a small thing that made you smile today?", category: "gratitude" },
    { id: 13, question: "What's your biggest fear and biggest hope?", category: "deep thoughts" },
    { id: 14, question: "How do you define a meaningful friendship?", category: "relationships" },
    { id: 15, question: "What's something you wish more people knew about you?", category: "understanding" }
  ]

  useEffect(() => {
    // Get guests from sessionStorage
    const storedGuests = sessionStorage.getItem('cafeGuests')
    if (storedGuests) {
      setGuests(JSON.parse(storedGuests))
    } else {
      router.push('/cafe')
      return
    }

    setStats({ completed: 0, skipped: 0, total: prompts.length })
    setTimeout(() => setIsVisible(true), 200)

    // Background image cycling
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
    }, 6000)

    return () => clearInterval(imageInterval)
  }, [router])

  const handleComplete = () => {
    setIsExiting(true)
    setTimeout(() => {
      setStats(prev => ({ ...prev, completed: prev.completed + 1 }))
      if (currentCardIndex < prompts.length - 1) {
        setCurrentCardIndex(prev => prev + 1)
        setIsExiting(false)
      } else {
        setShowSummary(true)
      }
    }, 300)
  }

  const handleSkip = () => {
    setIsExiting(true)
    setTimeout(() => {
      setStats(prev => ({ ...prev, skipped: prev.skipped + 1 }))
      if (currentCardIndex < prompts.length - 1) {
        setCurrentCardIndex(prev => prev + 1)
        setIsExiting(false)
      } else {
        setShowSummary(true)
      }
    }, 300)
  }

  const handleEndSession = () => {
    sessionStorage.removeItem('cafeGuests')
    router.push('/cafe')
  }

  if (showSummary) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-stone-50 to-amber-50/30 relative overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            {galleryImages.map((image, index) => (
              <Image
                key={image}
                src={image}
                alt="Cafe atmosphere"
                fill
                className={`object-cover transition-opacity duration-2000 ease-in-out ${
                  index === currentImageIndex ? 'opacity-10' : 'opacity-0'
                }`}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/85"></div>
        </div>

        {/* Summary Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/30">
              <h1 
                className="text-4xl md:text-5xl font-light text-stone-800 mb-8"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Session Complete
              </h1>
              
              <div className="mb-8">
                <h2 className="text-2xl font-light text-stone-700 mb-4">
                  Participants
                </h2>
                <div className="flex flex-wrap gap-3 justify-center">
                  {guests.map((guest, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-lg font-medium"
                    >
                      {guest}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-light text-green-600 mb-2">
                    {stats.completed}
                  </div>
                  <div className="text-stone-600">Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-yellow-600 mb-2">
                    {stats.skipped}
                  </div>
                  <div className="text-stone-600">Skipped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-stone-600 mb-2">
                    {stats.total}
                  </div>
                  <div className="text-stone-600">Total</div>
                </div>
              </div>

              <div className="mb-8">
                <div className="w-full bg-stone-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-amber-500 to-orange-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${((stats.completed + stats.skipped) / stats.total) * 100}%` }}
                  ></div>
                </div>
                <p className="text-stone-600 mt-2">
                  {Math.round(((stats.completed + stats.skipped) / stats.total) * 100)}% Progress
                </p>
              </div>

              <button
                onClick={handleEndSession}
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-medium px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span style={{ fontFamily: 'var(--font-playfair)' }}>
                  End Session
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const currentPrompt = prompts[currentCardIndex]

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-stone-50 to-amber-50/30 relative overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {galleryImages.map((image, index) => (
            <Image
              key={image}
              src={image}
              alt="Cafe atmosphere"
              fill
              className={`object-cover transition-opacity duration-2000 ease-in-out ${
                index === currentImageIndex ? 'opacity-10' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/85"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 p-6">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <button
            onClick={handleEndSession}
            className="text-stone-600 hover:text-stone-800 transition-colors duration-200"
          >
            ← Back to Cafe
          </button>
          
          <div className="text-center">
            <h1 
              className="text-2xl md:text-3xl font-light text-stone-800"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Cafe Session
            </h1>
            <div className="flex gap-2 mt-2 justify-center">
              {guests.map((guest, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm"
                >
                  {guest}
                </span>
              ))}
            </div>
          </div>

          <div className="text-right text-stone-600">
            <div className="text-sm">Progress</div>
            <div className="font-medium">
              {currentCardIndex + 1} / {prompts.length}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl mx-auto">
          
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="w-full bg-stone-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${((currentCardIndex + 1) / prompts.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Card Stack Effect */}
          <div className="relative">
            {/* Background Cards for Stack Effect */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-3xl transform rotate-1 scale-95 shadow-lg"></div>
            <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-3xl transform -rotate-1 scale-97 shadow-lg"></div>
            
            {/* Main Card */}
            <div className={`relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/30 transform transition-all duration-300 ${
              isExiting ? 'translate-x-full opacity-0 rotate-12' : 'translate-x-0 opacity-100 rotate-0'
            } ${isVisible ? 'scale-100' : 'scale-95'}`}>
              
              {/* Category Badge */}
              <div className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-6 capitalize">
                {currentPrompt.category}
              </div>

              {/* Question */}
              <h2 
                className="text-2xl md:text-3xl font-light text-stone-800 mb-8 leading-relaxed"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {currentPrompt.question}
              </h2>

              {/* Action Buttons */}
              <div className="flex gap-4 justify-center">
                <button
                  onClick={handleSkip}
                  className="flex-1 max-w-xs px-6 py-4 rounded-2xl border-2 border-stone-300 text-stone-600 hover:border-stone-400 hover:text-stone-700 transition-all duration-200 font-medium"
                >
                  Skip
                </button>
                <button
                  onClick={handleComplete}
                  className="flex-1 max-w-xs px-6 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Complete
                </button>
              </div>

              {/* Stats Preview */}
              <div className="mt-8 pt-6 border-t border-stone-200/50">
                <div className="flex justify-center gap-6 text-sm text-stone-600">
                  <span>Completed: {stats.completed}</span>
                  <span>Skipped: {stats.skipped}</span>
                  <span>Remaining: {prompts.length - currentCardIndex - 1}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

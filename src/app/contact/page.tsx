'use client'

import { useState, useEffect } from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import { ArrowRight, Mail, MessageSquare, User, Send, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  // Load Calendly script
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setIsSubmitted(true)
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitError(error instanceof Error ? error.message : 'Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <MaxWidthWrapper className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-6 max-w-md">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Message Sent! 🙏</h1>
          <p className="text-gray-600">
            Thank you for reaching out to the Pastures team. Your message has been delivered successfully, and we'll get back to you within 24 hours.
          </p>
          <p className="text-sm text-gray-500">
            You should receive a confirmation email shortly at the address you provided.
          </p>
          <Link href="/">
            <Button className="mt-4">
              Back to Home <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </MaxWidthWrapper>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <MaxWidthWrapper className="pt-20 pb-16">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
            <Mail className="w-4 h-4 text-blue-600" />
            <p className="text-sm font-semibold text-gray-700">
              Let's Connect
            </p>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
            Get in <span className="text-blue-600">Touch</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Have questions about Pastures? Want to contribute, donate, invest, or pray for this mission? 
            We'd love to hear from you.
          </p>
        </div>
      </MaxWidthWrapper>

      {/* Contact Form Section */}
      <div className="bg-gray-50 py-16">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Let's Start a Conversation
                </h2>
                <p className="text-gray-600 text-lg">
                  Whether you're interested in beta testing, have feedback, or want to learn more about our mission, 
                  we're here to listen and connect.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">soongen@pastures.app</p>
                    <p className="text-sm text-gray-500 mt-1">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Schedule a Call</h3>
                    <p className="text-gray-600">Book a 20-minute conversation</p>
                    <button 
                      onClick={() => document.getElementById('calendly')?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-green-600 hover:text-green-700 text-sm font-medium transition-colors cursor-pointer"
                    >
                      Schedule now →
                    </button>
                  </div>
                </div>
              </div>

              {/* Bible Verse */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <p className="text-gray-600 italic text-center">
                  "He makes me lie down in green{' '}
                  <span className="text-green-700 font-semibold">pastures</span>..."
                </p>
                <p className="text-sm text-gray-500 text-center mt-2">Psalm 23:2</p>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div id="contact-form" className="bg-white rounded-2xl shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-red-700 text-sm">{submitError}</p>
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a topic...</option>
                    <option value="Beta Testing Interest">Beta Testing Interest</option>
                    <option value="Contributing to Pastures">Contributing to Pastures</option>
                    <option value="Investment Opportunity">Investment Opportunity</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Prayer Support">Prayer Support</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us more about your interest in Pastures..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      {/* Calendly Section */}
      <div id="calendly" className="bg-white py-16">
        <MaxWidthWrapper>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
              Book a Chat.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Interested in what Pastures could do for the Lord, others, or you? Schedule a 20-minute chat here.
            </p>
          </div>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/soongen-pastures/30min"
            style={{ minWidth: '320px', height: '700px' }}
          ></div>
        </MaxWidthWrapper>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-50 py-16">
        <MaxWidthWrapper>
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Ready to Join the Journey?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't wait to start connecting your daily experiences with God's Word. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Send a Message <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('calendly')?.scrollIntoView({ behavior: 'smooth' })}>
                Schedule a Call <MessageSquare className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </>
  )
}
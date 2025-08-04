import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import { ArrowRight, HelpCircle, ChevronDown } from 'lucide-react'
import Link from 'next/link'

export default function FAQPage() {
  const faqs = [
    {
      question: "What is Pastures?",
      answer: "Pastures is a Christian-based app designed to help believers connect their daily experiences with God's Word through guided reflection and intelligent features."
    },
    {
      question: "How does the daily prompt feature work?",
      answer: "Each day, you can generate a thoughtful prompt that encourages you to reflect on your experiences through a biblical lens, helping you see God's presence in everyday moments."
    },
    {
      question: "Is Pastures free to use?",
      answer: "Yes, Pastures is free to use. We're currently in beta testing phase. Details about pricing will be shared as we approach our official launch."
    },
    {
      question: "How can I join the beta testing?",
      answer: "You can sign up for beta testing through our main page or contact us directly. We'll reach out when spots become available."
    },
    {
      question: "What makes Pastures different from other devotional apps?",
      answer: "Pastures focuses on connecting your personal daily experiences with Scripture, rather than just providing generic devotional content. It's about finding God in your unique journey."
    },
    {
      question: "Do I need to be a Christian to use Pastures?",
      answer: "No, but the features are catered to Christians."
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <MaxWidthWrapper className="pt-20 pb-16">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <p className="text-sm font-semibold text-gray-700">
              Get Answers
            </p>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Find answers to common questions about Pastures and how it can enhance your faith journey.
          </p>
        </div>
      </MaxWidthWrapper>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <MaxWidthWrapper>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </div>

      {/* Call to Action */}
      <div className="bg-white py-16">
        <MaxWidthWrapper>
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're here to help! Reach out to our team and we'll get back to you promptly.
            </p>
            <Link href="/contact">
              <Button size="lg">
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </MaxWidthWrapper>
      </div>
    </>
  )
}
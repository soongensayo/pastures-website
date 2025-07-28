import MaxWidthWrapper from '@/components/MaxWidthWrapper'

export default function PrivacyPolicy() {
  return (
    <MaxWidthWrapper className="py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="text-sm text-gray-600 mb-8">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              Welcome to Pastures ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our journaling and spiritual growth application.
            </p>
            <p className="text-gray-700">
              Pastures is designed to help you connect with your thoughts, experiences, and the Word of God through AI-powered journaling, personalized devotional content, and spiritual guidance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">2.1 Personal Information</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Account information (name, email address, profile details)</li>
              <li>Authentication data provided through our secure login system</li>
              <li>Contact information when you reach out to us</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-3">2.2 Journal and Content Data</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Journal entries and personal reflections</li>
              <li>Spiritual content and faith-related information you share</li>
              <li>User-generated content including text, images, and files</li>
              <li>Responses to devotional prompts and spiritual assessments</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-3">2.3 Usage and Technical Data</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Device information and browser type</li>
              <li>IP address and general location data</li>
              <li>App usage patterns and feature interactions</li>
              <li>Performance data and error logs</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">3.1 Core App Functionality</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Provide personalized journaling and spiritual growth features</li>
              <li>Generate AI-powered categorization of your journal entries</li>
              <li>Create personalized devotional prompts based on your experiences</li>
              <li>Offer spiritual guidance and insights tailored to your journey</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-3">3.2 Service Improvement</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Improve our AI algorithms and personalization features</li>
              <li>Enhance user experience and app performance</li>
              <li>Develop new features and spiritual growth tools</li>
              <li>Provide customer support and respond to inquiries</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. AI Processing and Data Analysis</h2>
            <p className="text-gray-700 mb-4">
              Pastures uses artificial intelligence to enhance your spiritual growth experience. Our AI systems:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Analyze your journal entries to provide meaningful categorization</li>
              <li>Generate personalized devotional content based on your experiences</li>
              <li>Identify patterns in your spiritual journey to offer relevant guidance</li>
              <li>Process your content locally and securely to protect your privacy</li>
            </ul>
            <p className="text-gray-700">
              All AI processing is designed to serve your spiritual growth and is conducted with the highest respect for the sacred nature of your personal reflections.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Information Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li><strong>Service Providers:</strong> With trusted third-party services that help us operate our app (authentication, hosting, analytics)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li><strong>Business Transfers:</strong> In connection with any merger, sale, or transfer of our business</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share specific information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement robust security measures to protect your personal and spiritual content:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Secure authentication systems</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and monitoring</li>
              <li>Secure hosting infrastructure</li>
            </ul>
            <p className="text-gray-700">
              While we use industry-standard security practices, no method of transmission or storage is 100% secure. We continuously work to improve our security measures.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights and Choices</h2>
            <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Update:</strong> Correct or update your information</li>
              <li><strong>Delete:</strong> Request deletion of your account and data</li>
              <li><strong>Export:</strong> Download your journal entries and content</li>
              <li><strong>Opt-out:</strong> Disable certain features or data processing</li>
            </ul>
            <p className="text-gray-700">
              To exercise these rights, please contact us at the information provided below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              Pastures integrates with the following third-party services:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li><strong>Firebase Auth and Firestore:</strong> For secure user authentication, account management and account data storage</li>
              <li><strong>GCP Cloud Run and Firebase Storage:</strong> For reliable app performance and data storage</li>
            </ul>
            <p className="text-gray-700">
              These services have their own privacy policies, and we encourage you to review them.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Data Retention</h2>
            <p className="text-gray-700 mb-4">
              We retain your information for as long as necessary to provide our services and fulfill the purposes outlined in this policy:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Account information: Until you delete your account</li>
              <li>Journal entries: Until you delete them or your account</li>
              <li>Usage data: Typically 2-3 years for analytics purposes</li>
              <li>Legal compliance: As required by applicable laws</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Children's Privacy</h2>
            <p className="text-gray-700">
              Pastures is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. International Users</h2>
            <p className="text-gray-700">
              If you are accessing Pastures from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States where our servers are located and our company operates.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> soongen@pastures.app<br/>
                <strong>Website:</strong> pastures.app<br/>
                <strong>Address:</strong> [Your business address]
              </p>
            </div>
          </section>

          <section className="mb-8">
            <p className="text-gray-600 text-sm">
              This Privacy Policy reflects our commitment to protecting your privacy while helping you grow spiritually through our platform. We handle your personal and spiritual content with the utmost care and respect.
            </p>
          </section>
        </div>
      </div>
    </MaxWidthWrapper>
  )
} 
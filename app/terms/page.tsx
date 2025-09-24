import { Metadata } from 'next'
import SectionHeader from '@/components/SectionHeader'
import { 
  FileText, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  Mail, 
  Phone,
  MapPin,
  Calendar,
  User,
  Settings,
  Globe
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service - Duncun Motanya | Website Usage Terms & Conditions',
  description: 'Read the terms and conditions for using Duncun Motanya\'s website. Our terms of service outline acceptable use, intellectual property rights, and user responsibilities.',
  keywords: 'Terms of Service, Terms and Conditions, Website Usage, User Agreement, Legal Terms, Duncun Motanya Terms',
  openGraph: {
    title: 'Terms of Service - Duncun Motanya | Website Usage Terms & Conditions',
    description: 'Read the terms and conditions for using Duncun Motanya\'s website. Our terms of service outline acceptable use, intellectual property rights, and user responsibilities.',
    url: 'https://iamduncun.co.ke/terms',
    images: [
      {
        url: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758565058/DM_1_obizjh_ukg1qb.png',
        width: 1200,
        height: 630,
        alt: 'Duncun Motanya - Terms of Service and Legal Conditions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service - Duncun Motanya | Website Usage Terms & Conditions',
    description: 'Read the terms and conditions for using Duncun Motanya\'s website. Our terms of service outline acceptable use, intellectual property rights, and user responsibilities.',
    images: ['https://res.cloudinary.com/dyfnobo9r/image/upload/v1758565058/DM_1_obizjh_ukg1qb.png'],
  },
  alternates: {
    canonical: 'https://iamduncun.co.ke/terms',
  },
}

export default function TermsOfService() {
  const lastUpdated = 'December 2024'

  const acceptableUse = [
    {
      icon: CheckCircle,
      title: 'Permitted Uses',
      description: 'You may use our website for lawful purposes and in accordance with these terms.',
      examples: [
        'Accessing information about our services',
        'Contacting us for legitimate inquiries',
        'Sharing our content with proper attribution',
        'Using our website for educational purposes'
      ]
    },
    {
      icon: XCircle,
      title: 'Prohibited Uses',
      description: 'You may not use our website in any way that could damage, disable, or impair the site.',
      examples: [
        'Attempting to gain unauthorized access',
        'Transmitting malicious code or viruses',
        'Harvesting personal information',
        'Using automated systems to access the site'
      ]
    }
  ]

  const intellectualProperty = [
    {
      icon: FileText,
      title: 'Website Content',
      description: 'All content on this website, including text, images, and design, is protected by copyright and other intellectual property laws.'
    },
    {
      icon: Shield,
      title: 'Trademarks',
      description: 'The Duncun Motanya name and logo are trademarks and may not be used without permission.'
    },
    {
      icon: Globe,
      title: 'Third-Party Content',
      description: 'Some content may be licensed from third parties and is subject to their respective terms.'
    }
  ]

  const userResponsibilities = [
    {
      icon: User,
      title: 'Accurate Information',
      description: 'Provide accurate and complete information when contacting us or using our services.'
    },
    {
      icon: Shield,
      title: 'Respectful Communication',
      description: 'Maintain respectful and professional communication in all interactions.'
    },
    {
      icon: Settings,
      title: 'Compliance',
      description: 'Comply with all applicable laws and regulations when using our website.'
    }
  ]

  const limitations = [
    {
      icon: AlertTriangle,
      title: 'No Warranties',
      description: 'We provide our website "as is" without warranties of any kind, express or implied.'
    },
    {
      icon: Shield,
      title: 'Limitation of Liability',
      description: 'We are not liable for any damages arising from your use of our website.'
    },
    {
      icon: FileText,
      title: 'Third-Party Links',
      description: 'We are not responsible for the content or practices of third-party websites we link to.'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <SectionHeader
            title="Terms of Service"
            subtitle="Website Usage Terms & Conditions"
            description="These terms and conditions govern your use of our website. By accessing and using this site, you agree to be bound by these terms."
          />
        </div>
      </section>

      {/* Last Updated */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
              <Calendar className="w-4 h-4" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Acceptance of Terms */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Acceptance of Terms</h2>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <p className="text-gray-600 mb-4">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-gray-600">
                These terms apply to all visitors, users, and others who access or use the service. Your continued use of the website after any such changes constitutes your acceptance of the new terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Acceptable Use */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Acceptable Use</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {acceptableUse.map((use, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      index === 0 ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      <use.icon className={`w-6 h-6 ${
                        index === 0 ? 'text-green-500' : 'text-red-500'
                      }`} />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-gray-900">{use.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{use.description}</p>
                  <ul className="space-y-2">
                    {use.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-500">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          index === 0 ? 'bg-green-400' : 'bg-red-400'
                        }`}></div>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intellectual Property */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Intellectual Property Rights</h2>
            
            <div className="space-y-6">
              {intellectualProperty.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* User Responsibilities */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">User Responsibilities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {userResponsibilities.map((responsibility, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <responsibility.icon className="w-6 h-6 text-primary-500" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-gray-900">{responsibility.title}</h3>
                  </div>
                  <p className="text-gray-600">{responsibility.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Limitations and Disclaimers */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Limitations and Disclaimers</h2>
            
            <div className="space-y-6">
              {limitations.map((limitation, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <limitation.icon className="w-6 h-6 text-yellow-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">{limitation.title}</h3>
                      <p className="text-gray-600">{limitation.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Privacy and Data */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Privacy and Data Protection</h2>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <p className="text-gray-600 mb-4">
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these terms by reference.
              </p>
              <p className="text-gray-600">
                By using our website, you consent to the collection and use of information in accordance with our Privacy Policy. We are committed to protecting your personal information and using it only for the purposes outlined in our Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Termination */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Termination</h2>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <p className="text-gray-600 mb-4">
                We may terminate or suspend your access to our website immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the terms.
              </p>
              <p className="text-gray-600">
                Upon termination, your right to use the website will cease immediately. All provisions of the terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Governing Law */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Governing Law</h2>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <p className="text-gray-600 mb-4">
                These terms shall be interpreted and governed by the laws of Kenya, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these terms will not be considered a waiver of those rights.
              </p>
              <p className="text-gray-600">
                If any provision of these terms is held to be invalid or unenforceable by a court, the remaining provisions of these terms will remain in effect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Contact Information</h2>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <p className="text-gray-600 mb-6">
                If you have any questions about these terms of service, please contact us:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-500" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a href="mailto:info@duncunmotanya.com" className="text-primary-500 hover:text-primary-600">
                      info@duncunmotanya.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-500" />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <a href="tel:+254725434262" className="text-primary-500 hover:text-primary-600">
                      +254 725 434262
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary-500" />
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Changes to Terms */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Changes to Terms</h2>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <p className="text-gray-600 mb-4">
                We reserve the right, at our sole discretion, to modify or replace these terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
              <p className="text-gray-600">
                What constitutes a material change will be determined at our sole discretion. By continuing to access or use our website after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import { Metadata } from 'next'
import SectionHeader from '@/components/SectionHeader'
import { 
  Cookie, 
  Shield, 
  Eye, 
  Settings, 
  Database,
  Mail, 
  Phone,
  MapPin,
  Calendar,
  CheckCircle,
  AlertTriangle,
  Info
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cookie Policy - Duncun Motanya | Website Cookies & Tracking Information',
  description: 'Learn about how Duncun Motanya uses cookies and similar technologies on our website. Our cookie policy explains what cookies we use and how you can manage your preferences.',
  keywords: 'Cookie Policy, Website Cookies, Tracking Technologies, Privacy Settings, Cookie Management, Duncun Motanya Cookies',
  openGraph: {
    title: 'Cookie Policy - Duncun Motanya | Website Cookies & Tracking Information',
    description: 'Learn about how Duncun Motanya uses cookies and similar technologies on our website. Our cookie policy explains what cookies we use and how you can manage your preferences.',
    url: 'https://iamduncun.co.ke/cookies',
    images: [
      {
        url: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758565058/DM_1_obizjh_ukg1qb.png',
        width: 1200,
        height: 630,
        alt: 'Duncun Motanya - Cookie Policy and Website Tracking',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Policy - Duncun Motanya | Website Cookies & Tracking Information',
    description: 'Learn about how Duncun Motanya uses cookies and similar technologies on our website. Our cookie policy explains what cookies we use and how you can manage your preferences.',
    images: ['https://res.cloudinary.com/dyfnobo9r/image/upload/v1758565058/DM_1_obizjh_ukg1qb.png'],
  },
  alternates: {
    canonical: 'https://iamduncun.co.ke/cookies',
  },
}

export default function CookiePolicy() {
  const lastUpdated = 'December 2024'

  const cookieTypes = [
    {
      icon: Shield,
      title: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      examples: [
        'Session management',
        'Security features',
        'Load balancing',
        'User authentication'
      ],
      required: true,
      duration: 'Session'
    },
    {
      icon: Eye,
      title: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: [
        'Page views and visits',
        'Time spent on pages',
        'Traffic sources',
        'User behavior patterns'
      ],
      required: false,
      duration: '2 years'
    },
    {
      icon: Settings,
      title: 'Preference Cookies',
      description: 'These cookies remember your choices and preferences.',
      examples: [
        'Language settings',
        'Display preferences',
        'Cookie consent choices',
        'User interface settings'
      ],
      required: false,
      duration: '1 year'
    },
    {
      icon: Database,
      title: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization.',
      examples: [
        'Form data retention',
        'User experience improvements',
        'Content personalization',
        'Feature accessibility'
      ],
      required: false,
      duration: '6 months'
    }
  ]

  const cookiePurposes = [
    {
      icon: CheckCircle,
      title: 'Website Functionality',
      description: 'Essential cookies ensure our website works properly and securely.'
    },
    {
      icon: Eye,
      title: 'Analytics & Performance',
      description: 'Help us understand how our website is used and improve performance.'
    },
    {
      icon: Settings,
      title: 'User Preferences',
      description: 'Remember your choices to provide a personalized experience.'
    },
    {
      icon: Shield,
      title: 'Security & Safety',
      description: 'Protect against fraud and ensure secure data transmission.'
    }
  ]

  const managementSteps = [
    {
      step: '1',
      title: 'Browser Settings',
      description: 'Most browsers allow you to control cookies through their settings menu.'
    },
    {
      step: '2',
      title: 'Cookie Preferences',
      description: 'Use our cookie banner to customize your preferences on this website.'
    },
    {
      step: '3',
      title: 'Third-Party Tools',
      description: 'Use browser extensions or privacy tools to manage cookies across websites.'
    },
    {
      step: '4',
      title: 'Contact Us',
      description: 'Reach out if you need help managing your cookie preferences.'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <SectionHeader
            title="Cookie Policy"
            subtitle="Website Cookies & Tracking Information"
            description="This policy explains how we use cookies and similar technologies on our website to enhance your browsing experience and provide personalized content."
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

      {/* What Are Cookies */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">What Are Cookies?</h2>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <p className="text-gray-600 mb-4">
                    Cookies are small text files that are stored on your device when you visit a website. They help websites remember information about your visit, such as your preferred language and other settings.
                  </p>
                  <p className="text-gray-600">
                    Cookies make your next visit easier and the site more useful to you. They can be either "session" cookies (deleted when you close your browser) or "persistent" cookies (remain on your device for a set period).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Cookies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Types of Cookies We Use</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cookieTypes.map((type, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                      type.required ? 'bg-green-100' : 'bg-blue-100'
                    }`}>
                      <type.icon className={`w-6 h-6 ${
                        type.required ? 'text-green-500' : 'text-blue-500'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-heading font-semibold text-gray-900">{type.title}</h3>
                        {type.required && (
                          <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                            Required
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{type.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>Duration: {type.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-700">Examples:</h4>
                    <ul className="space-y-1">
                      {type.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why We Use Cookies */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Why We Use Cookies</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cookiePurposes.map((purpose, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <purpose.icon className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">{purpose.title}</h3>
                      <p className="text-gray-600">{purpose.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Managing Cookies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Managing Your Cookie Preferences</h2>
            
            <div className="space-y-6">
              {managementSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Browser Settings */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Browser Cookie Settings</h2>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Info className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">Browser Controls</h3>
                    <p className="text-gray-600 mb-4">
                      Most web browsers allow you to control cookies through their settings preferences. You can set your browser to refuse cookies or delete certain cookies.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Popular Browsers:</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Chrome: Settings → Privacy and security → Cookies</li>
                          <li>• Firefox: Settings → Privacy & Security → Cookies</li>
                          <li>• Safari: Preferences → Privacy → Cookies</li>
                          <li>• Edge: Settings → Cookies and site permissions</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Important Note:</h4>
                        <p className="text-sm text-gray-600">
                          Disabling certain cookies may affect the functionality of our website and your user experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third-Party Cookies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Third-Party Cookies</h2>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">External Services</h3>
                  <p className="text-gray-600 mb-4">
                    Our website may use third-party services that set their own cookies. These services help us provide better functionality and analytics.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>• <strong>Analytics Services:</strong> Help us understand website usage</p>
                    <p>• <strong>Content Delivery:</strong> Improve page loading speeds</p>
                    <p>• <strong>Social Media:</strong> Enable sharing and social features</p>
                    <p>• <strong>Security Services:</strong> Protect against malicious activity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Questions About Cookies?</h2>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <p className="text-gray-600 mb-6">
                If you have any questions about our use of cookies or this cookie policy, please contact us:
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

      {/* Changes to Policy */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Changes to This Policy</h2>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <p className="text-gray-600 mb-4">
                We may update this cookie policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
              </p>
              <p className="text-gray-600">
                We will notify you of any material changes by posting the updated policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

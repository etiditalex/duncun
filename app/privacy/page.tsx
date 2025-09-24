import { Metadata } from 'next'
import SectionHeader from '@/components/SectionHeader'
import { 
  Shield, 
  Eye, 
  Lock, 
  Database, 
  Mail, 
  Phone,
  MapPin,
  Calendar,
  User,
  Settings
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy - Duncun Motanya | Data Protection & Privacy Rights',
  description: 'Learn how Duncun Motanya protects your privacy and handles personal data. Our comprehensive privacy policy covers data collection, usage, protection, and your rights.',
  keywords: 'Privacy Policy, Data Protection, Personal Information, GDPR Compliance, Privacy Rights, Data Security, Duncun Motanya Privacy',
  openGraph: {
    title: 'Privacy Policy - Duncun Motanya | Data Protection & Privacy Rights',
    description: 'Learn how Duncun Motanya protects your privacy and handles personal data. Our comprehensive privacy policy covers data collection, usage, protection, and your rights.',
    url: 'https://iamduncun.co.ke/privacy',
    images: [
      {
        url: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758565058/DM_1_obizjh_ukg1qb.png',
        width: 1200,
        height: 630,
        alt: 'Duncun Motanya - Privacy Policy and Data Protection',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - Duncun Motanya | Data Protection & Privacy Rights',
    description: 'Learn how Duncun Motanya protects your privacy and handles personal data. Our comprehensive privacy policy covers data collection, usage, protection, and your rights.',
    images: ['https://res.cloudinary.com/dyfnobo9r/image/upload/v1758565058/DM_1_obizjh_ukg1qb.png'],
  },
  alternates: {
    canonical: 'https://iamduncun.co.ke/privacy',
  },
}

export default function PrivacyPolicy() {
  const lastUpdated = 'December 2024'

  const dataTypes = [
    {
      icon: User,
      title: 'Personal Information',
      description: 'Name, email address, phone number, and contact details you provide when reaching out to us.',
      examples: ['Full name', 'Email address', 'Phone number', 'Professional title']
    },
    {
      icon: Eye,
      title: 'Website Usage Data',
      description: 'Information about how you interact with our website, including pages visited and time spent.',
      examples: ['Page views', 'Session duration', 'Device information', 'Browser type']
    },
    {
      icon: Mail,
      title: 'Communication Data',
      description: 'Messages, inquiries, and correspondence you send to us through our contact forms.',
      examples: ['Contact form submissions', 'Email communications', 'Newsletter subscriptions', 'Feedback messages']
    }
  ]

  const dataUses = [
    {
      icon: Mail,
      title: 'Communication',
      description: 'To respond to your inquiries and provide information about our services.'
    },
    {
      icon: Settings,
      title: 'Service Improvement',
      description: 'To analyze website usage and improve our content and user experience.'
    },
    {
      icon: Shield,
      title: 'Legal Compliance',
      description: 'To comply with applicable laws and regulations in Kenya.'
    },
    {
      icon: Database,
      title: 'Analytics',
      description: 'To understand website performance and user engagement patterns.'
    }
  ]

  const rights = [
    {
      icon: Eye,
      title: 'Right to Access',
      description: 'You can request information about the personal data we hold about you.'
    },
    {
      icon: Settings,
      title: 'Right to Rectification',
      description: 'You can request correction of inaccurate or incomplete personal data.'
    },
    {
      icon: Lock,
      title: 'Right to Erasure',
      description: 'You can request deletion of your personal data under certain circumstances.'
    },
    {
      icon: Shield,
      title: 'Right to Object',
      description: 'You can object to processing of your personal data for certain purposes.'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <SectionHeader
            title="Privacy Policy"
            subtitle="Data Protection & Privacy Rights"
            description="Your privacy is important to us. This policy explains how we collect, use, and protect your personal information when you visit our website or interact with our services."
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

      {/* Information We Collect */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Information We Collect</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {dataTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <type.icon className="w-6 h-6 text-primary-500" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-gray-900">{type.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
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

      {/* How We Use Your Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">How We Use Your Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {dataUses.map((use, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <use.icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">{use.title}</h3>
                    <p className="text-gray-600">{use.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Data Protection</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="w-8 h-8 text-primary-500" />
                  <h3 className="text-xl font-heading font-semibold text-gray-900">Security Measures</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                    <span>SSL encryption for data transmission</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                    <span>Secure data storage and backup systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                    <span>Regular security audits and updates</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                    <span>Access controls and authentication</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Database className="w-8 h-8 text-primary-500" />
                  <h3 className="text-xl font-heading font-semibold text-gray-900">Data Retention</h3>
                </div>
                <p className="text-gray-600">
                  We retain your personal data only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required by law.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Your Privacy Rights</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {rights.map((right, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <right.icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">{right.title}</h3>
                    <p className="text-gray-600">{right.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Contact Us</h2>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <p className="text-gray-600 mb-6">
                If you have any questions about this privacy policy or wish to exercise your privacy rights, please contact us:
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
                We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
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

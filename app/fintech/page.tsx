import { Metadata } from 'next'
import SectionHeader from '@/components/SectionHeader'
import StatCard from '@/components/StatCard'
import ImpactCounter from '@/components/ImpactCounter'
import Image from 'next/image'
import { 
  TrendingUp, 
  Users, 
  Shield, 
  Globe, 
  FileText, 
  Mic,
  Building2,
  Smartphone,
  CreditCard,
  BarChart3,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fintech Leadership - Duncun Motanya | FINTAK Chairperson & Digital Inclusion Pioneer',
  description: 'Explore Duncun Motanya\'s leadership as Chairperson of Fintech Association of Kenya. Driving digital financial inclusion, MSME growth, RegTech innovation, and fintech policy advocacy across Kenya.',
  keywords: 'Fintech Kenya, FINTAK Chairperson, Digital Financial Inclusion, RegTech Innovation, MSME Growth, Fintech Policy Kenya, Digital Banking, Mobile Money, Financial Technology Kenya, Duncun Motanya Fintech',
  openGraph: {
    title: 'Fintech Leadership - Duncun Motanya | FINTAK Chairperson & Digital Inclusion Pioneer',
    description: 'Explore Duncun Motanya\'s leadership as Chairperson of Fintech Association of Kenya. Driving digital financial inclusion, MSME growth, RegTech innovation, and fintech policy advocacy across Kenya.',
    url: 'https://iamduncun.co.ke/fintech',
    images: [
      {
        url: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758565058/DM_1_obizjh_ukg1qb.png',
        width: 1200,
        height: 630,
        alt: 'Duncun Motanya - FINTAK Chairperson and Fintech Leader',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fintech Leadership - Duncun Motanya | FINTAK Chairperson & Digital Inclusion Pioneer',
    description: 'Explore Duncun Motanya\'s leadership as Chairperson of Fintech Association of Kenya. Driving digital financial inclusion, MSME growth, RegTech innovation, and fintech policy advocacy across Kenya.',
    images: ['https://res.cloudinary.com/dyfnobo9r/image/upload/v1758565058/DM_1_obizjh_ukg1qb.png'],
  },
  alternates: {
    canonical: 'https://iamduncun.co.ke/fintech',
  },
}

export default function Fintech() {
  const focusAreas = [
    {
      icon: Globe,
      title: 'Digital Inclusion',
      description: 'Ensuring that financial services reach underserved communities through innovative technology solutions.',
      stats: '2M+',
      statsLabel: 'People Reached'
    },
    {
      icon: Building2,
      title: 'MSME Growth',
      description: 'Supporting micro, small, and medium enterprises with access to digital financial tools and services.',
      stats: '50K+',
      statsLabel: 'MSMEs Supported'
    },
    {
      icon: Shield,
      title: 'RegTech Innovation',
      description: 'Advancing regulatory technology to ensure compliance while fostering innovation in the fintech space.',
      stats: '100+',
      statsLabel: 'RegTech Solutions'
    },
    {
      icon: FileText,
      title: 'Policy Advocacy',
      description: 'Working with government and regulatory bodies to create enabling policies for fintech growth.',
      stats: '15+',
      statsLabel: 'Policy Initiatives'
    }
  ]

  const initiatives = [
    {
      title: 'Digital Financial Literacy Program',
      description: 'Comprehensive program to educate Kenyans on digital financial services and safe online practices.',
      impact: '500,000+ people trained',
      status: 'Active'
    },
    {
      title: 'MSME Fintech Accelerator',
      description: 'Supporting fintech startups focused on serving small businesses with innovative solutions.',
      impact: '200+ startups supported',
      status: 'Active'
    },
    {
      title: 'Regulatory Sandbox Framework',
      description: 'Working with CBK to establish a regulatory sandbox for testing innovative fintech solutions.',
      impact: '50+ companies in sandbox',
      status: 'In Progress'
    },
    {
      title: 'Cross-Border Payment Initiative',
      description: 'Facilitating easier and cheaper cross-border payments within East Africa.',
      impact: '30% cost reduction',
      status: 'Completed'
    }
  ]

  const speakingEngagements = [
    {
      event: 'Fintech Africa Summit 2024',
      topic: 'The Future of Digital Financial Inclusion in Kenya',
      date: 'March 2024',
      location: 'Nairobi, Kenya'
    },
    {
      event: 'Central Bank of Kenya Conference',
      topic: 'RegTech: Balancing Innovation and Regulation',
      date: 'February 2024',
      location: 'Nairobi, Kenya'
    },
    {
      event: 'East Africa Fintech Forum',
      topic: 'Building Sustainable Fintech Ecosystems',
      date: 'January 2024',
      location: 'Kampala, Uganda'
    },
    {
      event: 'Kenya Bankers Association',
      topic: 'Collaboration Between Banks and Fintechs',
      date: 'December 2023',
      location: 'Nairobi, Kenya'
    }
  ]

  const publications = [
    {
      title: 'Digital Financial Inclusion in Kenya: Challenges and Opportunities',
      type: 'Research Paper',
      year: '2024',
      description: 'Comprehensive analysis of Kenya\'s digital financial landscape and recommendations for improvement.'
    },
    {
      title: 'RegTech: The Future of Financial Regulation',
      type: 'White Paper',
      year: '2024',
      description: 'Exploring how regulatory technology can enhance compliance while fostering innovation.'
    },
    {
      title: 'MSMEs and Fintech: A Perfect Match',
      type: 'Industry Report',
      year: '2023',
      description: 'How fintech solutions can transform small business operations and growth.'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title="Fintech Leadership"
                subtitle="Driving Innovation"
                description="As Chairperson of the Fintech Association of Kenya, I'm leading the transformation of Kenya's financial services landscape through technology, policy advocacy, and community empowerment."
                centered={false}
              />
              
              <div className="mt-8 space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Leading Kenya's fintech ecosystem towards greater digital inclusion, supporting MSME growth, 
                  and advancing regulatory technology. My role focuses on creating an enabling environment 
                  where innovation thrives while ensuring consumer protection and financial stability.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  Through strategic partnerships, policy advocacy, and community engagement, I work to ensure 
                  that financial technology serves all Kenyans, regardless of their location or economic status.
                </p>
              </div>

              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Partner With Us
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                <Image
                  src="https://res.cloudinary.com/dyfnobo9r/image/upload/v1758565058/DM_1_obizjh_ukg1qb.png"
                  alt="Duncun Motanya - Fintech Leadership"
                  fill
                  className="object-contain object-center"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Impact by Numbers"
            subtitle="Fintech Leadership"
            description="Measurable impact in Kenya's fintech ecosystem through policy, innovation, and community engagement."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <ImpactCounter value={2} suffix="M+" label="People Reached" />
            <ImpactCounter value={50} suffix="K+" label="MSMEs Supported" delay={0.1} />
            <ImpactCounter value={100} suffix="+" label="RegTech Solutions" delay={0.2} />
            <ImpactCounter value={15} suffix="+" label="Policy Initiatives" delay={0.3} />
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Strategic Focus Areas"
            subtitle="Key Priorities"
            description="Four core areas driving Kenya's fintech transformation and digital financial inclusion."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {focusAreas.map((area, index) => (
              <div key={area.title} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <area.icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">{area.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{area.description}</p>
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl font-bold text-primary-500">{area.stats}</div>
                      <div className="text-sm text-gray-500">{area.statsLabel}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            title="Key Initiatives"
            subtitle="Active Programs"
            description="Leading transformative initiatives that are reshaping Kenya's financial technology landscape."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {initiatives.map((initiative, index) => (
              <div key={initiative.title} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-heading font-semibold text-gray-900">{initiative.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    initiative.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : initiative.status === 'In Progress'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {initiative.status}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">{initiative.description}</p>
                <div className="flex items-center space-x-2 text-sm text-primary-500 font-medium">
                  <CheckCircle className="w-4 h-4" />
                  <span>{initiative.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Engagements */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Speaking Engagements"
            subtitle="Thought Leadership"
            description="Sharing insights and expertise at key industry events and conferences across East Africa."
          />
          
          <div className="mt-16 space-y-6">
            {speakingEngagements.map((engagement, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">{engagement.event}</h3>
                    <p className="text-lg text-primary-500 font-medium mb-2">{engagement.topic}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{engagement.date}</span>
                      <span>•</span>
                      <span>{engagement.location}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Mic className="w-8 h-8 text-primary-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            title="Publications & Research"
            subtitle="Knowledge Sharing"
            description="Contributing to the fintech knowledge base through research, white papers, and industry reports."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {publications.map((publication, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                    {publication.type}
                  </span>
                  <span className="text-sm text-gray-500">{publication.year}</span>
                </div>
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-3">{publication.title}</h3>
                <p className="text-gray-600 leading-relaxed">{publication.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Join the Fintech Revolution
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Whether you're a fintech startup, established financial institution, or policy maker, 
            let's work together to advance Kenya's digital financial ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-500 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Get In Touch
            </Link>
            <Link href="/healthcare" className="border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Explore Healthcare Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


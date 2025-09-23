import { Metadata } from 'next'
import SectionHeader from '@/components/SectionHeader'
import Image from 'next/image'
import { 
  GraduationCap, 
  Briefcase, 
  Heart, 
  TrendingUp, 
  MapPin, 
  Calendar,
  Award,
  Users,
  Building2
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Duncun Motanya - Healthcare & Fintech Leader',
  description: 'Learn about Duncun Motanya\'s journey as a Diabetes Educator, Marketer, and Life Student. Founder of DMMC Online Pharmacy, Chairperson of Fintech Association of Kenya, and community advocate.',
  openGraph: {
    title: 'About Duncun Motanya - Healthcare & Fintech Leader',
    description: 'Learn about Duncun Motanya\'s journey as a Diabetes Educator, Marketer, and Life Student. Founder of DMMC Online Pharmacy, Chairperson of Fintech Association of Kenya, and community advocate.',
    images: ['https://res.cloudinary.com/dyfnobo9r/image/upload/v1758528065/DM_1_obizjh.jpg'],
  },
}

export default function About() {
  const timeline = [
    {
      year: '2024',
      title: 'Chairperson - Fintech Association of Kenya',
      description: 'Leading Kenya\'s fintech ecosystem, driving digital inclusion and MSME growth through innovative financial technology solutions.',
      icon: TrendingUp
    },
    {
      year: '2023',
      title: 'Founder/CEO - DMMC Online Pharmacy',
      description: 'Launched online pharmacy platform to provide affordable healthcare access and chronic care management across Kenya.',
      icon: Heart
    },
    {
      year: '2022',
      title: 'Founder & MD - Diabetes Management Resource Center',
      description: 'Established comprehensive diabetes education and management services, supporting patients and families across Kenya.',
      icon: Users
    },
    {
      year: '2021',
      title: 'Founder/Director/CEO - Executive Funeral Services Kisii',
      description: 'Founded funeral services company, providing dignified and affordable funeral arrangements in the Kisii region.',
      icon: Building2
    },
    {
      year: '2020',
      title: 'Country Sales Manager - Premier Credit Kenya',
      description: 'Led sales operations and business development initiatives, expanding financial services reach across Kenya.',
      icon: Briefcase
    },
    {
      year: '2019',
      title: 'Regional Manager - Platinum Credit Kenya',
      description: 'Managed Nyanza, Western, and Coast regions, driving growth and financial inclusion in underserved areas.',
      icon: MapPin
    }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Community First',
      description: 'Every decision is made with the community\'s best interests at heart, ensuring sustainable and meaningful impact.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Embracing technology and innovative solutions to solve complex healthcare and financial challenges.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Building strong partnerships and networks to amplify impact and create lasting change.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality services and maintaining the highest standards in all endeavors.'
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
                title="About Duncun Motanya"
                subtitle="Leadership & Vision"
                description="A dedicated leader combining healthcare expertise with fintech innovation to create meaningful impact across Kenya."
                centered={false}
              />
              
              <div className="mt-8 space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Diabetes Educator, Marketer & Life Student. Founder & MD – Diabetes Management Resource Center (Kenya). 
                  Founder/CEO – DMMC Online Pharmacy. Founder/Director/CEO – Executive Funeral Services Kisii. 
                  Chairperson – Fintech Association of Kenya.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  Former Country Sales Manager – Premier Credit Kenya. Former Regional Manager (Nyanza/Western/Coast) – 
                  Platinum Credit Kenya. Lives in Nairobi; from Kisii, Kenya.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="w-5 h-5 text-primary-500" />
                  <span>Nairobi, Kenya</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Calendar className="w-5 h-5 text-primary-500" />
                  <span>Originally from Kisii</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://res.cloudinary.com/dyfnobo9r/image/upload/v1758565058/DM_1_obizjh_ukg1qb.png"
                  alt="Duncun Motanya - Healthcare and Fintech Leader"
                  fill
                  className="object-contain object-center"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500/20 rounded-full blur-sm"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary-500/20 rounded-full blur-sm"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-heading font-bold mb-4">Mission</h3>
              <p className="text-lg leading-relaxed">
                To empower communities through accessible healthcare solutions and innovative financial technology, 
                ensuring that quality care and financial services reach every corner of Kenya.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-heading font-bold mb-4">Vision</h3>
              <p className="text-lg leading-relaxed">
                A Kenya where every individual has access to quality healthcare and financial services, 
                creating a foundation for sustainable community development and economic growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Career Journey"
            subtitle="Leadership Timeline"
            description="A journey of leadership, innovation, and community impact across healthcare and financial technology sectors."
          />
          
          <div className="mt-16">
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 via-primary-500 to-primary-300"></div>
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline dot */}
                    <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-white rounded-full border-4 border-primary-500 flex items-center justify-center shadow-lg">
                      <item.icon className="w-6 h-6 text-primary-500" />
                    </div>
                    
                    {/* Content card */}
                    <div className="ml-6 flex-1">
                      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary-500">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                          <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-primary-100 text-primary-800">
                              {item.year}
                            </span>
                            <h3 className="text-xl font-heading font-semibold text-gray-900">{item.title}</h3>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            title="Core Values"
            subtitle="What Drives Me"
            description="The principles that guide my work and shape my approach to leadership and community service."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500 transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            A Life Student Committed to Growth
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            As a self-proclaimed "Life Student," I believe in continuous learning and growth. 
            Every challenge is an opportunity to learn, every success a stepping stone to greater impact, 
            and every interaction a chance to make a positive difference in someone's life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-primary-500 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Connect With Me
            </a>
            <a href="/fintech" className="border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Explore My Work
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

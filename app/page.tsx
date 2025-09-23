import Hero from '@/components/Hero'
import SectionHeader from '@/components/SectionHeader'
import StatCard from '@/components/StatCard'
import { 
  TrendingUp, 
  Heart, 
  Users, 
  Building2, 
  ArrowRight,
  CheckCircle 
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Duncun Motanya - Healthcare & Fintech Leader | Empowering Communities in Kenya',
  description: 'Meet Duncun Motanya, Chairperson of Fintech Association of Kenya and Founder of DMMC Online Pharmacy. Leading digital inclusion and healthcare innovation across Kenya.',
  keywords: 'Duncun Motanya, Fintech Kenya, Healthcare Innovation, Diabetes Education, Digital Financial Inclusion, DMMC Pharmacy, FINTAK Chairperson, Kenya Healthcare, Community Development',
  openGraph: {
    title: 'Duncun Motanya - Healthcare & Fintech Leader | Empowering Communities in Kenya',
    description: 'Meet Duncun Motanya, Chairperson of Fintech Association of Kenya and Founder of DMMC Online Pharmacy. Leading digital inclusion and healthcare innovation across Kenya.',
    url: 'https://iamduncun.co.ke',
    images: [
      {
        url: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758565058/DM_1_obizjh_ukg1qb.png',
        width: 1200,
        height: 630,
        alt: 'Duncun Motanya - Healthcare and Fintech Leader in Kenya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Duncun Motanya - Healthcare & Fintech Leader | Empowering Communities in Kenya',
    description: 'Meet Duncun Motanya, Chairperson of Fintech Association of Kenya and Founder of DMMC Online Pharmacy. Leading digital inclusion and healthcare innovation across Kenya.',
    images: ['https://res.cloudinary.com/dyfnobo9r/image/upload/v1758565058/DM_1_obizjh_ukg1qb.png'],
  },
  alternates: {
    canonical: 'https://iamduncun.co.ke',
  },
}

export default function Home() {
  const highlights = [
    {
      icon: TrendingUp,
      title: 'Fintech Leadership',
      description: 'Chairperson of Fintech Association of Kenya, driving digital inclusion and MSME growth through innovative financial technology solutions.',
      link: '/fintech',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Healthcare Access',
      description: 'Founder of DMMC Online Pharmacy and DMRC Kenya, providing affordable healthcare access and chronic disease management.',
      link: '/healthcare',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Community Impact',
      description: 'Diabetes educator and community advocate, organizing support groups and outreach programs across Kenya.',
      link: '/healthcare',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Building2,
      title: 'Business Leadership',
      description: 'Entrepreneur and business leader, founding Executive Funeral Services and driving economic growth in Kisii region.',
      link: '/about',
      color: 'from-purple-500 to-indigo-500'
    }
  ]

  const achievements = [
    'Chairperson - Fintech Association of Kenya',
    'Founder & MD - Diabetes Management Resource Center',
    'Founder/CEO - DMMC Online Pharmacy',
    'Founder/Director/CEO - Executive Funeral Services Kisii',
    'Former Country Sales Manager - Premier Credit Kenya',
    'Former Regional Manager - Platinum Credit Kenya'
  ]

  return (
    <>
      <Hero />
      
      {/* Highlights Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Making a Difference"
            subtitle="Impact Areas"
            description="Through leadership in fintech and healthcare, I'm working to empower communities and create lasting positive change across Kenya."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${highlight.color} rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <highlight.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                  <Link
                    href={highlight.link}
                    className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium group-hover:translate-x-1 transition-all duration-200"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
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
                  As a Diabetes Educator, Marketer, and Life Student, I've dedicated my career to 
                  empowering communities through innovative healthcare solutions and financial technology. 
                  Based in Nairobi and originally from Kisii, Kenya, I believe in the power of 
                  accessible healthcare and inclusive financial services.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  Through my various leadership roles and entrepreneurial ventures, I've worked to 
                  bridge the gap between traditional healthcare delivery and modern technology, 
                  ensuring that quality care reaches those who need it most.
                </p>
              </div>

              <div className="mt-8">
                <Link href="/about" className="btn-primary">
                  Read Full Story
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dyfnobo9r/image/upload/v1758565058/DM_1_obizjh_ukg1qb.png"
                  alt="Duncun Motanya - Healthcare and Fintech Leader"
                  fill
                  className="object-contain object-center"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Key Achievements"
            subtitle="Leadership & Impact"
            description="A track record of leadership and innovation across healthcare and financial technology sectors."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <CheckCircle className="w-6 h-6 text-primary-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 font-medium">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready to Make a Difference Together?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's collaborate on initiatives that empower communities through healthcare 
            innovation and financial technology advancement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-500 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Get In Touch
            </Link>
            <Link href="/fintech" className="border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Explore My Work
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

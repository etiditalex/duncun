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
  Building2,
  Target,
  Lightbulb,
  Shield
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Autobiography - Duncun Motanya | My Journey as a Dynamic Leader & Catalyst',
  description: 'Discover the complete story of Duncun Motanya - a dynamic leader, coach, and catalyst who thrives at the intersection of motivation, learning, and people-centered growth.',
  keywords: 'Duncun Motanya Autobiography, Dynamic Leader, Coach, Empath, Self-Believer, Philomath, Catalyst, People-Centered Growth, Leadership Journey, Kenya Healthcare, Fintech Pioneer',
  openGraph: {
    title: 'Autobiography - Duncun Motanya | My Journey as a Dynamic Leader & Catalyst',
    description: 'Discover the complete story of Duncun Motanya - a dynamic leader, coach, and catalyst who thrives at the intersection of motivation, learning, and people-centered growth.',
    url: 'https://iamduncun.co.ke/autobiography',
    images: [
      {
        url: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758565058/DM_1_obizjh_ukg1qb.png',
        width: 1200,
        height: 630,
        alt: 'Duncun Motanya - Autobiography and Leadership Journey',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autobiography - Duncun Motanya | My Journey as a Dynamic Leader & Catalyst',
    description: 'Discover the complete story of Duncun Motanya - a dynamic leader, coach, and catalyst who thrives at the intersection of motivation, learning, and people-centered growth.',
    images: ['https://res.cloudinary.com/dyfnobo9r/image/upload/v1758565058/DM_1_obizjh_ukg1qb.png'],
  },
  alternates: {
    canonical: 'https://iamduncun.co.ke/autobiography',
  },
}

export default function Autobiography() {
  const leadershipTraits = [
    {
      icon: Heart,
      title: 'Coach',
      description: 'Deeply invested in nurturing potential and empowering others to achieve their best. I actively support growth, push people to stretch beyond limits, and remain committed to seeing talent fully realized rather than wasted.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      title: 'Empath',
      description: 'Adept at understanding people\'s emotions and motivations. My instinct to consider human impact ensures I build trust quickly and foster meaningful relationships. This empathetic side balances my pragmatic and driven qualities.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Self-Believer',
      description: 'Independent and decisive, with a strong internal compass that drives my confidence. I rarely hesitate when conviction strikes, inspiring others through my certainty. I value autonomy and thrive when given room to act on my vision.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Lightbulb,
      title: 'Philomath',
      description: 'A lifelong learner with a genuine curiosity for ideas, systems, and innovations. I explore widely, seeking knowledge that sharpens my perspective and enriches my leadership. I bring depth, new insights, and a hunger for continuous growth.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Target,
      title: 'Catalyst',
      description: 'Wired to get things moving and break stagnation. I create momentum where others may hesitate and thrive in environments that require fresh starts, bold initiatives, or turning ideas into tangible outcomes.',
      color: 'from-red-500 to-red-600'
    }
  ]

  const careerHighlights = [
    {
      year: '2024',
      title: 'Chairperson - Fintech Association of Kenya',
      description: 'Leading Kenya\'s fintech ecosystem, driving digital inclusion and MSME growth through innovative financial technology solutions.',
      icon: TrendingUp
    },
    {
      year: '2023',
      title: 'Founder/CEO - DMMC Online Pharmacy',
      description: 'Revolutionizing healthcare access through digital pharmacy solutions, making quality healthcare more accessible across Kenya.',
      icon: Heart
    },
    {
      year: '2022',
      title: 'Founder & MD - Diabetes Management Resource Center',
      description: 'Establishing comprehensive diabetes education and management programs to improve community health outcomes.',
      icon: Building2
    },
    {
      year: '2021',
      title: 'Founder/Director/CEO - Executive Funeral Services Kisii',
      description: 'Providing dignified funeral services and supporting families during difficult times in the Kisii region.',
      icon: Award
    }
  ]

  const workingStyle = [
    {
      icon: Users,
      title: 'Collaborative Excellence',
      description: 'I thrive in environments where learning and innovation are valued, with the freedom to act decisively and inspire growth.'
    },
    {
      icon: TrendingUp,
      title: 'What to Expect',
      description: 'Energy, clarity, curiosity, and a people-first mindset. I bring both the drive to act and the sensitivity to connect.'
    },
    {
      icon: Award,
      title: 'Watch-Outs',
      description: 'I may be impatient with bureaucracy or slow processes; I can resist being micromanaged; I need balance between empathy and logic.'
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
                title="My Autobiography"
                subtitle="A Journey of Leadership & Growth"
                description="The complete story of my evolution as a dynamic leader, coach, and catalyst in healthcare and fintech innovation."
                centered={false}
              />
              
              <div className="mt-8 space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  This is my story—a journey of transformation, learning, and impact across healthcare and financial technology sectors. 
                  From my roots in Kisii to my current role as a leader in Kenya's innovation landscape.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  Through this autobiography, I share the experiences, challenges, and insights that have shaped me into the leader I am today—a coach, empath, self-believer, philomath, and catalyst.
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
                  alt="Duncun Motanya - Autobiography"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500/20 rounded-full blur-sm"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary-500/20 rounded-full blur-sm"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Profile */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            title="My Leadership Profile"
            subtitle="360° Assessment"
            description="A comprehensive look at my core leadership traits and how they shape my approach to collaboration and growth."
          />
          
          <div className="mt-12 space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">Who I Am</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I am a dynamic leader and collaborator who thrives at the intersection of motivation, learning, and people-centered growth. 
                At my core, I am a Coach—deeply invested in nurturing potential and empowering others to achieve their best. 
                Colleagues and partners can expect me to actively support their growth, push them to stretch beyond limits, 
                and remain committed to seeing talent fully realized rather than wasted.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I combine this with strong Empathy, making me adept at understanding people's emotions and motivations. 
                My instinct to consider human impact ensures I build trust quickly and foster meaningful relationships. 
                This empathetic side balances my pragmatic and driven qualities, enabling me to motivate while still respecting different perspectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Leadership Traits */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="My Core Leadership Traits"
            subtitle="The Five Pillars of My Leadership"
            description="Understanding the fundamental traits that define my approach to leadership and collaboration."
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTraits.map((trait, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${trait.color} rounded-full flex items-center justify-center mb-4`}>
                  <trait.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">{trait.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{trait.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Journey */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            title="My Career Journey"
            subtitle="Leadership Timeline"
            description="Key milestones and achievements that have shaped my professional journey and leadership evolution."
          />
          
          <div className="mt-16">
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 via-primary-500 to-primary-300"></div>
              
              <div className="space-y-8">
                {careerHighlights.map((item, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline dot */}
                    <div className="relative z-10 w-16 h-16 bg-white border-4 border-primary-500 rounded-full flex items-center justify-center shadow-lg">
                      <item.icon className="w-6 h-6 text-primary-500" />
                    </div>
                    
                    {/* Content */}
                    <div className="ml-8 flex-1">
                      <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                            {item.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How I Work Best */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="How I Work Best"
            subtitle="Collaborative Excellence"
            description="Understanding my optimal working environment and what to expect when partnering with me."
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {workingStyle.map((style, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <style.icon className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-3">{style.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{style.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Believer & Philomath */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-heading font-bold mb-4">Self-Believer</h3>
              <p className="text-lg leading-relaxed mb-4">
                I am independent and decisive, with a strong internal compass that drives my confidence. 
                I rarely hesitate when conviction strikes, inspiring others through my certainty.
              </p>
              <p className="text-lg leading-relaxed">
                However, this self-assurance can sometimes make me resistant to external control or prescriptive approaches—I value autonomy and thrive when given room to act on my vision.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-heading font-bold mb-4">Philomath</h3>
              <p className="text-lg leading-relaxed mb-4">
                I am a lifelong learner with a genuine curiosity for ideas, systems, and innovations. 
                I explore widely, seeking knowledge that sharpens my perspective and enriches my leadership.
              </p>
              <p className="text-lg leading-relaxed">
                Partners and colleagues can expect me to bring depth, new insights, and a hunger for continuous growth into every engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalyst Nature */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-heading font-bold text-gray-900 mb-4">Natural Catalyst</h3>
                <p className="text-xl text-gray-600">
                  Wired to get things moving and break stagnation
                </p>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed text-lg">
                  I create momentum where others may hesitate and thrive in environments that require fresh starts, 
                  bold initiatives, or turning ideas into tangible outcomes. My challenge, however, lies in patience; 
                  I dislike delays and may find prolonged processes or "wasted time" frustrating.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-semibold text-green-800 mb-2">Strengths</h4>
                    <ul className="space-y-2 text-green-700">
                      <li>• Motivator & People Developer</li>
                      <li>• Empathetic Listener</li>
                      <li>• Confident Decision-Maker</li>
                      <li>• Initiator of Momentum</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h4 className="font-semibold text-blue-800 mb-2">What to Expect</h4>
                    <ul className="space-y-2 text-blue-700">
                      <li>• Energy, clarity, curiosity</li>
                      <li>• People-first mindset</li>
                      <li>• Drive to act with sensitivity</li>
                      <li>• Continuous growth focus</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-heading font-bold mb-4">Ready to Collaborate?</h3>
            <p className="text-lg mb-6">
              I bring both the drive to act and the sensitivity to connect, making me a partner who inspires confidence while keeping humanity at the center of progress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Get in Touch
              </a>
              <a href="/about" className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-colors">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

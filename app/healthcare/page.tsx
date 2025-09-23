import { Metadata } from 'next'
import SectionHeader from '@/components/SectionHeader'
import StatCard from '@/components/StatCard'
import ImpactCounter from '@/components/ImpactCounter'
import Image from 'next/image'
import { 
  Heart, 
  Users, 
  Pill, 
  Stethoscope, 
  GraduationCap, 
  MapPin,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Calendar
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Healthcare & Community Impact - Duncun Motanya',
  description: 'Diabetes education, DMMC Online Pharmacy, DMRC Kenya. Providing affordable healthcare access, chronic disease management, and community outreach across Kenya.',
  openGraph: {
    title: 'Healthcare & Community Impact - Duncun Motanya',
    description: 'Diabetes education, DMMC Online Pharmacy, DMRC Kenya. Providing affordable healthcare access, chronic disease management, and community outreach across Kenya.',
    images: ['https://res.cloudinary.com/dyfnobo9r/image/upload/v1758528051/DM_2_ahfkyb.jpg'],
  },
}

export default function Healthcare() {
  const services = [
    {
      icon: Pill,
      title: 'DMMC Online Pharmacy',
      description: 'Providing affordable access to medications and health products through our online platform.',
      features: ['Prescription Management', 'Home Delivery', 'Chronic Care Support', 'Health Consultations'],
      image: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758565058/DM_1_obizjh_ukg1qb.png'
    },
    {
      icon: Stethoscope,
      title: 'DMRC Kenya',
      description: 'Comprehensive diabetes management and education services for patients and families.',
      features: ['Diabetes Education', 'Support Groups', 'Regular Check-ups', 'Lifestyle Counseling'],
      image: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758565058/DM_1_obizjh_ukg1qb.png'
    },
    {
      icon: Users,
      title: 'Community Outreach',
      description: 'Organizing health awareness programs and support groups across Kenya.',
      features: ['Health Screenings', 'Educational Workshops', 'Support Groups', 'Mobile Clinics'],
      image: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758565058/DM_1_obizjh_ukg1qb.png'
    }
  ]

  const impactStats = [
    { value: 10000, suffix: '+', label: 'Patients Served' },
    { value: 50, suffix: '+', label: 'Health Programs' },
    { value: 25, suffix: '+', label: 'Partner Clinics' },
    { value: 200, suffix: '+', label: 'Workshops Hosted' }
  ]

  const programs = [
    {
      title: 'Diabetes Support Groups',
      description: 'Regular meetings providing emotional support, education, and practical advice for diabetes management.',
      schedule: 'Every Saturday, 10:00 AM',
      location: 'Nairobi & Kisii',
      participants: '500+ members'
    },
    {
      title: 'Mobile Health Clinics',
      description: 'Bringing healthcare services directly to underserved communities across Kenya.',
      schedule: 'Monthly',
      location: 'Various Locations',
      participants: '2,000+ people reached'
    },
    {
      title: 'Health Education Workshops',
      description: 'Educational sessions on diabetes prevention, management, and healthy lifestyle choices.',
      schedule: 'Bi-weekly',
      location: 'Community Centers',
      participants: '1,500+ attendees'
    },
    {
      title: 'Chronic Care Management',
      description: 'Comprehensive care programs for patients with diabetes and other chronic conditions.',
      schedule: 'Ongoing',
      location: 'DMRC Centers',
      participants: '3,000+ patients'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Mwangi',
      location: 'Nairobi',
      condition: 'Type 2 Diabetes',
      quote: 'DMMC Online Pharmacy has made managing my diabetes so much easier. The home delivery service is a lifesaver, and the support team is always helpful.',
      rating: 5
    },
    {
      name: 'John Otieno',
      location: 'Kisii',
      condition: 'Diabetes Support Group Member',
      quote: 'The support group meetings have been incredibly helpful. I\'ve learned so much about managing my condition and met others who understand what I\'m going through.',
      rating: 5
    },
    {
      name: 'Grace Wanjiku',
      location: 'Nakuru',
      condition: 'DMRC Patient',
      quote: 'The comprehensive care at DMRC has helped me take control of my diabetes. The education and support have been life-changing.',
      rating: 5
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-red-50 to-pink-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title="Healthcare & Community Impact"
                subtitle="Serving Communities"
                description="Dedicated to improving healthcare access and outcomes through innovative solutions, education, and community engagement across Kenya."
                centered={false}
              />
              
              <div className="mt-8 space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  As a Diabetes Educator and healthcare advocate, I'm committed to making quality healthcare 
                  accessible to all Kenyans. Through DMMC Online Pharmacy, DMRC Kenya, and various community 
                  initiatives, we're transforming healthcare delivery and patient outcomes.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  Our approach combines technology, education, and community engagement to create sustainable 
                  healthcare solutions that serve the most vulnerable populations.
                </p>
              </div>

              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Get Healthcare Support
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                 <Image
                   src="https://res.cloudinary.com/dyfnobo9r/image/upload/v1758565058/DM_1_obizjh_ukg1qb.png"
                   alt="Duncun Motanya - Healthcare and Community Impact"
                   fill
                   className="object-contain object-center"
                   quality={95}
                   priority
                 />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-500/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Our Impact"
            subtitle="Healthcare & Community"
            description="Measurable impact in healthcare delivery, patient outcomes, and community engagement across Kenya."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {impactStats.map((stat, index) => (
              <ImpactCounter 
                key={stat.label}
                value={stat.value} 
                suffix={stat.suffix} 
                label={stat.label} 
                delay={index * 0.1} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Our Services"
            subtitle="Healthcare Solutions"
            description="Comprehensive healthcare services designed to improve access, outcomes, and quality of life for all Kenyans."
          />
          
          <div className="mt-16 space-y-16">
            {services.map((service, index) => (
              <div key={service.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-red-500" />
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-gray-900">{service.title}</h3>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    {service.title === 'DMMC Online Pharmacy' ? (
                      <a 
                        href="https://dmmc.co.ke/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        Visit DMMC Online Pharmacy
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    ) : (
                      <Link href="/contact" className="btn-primary">
                        Learn More
                      </Link>
                    )}
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                     <Image
                       src={service.image}
                       alt={service.title}
                       fill
                       className="object-contain object-center"
                       quality={90}
                     />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            title="Community Programs"
            subtitle="Active Initiatives"
            description="Ongoing programs that bring healthcare education, support, and services directly to communities across Kenya."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {programs.map((program, index) => (
              <div key={program.title} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{program.description}</p>
                
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{program.schedule}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{program.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>{program.participants}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Patient Stories"
            subtitle="Real Impact"
            description="Hear from the people whose lives have been transformed through our healthcare services and community programs."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-4 h-4 text-yellow-400 fill-current">★</div>
                  ))}
                </div>
                
                <blockquote className="text-gray-600 leading-relaxed mb-4">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                  <div className="text-sm text-red-500 font-medium">{testimonial.condition}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-to-r from-red-500 to-pink-500">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Need Healthcare Support?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Whether you need medication delivery, diabetes education, or community support, 
            we're here to help. Get in touch with our healthcare team today.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="flex items-center justify-center space-x-3 text-white">
              <Phone className="w-6 h-6" />
              <span>+254 725 434262</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white">
              <Mail className="w-6 h-6" />
              <span>info@dmmc.co.ke</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white">
              <Clock className="w-6 h-6" />
              <span>Mon - Sat / 8:00 AM - 8:00 PM</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-red-500 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Contact Healthcare Team
            </Link>
            <Link href="/fintech" className="border-2 border-white text-white hover:bg-white hover:text-red-500 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Explore Fintech Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


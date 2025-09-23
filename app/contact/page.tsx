import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import SectionHeader from '@/components/SectionHeader'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  Users,
  UserPlus,
  Heart
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact & Partnership - Duncun Motanya | Healthcare & Fintech Collaboration',
  description: 'Connect with Duncun Motanya for healthcare support, fintech collaboration, community partnerships, or speaking engagements. Contact the FINTAK Chairperson and DMMC Pharmacy founder for business opportunities.',
  keywords: 'Contact Duncun Motanya, Healthcare Partnership Kenya, Fintech Collaboration, Speaking Engagements Kenya, Business Partnership, DMMC Pharmacy Contact, FINTAK Contact, Healthcare Support Kenya',
  openGraph: {
    title: 'Contact & Partnership - Duncun Motanya | Healthcare & Fintech Collaboration',
    description: 'Connect with Duncun Motanya for healthcare support, fintech collaboration, community partnerships, or speaking engagements. Contact the FINTAK Chairperson and DMMC Pharmacy founder for business opportunities.',
    url: 'https://iamduncun.co.ke/contact',
    images: [
      {
        url: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758565058/DM_1_obizjh_ukg1qb.png',
        width: 1200,
        height: 630,
        alt: 'Contact Duncun Motanya - Healthcare and Fintech Leader',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact & Partnership - Duncun Motanya | Healthcare & Fintech Collaboration',
    description: 'Connect with Duncun Motanya for healthcare support, fintech collaboration, community partnerships, or speaking engagements. Contact the FINTAK Chairperson and DMMC Pharmacy founder for business opportunities.',
    images: ['https://res.cloudinary.com/dyfnobo9r/image/upload/v1758565058/DM_1_obizjh_ukg1qb.png'],
  },
  alternates: {
    canonical: 'https://iamduncun.co.ke/contact',
  },
}

export default function Contact() {

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: ['info@duncunmotanya.com', 'healthcare@duncunmotanya.com'],
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+254 725 434262'],
      description: 'Call us during business hours'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['Nairobi, Kenya', 'Kisii, Kenya'],
      description: 'Based in Nairobi, originally from Kisii'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM'],
      description: 'Available for consultations'
    }
  ]

  const partnershipTypes = [
    {
      icon: Heart,
      title: 'Healthcare Partnerships',
      description: 'Collaborate on healthcare initiatives, community programs, and patient care services.',
      benefits: ['Resource Sharing', 'Joint Programs', 'Community Outreach', 'Patient Support']
    },
    {
      icon: MessageCircle,
      title: 'Fintech Collaboration',
      description: 'Partner on fintech innovation, digital inclusion, and financial services development.',
      benefits: ['Technology Exchange', 'Policy Advocacy', 'Market Development', 'Innovation Labs']
    },
    {
      icon: Users,
      title: 'Community Engagement',
      description: 'Join forces in community development, education, and social impact initiatives.',
      benefits: ['Volunteer Programs', 'Educational Workshops', 'Community Events', 'Social Impact']
    },
    {
      icon: UserPlus,
      title: 'Speaking & Consulting',
      description: 'Invite Duncun for speaking engagements, workshops, and consulting services.',
      benefits: ['Keynote Speeches', 'Workshop Facilitation', 'Strategic Consulting', 'Mentorship']
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <SectionHeader
            title="Contact & Partnership"
            subtitle="Let's Connect"
            description="Ready to collaborate on healthcare innovation, fintech advancement, or community impact? Let's start a conversation that could change lives."
          />
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={info.title} className="text-center group">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500 transition-colors duration-300">
                  <info.icon className="w-8 h-8 text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">{info.title}</h3>
                <div className="space-y-1 mb-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600">{detail}</p>
                  ))}
                </div>
                <p className="text-sm text-gray-500">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Partnership Info */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">Send a Message</h2>
              <ContactForm />
            </div>

            {/* Partnership Information */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">Partnership Opportunities</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                We're always looking for meaningful partnerships that can amplify our impact in healthcare, 
                fintech, and community development. Here are some ways we can collaborate:
              </p>

              <div className="space-y-6">
                {partnershipTypes.map((partnership, index) => (
                  <div key={partnership.title} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <partnership.icon className="w-6 h-6 text-primary-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">{partnership.title}</h3>
                        <p className="text-gray-600 leading-relaxed mb-3">{partnership.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {partnership.benefits.map((benefit, benefitIndex) => (
                            <span key={benefitIndex} className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl p-6 text-white">
                <h3 className="text-xl font-heading font-bold mb-3">Ready to Partner?</h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  Let's discuss how we can work together to create meaningful impact in healthcare, 
                  fintech, or community development.
                </p>
                <a
                  href="mailto:partnerships@duncunmotanya.com"
                  className="inline-flex items-center bg-white text-primary-500 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Start Partnership Discussion
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            For urgent healthcare support or immediate fintech consultation, 
            don't hesitate to reach out directly.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a
              href="tel:+254700000000"
              className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 px-6 py-4 rounded-lg transition-colors duration-200"
            >
              <Phone className="w-8 h-8 mx-auto mb-2" />
              <div className="font-semibold">Call Now</div>
              <div className="text-sm text-white/80">+254 700 000 000</div>
            </a>
            
            <a
              href="https://wa.me/254700000000"
              className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 px-6 py-4 rounded-lg transition-colors duration-200"
            >
              <MessageCircle className="w-8 h-8 mx-auto mb-2" />
              <div className="font-semibold">WhatsApp</div>
              <div className="text-sm text-white/80">Quick Chat</div>
            </a>
            
            <a
              href="mailto:info@duncunmotanya.com"
              className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 px-6 py-4 rounded-lg transition-colors duration-200"
            >
              <Mail className="w-8 h-8 mx-auto mb-2" />
              <div className="font-semibold">Email</div>
              <div className="text-sm text-white/80">info@duncunmotanya.com</div>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

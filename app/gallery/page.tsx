import { Metadata } from 'next'
import SectionHeader from '@/components/SectionHeader'
import GalleryGrid from '@/components/GalleryGrid'
import { 
  Camera, 
  Users, 
  Heart, 
  TrendingUp,
  MapPin,
  Calendar
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gallery - Duncun Motanya | Photos from Fintech & Healthcare Events',
  description: 'Explore photos and moments from Duncun Motanya\'s work in fintech leadership, healthcare advocacy, and community impact across Kenya. See behind-the-scenes of FINTAK events, healthcare initiatives, and community programs.',
  keywords: 'Duncun Motanya Photos, Fintech Events Kenya, Healthcare Events, Community Programs Kenya, FINTAK Gallery, DMMC Pharmacy Events, Diabetes Education Photos, Kenya Healthcare Gallery',
  openGraph: {
    title: 'Gallery - Duncun Motanya | Photos from Fintech & Healthcare Events',
    description: 'Explore photos and moments from Duncun Motanya\'s work in fintech leadership, healthcare advocacy, and community impact across Kenya. See behind-the-scenes of FINTAK events, healthcare initiatives, and community programs.',
    url: 'https://iamduncun.co.ke/gallery',
    images: [
      {
        url: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758565058/DM_1_obizjh_ukg1qb.png',
        width: 1200,
        height: 630,
        alt: 'Duncun Motanya - Gallery of Fintech and Healthcare Events',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery - Duncun Motanya | Photos from Fintech & Healthcare Events',
    description: 'Explore photos and moments from Duncun Motanya\'s work in fintech leadership, healthcare advocacy, and community impact across Kenya. See behind-the-scenes of FINTAK events, healthcare initiatives, and community programs.',
    images: ['https://res.cloudinary.com/dyfnobo9r/image/upload/v1758565058/DM_1_obizjh_ukg1qb.png'],
  },
  alternates: {
    canonical: 'https://iamduncun.co.ke/gallery',
  },
}

export default function Gallery() {
  const galleryImages = [
    {
      src: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758528073/DM_3_m4tmaf.jpg',
      alt: 'Duncun Motanya - Professional Portrait',
      caption: 'Professional portrait showcasing leadership in healthcare and fintech'
    },
    {
      src: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758528065/DM_1_obizjh.jpg',
      alt: 'Duncun Motanya - Healthcare Leadership',
      caption: 'Leading healthcare initiatives and community outreach programs'
    },
    {
      src: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758528051/DM_6_avxdks.jpg',
      alt: 'Duncun Motanya - Fintech Leadership',
      caption: 'Chairperson of Fintech Association of Kenya, driving digital innovation'
    },
    {
      src: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758528051/DM_5_gwxnpv.jpg',
      alt: 'Duncun Motanya - Community Engagement',
      caption: 'Engaging with communities and stakeholders in healthcare advocacy'
    },
    {
      src: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758528051/DM_2_ahfkyb.jpg',
      alt: 'Duncun Motanya - Healthcare Services',
      caption: 'Overseeing healthcare services and patient care initiatives'
    },
    {
      src: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758528051/DM_4_zjw2mp.jpg',
      alt: 'Duncun Motanya - Business Leadership',
      caption: 'Leading business operations and strategic initiatives'
    }
  ]

  const categories = [
    {
      icon: TrendingUp,
      title: 'Fintech Leadership',
      count: 15,
      description: 'Speaking engagements, conferences, and policy meetings'
    },
    {
      icon: Heart,
      title: 'Healthcare & Community',
      count: 25,
      description: 'Health programs, community outreach, and patient care'
    },
    {
      icon: Users,
      title: 'Team & Partnerships',
      count: 12,
      description: 'Collaborations with healthcare and fintech partners'
    },
    {
      icon: Camera,
      title: 'Events & Conferences',
      count: 18,
      description: 'Industry events, workshops, and speaking engagements'
    }
  ]

  const recentEvents = [
    {
      title: 'Fintech Africa Summit 2024',
      date: 'March 2024',
      location: 'Nairobi, Kenya',
      image: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758528051/DM_6_avxdks.jpg',
      description: 'Keynote speech on digital financial inclusion'
    },
    {
      title: 'Healthcare Innovation Workshop',
      date: 'February 2024',
      location: 'Kisii, Kenya',
      image: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758528051/DM_2_ahfkyb.jpg',
      description: 'Community health education and outreach'
    },
    {
      title: 'DMRC Support Group Meeting',
      date: 'January 2024',
      location: 'Nairobi, Kenya',
      image: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758528051/DM_5_gwxnpv.jpg',
      description: 'Monthly diabetes support group session'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <SectionHeader
            title="Gallery"
            subtitle="Moments & Memories"
            description="Capturing the journey of impact through fintech leadership, healthcare advocacy, and community engagement across Kenya."
          />
        </div>
      </section>

      {/* Category Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-heading font-bold text-gray-900 text-center mb-12">
            Gallery Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={category.title} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <category.icon className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">{category.title}</h3>
                <div className="text-2xl font-bold text-primary-500 mb-2">{category.count}</div>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Gallery */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-heading font-bold text-gray-900">All Photos</h2>
            <div className="flex items-center space-x-4">
              <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option>All Categories</option>
                <option>Fintech Leadership</option>
                <option>Healthcare & Community</option>
                <option>Team & Partnerships</option>
                <option>Events & Conferences</option>
              </select>
              <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option>Most Recent</option>
                <option>Oldest First</option>
                <option>Most Popular</option>
              </select>
            </div>
          </div>

          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      {/* Recent Events */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-heading font-bold text-gray-900 text-center mb-12">
            Recent Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Join the Journey
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Be part of the movement that's transforming healthcare access and financial inclusion across Kenya. 
            Connect with us and make a difference in your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-primary-500 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Get Involved
            </a>
            <a href="/about" className="border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}


import { Metadata } from 'next'
import SectionHeader from '@/components/SectionHeader'
import PostCard from '@/components/PostCard'
import { 
  Calendar, 
  User, 
  Tag,
  ArrowRight,
  Search,
  Filter
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'News & Insights - Duncun Motanya | Fintech & Healthcare Articles',
  description: 'Stay updated with Duncun Motanya\'s latest insights on fintech innovation, healthcare access, community impact, and entrepreneurship in Kenya. Expert articles on digital financial inclusion and healthcare innovation.',
  keywords: 'Fintech News Kenya, Healthcare Insights, Digital Financial Inclusion Articles, Community Development Kenya, Entrepreneurship Kenya, Healthcare Innovation, Diabetes Education News, Duncun Motanya Blog',
  openGraph: {
    title: 'News & Insights - Duncun Motanya | Fintech & Healthcare Articles',
    description: 'Stay updated with Duncun Motanya\'s latest insights on fintech innovation, healthcare access, community impact, and entrepreneurship in Kenya. Expert articles on digital financial inclusion and healthcare innovation.',
    url: 'https://iamduncun.co.ke/news',
    images: [
      {
        url: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758565058/DM_1_obizjh_ukg1qb.png',
        width: 1200,
        height: 630,
        alt: 'Duncun Motanya - News and Insights on Fintech and Healthcare',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'News & Insights - Duncun Motanya | Fintech & Healthcare Articles',
    description: 'Stay updated with Duncun Motanya\'s latest insights on fintech innovation, healthcare access, community impact, and entrepreneurship in Kenya. Expert articles on digital financial inclusion and healthcare innovation.',
    images: ['https://res.cloudinary.com/dyfnobo9r/image/upload/v1758565058/DM_1_obizjh_ukg1qb.png'],
  },
  alternates: {
    canonical: 'https://iamduncun.co.ke/news',
  },
}

export default function News() {
  const featuredPost = {
    title: 'The Future of Digital Financial Inclusion in Kenya',
    excerpt: 'Exploring how fintech innovation is transforming access to financial services across Kenya, with insights from my role as Chairperson of the Fintech Association of Kenya.',
    date: 'March 15, 2024',
    image: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758528051/DM_6_avxdks.jpg',
    category: 'Fintech',
    slug: 'future-digital-financial-inclusion-kenya',
    author: 'Duncun Motanya',
    readTime: '5 min read'
  }

  const posts = [
    {
      title: 'Building Sustainable Healthcare Ecosystems in Rural Kenya',
      excerpt: 'How DMMC Online Pharmacy and DMRC Kenya are bridging the healthcare gap in underserved communities through technology and community engagement.',
      date: 'March 10, 2024',
      image: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758528051/DM_2_ahfkyb.jpg',
      category: 'Healthcare',
      slug: 'sustainable-healthcare-ecosystems-rural-kenya'
    },
    {
      title: 'The Role of RegTech in Kenya\'s Financial Sector',
      excerpt: 'Understanding how regulatory technology is enabling innovation while ensuring compliance in Kenya\'s rapidly evolving financial services landscape.',
      date: 'March 5, 2024',
      image: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758528051/DM_5_gwxnpv.jpg',
      category: 'Fintech',
      slug: 'regtech-kenya-financial-sector'
    },
    {
      title: 'Diabetes Education: Empowering Patients and Families',
      excerpt: 'The importance of comprehensive diabetes education in improving patient outcomes and supporting families dealing with chronic conditions.',
      date: 'February 28, 2024',
      image: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758528051/DM_4_zjw2mp.jpg',
      category: 'Community',
      slug: 'diabetes-education-empowering-patients-families'
    },
    {
      title: 'Entrepreneurship in Healthcare: Lessons from Building DMMC',
      excerpt: 'Key insights and lessons learned from founding and scaling DMMC Online Pharmacy, including challenges and opportunities in healthcare entrepreneurship.',
      date: 'February 20, 2024',
      image: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758528051/DM_1_obizjh.jpg',
      category: 'Entrepreneurship',
      slug: 'entrepreneurship-healthcare-lessons-dmmc'
    }
  ]

  const categories = ['All', 'Fintech', 'Healthcare', 'Community', 'Entrepreneurship']

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <SectionHeader
            title="News & Insights"
            subtitle="Thought Leadership"
            description="Sharing insights, experiences, and perspectives on fintech innovation, healthcare access, community impact, and entrepreneurship."
          />
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="text-white/80 text-sm">Featured Article</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  {featuredPost.title}
                </h2>
                
                <p className="text-xl text-white/90 leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center space-x-6 text-white/80 text-sm mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                
                <a
                  href={`/news/${featuredPost.slug}`}
                  className="inline-flex items-center bg-white text-primary-500 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
              
              <div className="relative h-80 rounded-xl overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 mb-8">
            <h2 className="text-2xl font-heading font-bold text-gray-900">All Articles</h2>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-400" />
                <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <PostCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                image={post.image}
                slug={post.slug}
                category={post.category}
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-outline">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get the latest insights on fintech innovation, healthcare access, and community impact 
            delivered directly to your inbox.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-primary-500 hover:bg-gray-100 px-6 py-3 rounded-r-lg font-semibold transition-colors duration-200">
                Subscribe
              </button>
            </div>
            <p className="text-white/80 text-sm mt-3">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}


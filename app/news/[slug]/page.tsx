import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react'

interface ArticlePageProps {
  params: {
    slug: string
  }
}

// This would typically come from a CMS or database
const articles = {
  'future-digital-financial-inclusion-kenya': {
    title: 'The Future of Digital Financial Inclusion in Kenya',
    excerpt: 'Exploring how fintech innovation is transforming access to financial services across Kenya, with insights from my role as Chairperson of the Fintech Association of Kenya.',
    content: `
      <p>Kenya has long been a pioneer in digital financial services, with M-Pesa revolutionizing mobile money over a decade ago. Today, as Chairperson of the Fintech Association of Kenya, I see an even more exciting future unfolding.</p>
      
      <p>The landscape of financial inclusion is rapidly evolving, driven by technological innovation, regulatory support, and growing consumer demand. Our recent initiatives have focused on three key areas that I believe will shape the future of financial services in Kenya.</p>
      
      <h2>1. Digital Identity and KYC Innovation</h2>
      <p>One of the biggest barriers to financial inclusion has been the Know Your Customer (KYC) process. Traditional methods often exclude those without formal identification or fixed addresses. We're working with regulators and fintech companies to develop innovative digital identity solutions that can serve the underserved.</p>
      
      <h2>2. Cross-Border Payment Solutions</h2>
      <p>East Africa's economic integration depends heavily on seamless cross-border payments. Our partnership with regional fintech associations is creating a framework for instant, low-cost transfers that will boost trade and remittances across the region.</p>
      
      <h2>3. MSME Digital Transformation</h2>
      <p>Small and medium enterprises are the backbone of Kenya's economy, yet many still operate with cash-based systems. Through our MSME Fintech Accelerator, we're supporting startups that provide digital tools specifically designed for small businesses.</p>
      
      <p>The future of financial inclusion in Kenya is not just about access to basic services, but about creating an ecosystem where every Kenyan can participate fully in the digital economy. This requires collaboration between government, private sector, and civil society.</p>
      
      <p>As we move forward, I'm excited about the potential for fintech to not only improve financial access but also to drive broader economic development and social inclusion across Kenya.</p>
    `,
    date: 'March 15, 2024',
    image: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758528051/DM_6_avxdks.jpg',
    category: 'Fintech',
    author: 'Duncun Motanya',
    readTime: '5 min read',
    tags: ['Fintech', 'Financial Inclusion', 'Kenya', 'Digital Innovation']
  },
  'sustainable-healthcare-ecosystems-rural-kenya': {
    title: 'Building Sustainable Healthcare Ecosystems in Rural Kenya',
    excerpt: 'How DMMC Online Pharmacy and DMRC Kenya are bridging the healthcare gap in underserved communities through technology and community engagement.',
    content: `
      <p>Access to quality healthcare remains one of Kenya's greatest challenges, particularly in rural areas where infrastructure is limited and healthcare workers are scarce. Through DMMC Online Pharmacy and DMRC Kenya, we're proving that technology can bridge these gaps.</p>
      
      <p>Our approach combines three key strategies that I believe are essential for sustainable healthcare delivery in underserved communities.</p>
      
      <h2>1. Technology-Enabled Access</h2>
      <p>DMMC Online Pharmacy brings essential medications directly to patients' doorsteps, eliminating the need for long journeys to distant pharmacies. Our platform includes prescription management, medication reminders, and direct consultation with healthcare providers.</p>
      
      <h2>2. Community-Based Education</h2>
      <p>DMRC Kenya focuses on diabetes education and chronic disease management through community support groups. We've found that peer support and education are often more effective than clinical interventions alone.</p>
      
      <h2>3. Mobile Health Solutions</h2>
      <p>Our mobile clinics bring healthcare services directly to communities, providing screenings, consultations, and follow-up care. This approach has reached over 2,000 people in the past year alone.</p>
      
      <p>The key to sustainability is community ownership. We work closely with local leaders, train community health workers, and ensure that programs can continue even without our direct involvement.</p>
      
      <p>Looking ahead, I'm excited about the potential for telemedicine and AI-powered diagnostics to further expand healthcare access in rural Kenya. The future of healthcare is not just about technology, but about using it wisely to serve communities where they are.</p>
    `,
    date: 'March 10, 2024',
    image: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758528051/DM_2_ahfkyb.jpg',
    category: 'Healthcare',
    author: 'Duncun Motanya',
    readTime: '6 min read',
    tags: ['Healthcare', 'Rural Development', 'Technology', 'Community Health']
  }
}

export async function generateStaticParams() {
  return [
    { slug: 'future-digital-financial-inclusion-kenya' },
    { slug: 'sustainable-healthcare-ecosystems-rural-kenya' }
  ]
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = articles[params.slug as keyof typeof articles]
  
  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${article.title} - Duncun Motanya`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
    },
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles[params.slug as keyof typeof articles]

  if (!article) {
    notFound()
  }

  return (
    <div className="pt-20">
      {/* Back Button */}
      <div className="bg-gray-50 py-4">
        <div className="container-custom">
          <Link 
            href="/news" 
            className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="mb-6">
            <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
              {article.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {article.excerpt}
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-8">
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>{article.readTime}</span>
            </div>
            <button className="flex items-center space-x-2 hover:text-primary-500 transition-colors">
              <Share2 className="w-5 h-5" />
              <span>Share</span>
            </button>
          </div>
          
          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary-100 hover:text-primary-700 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-8">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(articles)
              .filter(([slug]) => slug !== params.slug)
              .slice(0, 2)
              .map(([slug, relatedArticle]) => (
                <Link key={slug} href={`/news/${slug}`} className="group">
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                          {relatedArticle.category}
                        </span>
                        <span className="text-sm text-gray-500">{relatedArticle.date}</span>
                      </div>
                      <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2 group-hover:text-primary-500 transition-colors">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-3">{relatedArticle.excerpt}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Stay Connected
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get the latest insights on fintech innovation, healthcare access, and community impact 
            delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-500 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Get In Touch
            </Link>
            <Link href="/news" className="border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Read More Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

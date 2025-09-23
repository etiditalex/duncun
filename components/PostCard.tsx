'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ArrowRight } from 'lucide-react'

interface PostCardProps {
  title: string
  excerpt: string
  date: string
  image: string
  slug: string
  category?: string
  delay?: number
}

const PostCard = ({ 
  title, 
  excerpt, 
  date, 
  image, 
  slug, 
  category,
  delay = 0 
}: PostCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        {category && (
          <div className="absolute top-4 left-4">
            <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              {category}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Calendar className="w-4 h-4 mr-2" />
          {date}
        </div>
        
        <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <Link
          href={`/news/${slug}`}
          className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium group-hover:translate-x-1 transition-transform duration-200"
        >
          Read More
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </motion.article>
  )
}

export default PostCard

'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ExternalLink, Clock, User } from 'lucide-react'
import { NewsArticle, getNews, formatNewsDate, truncateText } from '@/lib/newsApi'

export default function NewsCarousel() {
  const [news, setNews] = useState<NewsArticle[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true)
        const newsData = await getNews()
        setNews(newsData)
        setError(null)
      } catch (err) {
        console.error('Error fetching news:', err)
        setError('Failed to load news updates')
      } finally {
        setIsLoading(false)
      }
    }

    fetchNews()
  }, [])

  // Auto-rotate news every 5 seconds
  useEffect(() => {
    if (news.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [news.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + news.length) % news.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  if (isLoading) {
    return (
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
            <Clock className="w-4 h-4 text-white animate-spin" />
          </div>
          <h3 className="text-lg font-heading font-semibold text-white">Loading News...</h3>
        </div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-700 rounded animate-pulse w-3/4"></div>
        </div>
      </div>
    )
  }

  if (error || news.length === 0) {
    return (
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
            <Clock className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-lg font-heading font-semibold text-white">News Updates</h3>
        </div>
        <p className="text-gray-300 text-sm">
          {error || 'No news updates available at the moment.'}
        </p>
      </div>
    )
  }

  const currentArticle = news[currentIndex]

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
            <Clock className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-lg font-heading font-semibold text-white">Latest News</h3>
        </div>
        
        {/* Navigation Controls */}
        {news.length > 1 && (
          <div className="flex items-center space-x-2">
            <button
              onClick={goToPrevious}
              className="p-1 text-gray-400 hover:text-white transition-colors"
              aria-label="Previous news"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={goToNext}
              className="p-1 text-gray-400 hover:text-white transition-colors"
              aria-label="Next news"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* News Content */}
      <div className="relative">
        <div className="flex transition-transform duration-300 ease-in-out">
          <div className="w-full flex-shrink-0">
            <div className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                {/* News Image */}
                <div className="md:w-1/3">
                  <div className="relative w-full h-48 md:h-40 rounded-lg overflow-hidden bg-gray-700 flex items-center justify-center">
                    <Image
                      src={currentArticle.urlToImage}
                      alt={currentArticle.title}
                      width={300}
                      height={200}
                      className="object-contain object-center max-w-full max-h-full"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>

                {/* News Content */}
                <div className="md:w-2/3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-2 text-xs text-gray-400 mb-2">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{formatNewsDate(currentArticle.publishedAt)}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{currentArticle.source.name}</span>
                      </span>
                    </div>
                    
                    <h4 className="text-white font-heading font-semibold text-lg mb-2 line-clamp-2">
                      {currentArticle.title}
                    </h4>
                    
                    <p className="text-gray-300 text-sm line-clamp-3">
                      {truncateText(currentArticle.description, 150)}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <Link
                      href={currentArticle.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors"
                    >
                      <span>Read More</span>
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      {news.length > 1 && (
        <div className="flex items-center justify-center space-x-2 p-4 border-t border-gray-700">
          {news.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex
                  ? 'bg-primary-500'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to news item ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

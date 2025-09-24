'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      image: {
        src: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1758565058/DM_1_obizjh_ukg1qb.png",
        alt: "Duncun Motanya - Professional Portrait"
      },
      content: {
        title: "Every Kenyan Ought To Live A Life With",
        subtitle: "Dignity",
        description: "Diabetes Educator, Marketer & Life Student. Leading innovation in healthcare access and financial technology across Kenya.",
        cta1: "Learn More About Me",
        cta2: "Get In Touch"
      }
    },
    {
      image: {
        src: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1758596727/DM-r_ajtluv.png",
        alt: "Duncun Motanya - Healthcare and Fintech Leader"
      },
      content: {
        title: "Transforming Healthcare Through",
        subtitle: "Innovation",
        description: "Leading DMMC Online Pharmacy and DMRC Kenya to provide accessible healthcare solutions and diabetes education across Kenya.",
        cta1: "Explore Healthcare Impact",
        cta2: "Visit DMMC Pharmacy"
      }
    }
  ]

  // Auto-rotate carousel every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    
    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black w-full">
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-16 lg:py-20 w-full">
          {/* Left Side - Text and Branding */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Carousel Content */}
            <div className="relative">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                >
                  {/* Main Message */}
                  <div className="space-y-2">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white leading-tight">
                      {slide.content.title}
                    </h1>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-400 leading-tight">
                      {slide.content.subtitle}
                    </h2>
                  </div>

                  {/* Subtitle */}
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-2xl mt-6">
                    {slide.content.description}
                  </p>

                  {/* Brand Signature */}
                  <div className="flex items-center space-x-3 mt-6">
                    <div className="w-16 h-0.5 bg-primary-400"></div>
                    <span className="text-lg font-bold text-primary-400 tracking-wider">MOTANYA</span>
                  </div>

                  {/* Call to Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link 
                      href={index === 0 ? "/about" : "/healthcare"} 
                      className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center group"
                    >
                      {slide.content.cta1}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link 
                      href={index === 0 ? "/contact" : "https://dmmc.co.ke/"} 
                      className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                      target={index === 1 ? "_blank" : undefined}
                      rel={index === 1 ? "noopener noreferrer" : undefined}
                    >
                      {slide.content.cta2}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image Carousel */}
          <div className="relative flex justify-center lg:justify-end w-full">
            <div className="relative w-64 h-80 lg:w-72 lg:h-96 overflow-hidden rounded-lg max-w-full">
              {/* Carousel Images */}
              <div className="relative w-full h-full">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={slide.image.src}
                      alt={slide.image.alt}
                      fill
                      className="object-contain object-center"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-200"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-primary-400 w-8' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-200"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Globe } from 'lucide-react'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Fintech Leadership', href: '/fintech' },
    { name: 'Healthcare & Community', href: '/healthcare' },
    { name: 'News & Insights', href: '/news' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="https://res.cloudinary.com/dyfnobo9r/image/upload/v1756953563/Duncun-motanya_u3ulci.png"
              alt="Duncun Motanya"
              width={50}
              height={50}
              className="rounded-full"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? isScrolled ? 'text-primary-500' : 'text-white'
                    : isScrolled ? 'text-gray-800 hover:text-primary-500' : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <div className={`hidden sm:flex items-center space-x-2 text-sm transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white/90'
            }`}>
              <Globe className="w-4 h-4" />
              <span className="font-medium">EN</span>
              <span className={isScrolled ? 'text-gray-400' : 'text-white/60'}>|</span>
              <span className={isScrolled ? 'text-gray-400' : 'text-white/60'}>SW</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors ${
                isScrolled 
                  ? 'text-gray-800 hover:text-primary-500 hover:bg-gray-100' 
                  : 'text-white hover:text-white/90 hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block text-base font-medium transition-colors duration-200 ${
                    pathname === item.href
                      ? 'text-primary-500'
                      : 'text-gray-700 hover:text-primary-500'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Language Toggle */}
              <div className="flex items-center space-x-2 text-sm text-gray-600 pt-4 border-t border-gray-200">
                <Globe className="w-4 h-4" />
                <span className="font-medium">EN</span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-400">SW</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header


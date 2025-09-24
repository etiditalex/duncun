'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  // Check if current page has a dark hero section (home page)
  const isHomePage = pathname === '/'
  const hasDarkBackground = isHomePage && !isScrolled

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'About', 
      href: '/about',
      dropdown: [
        { name: 'About Me', href: '/about' },
        { name: 'Autobiography', href: '/autobiography' }
      ]
    },
    { name: 'Fintech Leadership', href: '/fintech' },
    { name: 'Healthcare & Community', href: '/healthcare' },
    { name: 'News & Insights', href: '/news' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || !isHomePage ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
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
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-200 ${
                        pathname === item.href || pathname.startsWith(item.href)
                          ? (isScrolled || !isHomePage) ? 'text-primary-500' : 'text-white'
                          : (isScrolled || !isHomePage) ? 'text-gray-800 hover:text-primary-500' : 'text-white/90 hover:text-white'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-500 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      pathname === item.href
                        ? (isScrolled || !isHomePage) ? 'text-primary-500' : 'text-white'
                        : (isScrolled || !isHomePage) ? 'text-gray-800 hover:text-primary-500' : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <div className={`hidden sm:flex items-center space-x-2 text-sm transition-colors duration-300 ${
              (isScrolled || !isHomePage) ? 'text-gray-800' : 'text-white/90'
            }`}>
              <Globe className="w-4 h-4" />
              <span className="font-medium">EN</span>
              <span className={(isScrolled || !isHomePage) ? 'text-gray-400' : 'text-white/60'}>|</span>
              <span className={(isScrolled || !isHomePage) ? 'text-gray-400' : 'text-white/60'}>SW</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors ${
                (isScrolled || !isHomePage)
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
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg w-full">
            <div className="px-4 py-6 space-y-4 w-full max-w-full">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <div className="text-base font-medium text-gray-700 mb-2">
                        {item.name}
                      </div>
                      <div className="ml-4 space-y-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className={`block text-sm transition-colors duration-200 w-full ${
                              pathname === dropdownItem.href
                                ? 'text-primary-500'
                                : 'text-gray-600 hover:text-primary-500'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block text-base font-medium transition-colors duration-200 w-full ${
                        pathname === item.href
                          ? 'text-primary-500'
                          : 'text-gray-700 hover:text-primary-500'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Language Toggle */}
              <div className="flex items-center space-x-2 text-sm text-gray-600 pt-4 border-t border-gray-200 w-full">
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


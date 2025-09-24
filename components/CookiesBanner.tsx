'use client'

import { useState, useEffect } from 'react'
import { X, Cookie, Settings, Shield, Eye } from 'lucide-react'
import Link from 'next/link'

export default function CookiesBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookiesAccepted = localStorage.getItem('cookies-accepted')
    const cookiesDeclined = localStorage.getItem('cookies-declined')
    
    // Show banner if no choice has been made
    if (!cookiesAccepted && !cookiesDeclined) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookies-accepted', 'true')
    localStorage.removeItem('cookies-declined')
    setIsVisible(false)
    setShowDetails(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookies-declined', 'true')
    localStorage.removeItem('cookies-accepted')
    setIsVisible(false)
    setShowDetails(false)
  }

  const handleCustomize = () => {
    setShowDetails(!showDetails)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-40" />
      
      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl">
        <div className="container-custom py-6">
          <div className="max-w-4xl mx-auto">
            {/* Main Banner */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0 lg:space-x-6">
              {/* Icon and Title */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-gray-900 mb-1">
                    We use cookies
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                    By clicking "Accept All", you consent to our use of cookies.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full lg:w-auto">
                <button
                  onClick={handleCustomize}
                  className="flex items-center justify-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <Settings className="w-4 h-4" />
                  <span>Customize</span>
                </button>
                
                <button
                  onClick={handleDecline}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  Decline
                </button>
                
                <button
                  onClick={handleAccept}
                  className="px-6 py-2 text-sm font-medium text-white bg-primary-500 hover:bg-primary-600 rounded-lg transition-colors"
                >
                  Accept All
                </button>
              </div>
            </div>

            {/* Detailed Settings */}
            {showDetails && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Essential Cookies */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Shield className="w-5 h-5 text-green-500" />
                        <div>
                          <h4 className="font-medium text-gray-900">Essential Cookies</h4>
                          <p className="text-sm text-gray-600">Required for basic website functionality</p>
                        </div>
                      </div>
                      <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end px-1">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">
                      These cookies are necessary for the website to function and cannot be switched off.
                    </p>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Eye className="w-5 h-5 text-blue-500" />
                        <div>
                          <h4 className="font-medium text-gray-900">Analytics Cookies</h4>
                          <p className="text-sm text-gray-600">Help us understand website usage</p>
                        </div>
                      </div>
                      <div className="w-12 h-6 bg-gray-300 rounded-full flex items-center justify-end px-1">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">
                      These cookies help us improve our website by collecting usage information.
                    </p>
                  </div>
                </div>

                {/* Links */}
                <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0 sm:space-x-4">
                  <div className="flex items-center space-x-4 text-sm">
                    <Link 
                      href="/privacy" 
                      className="text-primary-500 hover:text-primary-600 underline"
                    >
                      Privacy Policy
                    </Link>
                    <Link 
                      href="/cookies" 
                      className="text-primary-500 hover:text-primary-600 underline"
                    >
                      Cookie Policy
                    </Link>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={handleDecline}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      Save Preferences
                    </button>
                    <button
                      onClick={handleAccept}
                      className="px-6 py-2 text-sm font-medium text-white bg-primary-500 hover:bg-primary-600 rounded-lg transition-colors"
                    >
                      Accept All
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

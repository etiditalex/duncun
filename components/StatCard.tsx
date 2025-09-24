import { LucideIcon } from 'lucide-react'

interface StatCardProps {
  icon: LucideIcon
  value: string
  label: string
  description?: string
  delay?: number
  className?: string
}

const StatCard = ({ 
  icon: Icon, 
  value, 
  label, 
  description, 
  delay = 0,
  className = '' 
}: StatCardProps) => {
  return (
    <div className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}>
      <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 mx-auto">
        <Icon className="w-8 h-8 text-primary-500" />
      </div>
      
      <div className="text-center">
        <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
        <div className="text-lg font-semibold text-gray-700 mb-2">{label}</div>
        {description && (
          <div className="text-sm text-gray-600">{description}</div>
        )}
      </div>
    </div>
  )
}

export default StatCard


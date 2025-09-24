interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  centered?: boolean
  className?: string
}

const SectionHeader = ({ 
  title, 
  subtitle, 
  description, 
  centered = true, 
  className = '' 
}: SectionHeaderProps) => {
  return (
    <div className={`${centered ? 'text-center' : 'text-left'} ${className}`}>
      {subtitle && (
        <p className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-2">
          {subtitle}
        </p>
      )}
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">
        {title}
      </h2>
      
      {description && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeader


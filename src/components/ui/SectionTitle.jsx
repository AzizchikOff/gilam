import { motion } from 'framer-motion'

/**
 * @param {string} subtitle - Small uppercase label above title
 * @param {string} title - Main heading (can include <br/>)
 * @param {string} description - Optional paragraph below
 * @param {'left'|'center'} align
 */
export default function SectionTitle({
  subtitle,
  title,
  description,
  align = 'center',
  className = '',
}) {
  const alignClass = align === 'left' ? 'text-left items-start' : 'text-center items-center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col gap-3 ${alignClass} ${className}`}
    >
      {subtitle && (
        <span className="font-body text-xs tracking-[0.3em] uppercase text-terracotta-500">
          {subtitle}
        </span>
      )}
      <h2
        className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-charcoal-900 leading-tight"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {align === 'center' && (
        <div className="w-16 h-px bg-terracotta-500 mt-1" />
      )}
      {description && (
        <p className="font-body text-sm md:text-base text-charcoal-800/70 leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  )
}

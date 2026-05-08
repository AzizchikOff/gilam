import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useProducts } from '../../hooks/useProducts'
import SectionTitle from '../ui/SectionTitle'

const iconMap = {
  carpets: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="24" height="24" rx="1" />
      <rect x="8" y="8" width="16" height="16" rx="1" />
      <line x1="4" y1="12" x2="8" y2="12" /><line x1="24" y1="12" x2="28" y2="12" />
      <line x1="4" y1="20" x2="8" y2="20" /><line x1="24" y1="20" x2="28" y2="20" />
      <line x1="12" y1="4" x2="12" y2="8" /><line x1="20" y1="4" x2="20" y2="8" />
      <line x1="12" y1="24" x2="12" y2="28" /><line x1="20" y1="24" x2="20" y2="28" />
    </svg>
  ),
  covers: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 20 L8 12 L24 12 L28 20 Z" />
      <circle cx="9" cy="22" r="2" /><circle cx="23" cy="22" r="2" />
      <path d="M7 20 L25 20" />
    </svg>
  ),
  bags: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M10 14 L10 10 Q10 6 16 6 Q22 6 22 10 L22 14" />
      <rect x="6" y="14" width="20" height="14" rx="2" />
      <line x1="12" y1="20" x2="20" y2="20" />
    </svg>
  ),
  placemats: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="16" cy="16" rx="12" ry="8" />
      <ellipse cx="16" cy="16" rx="8" ry="5" />
      <circle cx="16" cy="16" r="3" />
    </svg>
  ),
  other: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 4 L18 14 L28 14 L20 20 L23 30 L16 24 L9 30 L12 20 L4 14 L14 14 Z" />
    </svg>
  ),
}

export default function CategoryGrid() {
  const { categories, getProductsByCategory } = useProducts()

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-wide section-padding">
        <SectionTitle
          subtitle="Kategoriyalar"
          title="Nima izlayapsiz?"
          description="5 ta asosiy kategoriyada qo'lda to'qilgan mahsulotlarimizni ko'ring"
          className="mb-14"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat, i) => {
            const count = getProductsByCategory(cat.id).length
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  to={`/products?category=${cat.id}`}
                  className="group flex flex-col items-center text-center p-6 border border-beige-200 hover:border-terracotta-500 hover:shadow-lg bg-beige-50 hover:bg-white transition-all duration-400 h-full"
                >
                  <div className="text-charcoal-800/40 group-hover:text-terracotta-500 transition-colors duration-300 mb-4">
                    {iconMap[cat.id]}
                  </div>
                  <h3 className="font-display text-base font-light text-charcoal-900 group-hover:text-terracotta-500 transition-colors mb-1">
                    {cat.name}
                  </h3>
                  <p className="font-body text-xs text-charcoal-800/40 mb-3">{count} mahsulot</p>
                  <div className="mt-auto flex items-center gap-1 font-body text-xs text-terracotta-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    Ko'rish <ArrowRight size={11} />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useProducts } from '../../hooks/useProducts'
import ProductCard from '../ui/ProductCard'
import SectionTitle from '../ui/SectionTitle'

export default function FeaturedProducts() {
  const { getFeaturedProducts } = useProducts()
  const featured = getFeaturedProducts().slice(0, 4)

  return (
    <section className="py-20 md:py-28 bg-beige-50">
      <div className="container-wide section-padding">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionTitle
            subtitle="Tanlangan mahsulotlar"
            title="Eng mashhur<br/>ishlarimiz"
            align="left"
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/products" className="btn-outline flex items-center gap-2 whitespace-nowrap">
              Barchasini ko'rish
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

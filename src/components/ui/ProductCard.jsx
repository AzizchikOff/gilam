import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Eye, MessageCircle } from 'lucide-react'
import ImageModal from './ImageModal'

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23EDD5B8'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Georgia' font-size='16' fill='%23C87A5A'%3EGilamArt%3C/text%3E%3C/svg%3E"

export default function ProductCard({ product, index = 0 }) {
  const [imgError, setImgError] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="group bg-white border border-beige-200 hover:border-terracotta-500/30 hover:shadow-xl transition-all duration-500"
      >
        {/* Image container */}
        <div className="relative overflow-hidden aspect-[4/3] bg-beige-100 cursor-pointer" onClick={() => setModalOpen(true)}>
          <img
            src={imgError ? PLACEHOLDER : product.image}
            alt={product.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/30 transition-all duration-500 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-3">
              <button
                onClick={(e) => { e.stopPropagation(); setModalOpen(true) }}
                className="w-10 h-10 bg-white/90 flex items-center justify-center text-charcoal-900 hover:bg-terracotta-500 hover:text-white transition-colors"
                title="Ko'rish"
              >
                <Eye size={16} />
              </button>
            </div>
          </div>
          {/* Category badge */}
          <span className="absolute top-3 left-3 bg-beige-100/90 backdrop-blur-sm px-2 py-1 font-body text-[10px] tracking-widest uppercase text-terracotta-500">
            {product.categoryName}
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          <Link to={`/products/${product.id}`}>
            <h3 className="font-display text-xl font-light text-charcoal-900 group-hover:text-terracotta-500 transition-colors duration-300 mb-2 line-clamp-1">
              {product.name}
            </h3>
          </Link>
          <p className="font-body text-sm text-charcoal-800/60 line-clamp-2 leading-relaxed mb-4">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-display text-lg text-terracotta-500">
              {product.price}
            </span>
            <Link
              to={`/contact?product=${encodeURIComponent(product.name)}`}
              className="flex items-center gap-1.5 font-body text-xs tracking-widest uppercase text-charcoal-800 hover:text-terracotta-500 transition-colors"
            >
              <MessageCircle size={13} />
              So'rov
            </Link>
          </div>
        </div>
      </motion.article>

      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        src={imgError ? PLACEHOLDER : product.image}
        alt={product.name}
        title={product.name}
        price={product.price}
      />
    </>
  )
}

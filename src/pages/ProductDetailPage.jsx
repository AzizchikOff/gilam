import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, MessageCircle, ZoomIn, Tag, Layers, Ruler } from 'lucide-react'
import { useProducts } from '../hooks/useProducts'
import ProductCard from '../components/ui/ProductCard'
import ImageModal from '../components/ui/ImageModal'
import SectionTitle from '../components/ui/SectionTitle'

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='500' viewBox='0 0 600 500'%3E%3Crect width='600' height='500' fill='%23EDD5B8'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Georgia' font-size='20' fill='%23C87A5A'%3EGilamArt%3C/text%3E%3C/svg%3E"

export default function ProductDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getProductById, getRelatedProducts } = useProducts()
  const [modalOpen, setModalOpen] = useState(false)
  const [imgError, setImgError] = useState(false)

  const product = getProductById(id)

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-display text-5xl font-light text-terracotta-500 mb-4">404</p>
          <p className="font-body text-charcoal-800/60 mb-8">Mahsulot topilmadi</p>
          <Link to="/products" className="btn-primary">Mahsulotlarga qaytish</Link>
        </div>
      </div>
    )
  }

  const related = getRelatedProducts(product, 3)
  const imgSrc = imgError ? PLACEHOLDER : product.image

  return (
    <div className="pt-20 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-beige-100 border-b border-beige-200 py-4">
        <div className="container-wide section-padding">
          <nav className="flex items-center gap-2 font-body text-xs text-charcoal-800/40">
            <Link to="/" className="hover:text-terracotta-500 transition-colors">Bosh sahifa</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-terracotta-500 transition-colors">Mahsulotlar</Link>
            <span>/</span>
            <Link to={`/products?category=${product.category}`} className="hover:text-terracotta-500 transition-colors">
              {product.categoryName}
            </Link>
            <span>/</span>
            <span className="text-charcoal-800/70 truncate max-w-[200px]">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-wide section-padding">

          {/* Back */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 font-body text-xs tracking-widest uppercase text-charcoal-800/40 hover:text-terracotta-500 transition-colors mb-10"
          >
            <ArrowLeft size={14} /> Ortga
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div
                className="relative aspect-[4/3] overflow-hidden bg-beige-100 cursor-zoom-in group"
                onClick={() => setModalOpen(true)}
              >
                <img
                  src={imgSrc}
                  alt={product.name}
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Zoom overlay */}
                <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/20 transition-all duration-400 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity w-12 h-12 bg-white/90 flex items-center justify-center">
                    <ZoomIn size={18} className="text-charcoal-800" />
                  </div>
                </div>
                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-terracotta-500 text-white font-body text-xs tracking-widest uppercase px-3 py-1">
                    {product.badge}
                  </span>
                )}
              </div>
              {/* Decorative border */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-terracotta-500/15 -z-10" />
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col"
            >
              <Link
                to={`/products?category=${product.category}`}
                className="font-body text-xs tracking-[0.3em] uppercase text-terracotta-500 hover:text-terracotta-700 transition-colors mb-3"
              >
                {product.categoryName}
              </Link>

              <h1 className="font-display text-3xl md:text-4xl font-light text-charcoal-900 leading-tight mb-4">
                {product.name}
              </h1>

              <div className="w-12 h-px bg-terracotta-500 mb-6" />

              <p className="font-body text-charcoal-800/70 leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Details */}
              {product.details && (
                <div className="bg-beige-50 border border-beige-200 p-5 mb-8 space-y-2">
                  {product.details.split(' | ').map((detail) => {
                    const [key, val] = detail.split(': ')
                    return val ? (
                      <div key={detail} className="flex items-center gap-3">
                        <Layers size={13} className="text-terracotta-500 shrink-0" />
                        <span className="font-body text-xs text-charcoal-800/50">{key}:</span>
                        <span className="font-body text-xs text-charcoal-800">{val}</span>
                      </div>
                    ) : (
                      <div key={detail} className="flex items-center gap-3">
                        <Ruler size={13} className="text-terracotta-500 shrink-0" />
                        <span className="font-body text-xs text-charcoal-800">{detail}</span>
                      </div>
                    )
                  })}
                </div>
              )}

              {/* Price */}
              <div className="flex items-center gap-3 mb-8">
                <Tag size={16} className="text-terracotta-500" />
                <span className="font-display text-2xl text-terracotta-500">{product.price}</span>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 mt-auto">
                <Link
                  to={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="btn-primary flex items-center gap-2"
                >
                  <MessageCircle size={15} />
                  So'rov yuborish
                </Link>
                <Link to="/products" className="btn-outline">
                  Boshqa mahsulotlar
                </Link>
              </div>

              {/* Note */}
              <p className="font-body text-xs text-charcoal-800/30 mt-6 leading-relaxed">
                * Narxlar o'zgarishi mumkin. So'rov yuborish orqali aniq narxni bilib oling.
                Buyurtmaga individual o'lcham va ranglar ham mavjud.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 bg-beige-50">
          <div className="container-wide section-padding">
            <SectionTitle
              subtitle="O'xshash mahsulotlar"
              title="Sizga yoqishi mumkin"
              className="mb-10"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        src={imgSrc}
        alt={product.name}
        title={product.name}
        price={product.price}
      />
    </div>
  )
}

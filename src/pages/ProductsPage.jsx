import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { useProducts } from '../hooks/useProducts'
import ProductCard from '../components/ui/ProductCard'
import SectionTitle from '../components/ui/SectionTitle'

// Skeleton loader
function SkeletonCard() {
  return (
    <div className="bg-white border border-beige-200 animate-pulse">
      <div className="aspect-[4/3] bg-beige-200" />
      <div className="p-5 space-y-3">
        <div className="h-5 bg-beige-200 rounded w-3/4" />
        <div className="h-3 bg-beige-100 rounded w-full" />
        <div className="h-3 bg-beige-100 rounded w-2/3" />
        <div className="flex justify-between pt-2">
          <div className="h-5 bg-beige-200 rounded w-24" />
          <div className="h-5 bg-beige-100 rounded w-16" />
        </div>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { categories, getProductsByCategory, searchProducts } = useProducts()
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all')
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)

  // Simulate loading
  useEffect(() => {
    setLoading(true)
    const t = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(t)
  }, [activeCategory])

  // Sync category with URL
  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setActiveCategory(cat)
  }, [searchParams])

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId)
    if (catId === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', catId)
    }
    setSearchParams(searchParams, { replace: true })
  }

  const filteredProducts = useMemo(() => {
    let list = getProductsByCategory(activeCategory === 'all' ? null : activeCategory)
    if (searchQuery.trim()) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
    return list
  }, [activeCategory, searchQuery, getProductsByCategory])

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="py-16 bg-beige-100 border-b border-beige-200">
        <div className="container-wide section-padding">
          <SectionTitle
            subtitle="Katalog"
            title="Barcha mahsulotlar"
            description="Qo'lda to'qilgan gilam, chexol, sumka va boshqa mahsulotlar"
          />
        </div>
      </section>

      {/* Filters */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-beige-200 shadow-sm">
        <div className="container-wide section-padding py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleCategoryChange('all')}
                className={`font-body text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-300 ${
                  activeCategory === 'all'
                    ? 'bg-terracotta-500 text-white border-terracotta-500'
                    : 'border-beige-200 text-charcoal-800/60 hover:border-terracotta-500 hover:text-terracotta-500 bg-white'
                }`}
              >
                Barchasi
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`font-body text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-300 ${
                    activeCategory === cat.id
                      ? 'bg-terracotta-500 text-white border-terracotta-500'
                      : 'border-beige-200 text-charcoal-800/60 hover:border-terracotta-500 hover:text-terracotta-500 bg-white'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-56">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-800/30" />
              <input
                type="text"
                placeholder="Qidirish..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-9 py-2 border border-beige-200 focus:border-terracotta-500 outline-none font-body text-sm text-charcoal-800 bg-white placeholder:text-charcoal-800/30 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-800/30 hover:text-charcoal-800"
                >
                  <X size={13} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container-wide section-padding py-12">
        {/* Count */}
        <p className="font-body text-sm text-charcoal-800/40 mb-8">
          {filteredProducts.length} ta mahsulot topildi
        </p>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : filteredProducts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24"
          >
            <p className="font-display text-4xl font-light text-charcoal-800/20 mb-4">Topilmadi</p>
            <p className="font-body text-sm text-charcoal-800/40">
              Boshqa kategoriya yoki kalit so'z bilan urinib ko'ring
            </p>
          </motion.div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredProducts.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  )
}

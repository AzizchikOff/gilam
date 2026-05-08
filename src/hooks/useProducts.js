import { useMemo } from 'react'
import { products, categories } from '../data/products'

/**
 * Custom hook — mahsulotlar bilan ishlash uchun
 * Senior pattern: useMemo bilan optimallashtirilgan
 */
export function useProducts() {
  const getProductsByCategory = useMemo(() => (category) => {
    if (!category || category === 'all') return products
    return products.filter((p) => p.category === category)
  }, [])

  const getFeaturedProducts = useMemo(() => () => {
    return products.filter((p) => p.featured)
  }, [])

  const getProductById = useMemo(() => (id) => {
    return products.find((p) => p.id === Number(id)) || null
  }, [])

  const getRelatedProducts = useMemo(() => (product, limit = 3) => {
    return products
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, limit)
  }, [])

  const searchProducts = useMemo(() => (query) => {
    const q = query.toLowerCase().trim()
    if (!q) return products
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.categoryName.toLowerCase().includes(q) ||
        p.tags?.some((t) => t.toLowerCase().includes(q))
    )
  }, [])

  return {
    products,
    categories,
    getProductsByCategory,
    getFeaturedProducts,
    getProductById,
    getRelatedProducts,
    searchProducts,
    totalCount: products.length,
  }
}

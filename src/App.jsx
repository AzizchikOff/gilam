import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from './components/ErrorBoundary'
import Layout from './components/layout/Layout'

// Lazy-loaded pages — TZ talabiga muvofiq
const HomePage         = lazy(() => import('./pages/HomePage'))
const AboutPage        = lazy(() => import('./pages/AboutPage'))
const ProductsPage     = lazy(() => import('./pages/ProductsPage'))
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'))
const AchievementsPage = lazy(() => import('./pages/AchievementsPage'))
const ContactPage      = lazy(() => import('./pages/ContactPage'))

// Page loading skeleton
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-beige-50">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-12 h-12 border border-beige-200 animate-spin border-t-terracotta-500 rounded-full" />
        </div>
        <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-800/30">
          Yuklanmoqda...
        </p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/"              element={<HomePage />} />
              <Route path="/about"         element={<AboutPage />} />
              <Route path="/products"      element={<ProductsPage />} />
              <Route path="/products/:id"  element={<ProductDetailPage />} />
              <Route path="/achievements"  element={<AchievementsPage />} />
              <Route path="/contact"       element={<ContactPage />} />
              {/* 404 fallback */}
              <Route path="*" element={
                <div className="min-h-screen flex items-center justify-center pt-20">
                  <div className="text-center px-4">
                    <p className="font-display text-8xl font-light text-beige-200 mb-4">404</p>
                    <p className="font-display text-3xl font-light text-charcoal-900 mb-4">
                      Sahifa topilmadi
                    </p>
                    <p className="font-body text-charcoal-800/50 mb-8">
                      Siz izlayotgan sahifa mavjud emas
                    </p>
                    <a href="/" className="btn-primary">Bosh sahifaga qaytish</a>
                  </div>
                </div>
              } />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

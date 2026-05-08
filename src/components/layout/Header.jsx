import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Bosh sahifa' },
  { to: '/about', label: 'Biz haqimizda' },
  { to: '/products', label: 'Mahsulotlar' },
  { to: '/achievements', label: 'Yutuqlar' },
  { to: '/contact', label: 'Aloqa' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setIsOpen(false) }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-beige-100/95 backdrop-blur-md shadow-sm border-b border-beige-200'
          : 'bg-transparent'
      }`}
    >
      <div className="container-wide section-padding">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="group flex flex-col leading-none">
            <span className="font-display text-2xl md:text-3xl font-light text-charcoal-900 tracking-wider group-hover:text-terracotta-500 transition-colors duration-300">
              GilamArt
            </span>
            <span className="font-body text-[10px] tracking-[0.25em] uppercase text-terracotta-500 mt-0.5">
              Qo'lda to'qilgan
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `font-body text-sm tracking-wide transition-all duration-300 relative group ${
                    isActive
                      ? 'text-terracotta-500'
                      : 'text-charcoal-800 hover:text-terracotta-500'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-terracotta-500 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+998901234567"
              className="hidden md:flex items-center gap-2 text-sm font-body text-terracotta-500 hover:text-terracotta-700 transition-colors"
            >
              <Phone size={15} />
              <span>+998 90 123 45 67</span>
            </a>
            <Link to="/contact" className="hidden md:block btn-primary text-xs py-2 px-5">
              So'rov yuborish
            </Link>

            <button
              className="md:hidden p-2 text-charcoal-800"
              onClick={() => setIsOpen((v) => !v)}
              aria-label="Menyu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-beige-100/98 backdrop-blur-md border-t border-beige-200"
          >
            <nav className="section-padding py-6 flex flex-col gap-4">
              {navLinks.map(({ to, label }, i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      `block font-body text-base py-2 border-b border-beige-200 transition-colors ${
                        isActive ? 'text-terracotta-500' : 'text-charcoal-800'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </motion.div>
              ))}
              <a href="tel:+998901234567" className="flex items-center gap-2 text-sm font-body text-terracotta-500 pt-2">
                <Phone size={14} />
                +998 90 123 45 67
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

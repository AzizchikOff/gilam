import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ImageModal({ isOpen, onClose, src, alt, title, price }) {
  // Close on Escape
  useEffect(() => {
    const handler = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Prevent body scroll
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-charcoal-900/85 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-2xl w-full bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-10 w-9 h-9 bg-charcoal-900/70 text-white flex items-center justify-center hover:bg-terracotta-500 transition-colors"
            >
              <X size={16} />
            </button>

            {/* Image */}
            <div className="aspect-[4/3] overflow-hidden bg-beige-100">
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Footer */}
            <div className="p-5 flex items-center justify-between border-t border-beige-200">
              <div>
                <p className="font-display text-xl font-light text-charcoal-900">{title}</p>
                {price && (
                  <p className="font-body text-sm text-terracotta-500 mt-1">{price}</p>
                )}
              </div>
              <Link
                to={`/contact?product=${encodeURIComponent(title)}`}
                onClick={onClose}
                className="btn-outline text-xs py-2 px-4 flex items-center gap-2"
              >
                <MessageCircle size={13} />
                So'rov yuborish
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

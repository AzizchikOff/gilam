import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-beige-100">

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large circle */}
        <div className="absolute -right-32 top-20 w-[600px] h-[600px] rounded-full border border-terracotta-500/10" />
        <div className="absolute -right-20 top-32 w-[500px] h-[500px] rounded-full border border-terracotta-500/08" />
        {/* Dots pattern */}
        <div className="absolute left-0 bottom-0 w-64 h-64 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, #C87A5A 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
        {/* Diagonal line */}
        <svg className="absolute top-0 right-0 w-full h-full" preserveAspectRatio="none">
          <line x1="60%" y1="0" x2="100%" y2="100%" stroke="#C87A5A" strokeWidth="1" strokeOpacity="0.06" />
          <line x1="65%" y1="0" x2="100%" y2="80%" stroke="#C87A5A" strokeWidth="1" strokeOpacity="0.04" />
        </svg>
      </div>

      <div className="container-wide section-padding w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <div className="relative z-10">
            {/* Badge */}
            <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 mb-8">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="fill-terracotta-500 text-terracotta-500" />
                ))}
              </div>
              <span className="font-body text-xs tracking-[0.2em] uppercase text-terracotta-500">
                An'anaviy hunarmandchilik
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              {...fadeUp(0.2)}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-charcoal-900 leading-[1.1] mb-6"
            >
              Qo'l ishi —<br />
              <em className="not-italic text-terracotta-500">tirik san'at</em>
            </motion.h1>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="w-20 h-px bg-terracotta-500 origin-left mb-6"
            />

            {/* Description */}
            <motion.p {...fadeUp(0.4)} className="font-body text-base md:text-lg text-charcoal-800/65 leading-relaxed max-w-md mb-10">
              Gilamlar, chexollar, sumkalar va bezaklar — 
              har bir buyum o'z hikoyasini so'zlaydigan 
              qo'l ishi asarlari.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4">
              <Link to="/products" className="btn-primary group">
                Mahsulotlarni ko'rish
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="btn-outline">
                So'rov yuborish
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div {...fadeUp(0.6)} className="flex gap-10 mt-14">
              {[
                { num: '500+', label: "Mijozlar" },
                { num: '12+', label: "Yil tajriba" },
                { num: '5', label: "Kategoriya" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p className="font-display text-3xl font-light text-terracotta-500">{num}</p>
                  <p className="font-body text-xs text-charcoal-800/50 tracking-wide mt-1">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            {/* Main image frame */}
            <div className="relative">
              <div className="aspect-[3/4] bg-beige-200 overflow-hidden">
                <img
                  src="/images/carpets/buxoro-klassik.jpg"
                  alt="Qo'lda to'qilgan gilam"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentNode.style.background = 'linear-gradient(135deg, #EDD5B8 0%, #C87A5A 100%)'
                  }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/20 to-transparent" />
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="absolute -bottom-8 -left-8 bg-white shadow-xl p-5 w-48"
              >
                <p className="font-body text-xs text-terracotta-500 tracking-widest uppercase mb-1">Bestseller</p>
                <p className="font-display text-lg font-light text-charcoal-900">Buxoro klassik</p>
                <p className="font-body text-xs text-charcoal-800/50 mt-1">3 500 000 so'm</p>
              </motion.div>

              {/* Terracotta accent block */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-terracotta-500/20 -z-10" />
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-terracotta-500/20 -z-10 translate-x-4 translate-y-4" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-800/30">Pastga aylantiring</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-terracotta-500/50 to-transparent"
        />
      </motion.div>
    </section>
  )
}

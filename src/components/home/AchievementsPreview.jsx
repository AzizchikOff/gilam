import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Award, Users, Clock, Heart, ArrowRight } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'

const stats = [
  { icon: Users, value: '500+', label: 'Mamnun mijozlar', color: 'text-terracotta-500' },
  { icon: Clock, value: '12+', label: 'Yil tajriba', color: 'text-terracotta-600' },
  { icon: Award, value: '8', label: "Tan olingan yutuq", color: 'text-terracotta-500' },
  { icon: Heart, value: '1000+', label: "Yaratilgan mahsulot", color: 'text-terracotta-600' },
]

export default function AchievementsPreview() {
  return (
    <section className="py-20 md:py-28 bg-charcoal-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, #C87A5A 0%, transparent 50%), radial-gradient(circle at 80% 50%, #C87A5A 0%, transparent 50%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #C87A5A 0px, #C87A5A 1px, transparent 1px, transparent 40px)',
          }}
        />
      </div>

      <div className="container-wide section-padding relative z-10">
        <SectionTitle
          subtitle="Bizning natijalar"
          title="Raqamlar<br/>gapiradi"
          description="12 yillik mehnatimizdagi natijalar"
          className="mb-16 [&_h2]:text-beige-100 [&_span]:text-terracotta-400 [&_p]:text-beige-100/50"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-8 border border-beige-100/10 hover:border-terracotta-500/40 transition-all duration-400 group"
            >
              <Icon size={24} className="text-terracotta-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="font-display text-4xl md:text-5xl font-light text-beige-100 mb-2">{value}</p>
              <p className="font-body text-xs text-beige-100/40 tracking-wide uppercase">{label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link to="/achievements" className="inline-flex items-center gap-2 btn-outline border-beige-100/20 text-beige-100 hover:bg-terracotta-500 hover:border-terracotta-500">
            Batafsil ko'rish
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

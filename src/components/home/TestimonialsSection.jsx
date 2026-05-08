import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'

const testimonials = [
  {
    name: "Malika Yusupova",
    location: "Toshkent",
    text: "Gilam juda chiroyli chiqdi. Buyurtma berdim va 10 kunda tayyor bo'ldi. Sifati a'lo darajada, ranglar fotodagidek. Albatta yana buyurtma beraman!",
    rating: 5,
    product: "Buxoro klassik gilami",
  },
  {
    name: "Akbar Toshmatov",
    location: "Samarqand",
    text: "Mashina chexollarini buyurtma qildim. Material juda mustahkam va chiroyli. Salonimni butunlay o'zgartirdi. Barcha do'stlarimga tavsiya qilaman.",
    rating: 5,
    product: "Premium avto chexol",
  },
  {
    name: "Dilnoza Rahimova",
    location: "Namangan",
    text: "Sumka va podtarelniklar to'plamini oldim. Hamma mehmon ko'rganda hayrat qildi. Qo'l ishi sifatida noyob hediya!",
    rating: 5,
    product: "Sumka + podtarelnik to'plami",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-wide section-padding">
        <SectionTitle
          subtitle="Mijozlar fikri"
          title="Ular nima deydi?"
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ name, location, text, rating, product }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-8 border border-beige-200 hover:border-terracotta-500/30 hover:shadow-lg transition-all duration-400 group"
            >
              <Quote
                size={40}
                className="absolute top-6 right-6 text-beige-200 group-hover:text-terracotta-500/20 transition-colors"
              />
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(rating)].map((_, j) => (
                  <Star key={j} size={13} className="fill-terracotta-500 text-terracotta-500" />
                ))}
              </div>
              <p className="font-body text-sm text-charcoal-800/70 leading-relaxed mb-6 relative z-10">
                "{text}"
              </p>
              <div className="border-t border-beige-200 pt-4">
                <p className="font-display text-base font-light text-charcoal-900">{name}</p>
                <p className="font-body text-xs text-charcoal-800/40">{location} · {product}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { CheckCircle2, Scissors, Heart, Leaf } from 'lucide-react'
import SectionTitle from '../components/ui/SectionTitle'

const values = [
  {
    icon: Scissors,
    title: "Qo'l ishi sifati",
    description: "Har bir mahsulot usta qo'lida, zamonaviy asbobsiz, faqat an'anaviy dastgoh yordamida yaratiladi.",
  },
  {
    icon: Heart,
    title: "Muhabbat bilan",
    description: "To'qish jarayoni soatlab davom etadi. Har bir ip, har bir tugun — ustaning diqqati va mehr-muhabbati.",
  },
  {
    icon: Leaf,
    title: "Tabiiy materiallar",
    description: "Faqat tabiiy jun, ipak va paxta iplar ishlatiladi. Kimyoviy bo'yoqlar yo'q — faqat tabiiy ranglar.",
  },
  {
    icon: CheckCircle2,
    title: "Sifat kafolati",
    description: "Har bir buyum sifat nazoratidan o'tadi. Yirti, rang o'chishi yoki nuqson bo'lsa, bepul almashtiramiz.",
  },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-beige-100 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-terracotta-500/5 -skew-x-6 translate-x-16" />
        <div className="container-wide section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="font-body text-xs tracking-[0.3em] uppercase text-terracotta-500 mb-4 block">
              Biz haqimizda
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-light text-charcoal-900 leading-tight mb-6">
              Ikki avlod, <br/>
              <em className="not-italic text-terracotta-500">bitta san'at</em>
            </h1>
            <p className="font-body text-lg text-charcoal-800/65 leading-relaxed">
              Oilada 12 yildan ziyod davom etib kelayotgan bu hunarmandchilik — 
              bugungi kunda zamonaviy dizayn talablari bilan uyg'unlashtirilgan 
              tirik meros.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container-wide section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <div className="aspect-square bg-beige-200 overflow-hidden">
                  <img
                    src="/images/about/ustad.jpg"
                    alt="Usta to'qish jarayonida"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentNode.style.background = 'linear-gradient(135deg, #EDD5B8, #C87A5A)'
                      e.target.parentNode.innerHTML = `
                        <div style="display:flex;align-items:center;justify-content:center;height:100%;font-family:Georgia,serif;font-size:24px;color:white;font-style:italic;">
                          Usta jarayonida
                        </div>
                      `
                    }}
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-terracotta-500 text-white p-6 w-36">
                  <p className="font-display text-4xl font-light">12+</p>
                  <p className="font-body text-xs mt-1 opacity-80">Yil tajriba</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <SectionTitle
                subtitle="Bizning hikoya"
                title="Qanday boshlandi?"
                align="left"
              />
              <p className="font-body text-charcoal-800/70 leading-relaxed">
                Biz — kichik oilaviy ustaxona. 2012-yildan boshlab ona-bola birgalikda 
                qo'lda gilam to'qish bilan shug'ullanib kelmoqdamiz. Avvaliga faqat 
                qarindosh-urug'lar uchun, keyin tanish-bilishlar, so'ngra butun 
                O'zbekistonga.
              </p>
              <p className="font-body text-charcoal-800/70 leading-relaxed">
                Har bir buyurtma — bu bizga bo'lgan ishonch. Shu ishonchni saqlab qolish 
                uchun har bir ip, har bir rang puxta tanlab olinadi. Sifatda hech qachon 
                murosaga bormadik va bomaymiz.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  "100% tabiiy materiallar",
                  "Buyurtmaga ishlov",
                  "Respublika bo'ylab yetkazib berish",
                  "Sifat kafolati",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-terracotta-500 rounded-full shrink-0" />
                    <span className="font-body text-sm text-charcoal-800/70">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-beige-50">
        <div className="container-wide section-padding">
          <SectionTitle
            subtitle="Qadriyatlarimiz"
            title="Nimaga ishonamiz?"
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 bg-white border border-beige-200 hover:border-terracotta-500/40 hover:shadow-md transition-all duration-400 group"
              >
                <Icon size={28} className="text-terracotta-500 mb-5 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-xl font-light text-charcoal-900 mb-3">{title}</h3>
                <p className="font-body text-sm text-charcoal-800/60 leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container-wide section-padding">
          <SectionTitle
            subtitle="Jarayon"
            title="Qanday yasaymiz?"
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-beige-200" />
            {[
              { step: '01', title: "Buyurtma qabul", desc: "Siz bilan gaplashib, o'lcham, rang va naqsh aniqlanadi." },
              { step: '02', title: "Material tanlash", desc: "Tabiiy jun yoki ipak iplar sifatini tekshirib olinadi." },
              { step: '03', title: "To'qish jarayoni", desc: "Usta qo'lida, dastgohda, bir ip bilan boshlanadi." },
              { step: '04', title: "Nazorat va yetkazish", desc: "Sifat tekshiruvi o'tib, sizga yetkaziladi." },
            ].map(({ step, title, desc }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative text-center px-6 pt-0 pb-6"
              >
                <div className="w-20 h-20 bg-terracotta-500 text-white font-display text-3xl font-light flex items-center justify-center mx-auto mb-6 relative z-10">
                  {step}
                </div>
                <h3 className="font-display text-xl font-light text-charcoal-900 mb-2">{title}</h3>
                <p className="font-body text-sm text-charcoal-800/60 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

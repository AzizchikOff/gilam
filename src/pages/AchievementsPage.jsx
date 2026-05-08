import { motion } from 'framer-motion'
import { Award, Trophy, Star, TrendingUp, Medal, Globe } from 'lucide-react'
import SectionTitle from '../components/ui/SectionTitle'

const achievements = [
  {
    year: '2024',
    icon: Trophy,
    title: "O'zbekiston hunarmandchilik festivali — 1-o'rin",
    description: "Toshkentda o'tkazilgan milliy hunarmandchilik festivalida gilam to'qish ustasi sifatida birinchi o'ringa loyiq topildik.",
    color: 'bg-amber-500',
  },
  {
    year: '2023',
    icon: Award,
    title: "Busan xalqaro gilam ko'rgazmasi — Diplomchik",
    description: "Janubiy Koreyada o'tkazilgan xalqaro ko'rgazmada O'zbekiston an'anaviy naqshlari uchun diplomat diplomiga sazovor bo'ldik.",
    color: 'bg-terracotta-500',
  },
  {
    year: '2023',
    icon: Globe,
    title: "Eksport litsenziyasi — 5 ta mamlakat",
    description: "Rossiya, Qozog'iston, Turkiya, BAA va Germaniyaga mahsulotlar eksport qilish uchun litsenziya oldik.",
    color: 'bg-terracotta-600',
  },
  {
    year: '2022',
    icon: Star,
    title: "\"Eng yaxshi oilaviy biznes\" mukofoti",
    description: "Toshkent viloyati tomonidan \"Eng yaxshi oilaviy hunarmandchilik biznesi\" sifatida tan olindik.",
    color: 'bg-terracotta-500',
  },
  {
    year: '2021',
    icon: Medal,
    title: "Milliy hunar olimpiadasi — 2-o'rin",
    description: "O'zbekiston bo'ylab o'tkazilgan hunarmandchilik olimpiadasida gilam to'qish bo'yicha ikkinchi o'rinni egalladi.",
    color: 'bg-amber-600',
  },
  {
    year: '2020',
    icon: TrendingUp,
    title: "500 ta mamnun mijoz chegarasini oshdi",
    description: "2020-yilda 500-mijozimizga xizmat ko'rsatdik va bu biz uchun muhim milestone bo'ldi.",
    color: 'bg-terracotta-400',
  },
]

const milestones = [
  { year: '2012', event: "GilamArt tashkil topdi. Birinchi buyurtma — qo'shning uchun kichik gilam." },
  { year: '2014', event: "Birinchi bor bozorda sotuvga chiqdik. 10 ta mahsulot 3 kunda sotildi." },
  { year: '2016', event: "Onlayn ijtimoiy tarmoqlarda faoliyat boshladi. Instagram 1000 ta obunachiга yetdi." },
  { year: '2018', event: "Birinchi xalqaro buyurtma — Germaniyadagi o'zbek diasporasi uchun." },
  { year: '2020', event: "500 ta mamnun mijoz. Kengaytirilgan ustaxona, 2 ta yangi usta." },
  { year: '2022', event: "5 ta mamlakatga eksport litsenziyasi. Xalqaro brendga aylana boshladik." },
  { year: '2024', event: "Milliy festival birinchi o'rni. 12 yillik meros — 8 ta mukofot." },
]

export default function AchievementsPage() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-charcoal-900 text-beige-100 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #C87A5A 0px, #C87A5A 1px, transparent 1px, transparent 30px)',
          }}
        />
        <div className="container-wide section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="font-body text-xs tracking-[0.3em] uppercase text-terracotta-400 mb-4 block">
              Yutuqlarimiz
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-light leading-tight mb-6">
              12 yillik <em className="not-italic text-terracotta-500">meros</em>
            </h1>
            <p className="font-body text-beige-100/60 leading-relaxed">
              Har bir yutuq — mijozlar ishonchi, usta mehnati va 
              sifatga berilgan so'zsiz va'daning natijasi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-terracotta-500 text-white py-8">
        <div className="container-wide section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: '8+', label: 'Mukofot' },
              { num: '5', label: 'Mamlakat' },
              { num: '500+', label: 'Mijoz' },
              { num: '12', label: "Yil" },
            ].map(({ num, label }) => (
              <div key={label}>
                <p className="font-display text-4xl font-light">{num}</p>
                <p className="font-body text-xs uppercase tracking-widest opacity-80 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements list */}
      <section className="py-20 bg-white">
        <div className="container-wide section-padding">
          <SectionTitle
            subtitle="Mukofotlar va e'tiroflar"
            title="Bizning yutuqlar"
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map(({ year, icon: Icon, title, description, color }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 border border-beige-200 hover:border-terracotta-500/30 hover:shadow-xl transition-all duration-400 relative overflow-hidden"
              >
                {/* Background year */}
                <span className="absolute top-4 right-4 font-display text-6xl font-light text-beige-200/60 group-hover:text-beige-200 transition-colors select-none">
                  {year}
                </span>
                <div className={`w-12 h-12 ${color} flex items-center justify-center mb-5 relative z-10`}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-display text-lg font-light text-charcoal-900 leading-snug mb-3 relative z-10">
                  {title}
                </h3>
                <p className="font-body text-sm text-charcoal-800/60 leading-relaxed relative z-10">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-beige-50">
        <div className="container-wide section-padding">
          <SectionTitle
            subtitle="Tarix"
            title="Bizning yo'l"
            className="mb-14"
          />
          <div className="relative">
            {/* Center line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-beige-200 -translate-x-1/2" />

            <div className="space-y-8">
              {milestones.map(({ year, event }, i) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-0 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`md:w-[calc(50%-24px)] ${i % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10'}`}>
                    <div className="bg-white border border-beige-200 hover:border-terracotta-500/30 hover:shadow-md transition-all p-6">
                      <p className="font-body text-xs tracking-widest uppercase text-terracotta-500 mb-2">{year}</p>
                      <p className="font-body text-sm text-charcoal-800/70 leading-relaxed">{event}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 bg-terracotta-500 rounded-full border-2 border-white shadow" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, Clock, Instagram, MessageSquare } from 'lucide-react'
import SectionTitle from '../components/ui/SectionTitle'

function FormField({ label, error, children }) {
  return (
    <div>
      <label className="block font-body text-xs tracking-widest uppercase text-charcoal-800/50 mb-2">
        {label}
      </label>
      {children}
      {error && <p className="font-body text-xs text-red-500 mt-1">{error}</p>}
    </div>
  )
}

export default function ContactPage() {
  const [searchParams] = useSearchParams()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  // Pre-fill product from URL
  useEffect(() => {
    const product = searchParams.get('product')
    if (product) setFormData((prev) => ({ ...prev, product }))
  }, [searchParams])

  const inputClass = (field) =>
    `w-full px-4 py-3 border font-body text-sm text-charcoal-800 bg-white outline-none transition-colors ${
      errors[field]
        ? 'border-red-400 focus:border-red-500'
        : 'border-beige-200 focus:border-terracotta-500'
    } placeholder:text-charcoal-800/25`

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = "Ism kiritilishi shart"
    if (!formData.phone.trim()) errs.phone = "Telefon raqam kiritilishi shart"
    else if (!/^[\d\s+\-()]{7,}$/.test(formData.phone)) errs.phone = "Noto'g'ri telefon raqam"
    if (!formData.message.trim()) errs.message = "Xabar kiritilishi shart"
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setLoading(true)
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-beige-100 border-b border-beige-200">
        <div className="container-wide section-padding">
          <SectionTitle
            subtitle="Bog'lanish"
            title="Biz bilan aloqa"
            description="Buyurtma, narx so'rash yoki savol uchun bizga murojaat qiling"
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-wide section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact info */}
            <div className="lg:col-span-1 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-2xl font-light text-charcoal-900 mb-6">
                  Biz bilan bog'laning
                </h2>

                <div className="space-y-5">
                  {[
                    {
                      icon: Phone,
                      label: 'Telefon',
                      value: '+998 90 123 45 67',
                      href: 'tel:+998901234567',
                    },
                    {
                      icon: Mail,
                      label: 'Email',
                      value: 'info@gilamart.uz',
                      href: 'mailto:info@gilamart.uz',
                    },
                    {
                      icon: MapPin,
                      label: 'Manzil',
                      value: "Toshkent shahri, O'zbekiston",
                      href: null,
                    },
                    {
                      icon: Clock,
                      label: 'Ish vaqti',
                      value: "Dush–Shan: 9:00–18:00",
                      href: null,
                    },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 border border-beige-200 flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-terracotta-500" />
                      </div>
                      <div>
                        <p className="font-body text-xs uppercase tracking-widest text-charcoal-800/40 mb-0.5">{label}</p>
                        {href ? (
                          <a href={href} className="font-body text-sm text-charcoal-800 hover:text-terracotta-500 transition-colors">
                            {value}
                          </a>
                        ) : (
                          <p className="font-body text-sm text-charcoal-800">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social */}
                <div className="pt-8 border-t border-beige-200 mt-8">
                  <p className="font-body text-xs uppercase tracking-widest text-charcoal-800/40 mb-4">Ijtimoiy tarmoqlar</p>
                  <div className="flex gap-3">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 border border-beige-200 px-4 py-2 hover:border-terracotta-500 hover:text-terracotta-500 transition-all"
                    >
                      <Instagram size={14} />
                      <span className="font-body text-xs">Instagram</span>
                    </a>
                    <a
                      href="https://t.me/gilamart"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 border border-beige-200 px-4 py-2 hover:border-terracotta-500 hover:text-terracotta-500 transition-all"
                    >
                      <MessageSquare size={14} />
                      <span className="font-body text-xs">Telegram</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 border border-beige-200 bg-beige-50"
                >
                  <div className="w-16 h-16 bg-terracotta-500 flex items-center justify-center mx-auto mb-6">
                    <Send size={24} className="text-white" />
                  </div>
                  <h3 className="font-display text-3xl font-light text-charcoal-900 mb-3">
                    Xabaringiz yuborildi!
                  </h3>
                  <p className="font-body text-charcoal-800/60 mb-8">
                    24 soat ichida sizga javob beramiz. Rahmat!
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', product: '', message: '' }) }}
                    className="btn-outline"
                  >
                    Yangi so'rov
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 border border-beige-200 p-8 bg-beige-50">
                  <h3 className="font-display text-2xl font-light text-charcoal-900 mb-2">
                    So'rov yuborish
                  </h3>
                  <div className="w-10 h-px bg-terracotta-500 mb-6" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField label="Ismingiz *" error={errors.name}>
                      <input
                        type="text"
                        placeholder="Ism Familya"
                        value={formData.name}
                        onChange={handleChange('name')}
                        className={inputClass('name')}
                      />
                    </FormField>
                    <FormField label="Telefon *" error={errors.phone}>
                      <input
                        type="tel"
                        placeholder="+998 90 000 00 00"
                        value={formData.phone}
                        onChange={handleChange('phone')}
                        className={inputClass('phone')}
                      />
                    </FormField>
                  </div>

                  <FormField label="Mahsulot (ixtiyoriy)" error={errors.product}>
                    <input
                      type="text"
                      placeholder="Qaysi mahsulot haqida so'rayapsiz?"
                      value={formData.product}
                      onChange={handleChange('product')}
                      className={inputClass('product')}
                    />
                  </FormField>

                  <FormField label="Xabaringiz *" error={errors.message}>
                    <textarea
                      rows={5}
                      placeholder="O'lcham, rang, buyurtma miqdori yoki boshqa savollaringizni yozing..."
                      value={formData.message}
                      onChange={handleChange('message')}
                      className={`${inputClass('message')} resize-none`}
                    />
                  </FormField>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Yuborilmoqda...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Xabar yuborish
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram, Send } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal-900 text-beige-100">
      {/* Top decorative border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-terracotta-500 to-transparent" />

      <div className="container-wide section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="font-display text-4xl font-light tracking-wider mb-2">GilamArt</p>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-terracotta-500 mb-4">
              Qo'lda to'qilgan go'zallik
            </p>
            <p className="font-body text-sm text-beige-200/70 leading-relaxed max-w-xs">
              Har bir mahsulot — ustaning qo'li, qalbi va mehnati. 
              Avloddan avlodga o'tib kelayotgan an'anaviy hunarmandchilik.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-beige-200/20 flex items-center justify-center text-beige-200/60 hover:border-terracotta-500 hover:text-terracotta-500 transition-all duration-300"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://t.me/gilamart"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-beige-200/20 flex items-center justify-center text-beige-200/60 hover:border-terracotta-500 hover:text-terracotta-500 transition-all duration-300"
              >
                <Send size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-terracotta-500 mb-5">
              Sahifalar
            </p>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Bosh sahifa' },
                { to: '/about', label: 'Biz haqimizda' },
                { to: '/products', label: 'Mahsulotlar' },
                { to: '/achievements', label: 'Yutuqlar' },
                { to: '/contact', label: 'Aloqa' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="font-body text-sm text-beige-200/60 hover:text-beige-100 transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-terracotta-500 mb-5">
              Aloqa
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={15} className="mt-0.5 text-terracotta-500 shrink-0" />
                <a href="tel:+998901234567" className="font-body text-sm text-beige-200/60 hover:text-beige-100 transition-colors">
                  +998 90 123 45 67
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="mt-0.5 text-terracotta-500 shrink-0" />
                <a href="mailto:info@gilamart.uz" className="font-body text-sm text-beige-200/60 hover:text-beige-100 transition-colors">
                  info@gilamart.uz
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 text-terracotta-500 shrink-0" />
                <span className="font-body text-sm text-beige-200/60">
                  Toshkent, O'zbekiston
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-beige-100/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-beige-200/30">
            © {year} GilamArt. Barcha huquqlar himoyalangan.
          </p>
          <p className="font-body text-xs text-beige-200/30">
            An'anaviy hunarmandchilik · Zamonaviy dizayn
          </p>
        </div>
      </div>
    </footer>
  )
}

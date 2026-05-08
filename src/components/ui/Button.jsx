import { Link } from 'react-router-dom'

/**
 * @param {'primary'|'outline'|'ghost'} variant
 * @param {string} to - If provided, renders as Link
 * @param {string} href - If provided, renders as anchor
 */
export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center gap-2 font-body text-xs tracking-[0.2em] uppercase transition-all duration-300 active:scale-95'

  const variants = {
    primary: 'px-7 py-3 bg-terracotta-500 text-white hover:bg-terracotta-700 hover:shadow-lg',
    outline: 'px-7 py-3 border border-terracotta-500 text-terracotta-500 hover:bg-terracotta-500 hover:text-white',
    ghost:   'px-4 py-2 text-charcoal-800 hover:text-terracotta-500',
  }

  const cls = `${base} ${variants[variant]} ${className}`

  if (to) return <Link to={to} className={cls} {...props}>{children}</Link>
  if (href) return <a href={href} className={cls} {...props}>{children}</a>
  return <button className={cls} {...props}>{children}</button>
}

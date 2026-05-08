import Hero from '../components/home/Hero'
import CategoryGrid from '../components/home/CategoryGrid'
import FeaturedProducts from '../components/home/FeaturedProducts'
import AchievementsPreview from '../components/home/AchievementsPreview'
import TestimonialsSection from '../components/home/TestimonialsSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <AchievementsPreview />
      <TestimonialsSection />
    </>
  )
}

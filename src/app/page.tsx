import { Hero } from './components/sections/hero'
import { Features } from './components/sections/features'
import { ApiDocs } from './components/sections/api-docs'
import { Community } from './components/sections/community'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <ApiDocs />
      <Community />
    </div>
  )
}

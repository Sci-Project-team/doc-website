import { Metadata } from 'next'
import { Features } from '../components/sections/features'
import { ApiDocs } from '../components/sections/api-docs'

export const metadata: Metadata = {
  title: 'Features - ESPing SMS Gateway',
  description: 'Discover all the powerful features of ESPing SMS gateway for ESP32. REST API, real-time messaging, security, and IoT integration.',
}

export default function FeaturesPage() {
  return (
    <div className="flex flex-col">
      <Features />
      <ApiDocs />
    </div>
  )
}

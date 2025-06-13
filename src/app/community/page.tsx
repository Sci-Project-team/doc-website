import { Metadata } from 'next'
import { Community } from '../components/sections/community'

export const metadata: Metadata = {
  title: 'Community - ESPing SMS Gateway',
  description: 'Join the ESPing community. Connect with developers, contribute to the project, and get support for your SMS gateway projects.',
}

export default function CommunityPage() {
  return (
    <div className="flex flex-col">
      <Community />
    </div>
  )
}

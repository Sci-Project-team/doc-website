'use client'

import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import image1 from '../../../../public/image1.jpg'
import image2 from '../../../../public/image2.jpg'
import image3 from '../../../../public/image3.jpg'
import image4 from '../../../../public/image4.jpg'
import image5 from '../../../../public/image5.jpg'
import image6 from '../../../../public/image6.jpg'
import Image from 'next/image'
import {
  Github,
  MessageSquare,
  Users,
  Heart,
  Star,
  GitFork,
  ExternalLink,
  Calendar,
  MapPin,
  Trophy,
  Code,
} from 'lucide-react'
import Link from 'next/link'

const communityResources = [
  {
    title: 'GitHub Repository',
    description: 'Contribute to the codebase, report issues, and collaborate with other developers',
    icon: Github,
    href: 'https://github.com/Sci-Project-team',
    stats: '2.3k stars',
  },
  {
    title: 'Discord Community',
    description: 'Join our Discord server for real-time discussions and community support',
    icon: MessageSquare,
    href: 'https://discord.gg/esping',
    stats: '1.2k members',
  },
  {
    title: 'Forum',
    description: 'Ask questions, share projects, and get help from the community',
    icon: Users,
    href: '/forum',
    stats: '500+ topics',
  },
]

const contributors = [
  {
    name: 'Djabri Maroua',
    role: 'Project Manager',
  },
  {
    name: 'Dinari Yasmine',
    role: 'Frontend Developer',
  },
  {
    name: 'Bouyahiyaoui Meriem',
    role: 'Backend Developer',
  },
  {
    name: 'Rezzoug Aicha',
    role: 'Hardware Specialist',
  },
  {
    name: 'Messikh Wissal',
    role: 'Documentation Lead',
  },
  {
    name: 'Amirat Thanina',
    role: 'Project Manager',
  },

]

const contributorImages = [image1, image2, image3, image4, image5, image6]

const contributionWays = [
  {
    title: 'Code Contributions',
    description: 'Help improve the firmware, web interface, or documentation',
    icon: Code,
    difficulty: 'Advanced',
  },
  {
    title: 'Documentation',
    description: 'Write tutorials, improve existing docs, or translate content',
    icon: MessageSquare,
    difficulty: 'Beginner',
  },
  {
    title: 'Testing & Feedback',
    description: 'Test new features, report bugs, and provide user feedback',
    icon: Trophy,
    difficulty: 'Beginner',
  },
  {
    title: 'Community Support',
    description: 'Help other users in forums, Discord, or GitHub discussions',
    icon: Heart,
    difficulty: 'Intermediate',
  },
]

const upcomingEvents = [
  {
    title: 'ESPing Hackathon 2025',
    date: 'March 15-17, 2025',
    location: 'Virtual Event',
    description: 'Build innovative SMS-powered IoT projects and win prizes',
  },
  {
    title: 'Community Meetup',
    date: 'February 28, 2025',
    location: 'San Francisco, CA',
    description: 'Monthly meetup for ESPing developers and enthusiasts',
  },
  {
    title: 'Workshop: Advanced ESP32',
    date: 'March 5, 2025',
    location: 'Online',
    description: 'Deep dive into ESP32 programming and SMS integration',
  },
]

export function Community() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Users className="w-4 h-4 mr-2" />
            Community
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Join the <span className="gradient-text">ESPing Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our growing community of developers, makers, and IoT enthusiasts who are building
            the future of SMS communication together.
          </p>
        </div>

        {/* Community Resources */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Connect With Us</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {communityResources.map((resource, index) => (
              <Card key={index} className="p-6 hover-lift transition-all duration-300 hover:border-primary/30">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <resource.icon className="w-8 h-8 text-primary" />
                    <Badge variant="secondary">{resource.stats}</Badge>
                  </div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={resource.href}>
                      Join Now
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contributors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
  {contributors.map((contributor, index) => (
    <Card key={index} className="p-6 text-center hover-lift transition-all duration-300 group hover:shadow-lg hover:border-primary/30">
      <div className="relative mb-6">
        <div className="w-20 h-20 mx-auto rounded-full overflow-hidden ring-4 ring-primary/10 group-hover:ring-primary/30 transition-all duration-300">
          <Image
            src={contributorImages[index] || '/default-avatar.png'}
            alt={contributor.name}
            width={80}
            height={80}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
      <div className="space-y-3">
        <h4 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
          {contributor.name}
        </h4>
        <Badge variant="outline" className="group-hover:border-primary/50 transition-colors">
          {contributor.role}
        </Badge>
      </div>
    </Card>
  ))}
</div>

        

        
        {/* CTA */}
        <div className="text-center mt-20">
          <Card className="max-w-2xl mx-auto p-8 glass border-primary/20">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Ready to Join?</h3>
            <p className="text-muted-foreground mb-6">
              Whether you're a seasoned developer or just getting started, there's a place for you
              in the ESPing community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="https://github.com/Sci-Project-team">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://discord.gg/esping">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Join Discord
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

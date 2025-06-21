'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import image1 from '../../../../public/image1.jpg'
import image2 from '../../../../public/image2.jpg'
import image3 from '../../../../public/image3.jpg'
import image4 from '../../../../public/image4.jpg'
import image5 from '../../../../public/image5.jpg'
import image6 from '../../../../public/image6.jpg'
import Image from 'next/image'
import {
  Zap,
  Wifi,
  Smartphone,
  Code,
  ArrowRight,
  Play,
  MessageSquare,
  Radio,
  Cpu,
  Cloud,
  Database,
  Shield,
  X
} from 'lucide-react'
import Link from 'next/link'

const contributorImages = [image1, image2, image3, image4, image5, image6]
const contributors = [
  {
    name: 'Djabri Maroua',
   
  },
  {
    name: 'Dinari Yasmine',
    
  },
  {
    name: 'Bouyahiyaoui Meriem',
    
  },
  {
    name: 'Rezzoug Aicha',
   
  },
  {
    name: 'Messikh Wissal',
    
  },
  {
    name: 'Amirat Thanina',
 
  },

]
const features = [
  {
    icon: Cpu,
    title: 'ESP32-S3 Powered',
    description: 'Built on ESP32-S3 with dual-core processing and 8MB PSRAM'
  },
  {
    icon: MessageSquare,
    title: 'GSM/4G Gateway',
    description: 'Support for SIM800L, SIM7600, and other GSM modules'
  },
  {
    icon: Code,
    title: 'REST API & WebSocket',
    description: 'RESTful API with real-time WebSocket notifications'
  },
  {
    icon: Cloud,
    title: 'Edge Computing',
    description: 'Local processing with optional cloud synchronization'
  }
]

const projectStats = [
  { label: 'Active Installations', value: '1,200+' },
  { label: 'Messages Sent', value: '50K+' },
  { label: 'Countries Supported', value: '25+' },
  { label: 'Uptime', value: '99.8%' }
]

export function Hero() {
  const [showVideoModal, setShowVideoModal] = useState(false)

  const openVideoModal = () => setShowVideoModal(true)
  const closeVideoModal = () => setShowVideoModal(false)

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-esping-dark via-esping-slate to-esping-slate-light" />
        <div className="absolute inset-0 bg-circuit-pattern opacity-10" />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/10 text-primary border border-primary/20">
                  <Zap className="w-4 h-4 mr-2" />
                  Open Source & Production Ready
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Smart{' '}
                  <span className="gradient-text">SMS Gateway</span>{' '}
                  for{' '}
                  <span className="text-secondary-400">ESP32</span>
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Transform your ESP32 into a powerful SMS gateway with enterprise-grade features. 
                  Send, receive, and manage text messages through a clean REST API. Perfect for IoT projects, 
                  industrial monitoring, and automated notification systems.
                </p>
              </div>

              

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link href="/docs/getting-started">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="circuit" onClick={openVideoModal}>
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* Right Column - Visual/Demo */}
            <div className="relative">
              <Card className="p-6 glass-dark border-primary/20 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-semibold text-white">ESP32-S3 Gateway</h3>
                    <p className="text-sm text-muted-foreground">192.168.1.100:8080</p>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <Wifi className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-white">WiFi Connected (RSSI: -45dBm)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Radio className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-white">4G Network Ready (Signal: 85%)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="w-4 h-4 text-secondary-400" />
                    <span className="text-sm text-white">1,247 Messages Sent Today</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Database className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-white">Queue: 3 pending</span>
                  </div>
                </div>

                <div className="bg-circuit-900 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400 mb-2">POST /api/sms/send</div>
                  <pre className="text-gray-300">
{`{
  "to": ["+213555123456", "+213777654321"],
  "message": "System alert: Temperature exceeded threshold",
  "priority": 1,
  "delivery_receipt": true,
  "status": "queued",
  "message_ids": ["msg_001", "msg_002"]
}`}
                  </pre>
                </div>
              </Card>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 glass border-primary/10 hover:border-primary/30 transition-all duration-300 hover-lift">
                <feature.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contributors Section */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Meet Our <span className="gradient-text">Contributors</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The talented team behind ESPing SMS Gateway - passionate developers and engineers
              dedicated to making IoT communication accessible to everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl mx-4">
            <Card className="p-6 bg-background">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">ESPing SMS Gateway Demo</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeVideoModal}
                  className="hover:bg-muted"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="aspect-video">
                <video
                  controls
                  autoPlay
                  className="w-full h-full rounded-lg"
                  preload="metadata"
                >
                  <source src="/videos/esping-demo.mp4" type="video/mp4" />
                  <source src="/videos/esping-demo.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground mb-3">
                  See ESPing SMS Gateway in action - from setup to sending your first SMS
                </p>
                <Button variant="outline" asChild>
                  <a href="/videos/esping-demo.mp4" download>
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Download Video
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      )}
    </>
  )
}
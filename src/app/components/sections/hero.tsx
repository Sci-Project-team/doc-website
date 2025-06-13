'use client'

import { Button } from '../ui/button'
import { Card } from '../ui/card'
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
  Cloud
} from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Cpu,
    title: 'ESP32 Powered',
    description: 'Built on the powerful ESP32 microcontroller'
  },
  {
    icon: MessageSquare,
    title: 'SMS Gateway',
    description: 'Send and receive SMS through REST API'
  },
  {
    icon: Code,
    title: 'Developer Friendly',
    description: 'Clean APIs and comprehensive documentation'
  },
  {
    icon: Cloud,
    title: 'IoT Ready',
    description: 'Perfect for IoT and automation projects'
  }
]

export function Hero() {
  return (
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
                Open Source & Developer First
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Smart{' '}
                <span className="gradient-text">SMS Gateway</span>{' '}
                for{' '}
                <span className="text-secondary-400">ESP32</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                Transform your ESP32 into a powerful SMS gateway. Send, receive, and manage
                text messages through a clean REST API. Perfect for IoT projects, home automation,
                and embedded applications.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/docs/getting-started">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="circuit">
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
                  <h3 className="font-semibold text-white">ESP32 Gateway</h3>
                  <p className="text-sm text-muted-foreground">192.168.1.100</p>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Wifi className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-white">WiFi Connected</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Radio className="w-4 h-4 text-blue-500" />
                  <span className="text-sm text-white">GSM Ready</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-4 h-4 text-secondary-400" />
                  <span className="text-sm text-white">47 Messages Sent</span>
                </div>
              </div>

              <div className="bg-circuit-900 rounded-lg p-4 font-mono text-sm">
                <div className="text-green-400 mb-2">POST /api/sms</div>
                <pre className="text-gray-300">
{`{
  "to": "+1234567890",
  "message": "Hello from ESPing!",
  "status": "sent"
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
  )
}

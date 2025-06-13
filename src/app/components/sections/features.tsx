'use client'

import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { 
  Zap, 
  Shield, 
  Code, 
  Smartphone, 
  Globe, 
  Settings, 
  MessageSquare, 
  Radio,
  Cpu,
  Cloud,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Cpu,
    title: 'ESP32 Integration',
    description: 'Native support for ESP32 microcontrollers with optimized firmware and easy setup process.',
    benefits: ['Low power consumption', 'WiFi connectivity', 'Real-time processing']
  },
  {
    icon: MessageSquare,
    title: 'REST API',
    description: 'Clean, well-documented REST API for sending, receiving, and managing SMS messages.',
    benefits: ['Standard HTTP methods', 'JSON responses', 'Rate limiting']
  },
  {
    icon: Shield,
    title: 'Secure Authentication',
    description: 'Multiple authentication methods including API keys, tokens, and PIN codes.',
    benefits: ['API key management', 'Token-based auth', 'Secure endpoints']
  },
  {
    icon: Globe,
    title: 'Web Interface',
    description: 'Intuitive web dashboard for monitoring, configuration, and message management.',
    benefits: ['Real-time updates', 'Message logs', 'System monitoring']
  },
  {
    icon: Code,
    title: 'Developer Tools',
    description: 'SDKs, libraries, and plugins for popular platforms and programming languages.',
    benefits: ['Python SDK', 'JavaScript library', 'WordPress plugin']
  },
  {
    icon: Settings,
    title: 'Easy Configuration',
    description: 'Simple setup process with automatic network detection and GSM module configuration.',
    benefits: ['Auto-detection', 'Web-based setup', 'Backup & restore']
  }
]

const useCases = [
  {
    title: 'IoT Notifications',
    description: 'Send alerts and status updates from your IoT devices directly to mobile phones.',
    icon: Radio
  },
  {
    title: 'Home Automation',
    description: 'Integrate SMS notifications into your smart home system for security and monitoring.',
    icon: Settings
  },
  {
    title: 'Industrial Monitoring',
    description: 'Monitor equipment status and send maintenance alerts via SMS.',
    icon: Zap
  },
  {
    title: 'Emergency Systems',
    description: 'Reliable SMS communication for emergency notification systems.',
    icon: Shield
  }
]

export function Features() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Features
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Everything You Need for{' '}
            <span className="gradient-text">SMS Integration</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ESPing provides a complete solution for integrating SMS functionality into your IoT projects 
            with minimal effort and maximum reliability.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover-lift glass border-primary/10 hover:border-primary/30 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Perfect for Any Project</h3>
            <p className="text-lg text-muted-foreground">
              See how ESPing can transform your projects with reliable SMS communication
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="p-6 text-center hover-lift glass border-primary/10 hover:border-primary/30 transition-all duration-300">
                <useCase.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">{useCase.title}</h4>
                <p className="text-sm text-muted-foreground">{useCase.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Code Example */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Simple Integration</h3>
            <p className="text-lg text-muted-foreground">
              Get started with just a few lines of code. Our API is designed to be intuitive and easy to integrate into any project.
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="w-5 h-5 mr-2" />
                Quick Start Example
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="code-block">
                <pre className="text-sm">
{`// Send SMS with ESPing
const response = await fetch('http://esp32-ip/api/sms', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-api-key'
  },
  body: JSON.stringify({
    to: '+1234567890',
    message: 'Hello from ESPing!'
  })
});

const result = await response.json();
console.log('SMS sent:', result.status);`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto p-8 glass border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of developers who are already using ESPing to power their IoT projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/docs/getting-started">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/docs/api-reference">
                  View API Docs
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

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
  CheckCircle,
  Database,
  Clock,
  BarChart3,
  Webhook
} from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Cpu,
    title: 'ESP32-S3 Integration',
    description: 'Optimized firmware for ESP32-S3 with dual-core processing, 8MB PSRAM, and advanced power management.',
    benefits: ['Dual-core 240MHz CPU', 'Low power consumption', 'Real-time processing', 'OTA updates']
  },
  {
    icon: MessageSquare,
    title: 'Advanced SMS Engine',
    description: 'Robust SMS processing with queue management, delivery tracking, and multi-format support.',
    benefits: ['Bulk messaging (up to 1000)', 'Delivery receipts', 'Message scheduling', 'Unicode support']
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Multi-layer security with API authentication, rate limiting, and encrypted communications.',
    benefits: ['JWT token auth', 'API rate limiting', 'TLS encryption', 'Access control']
  },
  {
    icon: Database,
    title: 'Local Data Storage',
    description: 'Built-in SQLite database for message persistence, logging, and offline capability.',
    benefits: ['Message persistence', 'Delivery tracking', 'Offline queuing', 'Data analytics']
  },
  
  
  {
    icon: Code,
    title: 'Developer Ecosystem',
    description: 'Complete SDK suite with libraries for Python, JavaScript, PHP, and integration plugins.',
    benefits: ['Python SDK', 'JavaScript library', 'WordPress, Node-red, Zapier plugin', 'REST API docs']
  }
]

const performanceMetrics = [
  { metric: 'Message Throughput', value: '100 SMS/min', icon: BarChart3 },
  { metric: 'API Response Time', value: '<200ms', icon: Clock },
  { metric: 'Memory Usage', value: '~2MB RAM', icon: Cpu },
  { metric: 'Power Consumption', value: '150mA avg', icon: Zap }
]

const useCases = [
  {
    title: 'Industrial IoT Monitoring',
    description: 'Monitor equipment status, send maintenance alerts, and track operational metrics via SMS.',
    icon: Radio,
    examples: ['Temperature alerts', 'Equipment failures', 'Maintenance schedules']
  },
  {
    title: 'Smart Home Automation',
    description: 'Integrate SMS notifications into your smart home system for security and monitoring.',
    icon: Settings,
    examples: ['Security alerts', 'Door/window sensors', 'Environmental monitoring']
  },
  {
    title: 'Emergency Notification Systems',
    description: 'Reliable SMS communication for critical emergency and disaster notification systems.',
    icon: Shield,
    examples: ['Emergency broadcasts', 'Evacuation notices', 'Safety alerts']
  },
  {
    title: 'Business Process Automation',
    description: 'Automate business workflows with SMS notifications for orders, appointments, and updates.',
    icon: Zap,
    examples: ['Order confirmations', 'Appointment reminders', 'Status updates']
  }
]

export function Features() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Enterprise Features
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Production-Ready{' '}
            <span className="gradient-text">SMS Infrastructure</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ESPing provides enterprise-grade SMS gateway functionality with advanced features 
            for reliability, scalability, and seamless integration into your existing infrastructure.
          </p>
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {performanceMetrics.map((metric, index) => (
            <Card key={index} className="p-6 text-center glass border-primary/10">
              <metric.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.metric}</div>
            </Card>
          ))}
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
            <h3 className="text-3xl font-bold mb-4">Real-World Applications</h3>
            <p className="text-lg text-muted-foreground">
              See how ESPing transforms critical communication across industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="p-6 hover-lift glass border-primary/10 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2">{useCase.title}</h4>
                    <p className="text-muted-foreground mb-4">{useCase.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {useCase.examples.map((example, exampleIndex) => (
                        <Badge key={exampleIndex} variant="secondary" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto p-8 glass border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Ready for Production?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of developers and businesses who trust ESPing for their critical SMS infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/docs/getting-started">
                  Deploy Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/docs/api-reference">
                  View Documentation
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

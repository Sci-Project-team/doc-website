import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { 
  Zap, 
  Cpu, 
  Code, 
  BookOpen, 
  ArrowRight,
  MessageSquare,
  Settings,
  Wrench,
  Lightbulb,
  ExternalLink
} from 'lucide-react'
import Link from 'next/link'

const quickStartCards = [
  {
    title: 'Hardware Setup',
    description: 'Connect your ESP32 with GSM module and required components',
    href: '/docs/hardware',
    icon: Cpu,
    time: '15 min',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10'
  },
  {
    title: 'Quick Start Guide',
    description: 'Flash firmware and configure your ESPing device',
    href: '/docs/getting-started',
    icon: Zap,
    time: '10 min',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10'
  },
  {
    title: 'API Reference',
    description: 'Learn about endpoints, authentication, and responses',
    href: '/docs/api-reference',
    icon: Code,
    time: '5 min',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10'
  },
  {
    title: 'Send First SMS',
    description: 'Test your setup by sending your first SMS message',
    href: '/docs/first-sms',
    icon: MessageSquare,
    time: '2 min',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10'
  }
]

const popularTopics = [
  {
    title: 'Home Automation Integration',
    description: 'Connect ESPing with Home Assistant, OpenHAB, and other platforms',
    href: '/docs/examples/home-automation'
  },
  {
    title: 'Webhook Configuration',
    description: 'Set up webhooks for real-time SMS notifications',
    href: '/docs/webhooks'
  },
  {
    title: 'Security Best Practices',
    description: 'Secure your ESP32 SMS gateway for production use',
    href: '/docs/security'
  },
  {
    title: 'Troubleshooting Guide',
    description: 'Common issues and solutions for ESPing deployment',
    href: '/docs/troubleshooting'
  }
]

export default function DocsPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-muted-foreground">
          ESPing Documentation
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Complete guide to setting up, configuring, and using ESPing - 
          the developer-oriented smart SMS gateway for ESP32 microcontrollers.
        </p>
      </div>

      {/* Quick Start Section */}
      <section>
        <div className="flex items-center space-x-2 mb-6">
          <Lightbulb className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold text-muted-foreground">Quick Start</h2>
        </div>
        <p className="text-muted-foreground mb-8">
          Get your ESPing SMS gateway up and running in under 30 minutes with our step-by-step guides.
        </p>
        
        <div className="grid gap-6 md:grid-cols-2">
          {quickStartCards.map((card, index) => (
            <Card key={card.title} className="hover-lift group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${card.bgColor}`}>
                      <card.icon className={`h-5 w-5 ${card.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{card.title}</CardTitle>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                    {card.time}
                  </span>
                </div>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" asChild className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Link href={card.href}>
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>



      {/* API Example */}
      <section>
        <Card variant="circuit" className="p-8">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Ready to start coding?</h2>
              <p className="text-circuit-300">
                ESPing provides a simple REST API that works with any programming language. 
                Send your first SMS with just a few lines of code.
              </p>
              <div className="flex space-x-4">
                <Button variant="glow" asChild>
                  <Link href="/docs/api-reference">
                    View API Docs
                  </Link>
                </Button>
              
              </div>
            </div>
            
            <div className="code-block">
              <div className="text-circuit-400 text-xs mb-3">Send SMS Example</div>
              <pre className="text-sm">
                <code>{`curl -X POST http://esp32-ip/api/sms \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer your-api-key" \\
  -d '{
    "to": "+1234567890",
    "message": "Hello from ESPing!"
  }'`}</code>
              </pre>
            </div>
          </div>
        </Card>
      </section>


    </div>
  )
}
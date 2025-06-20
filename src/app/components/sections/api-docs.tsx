'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { 
  Code, 
  Book, 
  ExternalLink, 
  Copy, 
  Play,
  Globe,
  Zap
} from 'lucide-react'
import Link from 'next/link'

const endpoints = [
  {
    method: 'POST',
    endpoint: '/api/sms',
    description: 'Send an SMS message to a specified phone number',
    parameters: [
      { name: 'to', type: 'string', description: 'Recipient phone number' },
      { name: 'message', type: 'string', description: 'SMS message content' },
      { name: 'priority', type: 'number', description: 'Message priority (optional)' }
    ]
  },
  {
    method: 'GET',
    endpoint: '/api/sms/inbox',
    description: 'Retrieve all received SMS messages',
    parameters: [
      { name: 'limit', type: 'number', description: 'Number of messages to return' },
      { name: 'offset', type: 'number', description: 'Pagination offset' }
    ]
  }
]

const languages = [
  { id: 'javascript', name: 'JavaScript', icon: '🟨' },
  { id: 'python', name: 'Python', icon: '🐍' },
  { id: 'curl', name: 'cURL', icon: '💻' },
  { id: 'php', name: 'PHP', icon: '🐘' }
]

const quickLinks = [
  {
    title: 'Getting Started',
    description: 'Set up your first ESP32 SMS gateway in minutes',
    href: '/docs/getting-started',
    icon: Zap
  },
  {
    title: 'Hardware Guide',
    description: 'Complete hardware setup and wiring instructions',
    href: '/docs/hardware',
    icon: Globe
  },
  {
    title: 'API Reference',
    description: 'Detailed API documentation with examples',
    href: '/docs/api-reference',
    icon: Book
  }
]

const generateCodeExample = (language: string) => {
  const examples = {
    javascript: `fetch('http://esp32-ip/api/sms', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-api-key'
  },
  body: JSON.stringify({
    to: '+1234567890',
    message: 'Hello from ESPing!'
  })
})`,
    python: `import requests

response = requests.post('http://esp32-ip/api/sms', 
  headers={'Authorization': 'Bearer your-api-key'},
  json={
    'to': '+1234567890',
    'message': 'Hello from ESPing!'
  }
)`,
    curl: `curl -X POST http://esp32-ip/api/sms \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer your-api-key" \\
  -d '{"to": "+1234567890", "message": "Hello from ESPing!"}'`,
    php: `$response = wp_remote_post('http://esp32-ip/api/sms', [
  'headers' => ['Authorization' => 'Bearer your-api-key'],
  'body' => json_encode([
    'to' => '+1234567890',
    'message' => 'Hello from ESPing!'
  ])
]);`
  }
  return examples[language as keyof typeof examples] || examples.javascript
}

export function ApiDocs() {
  const [activeLanguage, setActiveLanguage] = useState('javascript')

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Code className="w-4 h-4 mr-2" />
            Developer Documentation
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Built for{' '}
            <span className="gradient-text">Developers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our RESTful API is designed for simplicity and reliability. Get started in minutes 
            with comprehensive documentation and examples.
          </p>
        </div>

        {/* API Endpoints */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Core API Endpoints</h3>
          <p className="text-center text-muted-foreground mb-8">
            Core endpoints for SMS operations and system management
          </p>
          
          <div className="grid gap-6 max-w-4xl mx-auto">
            {endpoints.map((endpoint, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Badge variant={endpoint.method === 'GET' ? 'secondary' : 'default'}>
                    {endpoint.method}
                  </Badge>
                  <code className="text-lg font-mono">{endpoint.endpoint}</code>
                </div>
                <p className="text-muted-foreground mb-4">{endpoint.description}</p>
                {endpoint.parameters.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Parameters:</h4>
                    {endpoint.parameters.map((param, paramIndex) => (
                      <div key={paramIndex} className="text-sm text-muted-foreground ml-4">
                        <code className="text-primary">{param.name}</code> ({param.type}) - {param.description}
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

       

        {/* Quick Links */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Documentation</h3>
          <p className="text-center text-muted-foreground mb-8">
            Everything you need to get started, from basic setup to advanced configuration
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {quickLinks.map((link, index) => (
              <Card key={index} className="p-6 hover-lift transition-all duration-300 hover:border-primary/30">
                <CardHeader className="pb-4">
                  <link.icon className="w-8 h-8 text-primary mb-2" />
                  <CardTitle className="text-lg">{link.title}</CardTitle>
                  <CardDescription>{link.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={link.href}>
                      Learn More
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Live Demo */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto p-8 glass border-primary/20">
            <div className="flex items-center justify-center mb-4">
              <Play className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Try Live Demo</h3>
            <p className="text-muted-foreground mb-6">
              Experience ESPing in action with our live demo. Send real SMS messages and see the API responses in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Play className="mr-2 h-4 w-4" />
                Launch Demo
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://github.com/esping/esping">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Open Source
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

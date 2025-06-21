import Link from 'next/link'
import { Github, Twitter, Mail, Heart, MessageSquare } from 'lucide-react'
import { Button } from './button'

const footerLinks = {
  product: [
    { name: 'Features', href: '/features' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/docs/api-reference' },
    { name: 'Hardware Setup', href: '/docs/hardware' },
  ],
  resources: [
    { name: 'Getting Started', href: '/docs/getting-started' },
    { name: 'Mobile App', href: '/docs/mobile-app' },
    { name: 'SDKs', href: '/docs/sdk' },
    { name: 'Integrations', href: '/docs/integrations' },
  ],
  community: [
    { name: 'GitHub', href: 'https://github.com/Sci-Project-team' },
   
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy', href: '/privacy' },
  ],
}

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/Sci-Project-team',
    icon: Github,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/esping_dev',
    icon: Twitter,
  },
  {
    name: 'Email',
    href: 'mailto:hello@esping.dev',
    icon: Mail,
  },
]

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">ESPing</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Developer-oriented smart SMS gateway built on ESP32. 
              Bridge your applications with GSM networks through a clean, powerful API.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Button key={link.name} variant="ghost" size="icon" asChild>
                  <Link href={link.href} target="_blank" rel="noopener noreferrer">
                    <link.icon className="w-4 h-4" />
                    <span className="sr-only">{link.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>by the ESPing team</span>
          </div>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <span>© 2025 ESPing. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
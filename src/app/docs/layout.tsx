import { ReactNode } from 'react'
import Link from 'next/link'
import { 
  BookOpen, 
  Zap, 
  Cpu, 
  Code, 
  MessageSquare, 
  Settings,
  ChevronRight,
  Home
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'

const sidebarNavigation = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs' },
      { title: 'Quick Start', href: '/docs/getting-started' },
      { title: 'Hardware Setup', href: '/docs/hardware' },
      { title: 'First SMS', href: '/docs/first-sms' },
    ]
  },
  {
    title: 'API Reference',
    items: [
      { title: 'Overview', href: '/docs/api-reference' },
      { title: 'Authentication', href: '/docs/api-reference/auth' },
      { title: 'Send SMS', href: '/docs/api-reference/send' },
      { title: 'Receive SMS', href: '/docs/api-reference/receive' },
      { title: 'System Status', href: '/docs/api-reference/status' },
    ]
  },
  {
    title: 'Examples',
    items: [
      { title: 'Basic Examples', href: '/docs/examples' },
      { title: 'Home Automation', href: '/docs/examples/home-automation' },
      { title: 'IoT Alerts', href: '/docs/examples/iot-alerts' },
      { title: 'Security System', href: '/docs/examples/security' },
    ]
  },
  {
    title: 'Advanced',
    items: [
      { title: 'Configuration', href: '/docs/configuration' },
      { title: 'Webhooks', href: '/docs/webhooks' },
      { title: 'Custom Firmware', href: '/docs/custom-firmware' },
      { title: 'Troubleshooting', href: '/docs/troubleshooting' },
    ]
  }
]

interface DocsLayoutProps {
  children: ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="min-h-screen">
      {/* Top breadcrumb */}
      <div className="border-b border-border/40">
        <div className="container py-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              <Home className="h-4 w-4" />
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/docs" className="hover:text-primary transition-colors">
              Documentation
            </Link>
          </nav>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              {/* Search */}
              <Card className="p-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="search"
                    placeholder="Search docs..."
                    className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                  />
                  <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    ⌘K
                  </kbd>
                </div>
              </Card>

              {/* Navigation */}
              <nav className="space-y-6">
                {sidebarNavigation.map((section) => (
                  <div key={section.title}>
                    <h4 className="font-semibold text-sm mb-3">{section.title}</h4>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>

              {/* Help Card */}
              <Card className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    <h4 className="font-semibold text-sm">Need Help?</h4>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Join our community for support and discussions.
                  </p>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link href="/community">
                      Get Support
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          </aside>

          {/* Main content */}
          <main className="lg:col-span-3">
            <div className="max-w-4xl">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
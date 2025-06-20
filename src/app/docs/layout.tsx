'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '../../lib/utils'
import { 
  Book, 
  Code, 
  Puzzle, 
  Smartphone, 
  Zap,
  FileText,
  Settings,
  ChevronRight
} from 'lucide-react'

const navigation = [
  {
    title: 'Getting Started',
    href: '/docs/getting-started',
    icon: Book,
    description: 'Quick setup guide'
  },
  {
    title: 'API Reference', 
    href: '/docs/api-reference',
    icon: Code,
    description: 'Complete API documentation'
  },
  {
    title: 'SDK Documentation',
    href: '/docs/sdk', 
    icon: FileText,
    description: 'Python & JavaScript SDKs'
  },
  {
    title: 'Integrations',
    href: '/docs/integrations',
    icon: Puzzle,
    description: 'Third-party integrations'
  },
  {
    title: 'Mobile App',
    href: '/docs/mobile-app',
    icon: Smartphone,
    description: 'ESPing mobile application'
  },
  {
    title: 'Hardware Setup',
    href: '/docs/hardware',
    icon: Settings,
    description: 'Hardware configuration & pricing'
  }
]

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-72 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="p-6">
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-foreground mb-2">Documentation</h2>
              <p className="text-sm text-muted-foreground">
                Everything you need to build with ESPing SMS Gateway
              </p>
            </div>

            {/* Navigation */}
            <nav className="space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'group flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-all duration-200 hover:bg-muted/50',
                      isActive
                        ? 'bg-primary/10 text-primary border-l-2 border-primary shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    <div className={cn(
                      'flex h-8 w-8 items-center justify-center rounded-md transition-colors',
                      isActive 
                        ? 'bg-primary/20 text-primary' 
                        : 'bg-muted/50 text-muted-foreground group-hover:bg-muted group-hover:text-foreground'
                    )}>
                      <Icon className="h-4 w-4" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="font-medium">{item.title}</div>
                      <div className={cn(
                        'text-xs transition-colors',
                        isActive ? 'text-primary/70' : 'text-muted-foreground'
                      )}>
                        {item.description}
                      </div>
                    </div>
                    
                    {isActive && (
                      <ChevronRight className="h-3 w-3 text-primary" />
                    )}
                  </Link>
                )
              })}
            </nav>

          
          </div>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="container max-w-4xl mx-auto p-8">
          {children}
        </div>
      </main>
    </div>
  )
}

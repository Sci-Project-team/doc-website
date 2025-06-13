'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Github, Code, Book, Users, Home, ChevronDown } from 'lucide-react'
import { Button } from './button'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '../../../../public/logo3.png'

const navigation = [
  {
    name: 'Home',
    href: '/',
    icon: Home,
  },
  {
    name: 'Documentation',
    href: '/docs',
    icon: Book,
    submenu: [
      { name: 'Getting Started', href: '/docs/getting-started' },
      { name: 'API Reference', href: '/docs/api-reference' },
      { name: 'Hardware Setup', href: '/docs/hardware' },
    ],
  },
  {
    name: 'Features',
    href: '/features',
    icon: Code,
  },
  {
    name: 'Community',
    href: '/community',
    icon: Users,
  },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeSubmenu, setActiveSubmenu] = React.useState<string | null>(null)
  const pathname = usePathname()

  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name)
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img src={Logo.src} alt="Esping Logo" className="h-24 w-24" />

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveSubmenu(item.name)}
                    onMouseLeave={() => setActiveSubmenu(null)}
                  >
                    <button
                      className={cn(
                        "flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary",
                        pathname.startsWith(item.href) ? "text-primary" : "text-muted-foreground"
                      )}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    
                    <AnimatePresence>
                      {activeSubmenu === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-background border rounded-lg shadow-lg py-2"
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={cn(
                                "block px-4 py-2 text-sm transition-colors hover:bg-muted",
                                pathname === subItem.href ? "text-primary bg-muted" : "text-muted-foreground"
                              )}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary",
                      pathname === item.href ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="circuit" size="sm" asChild>
              <Link href="https://github.com/esping/esping" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/docs/getting-started">
                Get Started
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t bg-background"
            >
              <div className="py-4 space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <div>
                        <button
                          onClick={() => toggleSubmenu(item.name)}
                          className={cn(
                            "flex items-center justify-between w-full px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                            pathname.startsWith(item.href) ? "text-primary" : "text-muted-foreground"
                          )}
                        >
                          <div className="flex items-center space-x-2">
                            <item.icon className="w-4 h-4" />
                            <span>{item.name}</span>
                          </div>
                          <ChevronDown 
                            className={cn(
                              "w-3 h-3 transition-transform",
                              activeSubmenu === item.name && "rotate-180"
                            )} 
                          />
                        </button>
                        <AnimatePresence>
                          {activeSubmenu === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-8 space-y-2"
                            >
                              {item.submenu.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  onClick={() => setIsOpen(false)}
                                  className={cn(
                                    "block px-4 py-2 text-sm transition-colors hover:text-primary",
                                    pathname === subItem.href ? "text-primary" : "text-muted-foreground"
                                  )}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center space-x-2 px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                          pathname === item.href ? "text-primary" : "text-muted-foreground"
                        )}
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.name}</span>
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile Actions */}
                <div className="px-4 pt-4 border-t space-y-2">
                  <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                    <Link href="https://github.com/esping/esping" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Link>
                  </Button>
                  <Button size="sm" className="w-full" asChild>
                    <Link href="/docs/getting-started">
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

import './globals.css'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Navbar } from './components/ui/navbar'
import { Footer } from './components/ui/footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  // ... your metadata
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-gradient-to-br from-esping-dark via-esping-slate to-esping-slate-light antialiased">
        <div className="relative flex min-h-screen flex-col">
          {/* Background patterns */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-circuit-pattern opacity-5" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-secondary/5" />
          </div>
          
          {/* Navigation */}
          <Navbar />
          
          {/* Main content */}
          <main className="flex-1">
            {children}
          </main>
          
          {/* Footer */}
          <Footer />
        </div>
        
        {/* Floating particles effect */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-esping-blue/5 rounded-full blur-3xl animate-pulse-slow" />
        </div>
      </body>
    </html>
  )
}
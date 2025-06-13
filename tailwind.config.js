/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Core system colors using ESPing brand palette
        border: "hsl(215 28% 17%)", // esping-slate
        input: "hsl(215 28% 17%)",
        ring: "hsl(199 89% 48%)", // esping-blue
        background: "hsl(222 84% 5%)", // esping-dark
        foreground: "hsl(210 40% 98%)",
        
        primary: {
          DEFAULT: "hsl(199 89% 58%)", // brighter blue for better contrast
          foreground: "hsl(222 84% 5%)", // dark text on bright primary
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#22c3f7', // brighter than original esping-blue
          600: '#0ea5e9', // original esping-blue moved to 600
          700: '#0284c7',
          800: '#0369a1',
          900: '#075985',
        },
        
        secondary: {
          DEFAULT: "hsl(215 15% 85%)", // light gray for good contrast on dark backgrounds
          foreground: "hsl(222 84% 5%)", // dark text on light secondary
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155', // matches esping-slate-light
          800: '#1e293b', // matches esping-slate
          900: '#0f172a', // matches esping-dark
        },
        
        accent: {
          DEFAULT: "hsl(188 78% 41%)", // esping-cyan
          foreground: "hsl(210 40% 98%)",
        },
        
        destructive: {
          DEFAULT: "hsl(0 62% 50%)",
          foreground: "hsl(210 40% 98%)",
        },
        
        muted: {
          DEFAULT: "hsl(215 20% 25%)", // lighter than esping-slate for better visibility
          foreground: "hsl(215 20% 75%)", // much lighter text for readability
        },
        
        popover: {
          DEFAULT: "hsl(215 28% 17%)", // esping-slate
          foreground: "hsl(210 40% 98%)",
        },
        
        card: {
          DEFAULT: "hsl(215 25% 30%)", // lighter than slate-light for better contrast
          foreground: "hsl(210 40% 95%)", // very light text
        },
        
        // ESPing Brand Colors (keep these for explicit brand usage)
        esping: {
          dark: '#0f172a',      // hsl(222 84% 5%)
          slate: '#1e293b',     // hsl(215 28% 17%)
          'slate-light': '#334155', // hsl(215 25% 27%)
          blue: '#0ea5e9',      // hsl(199 89% 48%)
          cyan: '#06b6d4',      // hsl(188 78% 41%)
          emerald: '#10b981',   // hsl(160 84% 39%)
          amber: '#f59e0b',     // hsl(45 93% 51%)
        },
        
        // Enhanced circuit/tech colors that work with the brand
        circuit: {
          50: '#f8fafc',
          100: '#f1f5f9', 
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155', // matches esping-slate-light
          800: '#1e293b', // matches esping-slate  
          900: '#0f172a', // matches esping-dark
        },
        
        // Success/info states using brand colors
        success: {
          DEFAULT: "hsl(160 84% 39%)", // esping-emerald
          foreground: "hsl(210 40% 98%)",
        },
        
        warning: {
          DEFAULT: "hsl(45 93% 51%)", // esping-amber
          foreground: "hsl(222 84% 5%)", // dark text on amber
        },
        
        info: {
          DEFAULT: "hsl(188 78% 41%)", // esping-cyan
          foreground: "hsl(210 40% 98%)",
        }
      },
      
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "glow": {
          "0%, 100%": { 
            boxShadow: "0 0 5px hsl(199 89% 48% / 0.5)" // using esping-blue
          },
          "50%": { 
            boxShadow: "0 0 20px hsl(199 89% 48% / 0.8), 0 0 40px hsl(188 78% 41% / 0.4)" // blue + cyan
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "circuit-pulse": {
          "0%, 100%": { 
            boxShadow: "0 0 2px hsl(199 89% 48% / 0.3)" 
          },
          "50%": { 
            boxShadow: "0 0 8px hsl(199 89% 48% / 0.6), 0 0 16px hsl(188 78% 41% / 0.4)" 
          },
        }
      },
      
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-in-left": "slide-in-left 0.6s ease-out",
        "glow": "glow 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite", 
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        "circuit-pulse": "circuit-pulse 2s ease-in-out infinite",
      },
      
      fontFamily: {
        'mono': ['JetBrains Mono', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      
      backdropBlur: {
        xs: '2px',
      },
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // Updated circuit pattern using brand colors
        'circuit-pattern': `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%230ea5e9' fill-opacity='0.08'%3e%3cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
        'circuit-pattern-cyan': `url("data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='%2306b6d4' fill-opacity='0.05'%3e%3cpath d='M20 20h4v4h-4zM0 0h4v4H0zM0 20h4v4H0zM20 0h4v4h-4z'/%3e%3c/g%3e%3c/svg%3e")`,
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
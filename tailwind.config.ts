import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Custom gold and luxury colors
        gold: {
          50: "hsl(45, 100%, 95%)",
          100: "hsl(45, 100%, 90%)",
          200: "hsl(45, 100%, 85%)",
          300: "hsl(45, 100%, 75%)",
          400: "hsl(45, 100%, 65%)",
          500: "hsl(45, 100%, 51%)",
          600: "hsl(45, 100%, 45%)",
          700: "hsl(45, 100%, 35%)",
          800: "hsl(45, 100%, 25%)",
          900: "hsl(45, 100%, 15%)",
        },
        luxury: {
          red: "hsl(0, 75%, 55%)",
          gold: "hsl(45, 100%, 51%)",
          white: "hsl(0, 0%, 100%)",
          cream: "hsl(45, 20%, 95%)",
        },
      },
      backgroundImage: {
        'gradient-gold': 'var(--gradient-gold)',
        'gradient-gold-light': 'var(--gradient-gold-light)',
        'gradient-gold-dark': 'var(--gradient-gold-dark)',
        'gradient-red-gold': 'var(--gradient-red-gold)',
        'gradient-luxury': 'var(--gradient-luxury)',
        'gradient-shine': 'var(--gradient-shine)',
      },
      boxShadow: {
        'gold': 'var(--shadow-gold)',
        'gold-strong': 'var(--shadow-gold-strong)',
        'elegant': 'var(--shadow-elegant)',
        'red': 'var(--shadow-red)',
      },
      transitionProperty: {
        'gold': 'var(--transition-gold)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

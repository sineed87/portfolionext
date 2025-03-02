import {heroui} from '@heroui/theme';
import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(dropdown|image|menu|divider|popover|button|ripple|spinner).js"
  ],
	theme: {
		extend: {
			fontFamily: {
				manrope: ["Manrope", "sans-serif"],
				raleway: ["Raleway", "sans-serif"],
				work: ["Work Sans", "sans-serif"],
				akz: ["AkzidenzGrotesk", "sans-serif"],
				cav: ["Fira Sans Extra Condensed", "sans-serif"],
				hel: ["Helvetica Neue", "sans-serif"],
				dm: ["GT Flexa Trial Cm Md"],
				dm1: ["GT Flexa Trial Cn Th"],
				chill: ["Chillax", "sans-serif"],
				faune: ["Faune", "sans-serif"],
				is:["Instrument Sans", "sans-serif"],
				custom: ['MyFont', 'sans-serif'],
				ccc: ['ccc', 'sans-serif'],
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			keyframes: {
				shine: {
					from: {
						backgroundPosition: '200% 0'
					},
					to: {
						backgroundPosition: '-200% 0'
					}
				}
			},
			animation: {
				shine: 'shine 8s ease-in-out infinite'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
  plugins: [require("tailwindcss-animate"),heroui()],
};

export default config;

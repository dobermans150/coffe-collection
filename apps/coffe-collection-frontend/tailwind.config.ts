import type { Config } from 'tailwindcss'
import uiConfig from '../../packages/ui/tailwind.config'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/tailwind.config',
    '../../packages/ui/**/*.{js,jsx,ts,tsx}'
  ],
  theme: uiConfig.theme,
  plugins: [],
}
export default config

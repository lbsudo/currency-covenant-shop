'use client'

import { ThemeProvider } from 'next-themes'

export function Providers({ children }: any) {
  return <ThemeProvider defaultTheme='light'
    attribute='class'
    value={{ light: 'bg-primary', dark: 'bg-dark-primary' }}
    >
    {children}
  </ThemeProvider>
}

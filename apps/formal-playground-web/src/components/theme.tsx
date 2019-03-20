import React from 'react'
import { ThemeProvider } from 'emotion-theming'

import { theme } from '../utils/styled'

interface ThemeProps {
  children: React.ReactNode
}

export default function Theme({ children }: ThemeProps): JSX.Element {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

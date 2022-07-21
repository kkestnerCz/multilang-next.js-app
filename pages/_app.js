import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next'
import theme from '../styles/theme'
import { ThemeProvider } from '@mui/material/styles'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp)

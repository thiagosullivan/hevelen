import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../styles/theme';
import GlobalStyles from '../styles/globals';
import NextNProgress from 'nextjs-progressbar';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Toaster position="bottom-right" />
        <NextNProgress
          color={theme.secondary }
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow
        />
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp

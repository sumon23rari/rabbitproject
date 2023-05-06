import '@/styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ThemeProvider } from 'next-themes';
export default function App({ Component, pageProps }) {
  return(
  <ThemeProvider enableSystem={true} attribute='class'>
  <Component {...pageProps} />
  </ThemeProvider>
  )
}

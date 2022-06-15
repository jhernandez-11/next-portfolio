import '../styles/globals.css'
import main from '../src/layout/layout'

function MyApp({ Component, pageProps }) {
  return <main><Component {...pageProps} /></main>
}

export default MyApp

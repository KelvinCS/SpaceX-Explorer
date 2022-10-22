import '../styles/globals.css'
import type { AppProps } from 'next/app'
import proj4 from 'proj4';
import { ApolloProvider } from '../src/infra/network/apollo/ApolloProvider';

if (typeof window !== "undefined") {
  // window.proj4 = window.proj4 || proj4
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp

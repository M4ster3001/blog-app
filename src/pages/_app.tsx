import { ApolloProvider } from '@apollo/client'
import { apolloCon } from 'con/apolloCon'
import { AppProps } from 'next/app'

import '@styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloCon}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp

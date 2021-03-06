import 'fomantic-ui-css/semantic.css'
import '../styles/globals.css'
import Head from 'next/head'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="icon" href="favicon.png" />
            </Head>

            <Component {...pageProps} />
        </>
    )
}

export default MyApp

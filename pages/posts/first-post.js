import Script from 'next/script'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>Posting Pertama</title>
                <Script
                    src='https://connect.facebook.net/en_US/sdk.js'
                    strategy='lazyOnload'
                    onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)}
                ></Script>
            </Head>
            <h1>Posting Pertama</h1>
            <h2>
                <Link href="/">← Back to home</Link>
            </h2>
        </Layout>
    )
}
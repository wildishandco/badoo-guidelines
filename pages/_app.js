import React from "react"
import Head from "next/head"
import { createGlobalStyle } from "styled-components"
import "../styles/fonts.css"
import reset from "../styles/reset"
import global from "../styles/global"
import CookiesBanner from "../components/CookiesBanner"
import Layout from "../components/Layout"
import TransitionMain from "../components/TransitionMain"
import Cursor from "../components/cursor/Cursor"
import { GlobalCursorProvider } from "../components/cursor/context"
import LoadScreen from "../components/LoadScreen"
import Footer from "../components/Footer"

const GlobalStyles = createGlobalStyle`
${reset}
${global}
`

export default function MyApp({ Component, pageProps }) {
  const [loader, setLoader] = React.useState(true)

  return (
    <>
      <GlobalCursorProvider>
        <Head>
          <link
            rel="icon"
            type="image/ico"
            href="https://badoo.com/static/favicon.ico"
          />
        </Head>
        <GlobalStyles />
        <CookiesBanner />
        <Layout {...pageProps}>
          <TransitionMain>
            <Component {...pageProps} loader={loader} />
            <Footer {...pageProps} />
          </TransitionMain>
        </Layout>
        <Cursor />
        <LoadScreen loader={loader} setLoader={setLoader} />
      </GlobalCursorProvider>
    </>
  )
}

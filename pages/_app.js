import { createGlobalStyle } from "styled-components"
import "../styles/fonts.css"
import reset from "../styles/reset"
import global from "../styles/global"
import CookiesBanner from "../components/CookiesBanner"
import Layout from "../components/Layout"
import TransitionMain from "../components/TransitionMain"
import Cursor from "../components/cursor/Cursor"
import { GlobalCursorProvider } from "../components/cursor/context"

const GlobalStyles = createGlobalStyle`
${reset}
${global}
`

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalCursorProvider>
        <GlobalStyles />
        <CookiesBanner />
        <Layout {...pageProps}>
          <TransitionMain>
            <Component {...pageProps} />
          </TransitionMain>
        </Layout>
        <Cursor />
      </GlobalCursorProvider>
    </>
  )
}

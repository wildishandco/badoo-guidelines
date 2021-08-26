import Document, { Html, Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="apple-touch-icon"
            href="https://badoo.com/static/favicon.ico"
          ></link>
          <meta name="theme-color" content="#6e3eff" />
        </Head>
        <body>
          <Main />
          <div className="portal" id="portal-side" />
          <div className="portal" id="portal-menu" style={{ zIndex: 99999 }} />
          <div
            className="portal"
            id="portal-loader"
            style={{ zIndex: 999999 }}
          />
          <div className="portal" id="portal-images" />
          <div className="portal" id="portal-voice" />
          <NextScript />
        </body>
      </Html>
    )
  }
}

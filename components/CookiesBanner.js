import * as React from "react"
import Head from "next/head"
import CookieConsent from "react-cookie-consent"
import favicon from "../assets/favicon.ico"
import Analytics from "./Analytics"
import { getCookie } from "../lib/getCookie"

export default function CookiesBanner() {
  const [cookiesAccepted, setCookiesAccepted] = React.useState(false)

  React.useEffect(() => {
    const cookieGA = getCookie("cookies_settings")
    if (cookieGA === "true") {
      setCookiesAccepted(true)
    } else {
      setCookiesAccepted(false)
    }
  }, [])

  return (
    <>
      {cookiesAccepted ? (
        <Analytics />
      ) : (
        <Head>
          <link rel="icon" type="image/ico" href={favicon} />
        </Head>
      )}
      <CookieConsent
        onAccept={() => setCookiesAccepted(true)}
        onDecline={() => setCookiesAccepted(false)}
        location="bottom"
        buttonText="Accept all"
        enableDeclineButton
        declineButtonText="Decline"
        cookieName="cookies_settings"
        disableStyles={true}
        containerClasses="cookies-container"
        buttonWrapperClasses="cookies-buttons"
        contentClasses="cookies-inner"
      >
        <>
          We use cookies to make our site work better. This includes analytics
          cookies and advertising cookies. For more information, please check
          our{" "}
          <a href="https://badoo.com/cookie-policy/" target="_blank">
            Cookie Policy.
          </a>
        </>
      </CookieConsent>
    </>
  )
}

import Head from "next/head"
import favicon from "../assets/favicon.ico"

export default function Analytics() {
  return (
    <>
      <Head>
        <link rel="icon" type="image/ico" href={favicon} />
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-198483278-1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-198483278-1');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KR5VRQR');`,
          }}
        /> */}
      </Head>
    </>
  )
}

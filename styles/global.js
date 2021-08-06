import { css } from "styled-components"

const globalCss = css`
  :root {
    --badoo-purple: #6e3eff;
    --hot-pink: #ff4d88;
    --lilac: #bca8f2;
    --blush: #ffbbd0;
    --champagne: #ffe7ba;
    --violet: #370e7b;
    --indigo: #055499;
    --blue: #617ee7;
    --green: #04a39c;
    --honeymoon: #ffa34e;
    --coral: #fc846d;
    --cloud-nine: #f8f5ff;
    --silver: #aaa2b8;
  }

  body {
    font-family: "Noi", sans-serif;
    font-style: normal;
    font-feature-settings: "ss01", "ss02", "ss03", "ss05";
    font-variation-settings: "wght" 400;
    font-weight: normal;

    font-size: 20px;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
    line-height: 1.55;

    letter-spacing: 0em;
    word-spacing: 0em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }

  .portal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 10;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-variation-settings: "wght" 700;
    font-weight: normal;
  }

  a {
    font-size: inherit;
    color: inherit;
    cursor: pointer;
  }

  button {
    cursor: pointer;
    font-size: inherit;
    color: inherit;
    outline: none;
    border: none;
    background: transparent;
    :focus {
      outline: none;
    }
  }

  img,
  video {
    object-fit: cover;
  }

  ul {
    list-style-position: outside;
    margin-left: 18px !important;
    li {
      margin-bottom: 1rem !important;
    }
  }

  ol {
    list-style-position: outside;
    margin-left: 22px !important;
    li {
      margin-bottom: 1rem !important;
    }
  }

  /* Smooth scrolling styles */

  #viewport {
    overflow: hidden;
    height: 100%;
    width: 100%;
  }

  /* 

  #scroll-content {
    overflow: visible;
    width: 100%;
    set a height because the contents are position: absolute, thus natively there's no height */


  /*  End smooth scrolling styles  */

  .iframe-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .sanitised-html {
    * {
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-word;
    }
    *:not(li) {
      margin: 0 auto 30px auto;
      &:last-child {
        margin: 0;
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
    }

    .sanitised-img {
      display: block;
      max-width: 350px;
      width: 100%;
      margin: 10px auto !important;
    }

    .sanitised-anchor {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .cookies-container {
    position: fixed;
    z-index: 999;
    bottom: 0;
    left: 0;
    width: 100%;
    background: var(--colour-6);
    padding: 10px;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      text-decoration: underline;
    }
    @media screen and (max-width: 600px) {
      flex-direction: column;
      text-align: center;
    }
  }

  .cookies-inner {
    max-width: 700px;
  }

  .cookies-buttons {
    display: flex;
    margin-left: 10px;
    width: 400px;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 600px) {
      margin-left: 0;
      margin-top: 10px;
      width: auto;
    }
  }

  #rcc-decline-button {
    text-decoration: underline;
  }

  #rcc-confirm-button {
    background: #fff;
    color: var(--colour-6);
    padding: 5px;
    border-radius: 5px;
    margin: 0 10px;
  }

  /* Colour Schemes */

  .badoo-purple {
    background: var(--badoo-purple);
    color: var(--blush);
  }

  .hot-pink {
    background: var(--hot-pink);
    color: var(--violet);
  }

  .lilac {
    background: var(--lilac);
    color: var(--violet);
  }

  .blush {
    background: var(--blush);
    color: var(--violet);
  }

  .champagne {
    background: var(--champagne);
    color: var(--violet);
  }

  .violet {
    background: var(--violet);
    color: var(--champagne);
  }

  .indigo {
    background: var(--indigo);
    color: var(--cloud-nine);
  }

  .blue {
    background: var(--blue);
    color: var(--cloud-nine);
  }

  .green {
    background: var(--green);
    color: var(--cloud-nine);
  }

  .honeymoon {
    background: var(--honeymoon);
    color: var(--cloud-nine);
  }

  .coral {
    background: var(--coral);
    color: var(--cloud-nine);
  }

  .cloud-nine {
    background: var(--cloud-nine);
    color: var(--silver);
  }

  .silver {
    background: var(--silver);
    color: var(--cloud-nine);
  }

  /* End Colour Schemes */

  /* Grid block global styles */

  .fill-image {
    position: absolute !important;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    object-fit: cover;
  }

  .fill-video {
    position: absolute !important;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .grid-block-text-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .grid-block-text {
    padding: 20px;
    font-size: 5vw;
    line-height: 1.25;
  }

  /* End Grid block global styles */
`

export default globalCss

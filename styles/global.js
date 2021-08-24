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

    --change-background: #6e3eff;
    --change-color: #ffbbd0;
  }

  body {
    font-family: "Noi", sans-serif;
    font-style: normal;

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

  .not-creamy {
    font-feature-settings: unset !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .bold {
    font-variation-settings: "wght" 700;
    font-weight: normal;
    font-feature-settings: "ss01", "ss02", "ss03";
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.3;
  }

  h1,
  h2 {
    font-size: 60px;
    @media (max-width: 768px) {
      font-size: 48px;
    }
    @media (max-width: 480px) {
      font-size: 40px;
    }
  }

  h3 {
    font-size: 40px;
    @media (max-width: 768px) {
      font-size: 30px;
    }
    @media (max-width: 480px) {
      font-size: 22px;
    }
  }

  h4,
  h5,
  h6 {
    font-size: 32px;
    @media (max-width: 768px) {
      font-size: 24px;
    }
    @media (max-width: 480px) {
      font-size: 18px;
    }
  }

  a {
    font-size: inherit;
    color: inherit;
    cursor: pointer;
  }

  blockquote {
    font-size: 3rem;
    font-variation-settings: "wght" 700, "ital" 100;
    font-weight: normal;
    padding: 20px 0;
    line-height: 1.3;
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
    list-style-position: inside;
    li {
      margin-bottom: 1rem !important;
    }
  }

  ol {
    list-style-position: inside;
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
    color: var(--badoo-purple);
    padding: 5px;
    border-radius: 5px;
    margin: 0 10px;
  }

  /* Colour Schemes */

  .badoo-purple {
    background: var(--badoo-purple);
    color: var(--blush);
    .a {
      fill: var(--blush);
    }
  }

  .hot-pink {
    background: var(--hot-pink);
    color: var(--violet);
    .a {
      fill: var(--violet);
    }
  }

  .lilac {
    background: var(--lilac);
    color: var(--violet);
    .a {
      fill: var(--violet);
    }
  }

  .blush {
    background: var(--blush);
    color: var(--violet);
    .a {
      fill: var(--violet);
    }
  }

  .champagne {
    background: var(--champagne);
    color: var(--violet);
    .a {
      fill: var(--violet);
    }
  }

  .violet {
    background: var(--violet);
    color: var(--champagne);
    .a {
      fill: var(--champagne);
    }
  }

  .indigo {
    background: var(--indigo);
    color: var(--cloud-nine);
    .a {
      fill: var(--cloud-nine);
    }
  }

  .blue {
    background: var(--blue);
    color: var(--cloud-nine);
    .a {
      fill: var(--cloud-nine);
    }
  }

  .green {
    background: var(--green);
    color: var(--cloud-nine);
    .a {
      fill: var(--cloud-nine);
    }
  }

  .honeymoon {
    background: var(--honeymoon);
    color: var(--cloud-nine);
    .a {
      fill: var(--cloud-nine);
    }
  }

  .coral {
    background: var(--coral);
    color: var(--cloud-nine);
    .a {
      fill: var(--cloud-nine);
    }
  }

  .cloud-nine {
    background: var(--cloud-nine);
    color: var(--silver);
    .a {
      fill: var(--silver);
    }
  }

  .silver {
    background: var(--silver);
    color: var(--cloud-nine);
    .a {
      fill: var(--cloud-nine);
    }
  }

  .changing-colours {
    background: var(--change-background);
    color: var(--change-color);
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
    font-size: 4vw;
    line-height: 1.1;
    @media (max-width: 500px) {
      font-size: 6vw;
    }
  }

  .grid-block-text-big {
    padding: 20px;
    font-size: 6vw;
    line-height: 1.1;
  }

  /* End Grid block global styles */

  /* input range styles */

  input[type="range"] {
    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
    width: 100%; /* Specific width is required for Firefox. */
    background: transparent; /* Otherwise white in Chrome */
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  input[type="range"]:focus {
    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
  }

  input[type="range"]::-ms-track {
    width: 100%;
    cursor: pointer;

    /* Hides the slider so custom styles can be added */
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: var(--violet);
    cursor: pointer;
    margin-top: -6px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
  }

  /* All the same stuff for Firefox */
  input[type="range"]::-moz-range-thumb {
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: var(--violet);
    cursor: pointer;
  }

  /* All the same stuff for IE */
  input[type="range"]::-ms-thumb {
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: var(--violet);
    cursor: pointer;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    background: var(--violet);
  }

  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: var(--violet);
  }

  input[type="range"]::-moz-range-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    background: var(--violet);
  }

  input[type="range"]::-ms-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }
  input[type="range"]::-ms-fill-lower {
    background: var(--violet);
  }
  input[type="range"]:focus::-ms-fill-lower {
    background: var(--violet);
  }
  input[type="range"]::-ms-fill-upper {
    background: var(--violet);
  }
  input[type="range"]:focus::-ms-fill-upper {
    background: var(--violet);
  }

  /* end input range styles  */

  .scrollbar-track {
    opacity: 0 !important;
  }
`

export default globalCss

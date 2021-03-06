import React from "react"
import styled from "styled-components"
import SanitisedHtml from "../SanitisedHtml"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const ColourHierachyStyles = styled.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  @media (max-width: 768px) {
    display: none;
  }
  .colour-scroll-copy {
    max-width: 600px;
    padding: 60px;
    @media (max-width: 480px) {
      padding: 20px;
    }
  }
  .colour-scroll-block {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    width: 40%;
    @media (max-width: 768px) {
      width: 80%;
    }
    &.colour-scroll-block-secondary {
      width: 18%;
      @media (max-width: 768px) {
        width: 38%;
      }
    }
    .colour-scroll-item {
      flex: 1;
    }
  }
`

const ColourHierachyMobileStyles = styled.section`
  min-height: 100vh;
  position: relative;
  display: none;
  align-items: center;
  overflow: hidden;
  @media (max-width: 768px) {
    display: flex;
  }
  .colour-scroll-copy-mobile {
    max-width: 600px;
    padding: 60px;
    @media (max-width: 480px) {
      padding: 20px;
    }
  }
  .colour-scroll-block {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    width: 80%;
    &.colour-scroll-block-secondary-mobile {
      width: 38%;
    }
    .colour-scroll-item {
      flex: 1;
    }
  }
`

export default function ColourHierachyBlock({ s }) {
  const sectionRef = React.useRef(null)
  const primaryRef = React.useRef(null)
  const secondaryRef = React.useRef(null)

  const mobileRef = React.useRef(null)

  React.useEffect(() => {
    setTimeout(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          pin: true,
          trigger: sectionRef.current,
          scrub: true,
        },
      })

      tl.fromTo(
        ".colour-scroll-copy",
        { y: 200, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4 }
      )
        .from(".colour-scroll-block-primary", {
          xPercent: 100,
          duration: 0.5,
        })
        .from(".colour-scroll-block-secondary", {
          xPercent: 100,
          duration: 0.5,
        })
        .add(function () {}, "+=0.5")

      let tl_mobile = gsap.timeline({
        scrollTrigger: {
          pin: true,
          trigger: mobileRef.current,
          scrub: true,
        },
      })

      tl_mobile
        .fromTo(
          ".colour-scroll-copy-mobile",
          { y: 200, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4 }
        )
        .add(function () {}, "+=1")
        .to(".colour-scroll-copy-mobile", {
          y: -200,
          opacity: 0,
          duration: 0.8,
        })
        .from(".colour-scroll-block-primary-mobile", {
          xPercent: 100,
          duration: 0.5,
        })
        .from(".colour-scroll-block-secondary-mobile", {
          xPercent: 100,
          duration: 0.5,
        })
        .add(function () {}, "+=0.5")
    }, 100)
  }, [])

  return (
    <>
      <ColourHierachyStyles ref={sectionRef} className="badoo-purple ref-test">
        <SanitisedHtml
          dontanimate="true"
          className="colour-scroll-copy"
          html={s?.copy}
        />
        <div
          ref={primaryRef}
          className="colour-scroll-block colour-scroll-block-primary"
        >
          <div className="colour-scroll-item hot-pink"></div>
          <div className="colour-scroll-item lilac"></div>
          <div className="colour-scroll-item blush"></div>
          <div className="colour-scroll-item champagne"></div>
          <div className="colour-scroll-item violet"></div>
        </div>
        <div
          ref={secondaryRef}
          className="colour-scroll-block colour-scroll-block-secondary"
        >
          <div className="colour-scroll-item indigo"></div>
          <div className="colour-scroll-item blue"></div>
          <div className="colour-scroll-item green"></div>
          <div className="colour-scroll-item honeymoon"></div>
          <div className="colour-scroll-item coral"></div>
          <div className="colour-scroll-item cloud-nine"></div>
          <div className="colour-scroll-item silver"></div>
        </div>
      </ColourHierachyStyles>
      <ColourHierachyMobileStyles
        ref={mobileRef}
        className="badoo-purple ref-test"
      >
        <SanitisedHtml
          dontanimate="true"
          className="colour-scroll-copy-mobile"
          html={s?.copy}
        />
        <div
          ref={primaryRef}
          className="colour-scroll-block colour-scroll-block-primary-mobile"
        >
          <div className="colour-scroll-item hot-pink"></div>
          <div className="colour-scroll-item lilac"></div>
          <div className="colour-scroll-item blush"></div>
          <div className="colour-scroll-item champagne"></div>
          <div className="colour-scroll-item violet"></div>
        </div>
        <div
          ref={secondaryRef}
          className="colour-scroll-block colour-scroll-block-secondary-mobile"
        >
          <div className="colour-scroll-item indigo"></div>
          <div className="colour-scroll-item blue"></div>
          <div className="colour-scroll-item green"></div>
          <div className="colour-scroll-item honeymoon"></div>
          <div className="colour-scroll-item coral"></div>
          <div className="colour-scroll-item cloud-nine"></div>
          <div className="colour-scroll-item silver"></div>
        </div>
      </ColourHierachyMobileStyles>
    </>
  )
}

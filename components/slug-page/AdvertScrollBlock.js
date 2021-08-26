import React from "react"
import styled from "styled-components"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { Image } from "react-datocms"
import logo from "../../assets/badoo-heart-logo.svg"
import google from "../../assets/google-play-badge.svg"
import apple from "../../assets/app-store.svg"
import cherries from "../../assets/cherries-sticker-ad.svg"

gsap.registerPlugin(ScrollTrigger)

const AdScrollStyles = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25vw;
  overflow: hidden;
  @media (max-width: 768px) {
    display: none;
  }
  .ad-scroll-inner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    opacity: 0;
    .ad-scroll-left {
      max-width: 50%;
      flex: 1;
      padding: 1vw;
      position: relative;
      h2 {
        font-size: 11vw;
        line-height: 0.9;
        .ad-span {
          display: inline-block;
          opacity: 0;
        }
      }
      .ad-badoo-cherries {
        width: 12vw;
        position: absolute;
      }
      .ad-badoo-cherries-1 {
        top: 28%;
        left: 20%;
      }
      .ad-badoo-cherries-2 {
        top: 50%;
        left: 71%;
      }
      .ad-badoo-cherries-3 {
        top: 68%;
        left: 40%;
      }
      .ad-badoo-logo {
        width: 8vw;
        object-fit: unset;
        position: absolute;
        bottom: 2vw;
        left: 2vw;
      }
      .ad-download-badoo {
        position: absolute;
        bottom: 2vw;
        right: 2vw;
        font-variation-settings: "wght" 500;
        p {
          font-size: 1.8vw;
        }
        .ad-download-badoo-buttons {
          display: flex;
          max-width: 14vw;
          overflow: hidden;
          img {
            height: 2.1vw;
            &:first-child {
              margin-right: 0.5vw;
            }
          }
        }
      }
    }
    .ad-scroll-right {
      flex: 1;
      max-width: 50%;
    }
  }
`

export default function AdvertScrollBlock({ s }) {
  const wrapperRef = React.useRef(null)
  const leftRef = React.useRef(null)
  const rightRef = React.useRef(null)

  React.useEffect(() => {
    setTimeout(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          pin: true,
          scrub: true,
          end: "+=4500",
        },
        defaults: {
          ease: "power4.out",
          duration: 1,
        },
      })

      tl
        .to(".ad-scroll-inner", {
          opacity: 1,
          duration: 0.1,
        })
        .fromTo(
          rightRef.current,
          { xPercent: 100 },
          { xPercent: 0, duration: 1 }
        )
        .set(".ad-span", { opacity: 1 })
        .fromTo(".ad-badoo-logo", { scale: 0 }, { scale: 1 }, "<")
        .fromTo(".ad-span-honesty", { x: -1000 }, { x: 0 })
        .fromTo(".ad-span-is", { x: -1000 }, { x: 0, duration: 1.1 }, "<")
        .fromTo(".ad-span-a", { x: -1000 }, { x: 0 }, "<")
        .fromTo(".ad-span-turn", { x: 1000 }, { x: 0 }, "<")
        .fromTo(".ad-span-on", { x: -1000 }, { x: 0, duration: 1.1 }, "<")
        .fromTo(".ad-download-badoo", { x: 1000 }, { x: 0 })
        .to(".ad-span-is", { x: "22vw" })
        .to(".ad-span-a", { x: "22vw" }, "<")
        .to(".ad-span-turn", { yPercent: 100, x: "-20vw" }, "<")
        .to(".ad-span-on", { yPercent: 100, x: "34vw" }, "<")
        .to(".ad-scroll-image-wrapper", { css: { padding: "3vw" } }, "<")
        .to(".ad-span-u", { yPercent: 50 })
        .to(".ad-span-r", { yPercent: 100 }, "<")
        .to(".ad-span-n", { yPercent: 150 }, "<")
        .to(".ad-span-is", { x: "19vw" }, "<")
        .to(".ad-span-on", { yPercent: 175 }, "<")
        .to(".ad-scroll-image-wrapper", { rotate: 5 }, "<")
        .fromTo(
          ".ad-badoo-cherries",
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            stagger: 0.3,
            ease: "elastic.out(1,1)",
          }
        )
    }, 100)
  })

  return (
    <>
      <AdScrollStyles ref={wrapperRef}>
        <div className="ad-scroll-inner">
          <div ref={leftRef} className="ad-scroll-left">
            <h2>
              <span className="ad-span ad-span-honesty">Honesty</span>{" "}
              <span className="ad-span ad-span-is">is</span>{" "}
              <span className="ad-span ad-span-a">a</span>{" "}
              <span className="ad-span ad-span-turn">
                <span className="ad-span ad-span-t">t</span>
                <span className="ad-span ad-span-u">u</span>
                <span className="ad-span ad-span-r">r</span>
                <span className="ad-span ad-span-n">n</span>
              </span>{" "}
              <span className="ad-span ad-span-on">on</span>
            </h2>
            <img
              className="ad-badoo-cherries ad-badoo-cherries-1"
              src={cherries}
              alt="cherries sticker"
            />
            <img
              className="ad-badoo-cherries ad-badoo-cherries-2"
              src={cherries}
              alt="cherries sticker"
            />
            <img
              className="ad-badoo-cherries ad-badoo-cherries-3"
              src={cherries}
              alt="cherries sticker"
            />
            <img className="ad-badoo-logo" src={logo} alt="badoo logo" />
            <div className="ad-download-badoo">
              <p>Download Badoo</p>
              <div className="ad-download-badoo-buttons">
                <img src={google} alt="google play" />
                <img src={apple} alt="apple app store" />
              </div>
            </div>
          </div>
          <div ref={rightRef} className="ad-scroll-right">
            <div className="ad-scroll-image-wrapper">
              <Image data={s?.image?.responsiveImage} />
            </div>
          </div>
        </div>
      </AdScrollStyles>
    </>
  )
}

import React from "react"
import styled from "styled-components"
import { Image } from "react-datocms"
import { classNameMaker } from "../../actions/actions"
import SanitisedHtml from "../SanitisedHtml"

const HeroStyles = styled.section`
  display: flex;
  width: 100%;
  min-height: 100vh;
  position: relative;
  @media (max-width: 900px) {
    flex-direction: column;
  }
  .hero-arrow {
    position: absolute;
    bottom: 1vh;
    right: 1%;
    font-size: 3rem;
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
  }
  .hero-section-left {
    padding: 50px;
    width: 50%;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    align-items: end;
    @media (max-width: 900px) {
      width: 100%;
      flex: 1;
      order: 2;
      min-height: calc(100vh / 2);
    }
    @media (max-width: 768px) {
      padding: 50px 30px;
    }
  }
  .hero-section-right {
    position: relative;
    overflow: hidden;
    width: 50%;
    @media (max-width: 900px) {
      width: 100%;
      flex: 1;
      order: 1;
      min-height: calc(100vh / 2);
    }
  }
`

export default function HeroBlock({ s, title }) {
  const colour = classNameMaker(s?.colourScheme)

  return (
    <>
      <HeroStyles className={`${colour}`}>
        <div className="hero-arrow">↓</div>
        <div className="hero-section-left">
          <h1 className="hero-section-title">{title}</h1>
          <SanitisedHtml
            dontAnimate
            className="hero-section-left-html"
            html={s?.introduction}
          />
        </div>
        <div className="hero-section-right">
          {s?.heroMedia?.responsiveImage && (
            <Image
              data={s?.heroMedia?.responsiveImage}
              fadeInDuration={0}
              className="fill-image"
            />
          )}
          {s?.heroMedia?.url.includes(".mp4") && (
            <video
              src={s?.heroMedia?.url}
              className="fill-video"
              loop
              autoPlay
              playsInline
              muted
            />
          )}
        </div>
      </HeroStyles>
    </>
  )
}

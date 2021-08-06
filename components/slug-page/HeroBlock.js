import styled from "styled-components"
import { Image } from "react-datocms"
import { classNameMaker } from "../../actions.js/actions"
import SanitisedHtml from "../SanitisedHtml"

const HeroStyles = styled.section`
  display: flex;
  width: 100%;
  min-height: 95vh;
  .hero-section-left {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    .hero-section-left-html {
      justify-self: flex-end;
    }
  }
  .hero-section-right {
    flex: 1;
    position: relative;
    overflow: hidden;
  }
`

export default function HeroBlock({ s, title }) {
  const colour = classNameMaker(s?.colourScheme)

  return (
    <>
      <HeroStyles className={`${colour}`}>
        <div className="hero-section-left">
          <h1>{title}</h1>
          <SanitisedHtml
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
        </div>
      </HeroStyles>
    </>
  )
}

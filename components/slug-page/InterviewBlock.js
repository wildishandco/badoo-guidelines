import React from "react"
import styled from "styled-components"
import { Image } from "react-datocms"
import SanitisedHtml from "../SanitisedHtml"

const InterviewStyles = styled.div``

const InterviewHeroBlock = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  position: relative;
  text-align: center;
  @media (max-width: 900px) {
    flex-direction: column;
    text-align: left;
  }
  .interview-hero-section-left {
    padding: 50px;
    width: 50%;
    display: grid;
    grid-template-rows: 1fr 1fr 50px;
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

    .interview-hero-buttons {
      button {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--champagne);
        margin: 0 10px;
      }
    }
  }
  .interview-hero-section-right {
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

const InterviewContent = styled(SanitisedHtml)`
  padding: 100px 50px;
  text-align: center;
  @media (max-width: 500px) {
    padding: 80px 30px;
  }
  * {
    margin: auto;
  }
  > * {
    margin-bottom: 40px;
    @media (max-width: 500px) {
      margin-bottom: 30px;
    }
  }
  *:not(img) {
    max-width: 750px;
  }
  img {
    max-width: 100%;
  }
`

export default function InterviewBlock({ s }) {
  const [interviewIndex, setInterviewIndex] = React.useState(0)
  return (
    <>
      <InterviewStyles className="champagne">
        {s?.interviews.map((int, i) => {
          return (
            <>
              {interviewIndex === i && (
                <>
                  <InterviewHeroBlock className="blush">
                    <div className="interview-hero-section-left">
                      <h1>{int?.title}</h1>
                      <h2 className="bold">{int?.introduction}</h2>
                      <div className="interview-hero-buttons">
                        {s?.interviews.length > 1 &&
                          s?.interviews.map((btn, i) => {
                            return (
                              <button
                                onClick={() => setInterviewIndex(i)}
                                style={{
                                  background:
                                    i === interviewIndex ? "var(--violet)" : "",
                                }}
                              />
                            )
                          })}
                      </div>
                    </div>
                    <div className="interview-hero-section-right">
                      {int?.heroImage?.responsiveImage && (
                        <Image
                          data={int?.heroImage?.responsiveImage}
                          fadeInDuration={0}
                          className="fill-image"
                        />
                      )}
                    </div>
                  </InterviewHeroBlock>
                  <InterviewContent center dontAnimate html={int?.content} />
                </>
              )}
            </>
          )
        })}
      </InterviewStyles>
    </>
  )
}

import React from "react"
import styled from "styled-components"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import SanitisedHtml from "../SanitisedHtml"

gsap.registerPlugin(ScrollTrigger)

const VocabConvoStyles = styled.div`
  min-height: 100vh;
  position: relative;
  padding: 50px;
  @media (max-width: 500px) {
    padding: 20px;
  }
  .vocab-intro {
    max-width: 700px;
    margin: auto;
  }
  .vocab-right {
    margin: auto;
    .vocab-animation-wrapper {
      max-width: 700px;
      margin: auto;
      .vocab-animation-section-intro {
        padding: 50px 0;
        justify-self: start;
        .vocab-animation-section-title {
          margin-bottom: 20px;
        }
      }
      .vocab-animation-inner {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        row-gap: 15px;
        width: 100%;
        padding: 5px;
        .vocab-animation-bubble {
          padding: 10px 15px;
          background: white;
          display: inline-block;
          border-radius: 30px 30px 30px 0;
          max-width: 550px;
          justify-self: start;
          position: relative;
          z-index: 2;
          &:nth-child(odd) {
            background: var(--violet);
            color: var(--champagne);
            justify-self: end;
            border-radius: 30px 30px 0 30px;
          }
        }
      }
    }
  }
`

export default function VocabConvoBlock({ s }) {
  const ref = React.useRef(null)

  function vocabAnimation() {
    const containers = Array.from(
      document.querySelectorAll(".vocab-animation-inner")
    )

    containers.forEach((cont, i) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: `.vocab-animation-inner-${i}`,
          start: "top 50%+=200px",
          end: "bottom center",
          scrub: true,
        },
      })

      const bubbles = Array.from(
        document.querySelectorAll(`.vocab-animation-bubble-${i}`)
      )

      bubbles.forEach((item, i) => {
        tl.fromTo(
          item,
          { scale: 0.3, autoAlpha: 0 },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.1,
          }
        )
      })
    })
  }

  React.useEffect(() => {
    setTimeout(() => {
      vocabAnimation()
    }, 100)
  }, [])

  return (
    <>
      <VocabConvoStyles className="lilac vocab-convo">
        <div className="vocab-intro">
          <SanitisedHtml html={s?.copy} />
        </div>
        <div className="vocab-right" ref={ref}>
          <div className="vocab-animation-wrapper">
            {s?.conversations.map((c, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="vocab-animation-section-intro">
                    {c?.name && (
                      <h3
                        className={`vocab-animation-section-title vocab-animation-bubble-${index} bold`}
                      >
                        {c?.name}
                      </h3>
                    )}
                    {c?.paragraph && (
                      <p
                        className={`vocab-animation-section-paragraph vocab-animation-bubble-${index}`}
                      >
                        {c?.paragraph}
                      </p>
                    )}
                  </div>
                  <div
                    className={`vocab-animation-inner vocab-animation-inner-${index}`}
                  >
                    {c?.conversation.map((c, i) => {
                      return (
                        <p
                          key={i}
                          className={`vocab-animation-bubble vocab-animation-bubble-${index}`}
                        >
                          {c}
                        </p>
                      )
                    })}
                  </div>
                </React.Fragment>
              )
            })}
          </div>
        </div>
      </VocabConvoStyles>
    </>
  )
}

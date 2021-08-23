import React from "react"
import styled from "styled-components"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const VocabConvoStyles = styled.div`
  min-height: 100vh;
  display: flex;
  .vocab-right {
    flex: 1;
    .vocab-animation-wrapper {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      row-gap: 10px;
      width: 100%;
      max-width: 500px;
      .vocab-animation-bubble {
        padding: 10px 15px;
        background: white;
        display: inline-block;
        border-radius: 30px;
        max-width: 400px;
        justify-self: start;
        &:nth-child(odd) {
          background: var(--violet);
          color: var(--champagne);
          justify-self: end;
        }
      }
    }
  }
`

export default function VocabConvoBlock({ s }) {
  const ref = React.useRef(null)

  function vocabAnimation() {
    const bubbles = Array.from(
      document.querySelectorAll(".vocab-animation-bubble")
    )

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    })

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
  }

  React.useEffect(() => {
    setTimeout(() => {
      vocabAnimation()
    }, 100)
  }, [])

  return (
    <>
      <VocabConvoStyles ref={ref} className="lilac vocab-convo">
        <div className="vocab-left">
          <h3>Vocabulary dolor sit amet</h3>
          {s?.conversations.map((c, i) => {
            return (
              <>
                <button>{c?.name}</button>
              </>
            )
          })}
        </div>
        <div className="vocab-right">
          <div className="vocab-animation-wrapper">
            {s?.conversations.map((c, i) => {
              return (
                <>
                  {c?.conversation.map((c, i) => {
                    return (
                      <>
                        <p className="vocab-animation-bubble">{c}</p>
                      </>
                    )
                  })}
                </>
              )
            })}
          </div>
        </div>
      </VocabConvoStyles>
    </>
  )
}

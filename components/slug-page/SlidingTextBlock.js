import React from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import styled from "styled-components"
import sanitizeHtml from "sanitize-html"
import { classNameMaker } from "../../actions.js/actions"

gsap.registerPlugin(ScrollTrigger)

const SlidingTextStyles = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  p {
    font-size: 8vw;
    line-height: 1.1;
    @media (max-width: 768px) {
      font-size: 11vw;
    }
  }
`

export default function SlidingTextBlock({ s, i }) {
  const ref = React.useRef(null)
  const colour = classNameMaker(s?.colourScheme)

  const cleanHtml = sanitizeHtml(s?.text, {
    allowedTags: ["p"],
    allowedAttributes: { p: ["class"] },
    transformTags: {
      p: sanitizeHtml.simpleTransform("p", {
        class: `sliding-text-block-item sliding-text-block-item-${i} bold`,
      }),
    },
  })

  React.useEffect(() => {
    setTimeout(() => {
      const items = Array.from(
        document.querySelectorAll(`.sliding-text-block-item-${i}`)
      )

      let tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, scrub: true, pin: true },
      })

      function isEven(value) {
        if (value % 2 == 0) return true
        else return false
      }

      items.forEach((item, i) => {
        tl.fromTo(
          item,
          { xPercent: isEven(i) ? -100 : 100, autoAlpha: 0 },
          {
            xPercent: isEven(i) ? -10 : 10,
            autoAlpha: 1,
            duration: 1,
          }
        )
      })

      tl.scrollTrigger.refresh()
    }, 100)
  }, [])

  return (
    <>
      <div className={`${colour}`}>
        <SlidingTextStyles ref={ref}>
          <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
        </SlidingTextStyles>
      </div>
    </>
  )
}

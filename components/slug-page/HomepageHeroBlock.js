import React from "react"
import { gsap } from "gsap"
import styled from "styled-components"
import sanitizeHtml from "sanitize-html"
import { SlidingTextStyles } from "./SlidingTextBlock"
import { classNameMaker } from "../../actions/actions"

export default function HomepageHeroBlock({ s, i, loader }) {
  const ref = React.useRef(null)
  const colour = classNameMaker(s?.colourScheme)

  const cleanHtml = sanitizeHtml(s?.text, {
    allowedTags: ["h2"],
    allowedAttributes: { h2: ["class"] },
    transformTags: {
      "*": sanitizeHtml.simpleTransform("h2", {
        class: `homepage-hero-block-item`,
      }),
    },
  })

  React.useEffect(() => {
    if (!loader) {
      const items = Array.from(
        document.querySelectorAll(`.homepage-hero-block-item`)
      )

      let tl = gsap.timeline()

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
            duration: 0.4,
          }
        )
      })
    }
  }, [loader])

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

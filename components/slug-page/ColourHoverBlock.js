import React from "react"
import styled from "styled-components"

const ColourHoverStyles = styled.section`
  min-height: 95vh;
  width: 100%;
  position: relative;
  .colour-hover-inner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    .colour-hover-text {
      pointer-events: none;
      .colour-hover-name {
        font-size: 8vw;
      }
      .colour-hover-hex {
        margin-top: 4vh;
      }
    }
  }
`

export default function ColourHoverBlock({ s }) {
  const sectionRef = React.useRef(null)

  function mouseSliderOver() {
    const container = sectionRef.current
    const slides = sectionRef.current.querySelectorAll(".colour-hover-inner")

    container.addEventListener("mousemove", (e) => {
      const y = e.offsetY
      const height = container.offsetHeight
      const percentage = y / height
      const slidesNumber = Math.floor(percentage * slides.length)

      slides.forEach((s) => {
        s.style.zIndex = 0
      })

      slides[slidesNumber].style.zIndex = 1
    })
  }

  React.useEffect(() => {
    mouseSliderOver()
  }, [])

  return (
    <>
      <ColourHoverStyles ref={sectionRef}>
        {s?.colourData?.map((c, i) => (
          <div
            key={i}
            className={`colour-hover-inner ${c.class}`}
            style={{ zIndex: i === 0 ? 1 : 0 }}
          >
            <div className="colour-hover-text">
              <p className="colour-hover-name bold">{c.colour}</p>
              <p className="colour-hover-hex">{c.hex}</p>
            </div>
          </div>
        ))}
      </ColourHoverStyles>
    </>
  )
}

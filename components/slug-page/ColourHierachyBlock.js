import React from "react"
import styled from "styled-components"
import { colourHierachyAnimation } from "../../actions.js/animations"

const ColourHierachyStyles = styled.section`
  min-height: 100vh;
  position: relative;
  .colour-scroll-block {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    width: 40%;
    &.colour-scroll-block-secondary {
      width: 18%;
    }
    .colour-scroll-item {
      flex: 1;
    }
  }
`

export default function ColourHierachyBlock() {
  const sectionRef = React.useRef(null)
  const primaryRef = React.useRef(null)
  const secondaryRef = React.useRef(null)

  React.useEffect(() => {
    setTimeout(() => {
      colourHierachyAnimation()
    }, 10)
  }, [])

  return (
    <>
      <ColourHierachyStyles ref={sectionRef} className="badoo-purple ref-test">
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
    </>
  )
}

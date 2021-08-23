import React from "react"
import styled from "styled-components"
import { Image } from "react-datocms"
import { GridThreeStyles } from "./grid-blocks/GridBlockThree"

const AlphabetStyles = styled.div`
  padding: 20px;
  font-size: 5vw;
  text-align: center;
  letter-spacing: 2.5vw;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function TypographyGridBlock({ s }) {
  const ref = React.useRef(null)
  const pRef = React.useRef(null)

  function textWeightMouseMove(event) {
    const { clientX } = event

    const multiplierWidth = clientX / window.innerWidth
    const randomWeight = multiplierWidth * 900

    pRef.current.style.fontVariationSettings = '"wght" ' + randomWeight
  }

  React.useEffect(() => {
    document.addEventListener("mousemove", textWeightMouseMove)
    return () => document.removeEventListener("mousemove", textWeightMouseMove)
  }, [])

  return (
    <>
      <GridThreeStyles order>
        <div className="grid-block-three-right">
          <div className="grid-block-three-right-inner">
            <AlphabetStyles ref={ref} className="badoo-purple">
              <p ref={pRef}>
                ABCDE
                <br />
                FGHIJK
                <br />
                LMNOPQ
                <br />
                RSTUV
                <br />
                WXYZ
              </p>
            </AlphabetStyles>
          </div>
        </div>
        <div className="grid-block-three-left">
          <div className="grid-block-three-left-inner">
            <div className="grid-block-three-flex">
              <div className="cloud-nine grid-block-three-item">
                {s?.rightImages[0]?.responsiveImage && (
                  <Image
                    className="fill-image"
                    data={s?.rightImages[0]?.responsiveImage}
                    fadeInDuration={0}
                  />
                )}
                {s?.rightImages[0]?.url.includes(".mp4") && (
                  <video
                    className="fill-video"
                    src={s?.rightImages[0]?.url}
                    muted
                    loop
                    autoPlay
                    playsInline
                  />
                )}
              </div>
              <div className="cloud-nine grid-block-three-item">
                {s?.rightImages[1]?.responsiveImage && (
                  <Image
                    className="fill-image"
                    data={s?.rightImages[1]?.responsiveImage}
                    fadeInDuration={0}
                  />
                )}
                {s?.rightImages[1]?.url.includes(".mp4") && (
                  <video
                    className="fill-video"
                    src={s?.rightImages[1]?.url}
                    muted
                    loop
                    autoPlay
                    playsInline
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </GridThreeStyles>
    </>
  )
}

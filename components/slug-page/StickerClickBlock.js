import React from "react"
import styled from "styled-components"
import SanitisedHtml from "../SanitisedHtml"

// stickers
import cherries from "../../assets/sticker-svgs/cherries-sticker.svg"
import clover from "../../assets/sticker-svgs/clover-sticker.svg"
import drinks from "../../assets/sticker-svgs/drinks-sticker.svg"
import eyes from "../../assets/sticker-svgs/eyes-sticker.svg"
import heart from "../../assets/sticker-svgs/heart-sticker.svg"
import smiley from "../../assets/sticker-svgs/smiley-sticker.svg"
import stars from "../../assets/sticker-svgs/stars-sticker.svg"
import target from "../../assets/sticker-svgs/target-sticker.svg"
import tree from "../../assets/sticker-svgs/tree-sticker.svg"

const stickers = [
  cherries,
  clover,
  drinks,
  eyes,
  heart,
  smiley,
  stars,
  target,
  tree,
]

const StickerClickStyles = styled.section`
  min-height: 95vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  .sticker-click {
    position: absolute;
    width: 100px;
    pointer-events: none;
  }
`

export default function StickerClickBlock({ s }) {
  const sectionRef = React.useRef(null)
  const stickerRef = React.useRef(null)
  const [index, setIndex] = React.useState(0)

  let i = 0

  function placeImage(event) {
    event.preventDefault()

    const { offsetX, offsetY } = event
    const nextSrc = stickers[i]

    const img = document.createElement("img")
    img.setAttribute("src", nextSrc)
    img.setAttribute("draggable", "false")
    img.setAttribute("class", "sticker-click")
    img.setAttribute("alt", "sticker")

    img.style.left = `${offsetX}px`
    img.style.top = `${offsetY}px`
    img.style.transform = "translate(-50%, -50%)"

    sectionRef.current.appendChild(img)

    i = i + 1
    if (i >= stickers.length) {
      i = 0
    }

    setIndex(i)
  }

  function handleMouseMove(event) {
    const { offsetX, offsetY } = event

    stickerRef.current.style.left = `${offsetX}px`
    stickerRef.current.style.top = `${offsetY}px`
  }

  React.useEffect(() => {
    sectionRef.current.addEventListener("click", placeImage)
    sectionRef.current.addEventListener("touchdown", placeImage)
    sectionRef.current.addEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      <StickerClickStyles ref={sectionRef} className="indigo">
        <img
          alt="sticker"
          ref={stickerRef}
          src={stickers[index]}
          width="100px"
          style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            zIndex: 10,
          }}
        />
        <SanitisedHtml html={s?.copy} />
      </StickerClickStyles>
    </>
  )
}

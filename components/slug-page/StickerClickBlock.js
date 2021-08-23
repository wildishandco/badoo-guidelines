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
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  cursor: none;
  font-size: 5rem;
  padding: 50px;
  @media (max-width: 900px) {
    font-size: 4rem;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
    min-height: unset;
  }
  @media (max-width: 480px) {
    font-size: 1.6rem;
    padding: 50px 30px;
  }
  .sticker-click {
    position: absolute;
    width: 100px;
    pointer-events: none;
    @media (max-width: 500px) {
      width: 60px;
    }
  }
  .sticker-mouse-image {
    position: absolute;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 10;
    width: 100px;
    @media (max-width: 500px) {
      width: 60px;
    }
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
      <div className="indigo bold">
        <StickerClickStyles ref={sectionRef}>
          <img
            alt="sticker"
            ref={stickerRef}
            src={stickers[index]}
            className="sticker-mouse-image"
          />
          <SanitisedHtml
            html={s?.copy}
            style={{ maxWidth: 1300, pointerEvents: "none" }}
          />
        </StickerClickStyles>
      </div>
    </>
  )
}

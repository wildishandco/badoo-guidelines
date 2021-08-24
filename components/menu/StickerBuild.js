import React from "react"
import styled from "styled-components"
import RandomSticker from "./RandomSticker"
import { gsap } from "gsap"

// stickers
import cherries from "../../assets/sticker-svgs-menu/cherries-sticker.svg"
import clover from "../../assets/sticker-svgs-menu/clover-sticker.svg"
import drinks from "../../assets/sticker-svgs-menu/drinks-sticker.svg"
import eyes from "../../assets/sticker-svgs-menu/eyes-sticker.svg"
import heart from "../../assets/sticker-svgs-menu/heart-sticker.svg"
import smiley from "../../assets/sticker-svgs-menu/smiley-sticker.svg"
import stars from "../../assets/sticker-svgs-menu/stars-sticker.svg"
import target from "../../assets/sticker-svgs-menu/target-sticker.svg"
import tree from "../../assets/sticker-svgs-menu/tree-sticker.svg"

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

const StickerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 3;
  overflow: hidden;
`

export default function StickerBuild() {
  React.useEffect(() => {
    gsap.to(".random-sticker", {
      opacity: 1,
      duration: 0.2,
      stagger: 0.2,
    })
  }, [])

  return (
    <>
      <StickerContainer>
        {Array.from({ length: 20 }, () =>
          stickers.map((s, i) => {
            return (
              <>
                <RandomSticker key={i} src={s} className="random-sticker" />
              </>
            )
          })
        )}
      </StickerContainer>
    </>
  )
}

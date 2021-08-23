import React from "react"
import { Image } from "react-datocms"
import styled from "styled-components"

const StickerGridStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  width: 100%;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  .sticker-grid-wrapper {
    padding-top: 25vw;
    background: var(--badoo-purple);
    position: relative;
    @media (max-width: 768px) {
      padding-top: 50vw;
    }
  }
`

export default function StickerGridBlock({ s }) {
  return (
    <>
      <StickerGridStyles>
        {s?.stickers?.map((s, i) => {
          return (
            <>
              <div className="sticker-grid-wrapper">
                {s?.responsiveImage && (
                  <Image
                    data={s?.responsiveImage}
                    className="fill-image"
                    fadeInDuration={0}
                  />
                )}
                {s?.url.includes(".mp4") && (
                  <video
                    className="fill-video"
                    src={s?.url}
                    muted
                    loop
                    autoPlay
                    playsInline
                  />
                )}
              </div>
            </>
          )
        })}
      </StickerGridStyles>
    </>
  )
}

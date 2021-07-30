import React from "react"
import { StructuredText } from "react-datocms"
import styled from "styled-components"
import { gsap } from "gsap"
import RandomImage from "./RandomImage"

gsap.config({ nullTargetWarn: false })

const ImagesContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 3;
`

export default function ImageBuildBlock({ s }) {
  const [galleryId, setGalleryId] = React.useState("")

  React.useEffect(() => {
    gsap.to(".random-image", {
      opacity: 1,
      duration: 0.2,
      stagger: 0.2,
    })
  })

  return (
    <>
      <StructuredText
        data={s.content}
        renderLinkToRecord={({ record, children }) => {
          switch (record.__typename) {
            case "GalleryRecord":
              return (
                <>
                  <span
                    onMouseEnter={() => setGalleryId(record.id)}
                    onMouseLeave={() => setGalleryId("")}
                  >
                    {children}
                  </span>
                  <>
                    {galleryId === record.id && (
                      <ImagesContainer>
                        {Array.from({ length: 20 }, () => record?.gallery)
                          .flat()
                          .map((t, i) => {
                            return (
                              <RandomImage
                                key={i}
                                image={t.responsiveImage}
                                className="random-image"
                              />
                            )
                          })}
                      </ImagesContainer>
                    )}
                  </>
                </>
              )
            default:
              return null
          }
        }}
      />
    </>
  )
}

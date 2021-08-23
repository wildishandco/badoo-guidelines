import React from "react"
import { StructuredText } from "react-datocms"
import styled from "styled-components"
import { gsap } from "gsap"
import RandomImage from "./RandomImage"
import Portal from "../Portal"
import { classNameMaker } from "../../actions/actions"

gsap.config({ nullTargetWarn: false })

const ImageBuildStyles = styled.div`
  min-height: 100vh;
  font-size: 5rem;
  padding: 50px;
  max-width: 1300px;
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
  span {
    position: relative;
    border-radius: 5rem;
    white-space: nowrap;

    border: 3px solid
      ${(props) =>
        props.borderColour === "badoo-purple"
          ? "var(--blush)"
          : props.borderColour === "hot-pink" ||
            props.borderColour === "lilac" ||
            props.borderColour === "blush" ||
            props.borderColour === "champagne"
          ? "var(--violet)"
          : props.borderColour === "violet"
          ? "var(--champagne)"
          : props.borderColour === "cloud-nine"
          ? "var(--silver)"
          : "var(--cloud-nine)"};
    padding: 0px 1.5% 1.5% 1.5%;
    cursor: pointer;
    @media (max-width: 768px) {
      border: 2px solid
        ${(props) =>
          props.borderColour === "badoo-purple"
            ? "var(--blush)"
            : props.borderColour === "hot-pink" ||
              props.borderColour === "lilac" ||
              props.borderColour === "blush" ||
              props.borderColour === "champagne"
            ? "var(--violet)"
            : props.borderColour === "violet"
            ? "var(--champagne)"
            : props.borderColour === "cloud-nine"
            ? "var(--silver)"
            : "var(--cloud-nine)"};
    }
    :hover {
      color: ${(props) =>
        props.borderColour ? "var(--" + props.borderColour + ")" : "white"};
      background: ${(props) =>
        props.borderColour === "badoo-purple"
          ? "var(--blush)"
          : props.borderColour === "hot-pink" ||
            props.borderColour === "lilac" ||
            props.borderColour === "blush" ||
            props.borderColour === "champagne"
          ? "var(--violet)"
          : props.borderColour === "violet"
          ? "var(--champagne)"
          : props.borderColour === "cloud-nine"
          ? "var(--silver)"
          : "var(--cloud-nine)"};
    }
  }
`

const ImagesContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 3;
  overflow: hidden;
`

export default function ImageBuildBlock({ s }) {
  const [galleryId, setGalleryId] = React.useState("")
  const colour = classNameMaker(s?.colourScheme)

  React.useEffect(() => {
    gsap.to(".random-image", {
      opacity: 1,
      duration: 0.2,
      stagger: 0.2,
    })
  }, [galleryId])

  return (
    <>
      <div className={`${colour}`}>
        <ImageBuildStyles className="bold" borderColour={colour}>
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
                        <Portal where="images">
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
                        </Portal>
                      </>
                    </>
                  )
                default:
                  return null
              }
            }}
          />
        </ImageBuildStyles>
      </div>
    </>
  )
}

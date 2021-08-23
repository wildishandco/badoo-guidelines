import React from "react"
import Link from "next/link"
import styled from "styled-components"
import { classNameMaker } from "../actions/actions"

const LeftNavigation = styled.div`
  position: fixed;
  bottom: 0;
  top: 0;
  width: 50px;
  pointer-events: all;
  transition: 0.4s ease all;
  @media (max-width: 768px) {
    width: 40px;
    left: 0 !important;
  }
  @media (max-width: 480px) {
    display: none;
  }
  .nav-container {
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
    }
    p {
      white-space: nowrap;
      transform: rotate(-90deg);
      pointer-events: none;
    }
  }
`

const RightNavigation = styled(LeftNavigation)`
  @media (max-width: 768px) {
    left: unset !important;
    right: 0 !important;
  }

  .nav-container {
    p {
      transform: rotate(90deg);
    }
  }
`

export default function SideNavigation({ previous, next }) {
  const [position, setPosition] = React.useState("")

  const prevColour = previous?.content[0]?.colourScheme
    ? classNameMaker(previous?.content[0]?.colourScheme)
    : "badoo-purple"
  const nextColour = next?.content[0]?.colourScheme
    ? classNameMaker(next?.content[0]?.colourScheme)
    : "badoo-purple"

  function detectMousePosition(event) {
    const { clientX } = event

    if (clientX < 100) {
      setPosition("left")
    }

    if (clientX > window.innerWidth - 100) {
      setPosition("right")
    }

    if (clientX > 100 && clientX < window.innerWidth - 100) {
      setPosition("")
    }
  }

  React.useEffect(() => {
    document.addEventListener("mousemove", detectMousePosition)
    return () => document.removeEventListener("mousemove", detectMousePosition)
  }, [])

  return (
    <>
      <LeftNavigation
        className={`${prevColour}`}
        style={{ left: position === "left" ? "0px" : "-50px" }}
      >
        <div className="nav-container">
          <Link href={previous ? `/${previous?.slug}` : "/"}> </Link>
          <p>{previous ? previous?.title : "Home"}</p>
        </div>
      </LeftNavigation>
      <RightNavigation
        className={`${nextColour}`}
        style={{ right: position === "right" ? "0px" : "-50px" }}
      >
        <div className="nav-container">
          <Link href={next ? `/${next?.slug}` : "/"}> </Link>
          <p>{next ? next?.title : "Home"}</p>
        </div>
      </RightNavigation>
    </>
  )
}

import React from "react"
import styled from "styled-components"
import { useCursorDispatchContext, useCursorStateContext } from "./context"

const CursorStyles = styled.div`
  width: 30px;
  height: 30px;
  position: fixed;
  z-index: 9999;
  border-radius: 50%;
  background: yellow;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
  pointer-events: none;
  transition: 0.1s ease;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export default function Cursor() {
  const cursorRef = React.useRef(null)
  const dispatch = useCursorDispatchContext()
  const { cursor } = useCursorStateContext()

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event
    const side = window.innerWidth / 2

    if (clientX < side) {
      dispatch({ type: "UPDATE_CURSOR", cursor: "left" })
    } else if (clientX > side) {
      dispatch({ type: "UPDATE_CURSOR", cursor: "right" })
    }

    cursorRef.current.style.left = `${clientX}px`
    cursorRef.current.style.top = `${clientY}px`
  }

  React.useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      <CursorStyles ref={cursorRef}>{cursor}</CursorStyles>
    </>
  )
}

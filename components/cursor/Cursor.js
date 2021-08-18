import React from "react"
import styled from "styled-components"
import { useCursorDispatchContext, useCursorStateContext } from "./context"

const CursorStyles = styled.div`
  position: fixed;
  z-index: 9999;
  transform: translate(-50%, -50%);
  pointer-events: none;
  font-size: 4rem;
  color: var(--blush);
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export default function Cursor() {
  const cursorRef = React.useRef(null)
  const dispatch = useCursorDispatchContext()
  const { cursor, menu } = useCursorStateContext()

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event
    const side = window.innerWidth - 100
    const hamburgerSide = window.innerWidth - 80
    const bottom = window.innerHeight - 100

    if (clientY > bottom) {
      dispatch({ type: "UPDATE_CURSOR", cursor: "↓" })
    } else if (clientX < 100) {
      dispatch({ type: "UPDATE_CURSOR", cursor: "←" })
      dispatch({ type: "UPDATE_DIRECTION", direction: "left" })
    } else if (clientX > hamburgerSide && clientY < 80) {
      dispatch({ type: "UPDATE_CURSOR", cursor: "" })
      dispatch({ type: "UPDATE_DIRECTION", direction: "right" })
    } else if (clientX > side) {
      dispatch({ type: "UPDATE_CURSOR", cursor: "→" })
      dispatch({ type: "UPDATE_DIRECTION", direction: "right" })
    } else {
      dispatch({ type: "UPDATE_CURSOR", cursor: "" })
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
      <CursorStyles ref={cursorRef}>{`${cursor}`}</CursorStyles>
    </>
  )
}

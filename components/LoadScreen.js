import React from "react"
import styled, { keyframes } from "styled-components"
import Portal from "./Portal"

const pathAnimation = keyframes`
  from {
    stroke-dashoffset: 235.27294921875;
  }
  to {
    stroke-dashoffset: 0;
  }
`

const loadingZoom = keyframes`
    from {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
    }
    to {
        transform: translate(-50%, -50%) scale(25);
        opacity: 0;
    }
`

const LoadingStyles = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);

  background: var(--badoo-purple);
  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${loadingZoom} 0.6s linear forwards;
  animation-delay: 1s;
  svg {
    width: 250px;
  }
`

const SmilePath = styled.path`
  fill: none;
  stroke: var(--badoo-purple);
  stroke-width: 31.5;
  stroke-miterlimit: 10;

  stroke-dasharray: 235.27294921875;
  stroke-dashoffset: 235.27294921875;
  animation: ${pathAnimation} 0.5s linear forwards;
  animation-delay: 0.2s;
`

export default function LoadScreen({ loader, setLoader }) {
  React.useEffect(() => {
    window.addEventListener("load", () => {
      setTimeout(() => {
        setLoader(false)
      }, 2000)
    })
  }, [])

  return (
    <>
      {loader && (
        <Portal where="loader">
          <LoadingStyles>
            <svg id="load-heart" x="0px" y="0px" viewBox="0 0 316.225 248.024">
              <path
                style={{ fill: "#F6B9CF" }}
                d="M232.894,0c-54.285,0-73.448,42.919-74.778,46.062C156.786,42.918,137.622,0,83.337,0
	C38.587,0,0,37.626,0,84.038c0,90.566,86.9,163.986,158.115,163.986s158.11-73.42,158.11-163.986
	C316.225,37.626,277.644,0,232.894,0L232.894,0z"
              />
              <SmilePath
                id="load-heart-line"
                d="M84.884,84.945v2.833
	c0.169,40.466,33.111,73.133,73.577,72.964c40.227-0.168,72.796-32.737,72.964-72.964v-2.833"
              />
            </svg>
          </LoadingStyles>
        </Portal>
      )}
    </>
  )
}

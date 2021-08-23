import styled from "styled-components"

const StyledImage = styled.img`
  width: 100px;
  position: absolute !important;
  opacity: 0;
  @media (max-width: 768px) {
    display: none;
  }
`

export default function RandomSticker({ src, ...rest }) {
  function randomFromTo(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from)
  }

  const rotateMin = -10
  const rotateMax = 10

  const newRotate = randomFromTo(rotateMin, rotateMax)

  const minY = 0
  const maxY = 100

  const minX = 0
  const maxX = 100

  const newY = randomFromTo(minY, maxY)
  const newX = randomFromTo(minX, maxX)

  return (
    <>
      <StyledImage
        src={src}
        style={{
          top: `${newY}%`,
          left: `${newX}%`,
          transform: `rotate(${newRotate}deg) translate(-50%, -50%)`,
        }}
        {...rest}
      />
    </>
  )
}

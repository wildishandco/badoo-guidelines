import styled from "styled-components"
import Link from "next/link"

const LogoStyles = styled.nav`
  position: fixed;
  top: 18px;
  left: 18px;
  width: 55px;
  height: 55px;
  pointer-events: all;
  z-index: 999;
  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    svg {
      width: 100%;
      fill: var(--blush);
      pointer-events: none;
    }
  }
`

export default function Logo() {
  return (
    <>
      <LogoStyles>
        <Link href="/">
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280.89 220.31">
              <g transform="translate(-716.604 -212.698)">
                <path
                  className="a"
                  d="M923.471,212.7c-48.219,0-65.24,38.124-66.421,40.916-1.182-2.792-18.2-40.916-66.423-40.916-39.75,0-74.023,33.422-74.023,74.648,0,80.446,77.191,145.662,140.447,145.662s140.443-65.216,140.443-145.662C997.492,246.12,963.22,212.7,923.471,212.7Zm12.716,77.728a79.137,79.137,0,0,1-158.274.073v-2.347h27.936v2.274a51.2,51.2,0,0,0,102.4,0v-2.274h27.94Z"
                />
              </g>
            </svg>
          </a>
        </Link>
      </LogoStyles>
    </>
  )
}

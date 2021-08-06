import React from "react"
import Link from "next/link"
import styled from "styled-components"
import { gsap } from "gsap"
import Hamburger from "./Hamburger"
import { Image } from "react-datocms"
import { useRouter } from "next/router"

const MenuStyles = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--badoo-purple);
  pointer-events: all;
  overflow-x: hidden;
  overflow-y: scroll;

  display: flex;
  .menu-left {
    flex: 1;
  }
  .menu-right {
    flex: 1;
    .menu-right-inner {
      padding: 30px;
      position: relative;
      height: 100%;
      .fill-image {
        margin: 50px;
      }
    }
  }
`

export default function Menu({ menu }) {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [menuIndex, setMenuIndex] = React.useState(-1)
  const router = useRouter()

  React.useEffect(() => {
    router.events.on("routeChangeStart", () => setMenuOpen(false))
  }, [router])

  console.log(menu?.menuItems[0].menuMedia[0].video.url)
  return (
    <>
      <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen && (
        <MenuStyles>
          <div className="menu-left">
            {menu?.menuItems?.map((m, i) => {
              return (
                <>
                  <Link key={i} href={m?.slug}>
                    {m?.title}
                  </Link>
                </>
              )
            })}
          </div>
          <div className="menu-right">
            <div className="menu-right-inner">
              {menu?.menuItems?.map((m, i) => {
                return (
                  <>
                    {m?.menuMedia[0]?.image?.responsiveImage && (
                      <Image
                        className="fill-image"
                        data={m?.menuMedia[0]?.image?.responsiveImage}
                        fadeInDuration={0}
                      />
                    )}
                    {/* {m?.menuMedia[0]?.video?.url && (
                  <video
                    src={m?.menuMedia[0]?.video?.url}
                    loop
                    autoPlay
                    playsInline
                    muted
                  />
                )} */}
                  </>
                )
              })}
            </div>
          </div>
        </MenuStyles>
      )}
    </>
  )
}

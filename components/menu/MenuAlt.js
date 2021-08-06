import React from "react"
import Link from "next/link"
import styled from "styled-components"
import { gsap } from "gsap"
import Hamburger from "./Hamburger"
import { Image } from "react-datocms"
import { useRouter } from "next/router"

const MenuLeft = styled.nav`
  position: fixed;
  top: -100%;
  left: 0;
  height: 100%;
  width: 50%;
  background: var(--badoo-purple);
  pointer-events: all;
  overflow-x: hidden;
  overflow-y: scroll;
`

const MenuRight = styled.div`
  position: fixed;
  top: 100%;
  right: 0;
  height: 100%;
  width: 50%;
  background: var(--badoo-purple);
  pointer-events: all;
  overflow-x: hidden;
  overflow-y: scroll;
`

export default function MenuAlt({ menu }) {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [menuIndex, setMenuIndex] = React.useState(-1)

  const leftRef = React.useRef(null)
  const rightRef = React.useRef(null)

  const router = useRouter()

  React.useEffect(() => {
    router.events.on("routeChangeStart", menuOut)
  }, [router])

  function menuIn() {
    let tl = gsap.timeline()

    tl.to(leftRef.current, {
      top: 0,
      duration: 0.4,
    }).to(rightRef.current, {
      top: 0,
      duration: 0.4,
    })
  }

  function menuOut() {
    let tl = gsap.timeline()

    tl.to(leftRef.current, {
      yPercent: -100,
      duration: 0.4,
    })
      .to(rightRef.current, {
        yPercent: 100,
        duration: 0.4,
      })
      .then(() => setMenuOpen(false))
  }

  React.useEffect(() => {
    menuIn()
  }, [menuOpen])

  return (
    <>
      <Hamburger
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        menuOut={menuOut}
      />
      {menuOpen && (
        <>
          <MenuLeft ref={leftRef} onClick={menuOut}>
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
          </MenuLeft>
          <MenuRight ref={rightRef}></MenuRight>
        </>
      )}
    </>
  )
}

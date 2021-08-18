import React from "react"
import Link from "next/link"
import styled from "styled-components"
import { gsap } from "gsap"
import Hamburger from "./Hamburger"
import { Image } from "react-datocms"
import { useRouter } from "next/router"
import { useCursorDispatchContext } from "../cursor/context"
import RainbowBackgroundFade from "./RainbowBackgroundFade"
import StickerBuild from "./StickerBuild"
import Logo from "./Logo"

const MenuLeft = styled.nav`
  position: fixed;
  top: -100%;
  left: 0;
  height: 100%;
  width: 100%;
  pointer-events: all;
  overflow-x: hidden;
  overflow-y: scroll;
  background: linear-gradient(
    90deg,
    rgba(55, 14, 123, 1) 50.1%,
    rgba(55, 14, 123, 0) 50.1%
  );
  @media (max-width: 768px) {
    background: var(--violet);
  }
  .menu-left {
    display: flex;
    flex-direction: column;
    padding: 100px 50px 50px 50px;
    @media (max-width: 768px) {
      padding: 100px 30px 50px 30px;
    }
    a {
      font-size: 4rem;
      text-decoration: none;
      transition: 0.2s ease color;
      opacity: 0;
      line-height: 1.3;
      color: var(--champagne);
      @media (max-width: 900px) {
        font-size: 3rem;
      }
      @media (max-width: 600px) {
        font-size: 2.5rem;
      }
      @media (max-width: 480px) {
        font-size: 2rem;
      }
      :hover {
        color: var(--blue);
      }
    }
  }
`

const MenuRight = styled.div`
  position: fixed;
  top: 100%;
  right: 0;
  height: 100%;
  width: 50%;
  background: var(--badoo-purple);
  pointer-events: none;
  overflow-x: hidden;
  overflow-y: scroll;
  @media (max-width: 768px) {
    display: none;
  }
`

export default function Menu({ menu }) {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [menuIndex, setMenuIndex] = React.useState(-1)
  const [menuWord, setMenuWord] = React.useState("")

  const dispatch = useCursorDispatchContext()

  const leftRef = React.useRef(null)
  const rightRef = React.useRef(null)

  const router = useRouter()

  React.useEffect(() => {
    router.events.on("routeChangeStart", menuOut)
  }, [router])

  React.useEffect(() => {
    router.events.on("routeChangeComplete", () =>
      setTimeout(() => {
        dispatch({ type: "UPDATE_MENU", menu: false })
      }, 1000)
    )
  }, [router])

  async function menuIn() {
    await setMenuOpen(true)

    let tl = gsap.timeline()

    await tl
      .to(leftRef.current, {
        top: 0,
        duration: 0.4,
      })
      .to(rightRef.current, {
        top: 0,
        duration: 0.4,
      })
      .fromTo(
        ".menu-link",
        {
          y: 100,
          opacity: 0,
        },
        { y: 0, autoAlpha: 1, duration: 0.15, stagger: 0.15 }
      )
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

  return (
    <>
      <Logo />
      <Hamburger menuOpen={menuOpen} menuOut={menuOut} menuIn={menuIn} />
      {menuOpen && (
        <>
          <MenuLeft className="menu-section" ref={leftRef}>
            {menuWord.includes("colour") && <RainbowBackgroundFade left="0" />}
            <div className="menu-left">
              {menu?.menuItems?.map((m, i) => {
                return (
                  <>
                    <Link key={i} href={m?.slug}>
                      <a
                        className="bold menu-link"
                        onMouseEnter={() => setMenuWord(m?.slug)}
                        onMouseLeave={() => setMenuWord("")}
                      >
                        {m?.title}
                      </a>
                    </Link>
                  </>
                )
              })}
            </div>
          </MenuLeft>
          <MenuRight className="violet menu-section" ref={rightRef}>
            {menuWord.includes("colour") && (
              <RainbowBackgroundFade left="50%" />
            )}
          </MenuRight>
          {menuWord.includes("sticker") && <StickerBuild />}
        </>
      )}
    </>
  )
}

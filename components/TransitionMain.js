import React from "react"
import { useRouter } from "next/router"
import { TransitionGroup, Transition } from "react-transition-group"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import debounce from "lodash/debounce"
import Scrollbar from "smooth-scrollbar"
import OverscrollPlugin from "smooth-scrollbar/dist/plugins/overscroll"
import { useCursorStateContext } from "./cursor/context"

gsap.registerPlugin(ScrollTrigger)

export default function TransitionMain({ children }) {
  const [offsetY, setOffsetY] = React.useState(0)
  const viewportRef = React.useRef(null)
  const router = useRouter()
  const { direction, menu } = useCursorStateContext()

  function getOffsetY(event) {
    setOffsetY(event.path[1].pageYOffset)
  }

  React.useEffect(() => {
    window.addEventListener("scroll", debounce(getOffsetY, 500))
  }, [])

  function enter(node) {
    gsap.from(node, {
      duration: 1,
      xPercent: direction === "left" ? -100 : 100,
    })
  }

  function exit(node) {
    gsap.set(node, {
      onComplete: () => {
        gsap.to(node, {
          duration: 1,
          xPercent: direction === "left" ? 100 : -100,
        })
      },
      css: {
        position: "fixed",
        left: 0,
        top: -offsetY,
        minWidth: "100%",
      },
    })
  }

  function menuEnter(node) {
    gsap.from(node, {
      duration: 0.5,
      opacity: 0,
    })
  }

  function menuExit(node) {
    gsap.to(node, {
      duration: 0.5,
      opacity: 0,
    })
  }

  React.useEffect(() => {
    Scrollbar.use(OverscrollPlugin)

    const scroller = viewportRef.current

    if (scroller) {
      const bodyScrollBar = Scrollbar.init(scroller, {
        damping: 0.04,
        plugins: {
          overscroll: {
            effect: "bounce",
            damping: 0.15,
            maxOverscroll: 50,
          },
        },
      })

      ScrollTrigger.scrollerProxy(scroller, {
        scrollTop(value) {
          if (arguments.length) {
            bodyScrollBar.scrollTop = value
          }
          return bodyScrollBar.scrollTop
        },
      })

      bodyScrollBar.addListener(ScrollTrigger.update)
      ScrollTrigger.defaults({ scroller: scroller })
    }
  }, [router])

  const mainStyles = {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  }

  return (
    <TransitionGroup className="transition-group-wrapper">
      <Transition
        key={router.asPath}
        timeout={1000}
        in={true}
        onEnter={menu ? menuEnter : enter}
        onExit={menu ? menuExit : exit}
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <main
          id="viewport"
          key={router.asPath + "main"}
          ref={viewportRef}
          style={mainStyles}
        >
          {children}
        </main>
      </Transition>
    </TransitionGroup>
  )
}

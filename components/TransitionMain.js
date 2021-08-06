import React from "react"
import { useRouter } from "next/router"
import { TransitionGroup, Transition } from "react-transition-group"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import debounce from "lodash/debounce"
import Scrollbar from "smooth-scrollbar"
import OverscrollPlugin from "smooth-scrollbar/dist/plugins/overscroll"
import { colourHierachyAnimation } from "../actions.js/animations"

gsap.registerPlugin(ScrollTrigger)

export default function TransitionMain({ children }) {
  const [offsetY, setOffsetY] = React.useState(0)
  const viewportRef = React.useRef(null)
  const router = useRouter()

  function getOffsetY(event) {
    setOffsetY(event.path[1].pageYOffset)
  }

  React.useEffect(() => {
    window.addEventListener("scroll", debounce(getOffsetY, 500))
  }, [])

  function enter(node) {
    gsap.from(node, {
      duration: 1,
      xPercent: cursor === "left" ? -100 : 100,
    })
  }

  function exit(node) {
    gsap.set(node, {
      onComplete: () => {
        gsap.to(node, {
          duration: 1,
          xPercent: cursor === "left" ? 100 : -100,
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

  React.useEffect(() => {
    Scrollbar.use(OverscrollPlugin)

    const scroller = viewportRef.current

    if (scroller) {
      const bodyScrollBar = Scrollbar.init(scroller, {
        damping: 0.05,
        plugins: {
          overscroll: {
            effect: "bounce",
            damping: 0.15,
            maxOverscroll: 100,
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
        onEnter={enter}
        onExit={exit}
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

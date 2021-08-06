import React from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Scrollbar from "smooth-scrollbar"
import OverscrollPlugin from "smooth-scrollbar/dist/plugins/overscroll"

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScrollWrapper({ children }) {
  const viewportRef = React.useRef(null)

  React.useEffect(() => {
    Scrollbar.use(OverscrollPlugin)

    const scroller = viewportRef.current

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
  })

  const mainStyles = {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  }

  return (
    <>
      <main ref={viewportRef} style={mainStyles}>
        {children}
      </main>
    </>
  )
}

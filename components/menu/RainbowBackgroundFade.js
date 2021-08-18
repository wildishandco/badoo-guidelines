import * as React from "react"
import { gsap } from "gsap"

export default function RainbowBackgroundFade({ left, children }) {
  const ref = React.useRef(null)

  React.useEffect(() => {
    let tl = gsap.timeline({ repeat: -1 })

    tl.to(ref.current, {
      duration: 1,
      delay: 1,
      css: {
        background: "#FF4D88",
      },
    })
      .to(ref.current, {
        duration: 1,
        delay: 1,
        css: {
          background: "#bca8f2",
        },
      })
      .to(ref.current, {
        duration: 1,
        delay: 1,
        css: {
          background: "#ffbbd0",
        },
      })
      .to(ref.current, {
        duration: 1,
        delay: 1,
        css: {
          background: "#ffa34e",
        },
      })
      .to(ref.current, {
        duration: 1,
        delay: 1,
        css: {
          background: "#6e3eff",
        },
      })
      .to(ref.current, {
        duration: 1,
        delay: 1,
        css: {
          background: "#370e7b",
        },
      })
  }, [])

  return (
    <div
      style={{
        background: "#370e7b",
        position: "fixed",
        top: 0,
        left: left,
        width: "50%",
        height: "100%",
        pointerEvents: "none",
      }}
      ref={ref}
    >
      {children}
    </div>
  )
}

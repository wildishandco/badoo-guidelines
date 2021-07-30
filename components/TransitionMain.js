import { useRouter } from "next/router"
import { TransitionGroup, Transition } from "react-transition-group"
import { gsap } from "gsap"
import { useCursorStateContext } from "./cursor/context"

export default function TransitionMain({ children }) {
  const { cursor } = useCursorStateContext()
  const router = useRouter()

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
        bottom: 0,
        minWidth: "100%",
        overflow: "hidden",
      },
    })
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
        <main style={{ minHeight: "100vh" }}>{children}</main>
      </Transition>
    </TransitionGroup>
  )
}
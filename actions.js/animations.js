import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
// Colour Hieracy Animation

export function colourHierachyAnimation() {
  let tl = gsap.timeline({
    scrollTrigger: {
      pin: true,
      trigger: ".ref-test",
      scrub: true,
    },
  })

  tl.fromTo(
    ".colour-scroll-copy",
    { y: 200, skewX: -20, opacity: 0 },
    { y: 0, skewX: 0, opacity: 1, duration: 0.4 }
  )
    .from(".colour-scroll-block-primary", {
      xPercent: 100,
      duration: 0.5,
    })
    .from(".colour-scroll-block-secondary", {
      xPercent: 100,
      duration: 0.5,
    })
    .add(function () {}, "+=0.5")
}

// End Colour Hieracy Animation

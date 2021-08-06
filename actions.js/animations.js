import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// Colour Hieracy Animation

export function colourHierachyAnimation() {
  let tl = gsap.timeline({
    scrollTrigger: {
      pin: true,
      trigger: ".ref-test",
      scrub: 1,
    },
  })

  tl.from(".colour-scroll-block-primary", {
    xPercent: 100,
    duration: 1,
  }).from(".colour-scroll-block-secondary", {
    xPercent: 100,
    duration: 1,
  })
}

import React from "react"
import sanitizeHtml from "sanitize-html"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function SanitisedHtml({ center, html, dontanimate, ...rest }) {
  const containerRef = React.useRef(null)
  const nullRef = React.useRef(null)

  const allowedTagsArray = [
    "b",
    "i",
    "em",
    "strong",
    "a",
    "p",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "ol",
    "ul",
    "li",
    "br",
    "iframe",
    "img",
    "blockquote",
  ]

  const cleanHtml = sanitizeHtml(html, {
    allowedTags: allowedTagsArray,
    allowedAttributes: {
      a: ["href", "name", "target", "class", "rel"],
      iframe: ["width", "height", "src"],
      img: ["src", "alt", "title", "class"],
      "*": ["class"],
    },
    transformTags: {
      a: sanitizeHtml.simpleTransform("a", {
        class: "sanitised-anchor",
        target: "_blank",
      }),
      img: sanitizeHtml.simpleTransform("img", {
        class: "sanitised-img",
      }),
    },
  })

  React.useEffect(() => {
    // const el = containerRef.current
    // const classList = "classList" in el

    // for (var i = 0; i < el.children.length; i++) {
    //   const child = el.children[i]
    //   if (classList) {
    //     child.classList.add("sanitised-child")
    //   } else {
    //     child.className += " sanitised-child"
    //   }
    // }

    setTimeout(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center bottom",
        },
      })

      tl.fromTo(
        containerRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.4 }
      )
    }, 100)
  }, [])

  return (
    <div
      dontanimate={dontanimate}
      ref={dontanimate ? nullRef : containerRef}
      className="sanitised-html"
      style={{ textAlign: center ? "center" : "left" }}
      {...rest}
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
    />
  )
}

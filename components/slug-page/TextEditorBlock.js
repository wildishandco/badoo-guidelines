import React from "react"
import styled from "styled-components"
import random from "../../assets/random.svg"

const TextEditorBlockStyles = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  @media (max-width: 768px) {
    display: none;
  }
  p {
    text-align: center;
    padding: 50px;
    cursor: pointer;
    user-select: none;
    max-width: 900px;
    font-feature-settings: "ss01", "ss02", "ss03";
  }
`

const StyleEditor = styled.div`
  max-width: 400px;
  min-width: 320px;
  position: absolute;
  top: 10px;
  left: 10px;
  background: white;
  border-radius: 40px;
  color: var(--violet);
  padding-bottom: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    position: relative;
  }
  #drag-me {
    cursor: grab;
    text-align: center;
    padding: 15px;
    border-bottom: 1px solid var(--lilac);
    :active {
      cursor: grabbing;
    }
  }
  label,
  button {
    font-size: 1rem;
  }

  .style-editor-buttons {
    display: flex;
    justify-content: center;
    padding: 5px 15px;
    button {
      padding: 10px;
      width: 50%;
    }
    button:first-child {
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
    }
    button:last-child {
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      border-left: 1px solid var(--violet);
    }
  }
  .style-editor-range {
    padding: 0 15px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    input[type="range"] {
      width: 50%;
    }
  }
  .style-editor-change-text {
    display: flex;
    justify-content: center;
    padding: 15px;
    button {
      padding: 10px;
      width: 50%;
      border-radius: 20px;
    }
  }
  .style-editor-reset {
    display: flex;
    justify-content: center;
    padding: 15px;
    button {
      padding: 10px;
      width: 50%;
      border-radius: 20px;
    }
  }
`

export default function TextEditorBlock({ s }) {
  const [phrase, setPhrase] = React.useState(0)
  const [size, setSize] = React.useState(60)
  const [weight, setWeight] = React.useState(700)
  const [colour, setColour] = React.useState("lilac")

  const styleRef = React.useRef(null)
  const dragRef = React.useRef(null)

  function handleChangePhrase() {
    if (phrase < s?.phrases.length - 1) {
      setPhrase(phrase + 1)
    } else {
      setPhrase(0)
    }
  }

  function handleChangeColour() {
    if (colour === "lilac") {
      setColour("violet")
    } else {
      setColour("lilac")
    }
  }

  function handleReset() {
    setSize(60)
    setWeight(700)
  }

  React.useEffect(() => {
    dragElement(styleRef.current)

    function dragElement(elmnt) {
      let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0

      dragRef.current.addEventListener("mousedown", dragMouseDown)

      function dragMouseDown(e) {
        e = e || window.event
        e.preventDefault()
        pos3 = e.clientX
        pos4 = e.clientY
        document.onmouseup = closeDragElement
        document.onmousemove = elementDrag
      }

      function elementDrag(e) {
        e = e || window.event
        e.preventDefault()
        pos1 = pos3 - e.clientX
        pos2 = pos4 - e.clientY
        pos3 = e.clientX
        pos4 = e.clientY
        elmnt.style.top = elmnt.offsetTop - pos2 + "px"
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px"
      }

      function closeDragElement() {
        document.onmouseup = null
        document.onmousemove = null
      }
    }
  }, [])

  return (
    <>
      <TextEditorBlockStyles className={`${colour}`}>
        <p
          style={{
            fontSize: size,
            fontVariationSettings: `"wght" ${weight}`,
            lineHeight: 1.1,
          }}
          onClick={handleChangePhrase}
        >
          {s?.phrases[phrase]}
        </p>

        <StyleEditor ref={styleRef}>
          <div id="drag-me" className="bold" ref={dragRef}>
            Style Editor
          </div>

          <div className="style-editor-range">
            <label>Font size: {size}px</label>
            <input
              type="range"
              value={size}
              min="0"
              max="200"
              onInput={(e) => setSize(parseInt(e.target.value, 10))}
            />
          </div>

          <div className="style-editor-range">
            <label>Weight: {weight}</label>
            <input
              type="range"
              value={weight}
              min="300"
              max="900"
              onInput={(e) => setWeight(parseInt(e.target.value, 10))}
            />
          </div>

          <div className="style-editor-buttons">
            <button onClick={handleChangePhrase} className="lilac">
              <img src={random} alt="change text" /> Change Text
            </button>
            <button className="lilac" onClick={handleReset}>
              Reset
            </button>
          </div>

          <div className="style-editor-buttons">
            <button onClick={handleChangeColour} className="violet">
              Foreground
            </button>
            <button onClick={handleChangeColour} className="lilac">
              Background
            </button>
          </div>
        </StyleEditor>
      </TextEditorBlockStyles>
    </>
  )
}

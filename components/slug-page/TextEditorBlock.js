import React from "react"

export default function TextEditorBlock({ s }) {
  const [phrase, setPhrase] = React.useState(0)
  const [size, setSize] = React.useState(48)
  const [kerning, setKerning] = React.useState(0)
  const [leading, setLeading] = React.useState(12)
  const [weight, setWeight] = React.useState(400)
  const [layout, setLayout] = React.useState("")

  function handleChangePhrase() {
    if (phrase < s?.phrases.length - 1) {
      setPhrase(phrase + 1)
    } else {
      setPhrase(0)
    }
  }

  return (
    <>
      <p
        style={{
          fontSize: size,
          letterSpacing: kerning,
          fontVariationSettings: `"wght" ${weight}`,
          lineHeight: leading / 10,
        }}
      >
        {s?.phrases[phrase]}
      </p>
      <button onClick={handleChangePhrase}>Change Phrase</button>
      <input
        type="range"
        value={size}
        min="0"
        max="200"
        onInput={(e) => setSize(parseInt(e.target.value, 10))}
      />
      <p>{size}px</p>
      <input
        type="range"
        value={kerning}
        min="0"
        max="50"
        onInput={(e) => setKerning(parseInt(e.target.value, 10))}
      />
      <p>{kerning}px</p>
      <input
        style={{ margin: 80 }}
        type="range"
        value={weight}
        min="300"
        max="900"
        onInput={(e) => setWeight(parseInt(e.target.value, 10))}
      />
      <p>Weight: {weight}</p>
      <input
        style={{ margin: 80 }}
        type="range"
        value={leading}
        min="8"
        max="40"
        onInput={(e) => setLeading(parseInt(e.target.value, 10))}
      />
      <p>Leading: {leading / 10}</p>
    </>
  )
}

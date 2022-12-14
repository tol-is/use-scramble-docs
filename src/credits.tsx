import React, { useState } from "react"
import { useScramble } from "use-scramble"

const data = [
  ["Yugop Nakamura", "The creator I personally attribute the original effect", "https://www.google.com"],
  ["Peridot", "Foundry5 for the trully sublime sans serif typeface", "https://www.google.com"],
  ["Monolisa", "My favorite monospace font", "https://www.google.com"],
  ["Poimandres Leva", "Amazing and powerful parametric gui", "https://www.google.com"],
  ["TSDX", "TypeScript package development", "https://www.google.com"],
  ["Parcel", "Website bundler", "https://www.google.com"],
  ["Vercel", "Free web hosting!", "https://www.google.com"],
  ["React Syntax Highlighter", "Highlighted code block", "https://www.google.com"],
  ["Copy To Clipboard", "That thing that copies text to the clipboard", "https://www.google.com"],
]

export const Credits = () => {
  return (
    <ol>
      {data.map((d) => (
        <li key={d[0]}>
          <Item text={d} />
        </li>
      ))}
    </ol>
  )
}

const Item = ({ text }) => {
  const [copy, setcopy] = useState(text[0])

  const { ref } = useScramble({
    text: copy,
    step: 5,
  })

  return <a href={text[2]} ref={ref} onMouseOver={() => setcopy(text[1])} onMouseLeave={() => setcopy(text[0])} />
}

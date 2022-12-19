import React, { useState } from "react"
import { useScramble } from "use-scramble"

const data = [
  [
    "Yugop Nakamura",
    "The creator of the original effect, and one of the greatest interactive designers who inspired the industry, and my career.",
    "http://tha.jp/",
  ],
  [
    "Foundry5",
    "My dear friends and creators of the Peridot typeface, a trully remarkable, pan-european, sans-serif, typeface.",
    "https://foundryfivetype.com/",
  ],
  [
    "MIT The internet classics archive",
    "English translation of Iphigenia in Aulis, written 410 B.C. By Euripides.",
    "http://classics.mit.edu/Euripides/iphi_aul.html",
  ],
  ["Poimandres", "For Leva, the most powerful parametric gui.", "https://github.com/pmndrs"],
  ["TSDX", "TypeScript package development.", "https://tsdx.io/"],
  ["Parcel", "The zero configuration website bundler.", "https://parceljs.org/"],
  ["React Syntax Highlighter", "Awesome highlighted code blocks.", "https://github.com/react-syntax-highlighter"],
  ["Copy To Clipboard", "That thing that copies text to the clipboard.", "https://github.com/sudodoki/copy-to-clipboard"],
  ["Monolisa", "My favorite coding font.", "https://www.monolisa.dev/"],
]

export const Credits = () => {
  return (
    <ol className="credits">
      {data.map((d) => (
        <Item text={d} key={d[0]} />
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

  return (
    <li style={{ marginBottom: "2rem" }}>
      <a
        onFocus={() => setcopy(text[2])}
        onBlur={() => setcopy(text[0])}
        onMouseOver={() => setcopy(text[2])}
        onMouseLeave={() => setcopy(text[0])}
        target="_blank"
        rel="noreferrer noopener"
        href={text[2]}
        ref={ref}
      />
      <p>{text[1]}</p>
    </li>
  )
}

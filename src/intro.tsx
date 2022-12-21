import React, { useRef, useState } from "react"
import { useScramble } from "use-scramble"

const texts = [
  "A react hook for random text animations.",
  "High performance controlled chaos",
  "Tiny payload, ~1KB",
  "Yesterday's tomorrows, today.",
]

export const Intro = () => {
  const [index, setIndex] = useState(0)

  const loopRef = useRef<number>()

  const { ref, replay } = useScramble({
    text: texts[index],
    onAnimationStart: () => {
      clearInterval(loopRef.current)
    },
    onAnimationEnd: () => {
      clearInterval(loopRef.current)
      loopRef.current = setTimeout(() => {
        setIndex((index) => (index < texts.length - 1 ? index + 1 : 0))
      }, 1800)
    },
  })

  return <p aria-label={texts[index]} ref={ref} onClick={replay} />
}

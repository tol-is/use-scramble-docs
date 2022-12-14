import React, { useRef, useState } from "react"
import { useScramble } from "use-scramble"

export const Link = ({ label, href }) => {
  const { ref, replay } = useScramble({
    text: label,
    step: 1,
    scramble: 10,
    speed: 1,
    overdrive: false,
    playOnMount: false,
  })

  const external = label.startsWith("http")

  return <a href={href} target={external ? "_blank" : ""} aria-label={label} ref={ref} onMouseOver={replay} onFocus={replay} />
}

import React, { useRef, useState } from "react"
import { useScramble } from "use-scramble"

export const Link = ({ label, href, ...rest }) => {
  const { ref, replay } = useScramble({
    text: label,
    step: 1,
    scramble: 10,
    speed: 1,
    overdrive: false,
    playOnMount: false,
  })

  return (
    <a href={href} {...rest} aria-label={label} ref={ref} onMouseOver={replay} onMouseLeave={replay} onFocus={replay} onBlur={replay} />
  )
}

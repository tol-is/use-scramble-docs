import React from "react"
import { useScramble } from "use-scramble"

export const Link = ({ label, href, ...rest }) => {
  const { ref, replay } = useScramble({
    text: label,
  })

  return (
    <a href={href} {...rest} aria-label={label} ref={ref} onMouseOver={replay} onMouseLeave={replay} onFocus={replay} onBlur={replay} />
  )
}

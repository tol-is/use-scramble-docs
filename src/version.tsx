import React from "react"
import { useScramble } from "use-scramble"

const numbers = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57]

export const VersionLink = ({ major, minor, patch, href, ...rest }) => {
  const majorUnicode = `${major}`.charCodeAt(0)
  const minorUnicode = `${minor}`.charCodeAt(0)
  const patchUnicode = `${patch}`.charCodeAt(0)

  console.log([...numbers].filter((v) => v === majorUnicode))
  const { ref: majorRef, replay: majorReplay } = useScramble({
    text: major,
    speed: 0.6,
    scramble: 5 + major * 2,
    overdrive: false,
    overflow: true,
    range: [...numbers].filter((v) => v !== majorUnicode) as any,
  })

  const { ref: minorRef, replay: minorReplay } = useScramble({
    text: minor,
    speed: 0.6,
    scramble: 5 + minor * 2,
    overdrive: false,
    overflow: true,
    range: [...numbers].filter((v) => v !== minorUnicode) as any,
  })

  const { ref: patchRef, replay: patchReplay } = useScramble({
    text: patch,
    speed: 0.6,
    scramble: 5 + patch * 2,
    overdrive: false,
    overflow: true,
    range: [...numbers].filter((v) => v !== patchUnicode) as any,
  })

  const animate = () => {
    majorReplay()
    minorReplay()
    patchReplay()
  }

  return (
    <a
      target="_blank"
      className="version"
      href={href}
      {...rest}
      onMouseOver={animate}
      onMouseLeave={animate}
      onBlur={animate}
      onFocus={animate}>
      <span ref={majorRef} />.
      <span ref={minorRef} />.
      <span ref={patchRef} />
    </a>
  )
}

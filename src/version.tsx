import React, { useState, useContext, useEffect } from "react"
import { useScramble } from "use-scramble"
import { announce } from "@react-aria/live-announcer"

const numbers = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57]

const VersionContext = React.createContext<{ text: string | null; setText: null | React.Dispatch<React.SetStateAction<string | null>> }>({
  text: null,
  setText: null,
})

export const VersionProvider = ({ children }) => {
  const [text, setText] = React.useState<string | null>(null)

  return <VersionContext.Provider value={{ text, setText }}>{children}</VersionContext.Provider>
}

export const useVersion = () => {
  const context = useContext(VersionContext)

  return context
}

export const VersionLink = ({ major, minor, patch, href, ...rest }) => {
  const majorUnicode = `${major}`.charCodeAt(0)

  const { text, setText } = useVersion()

  const timerRef = React.useRef(0)

  useEffect(() => {
    if (!text) return

    window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      setText && setText(null)
    }, 1500)
    announce("copied to clipboard", "assertive", 3000)
  }, [text])

  const { ref: majorRef, replay: majorReplay } = useScramble({
    text: text || `${major}.${minor}.${patch}`,
    speed: 0.6,
    scramble: text ? 5 : 10,
    step: 5,
    seed: 0,
    overdrive: false,
    overflow: true,
    ignore: [" ", "."],
    range: [...numbers].filter((v) => v !== majorUnicode) as any,
  })

  const animate = () => {
    majorReplay()
  }

  return (
    <a
      target="_blank"
      className="version"
      data-toast={text ? "true" : "false"}
      href={href}
      ref={majorRef}
      {...rest}
      onMouseOver={animate}
      onMouseLeave={animate}
      onBlur={animate}
      onFocus={animate}
    />
  )
}

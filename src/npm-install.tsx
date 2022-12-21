import React, { useState, useContext, useEffect } from "react"
import { useScramble } from "use-scramble"
import { useVersion } from "./version"

export const NpmInstall = () => {
  const { setText } = useVersion()

  const { ref: npmiRef, replay: npmReplay } = useScramble({
    text: "npm i",
    scramble: 10,
    chance: 1,
  })

  const { ref: installRef, replay: installReplay } = useScramble({
    text: "use-scramble",
    scramble: 6,
    chance: 1,
  })

  const animate = () => {
    npmReplay()
    installReplay()
  }

  const handleClick = () => {
    setText && setText("Copied!")
    animate()
  }

  return (
    <button className="npm-install" aria-label="npm install use-scramble" onMouseOver={animate} onFocus={animate} onClick={handleClick}>
      <span className="token" ref={npmiRef} /> <span className="token variable" ref={installRef} />
    </button>
  )
}

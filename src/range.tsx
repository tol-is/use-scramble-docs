import React from "react"

import { Code } from "./code"

const codeString = `import {useScramble} from "use-scramble";

const Component = () => {
  const { ref, replay } = useScramble({
    text: "Achilles next, that nimble runner.",
    speed: 0.6,
    tick: 1,
    step: 1,
    scramble: 4,
    seed: 0,
  });

  return <p ref={ref} onClick={replay)/>
}
`

export const Range = () => {
  return <Code code={codeString} language="js" />
}

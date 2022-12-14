import React from "react"

import { Code } from "./code"

const codeString = `import { useScramble } from "use-scramble";

const Component = ({ text }) => {

  // hook returns a ref
  const { ref } = useScramble({ 
    text: "consistently inconsistent" 
  });

  // apply the ref to a node
  return <p ref={ref} />
}
`

export const Usage = () => {
  return <Code code={codeString} language="js" />
}

import React from "react"

import { Code } from "./code"

const codeString = `// get replay function from hook
const { ref, replay } = useScramble({ 
  text: "1.21 gigawatts!",
});

// call replay manually
return <a 
  ref={ref} 
  onMouseOver={replay} 
  onFocus={replay} 
/>
`
export const Replay = () => {
  return <Code code={codeString} language="js" />
}

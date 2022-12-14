import React, { useState } from "react"

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx"
import copy from "copy-to-clipboard"
import { CheckIcon } from "@radix-ui/react-icons"

SyntaxHighlighter.registerLanguage("jsx", jsx)

export const Copied = () => {
  return (
    <div>
      <CheckIcon />
    </div>
  )
}

export const Code = ({ code, language }) => {
  // const [copied, setCopied] = useState()
  return (
    <div data-block="code">
      <SyntaxHighlighter language={language} theme={{}} onClick={() => copy(code)} wrapLongLines>
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

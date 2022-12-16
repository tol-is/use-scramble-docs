import React, { useState } from "react"

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx"
import copy from "copy-to-clipboard"

SyntaxHighlighter.registerLanguage("jsx", jsx)

export const Code = ({ code, language }) => {
  return (
    <div data-block="code">
      <SyntaxHighlighter language={language} theme={{}} onClick={() => copy(code)} wrapLongLines>
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

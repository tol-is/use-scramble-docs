import React, { useState } from "react"

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx"
import copy from "copy-to-clipboard"
import { useVersion } from "./version"
import { CopyIcon } from "@radix-ui/react-icons"

SyntaxHighlighter.registerLanguage("jsx", jsx)

export const Code = ({ code, language }) => {
  const { setText } = useVersion()

  return (
    <div data-block="code">
      <SyntaxHighlighter language={language} theme={{}} wrapLongLines>
        {code}
      </SyntaxHighlighter>
      <button
        aria-label="Copy to clipboard"
        onClick={() => {
          copy(code)
          setText && setText("Copied!")
        }}>
        <CopyIcon />
      </button>
    </div>
  )
}

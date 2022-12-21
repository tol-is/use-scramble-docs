import copy from "copy-to-clipboard"
import React from "react"
import { useScramble } from "use-scramble"
import data from "./unicode.json"
import { useVersion } from "./version"

const Row = ({ Glyph, Unicode, Description }) => {
  const { setText } = useVersion()

  const { ref: ref1, replay: replay1 } = useScramble({ text: Glyph, scramble: 18, playOnMount: false })
  const { ref: ref2, replay: replay2 } = useScramble({ text: Unicode, scramble: 18, playOnMount: false })
  const { ref: ref3, replay: replay3 } = useScramble({ text: Description, scramble: 8, playOnMount: false })

  return (
    <tr
      onMouseOver={() => {
        replay1()
        replay2()
        replay3()
      }}
      onClick={() => {
        copy(Unicode)
        setText && setText(`Copied!`)
      }}>
      <td ref={ref1} />
      <td ref={ref2} />
      <td ref={ref3} />
    </tr>
  )
}

export const Unicode = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Glyph</th>
          <th>Unicode</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>{data.map(Row)}</tbody>
    </table>
  )
}

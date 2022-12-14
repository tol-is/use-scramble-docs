import copy from "copy-to-clipboard"
import React from "react"
import data from "./unicode.json"

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
      <tbody>
        {data.map((char) => (
          <tr onClick={() => copy(char.Unicode)} key={char.Unicode}>
            <td>{char.Glyph}</td>
            <td>{char.Unicode}</td>
            <td>{char.Description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

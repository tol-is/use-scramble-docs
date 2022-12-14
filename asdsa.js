import React, { useState, useId } from "react"
import text from "./text.json"

import { useCreateStore, useControls, buttonGroup } from "leva"
import copy from "copy-to-clipboard"

import { useScramble, UseScrambleProps } from "use-scramble"


export type UseScrambledLevaProps = {
  levas: Omit<UseScrambleProps, "onComplete" | "text">
  params: Omit<UseScrambleProps, "onComplete" | "text">
}
function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min)
}

const getRandomText = () => {
  const int = getRandomInt(0, text.length)
  return text[int].substring(0, 20)
}

export const useScrambledLeva = () => {
  const id = useId()
  const [sample, setSample] = useState(getRandomText())

  const store = useCreateStore()

  const params = useControls(
    {
      overdrive: true,
      speed: { value: 0.75, min: 0, max: 1, step: 0.01 },
      tick: { value: 1, min: 1, max: 10, step: 1 },
      step: { value: 8, min: 1, max: 42, step: 1 },
      scramble: { value: 3, min: 0, max: 42, step: 1 },
      seed: { value: 1, min: 0, max: 10, step: 1 },
      overflow: true,
    },

    { store: store },
  )

  const { ref, play } = useScramble({
    text: sample,
    ...params,
    onFrame: (result) => {
      console.log(result)
    },
    onComplete: () => {
      console.log("complete")
    },
  })

  useControls(
    () => ({
      " ": buttonGroup({
        replay: (get) => {
          play()
        },
        randomize: () => {
          const sample = getRandomText()
          setSample(sample)
        },

        copy: (get) =>
          copy(`
        const ref = useScramble({
          text: "${sample}",
          speed: ${get("speed") || 0.1},
          scramble: ${get("scramble") || 0},
          step: ${get("step") || 1},
          interval: ${get("interval") || 0},
          seed: ${get("seed") || 0},
          loop: ${get("loop") || true},
        })
        `),
        reset: () => {
          // setLeva(p)
        },
      }),
    }),

    { store: store },
    [play],
  )

  // useControls(
  //   {
  //     play: button(() => play()),
  //     Randomize: button(() => {
  //       setSample(generateWords())
  //     }),
  //   },
  //   [play],
  // )

  // const [values, setLeva] = useControls(
  //   () => ({
  //     ...(Object.keys(levas).reduce((res, cur) => {
  //       res[id + cur] = { ...levaTypes[cur], value: levas[cur], label: cur }
  //       return res
  //     }, {}) as any),
  //   }),

  //   { store: store },
  // )

  // const { ref } = useScramble({
  //   text: sample,
  //   speed: existsOrDefault(values[`${id}speed`], params.speed),
  //   scramble: existsOrDefault(values[`${id}scramble`], params.scramble),
  //   step: existsOrDefault(values[`${id}step`], params.step),
  //   tick: existsOrDefault(values[`${id}tick`], params.tick),
  //   overdrive: existsOrDefault(values[`${id}overdrive`], params.overdrive),
  //   seed: existsOrDefault(values[`${id}seed`], params.seed),
  // })

  return { store, ref }
}

// const [values, setLeva] = useControls(
//   () => ({
//     " ": buttonGroup({
//       randomize: (get) => {
//         const sample = getRandomText()
//         setSample(sample)
//       },

//       copy: (get) =>
//         copy(`
//         const ref = useScramble({
//           text: "${sample}",
//           speed: ${get("speed") || 0.1},
//           scramble: ${get("scramble") || 0},
//           step: ${get("step") || 1},
//           interval: ${get("interval") || 0},
//           seed: ${get("seed") || 0},
//           loop: ${get("loop") || true},
//         })
//         `),
//       reset: () => {
//         const p = Object.keys(levas).reduce((res, cur) => {
//           res[id + cur] = levas[cur]
//           return res
//         }, {}) as never

//         setLeva(p)
//       },
//     }),
//     ...(Object.keys(levas).reduce((res, cur) => {
//       res[id + cur] = { ...levaTypes[cur], value: levas[cur], label: cur }
//       return res
//     }, {}) as any),
//   }),

//   { store: store },
// )

import { useState, useId, useEffect } from "react"
import tragedy from "iphigenia-in-aulis"

import { useCreateStore, useControls, buttonGroup } from "leva"
import copy from "copy-to-clipboard"

import { useScramble, UseScrambleProps } from "use-scramble"

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min)
}

const getRandomText = () => {
  const int = getRandomInt(0, tragedy.length)
  return tragedy[int]
}

const levaTypes = {
  overdrive: { value: false },
  overdriveNumber: { value: 46 },
  rangeTruple: { value: [45, 46, 47], joystick: false },
  range: { value: [65, 125], joystick: false },
  speed: { value: 1, min: 0, max: 1, step: 0.01 },
  scramble: { value: 5, min: 0, max: 100, step: 1 },
  step: { value: 2, min: 1, max: 10, step: 1 },
  tick: { value: 1, min: 1, max: 10, step: 1 },
  seed: { value: 2, min: 0, max: 10, step: 1 },
  overflow: { value: false },
}

const defaults = {
  overdrive: false,
  range: [65, 125],
  speed: 1,
  scramble: 5,
  step: 5,
  tick: 1,
  seed: 2,
  overflow: false,
}

const existsOrDefault = (n: any, param: any, def: any) =>
  n !== undefined && n !== null ? n : param !== undefined && param !== null ? param : def

const levaTypeMap = {
  overdrive: "overdrive",
  overdriveNumber: "overdrive",
  rangeTruple: "range",
  speed: "speed",
  range: "range",
  scramble: "scramble",
  step: "step",
  tick: "tick",
  seed: "seed",
  overflow: "overflow",
}

export type ScrambleLevaProps = {
  params: Omit<UseScrambleProps, "onComplete" | "text" | "onFrame">
  levas: Array<keyof typeof levaTypes>
}

export const useScrambledLeva = ({ levas, params }: ScrambleLevaProps) => {
  const id = useId()

  const [sample, setSample] = useState(getRandomText())

  const store = useCreateStore()

  const [values, setLeva] = useControls(
    () => {
      const result = levas.reduce((res, key) => {
        const levaId = levaTypeMap[key]
        res[id + levaId] = { ...JSON.parse(JSON.stringify(levaTypes[key])), label: levaId }

        if (params[levaId]) {
          res[id + levaId]["value"] = params[levaId]
        }

        return res
      }, {})

      return result
    },
    { store: store },
  ) as any

  const { ref, replay } = useScramble({
    text: sample,
    playOnMount: false,
    range: existsOrDefault(values[`${id}range`], params.range, defaults.range),
    speed: existsOrDefault(values[`${id}speed`], params.speed, defaults.speed),
    tick: existsOrDefault(values[`${id}tick`], params.tick, defaults.tick),
    step: existsOrDefault(values[`${id}step`], params.step, defaults.step),
    scramble: existsOrDefault(values[`${id}scramble`], params.scramble, defaults.scramble),
    seed: existsOrDefault(values[`${id}seed`], params.seed, defaults.seed),
    overdrive: existsOrDefault(values[`${id}overdrive`], params.overdrive, defaults.overdrive),
    overflow: existsOrDefault(values[`${id}overflow`], params.overflow, defaults.overflow),
  })

  useControls(
    () => ({
      " ": buttonGroup({
        replay: () => {
          replay()
        },
        randomize: () => {
          const sample = getRandomText()
          setSample(sample)
        },

        copy: () => {
          copy(`
          const { ref } = useScramble({
            text: "${sample}",
            range: [${existsOrDefault(values[`${id}range`], params.range, defaults.range)}],
            speed: ${existsOrDefault(values[`${id}speed`], params.speed, defaults.speed)},
            tick: ${existsOrDefault(values[`${id}tick`], params.tick, defaults.tick)},
            step: ${existsOrDefault(values[`${id}step`], params.step, defaults.step)},
            scramble: ${existsOrDefault(values[`${id}scramble`], params.scramble, defaults.scramble)},
            seed: ${existsOrDefault(values[`${id}seed`], params.seed, defaults.seed)},
            overdrive: ${existsOrDefault(values[`${id}overdrive`], params.overdrive, defaults.overdrive)},
            overflow: ${existsOrDefault(values[`${id}overflow`], params.overflow, defaults.overflow)},
          })
          `)
        },

        reset: () => {
          const p = levas.reduce((res, cur) => {
            res[id + cur] = params[cur]
            return res
          }, {}) as never

          setLeva(p)
        },
      }),
    }),

    { store: store },
    [replay, levas, values],
  )

  return { store, ref, replay }
}

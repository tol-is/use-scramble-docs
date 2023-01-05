import { useState, useId, useEffect, useRef } from "react"
import tragedy from "iphigenia-in-aulis"

import { useCreateStore, useControls, buttonGroup } from "leva"
import copy from "copy-to-clipboard"

import { useScramble, UseScrambleProps } from "use-scramble"
import { useVersion } from "./version"

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
  chance: { value: 1, min: 0, max: 1, step: 0.01 },
  seed: { value: 2, min: 0, max: 10, step: 1 },
  overflow: { value: false },
}

const defaults = {
  overdrive: false,
  range: [65, 125],
  speed: 1,
  scramble: 5,
  chance: 1,
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
  chance: "chance",
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
  const [stateParams, setStateParams] = useState({})

  const store = useCreateStore()

  const { ref, replay } = useScramble({
    text: sample,
    playOnMount: false,
    range: existsOrDefault(stateParams[`${id}range`], params.range, defaults.range),
    speed: existsOrDefault(stateParams[`${id}speed`], params.speed, defaults.speed),
    tick: existsOrDefault(stateParams[`${id}tick`], params.tick, defaults.tick),
    step: existsOrDefault(stateParams[`${id}step`], params.step, defaults.step),
    scramble: existsOrDefault(stateParams[`${id}scramble`], params.scramble, defaults.scramble),
    chance: existsOrDefault(stateParams[`${id}chance`], params.chance, defaults.chance),
    seed: existsOrDefault(stateParams[`${id}seed`], params.seed, defaults.seed),
    overdrive: existsOrDefault(stateParams[`${id}overdrive`], params.overdrive, defaults.overdrive),
    overflow: existsOrDefault(stateParams[`${id}overflow`], params.overflow, defaults.overflow),
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
            range: [${existsOrDefault(stateParams[`${id}range`], params.range, defaults.range)}],
            speed: ${existsOrDefault(stateParams[`${id}speed`], params.speed, defaults.speed)},
            tick: ${existsOrDefault(stateParams[`${id}tick`], params.tick, defaults.tick)},
            step: ${existsOrDefault(stateParams[`${id}step`], params.step, defaults.step)},
            scramble: ${existsOrDefault(stateParams[`${id}scramble`], params.scramble, defaults.scramble)},
            seed: ${existsOrDefault(stateParams[`${id}seed`], params.seed, defaults.seed)},
            chance: ${existsOrDefault(stateParams[`${id}chance`], params.chance, defaults.chance)},
            overdrive: ${existsOrDefault(stateParams[`${id}overdrive`], params.overdrive, defaults.overdrive)},
            overflow: ${existsOrDefault(stateParams[`${id}overflow`], params.overflow, defaults.overflow)},
          })
          `)

          setText && setText("Copied!")
        },
      }),
    }),

    { store: store },
    [replay, levas, stateParams],
  )

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

  // useControls(
  //   () => ({
  //     "  ": buttonGroup({
  //       reset: () => {
  //         const p = levas.reduce((res, cur) => {
  //           res[id + cur] = params[cur]
  //           return res
  //         }, {}) as never

  //         setLeva(p)
  //       },
  //     }),
  //   }),

  //   { store: store },
  //   [setLeva, levas, params],
  // )

  useEffect(() => {
    setStateParams(values)
  }, [values])

  const { setText } = useVersion()

  return { store, ref, replay }
}

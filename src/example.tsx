import React from "react"

import { LevaPanel } from "leva"

import { ScrambleLevaProps, useScrambledLeva } from "./use-scrambled-leva"

type Props = ScrambleLevaProps & {
  description?: string
}

export const Example = (p: Props) => {
  const { store, ref, replay } = useScrambledLeva(p)

  return (
    <section className="example" data-block="example">
      <div className="content prose">
        {p.description ? <p>{p.description}</p> : null}
        <p className="sample" ref={ref} onClick={replay} />
      </div>
      <div className="levas">
        <LevaPanel store={store} fill flat titleBar={false} hideCopyButton={true} />
      </div>
    </section>
  )
}

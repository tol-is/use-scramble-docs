import React from "react"

import { LevaPanel } from "leva"

import { ScrambleLevaProps, useScrambledLeva } from "./use-scrambled-leva"
import { useVersion } from "./version"

type Props = ScrambleLevaProps & {
  description?: () => React.ReactNode
}

export const Example = (p: Props) => {
  const { store, ref, replay } = useScrambledLeva({ ...p })

  const Copm: any = p.description
  return (
    <>
      <section className="example" data-block="example">
        <div className="content prose">
          {Copm ? <Copm /> : null}
          <p className="sample" ref={ref} onClick={replay} />
        </div>
        <div className="levas">
          <LevaPanel store={store} fill flat titleBar={false} hideCopyButton={true} />
        </div>
      </section>
    </>
  )
}

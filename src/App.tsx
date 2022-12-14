import React from "react"

import { Intro } from "./intro"
import { Example } from "./example"
import { Usage } from "./usage"
import { Unicode } from "./unicode"
import { Credits } from "./credits"
import { Link } from "./link"

export const App = () => {
  return (
    <>
      <header>
        <code>
          <span className="token">npm install</span> use-scramble
        </code>

        <div className="links">
          <Link label="github" href="https://github.com/tol-is/use-scramble" />
          <Link label="npm" href="https://www.npmjs.com/package/use-scramble" />
        </div>
      </header>
      <main>
        <div className="prose">
          <h1>useScramble</h1>
          <Intro />
          <p>
            Import the <code>useScramble</code> hook from the npm package, and call it within your function component body. With its return
            value, the hook provides a react <code>ref</code>, which you need to apply on the target html element.
          </p>
          <Usage />
          <h2>Configuration</h2>
          <Example
            description="Minim amet officia ea voluptate voluptate tempor sint irure aute voluptate minim elit. Occaecat in et Lorem sint est nostrud pariatur voluptate. Lorem non velit eiusmod quis enim occaecat incididunt consectetur quis aute commodo occaecat."
            params={{
              overdrive: false,
              speed: 0.6,
              scramble: 8,
              step: 4,
              seed: 0,
              tick: 1,
              overflow: false,
            }}
            levas={["speed", "tick", "step", "scramble", "overflow", "overdrive"]}
          />
          <h2>Properties</h2>
          <header className="prop-heading">
            <h3>speed</h3>
            <code>float (0 - 1)</code>
          </header>
          <p>
            You can configure the <code>speed</code> paramete, to control the animation framerate. A speed of <code>1</code> means a
            character will scramble 60 times a second, and the algorithm will attempt to move along the text input, at the same pace.
          </p>
          <p>
            You can pause the animation by setting the speed to <code>0</code>.
          </p>
          <Example
            params={{
              overdrive: false,
              speed: 0.75,
              scramble: 2,
              step: 1,
              seed: 0,
              tick: 1,
              overflow: false,
            }}
            levas={["speed"]}
          />
          <header className="prop-heading">
            <h3>tick</h3>
            <code>number (1 - 100)</code>
          </header>
          <p>
            The <code>tick</code> parameter works in the opposite way, slows down the animation
          </p>
          <Example
            params={{
              overdrive: false,
              speed: 0.7,
              scramble: 0,
              step: 2,
              seed: 0,
              tick: 1,
              overflow: false,
            }}
            levas={["tick"]}
          />
          <header className="prop-heading">
            <h3>step</h3>
            <code>number (1 - 100)</code>
          </header>
          <p>
            Cupidatat proident occaecat adipisicing labore Lorem ipsum. Duis laboris excepteur anim pariatur dolore do commodo pariatur sit
            non. Amet veniam nulla nulla in esse amet in consectetur laboris anim nisi non.
          </p>
          <Example
            params={{
              overdrive: false,
              speed: 0.1,
              scramble: 0,
              step: 1,
              seed: 0,
              tick: 1,
              overflow: false,
            }}
            levas={["step"]}
          />
          <header className="prop-heading">
            <h3>overflow</h3>
            <code>boolean</code>
          </header>
          <p>
            Cupidatat proident occaecat adipisicing labore Lorem ipsum. Duis laboris excepteur anim pariatur dolore do commodo pariatur sit
            non. Amet veniam nulla nulla in esse amet in consectetur laboris anim nisi non.
          </p>
          <Example
            params={{
              overdrive: false,
              speed: 0.7,
              scramble: 3,
              step: 1,
              seed: 0,
              tick: 1,
              overflow: false,
            }}
            levas={["overflow"]}
          />
          <header className="prop-heading">
            <h3>scramble</h3>
            <code>number (0 - 100)</code>
          </header>
          <p>
            Cupidatat proident occaecat adipisicing labore Lorem ipsum. Duis laboris excepteur anim pariatur dolore do commodo pariatur sit
            non. Amet veniam nulla nulla in esse amet in consectetur laboris anim nisi non.
          </p>
          <Example
            params={{
              overdrive: false,
              speed: 0.7,
              scramble: 42,
              step: 1,
              seed: 0,
              tick: 1,
              overflow: true,
            }}
            levas={["scramble"]}
          />
          <header className="prop-heading">
            <h3>seed</h3>
            <code>number (0 - 100)</code>
          </header>
          <p>
            Cupidatat proident occaecat adipisicing labore Lorem ipsum. Duis laboris excepteur anim pariatur dolore do commodo pariatur sit
            non. Amet veniam nulla nulla in esse amet in consectetur laboris anim nisi non.
          </p>
          <Example
            params={{
              overdrive: false,
              speed: 0.4,
              scramble: 2,
              step: 5,
              seed: 1,
              tick: 1,
              overflow: true,
            }}
            levas={["seed"]}
          />
          <header className="prop-heading">
            <h3>range</h3>
            <code>[number,number] | number[]</code>
          </header>
          <p>
            Cupidatat proident occaecat adipisicing labore Lorem ipsum. Duis laboris excepteur anim pariatur dolore do commodo pariatur sit
            non. Amet veniam nulla nulla in esse amet in consectetur laboris anim nisi non.
          </p>
          <Example
            params={{
              overdrive: false,
              speed: 0.2,
              scramble: 8,
              step: 4,
              seed: 0,
              tick: 2,
              range: [8600, 8674],
              overflow: false,
            }}
            levas={["range"]}
          />
          <h4>Range custom</h4>
          <Example
            params={{
              overdrive: false,
              speed: 0.2,
              scramble: 8,
              step: 4,
              seed: 0,
              tick: 2,
              range: [45, 46, 47],
              overflow: false,
            }}
            levas={["rangeTruple"]}
          />
          <header className="prop-heading">
            <h3>overdrive</h3>
            <code>boolean | number</code>
          </header>
          <p>
            Cupidatat proident occaecat adipisicing labore Lorem ipsum. Duis laboris excepteur anim pariatur dolore do commodo pariatur sit
            non. Amet veniam nulla nulla in esse amet in consectetur laboris anim nisi non.
          </p>
          <Example
            params={{
              overdrive: true,
              speed: 0.6,
              scramble: 2,
              step: 6,
              seed: 0,
              tick: 1,
              overflow: true,
            }}
            levas={["overdrive"]}
          />
          <h4>Custom overdrive character</h4>
          <Example
            params={{
              overdrive: 8674,
              speed: 0.6,
              scramble: 2,
              step: 6,
              seed: 0,
              tick: 1,
              overflow: true,
            }}
            levas={["overdriveNumber"]}
          />
          <h2>Unicode</h2>
          <Unicode />
          <h2>Credits</h2>
          <Credits />
        </div>
      </main>
      <footer>
        <Link href="/" label="tol.is" /> <p>No tracking, no analytics</p>
      </footer>
    </>
  )
}

import React from "react"

import { Intro } from "./intro"
import { Example } from "./example"
import { Usage } from "./usage"
import { Unicode } from "./unicode"
import { Credits } from "./credits"
import { Link } from "./link"
import { VersionLink } from "./version"
import { Replay } from "./replay"

export const App = () => {
  return (
    <>
      <header>
        <code>
          <span className="token">npm install</span> use-scramble
        </code>

        <div className="links">
          <VersionLink
            major="2"
            minor="2"
            patch="7"
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.npmjs.com/package/use-scramble"
          />
        </div>
      </header>
      <main>
        <div className="prose">
          <h1>useScramble</h1>
          <Intro />
          <Example
            description={() => (
              <p>
                The algorithm walks over an input string, and randomizes each position, given a set of configurations that allow to control
                the pace, randomness and overall personality of the animation.
              </p>
            )}
            params={{ overdrive: false, overflow: false, step: 5 }}
            levas={["speed", "tick", "step", "overflow", "scramble", "seed", "range", "overdrive"]}
          />
          <h2>Usage</h2>
          <p>
            Install the npm package, import the <code>useScramble</code> hook, and call it within your component body. With its return
            value, the hook exposes a react <code>ref</code>, which you need to apply on the target html element, for the animation to take
            over.
          </p>
          <Usage />
          <header className="prop-heading">
            <h3>Replay programmatically</h3>
          </header>
          <p>
            The hook in its return value, provides a <code>replay</code> function, that you can call programmatically and replay the
            animation.
          </p>
          <Link label="1.21 gigawatts!" href="#" />
          <Replay />
          <h2>Configuration</h2>
          <header className="prop-heading">
            <h3>speed</h3>
            <code>float (0 - 1)</code>
          </header>
          <p>
            The <code>speed</code> parameter, controls the base animation framerate. How quickly the animation will flow over the input
            text, and how fast each character position will scramble.
          </p>
          <p>
            Speed of value <code>1</code> means a character can scramble up to 60 times a second. Speed <code>0</code> will pause the
            animation.
          </p>
          <Example
            params={{
              overdrive: false,
              speed: 0.5,
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
            <code>number (1 - infinity)</code>
          </header>
          <p>
            The <code>tick</code> parameter controls a secondary internal clock of the animation and measures how many frames must pass, for
            the scrambler to walk forward along the text input.
          </p>
          <p>
            A higher value means It works in the opposite way to <code>speed</code>, slowing down the animation, but does not affect how
            fast each position will randomize.
          </p>
          <Example
            params={{
              overdrive: false,
              speed: 0.7,
              scramble: 18,
              step: 1,
              seed: 0,
              tick: 5,
              overflow: false,
            }}
            levas={["tick"]}
          />
          <header className="prop-heading">
            <h3>step</h3>
            <code>number (1 - infinity)</code>
          </header>
          <p>
            The <code>step</code> is the third parameter that controls the pace of the animation. As the algorithm progresses along the
            input string, on every <code>tick</code> it will introduce <code>step</code> additional positions to the animation.
          </p>
          <p>
            If you are animating multiline strings, a higher <code>step</code> value can help create a visually pleasing animation.
          </p>
          <Example
            params={{
              overdrive: false,
              speed: 0.15,
              scramble: 0,
              step: 5,
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
            When <code>overflow</code> is disabled, the animation will always start with an empty string, but with <code>overflow</code>{" "}
            enabled, the animation will flow over the previous text and replace every position one by one.
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
            <code>number (0 - infinity)</code>
          </header>
          <p>
            On every animation frame, each character will change to a random unicode codepoint. The <code>scramble</code> parameter,
            configures how many times every position must randomize, before the final character is rendered, and is only affected by the{" "}
            <code>speed</code> control.
          </p>
          <p></p>
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
            <code>number (0 - infinity)</code>
          </header>
          <p>
            Similar but independently to the <code>scramble</code> control, the <code>seed</code> parameter is used to create a more erratic
            animation. When <code>seed</code> is configured, the animation will randomly select additional positions ahead of the animation
            and redraw to random unicode codepoints, until the animation flow reaches there.
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
            <code>[number, number]</code>
          </header>
          <p>
            The algorithm randomizes each character, using a range of unicode codepoints, by default <code>[65, 125]</code> which contains
            latin characters from capital A, to small letter Z, and a few puncuation symbols for extra chaos.
          </p>
          <p>
            If your text is of any <b>non-latin script</b>, or you want to customize the visual effect of the animation, you can provide a
            custom <code>2‑tupple</code>, representing the unicode codepoint range, you want the scrambler to choose random characters from.
          </p>
          <Example
            params={{
              overdrive: false,
              speed: 0.5,
              scramble: 10,
              step: 4,
              seed: 0,
              tick: 1,
              range: [33, 47],
              overflow: false,
            }}
            levas={["range"]}
          />
          <header className="prop-heading">
            <h3>range (alt)</h3> <code>number[]</code>
          </header>
          <p>
            An alternative configuration of the <code>range</code> parameter, allows you to provide, any <code>n-tuple</code>, of{" "}
            <code>3</code> unicode codepoints or more. In this use case, the algorithm will randomly select values, explicitly from within
            the array, and use them to randomize every character position.
          </p>
          <Example
            params={{
              overdrive: false,
              speed: 0.2,
              scramble: 12,
              step: 3,
              seed: 0,
              tick: 2,
              range: [45, 46, 95],
              overflow: false,
            }}
            levas={["rangeTruple"]}
          />
          <header className="prop-heading">
            <h3>overdrive</h3>
            <code>boolean</code>
          </header>
          <p>
            With <code>overdrive</code> mode enabled, the animation will flow across the text contents, and replace every character
            position, with an <code>underscore</code>, or unicode <code>95</code> character. <code>overdrive</code> runs as quickly as
            possibly, and independently to the <code>speed</code> and <code>tick</code> parameters.
          </p>
          <Example
            params={{
              overdrive: true,
              speed: 0.75,
              scramble: 5,
              step: 6,
              seed: 0,
              tick: 1,
              overflow: true,
            }}
            levas={["overdrive"]}
          />
          <header className="prop-heading">
            <h3>overdrive (alt)</h3> <code>number</code>
          </header>
          <p>
            Alternatively, the <code>overdrive</code> parameter, can be configured as a numerical value, the represents a custom unicode
            codepoint.
          </p>
          <Example
            params={{
              overdrive: 126,
              speed: 0.75,
              scramble: 5,
              step: 6,
              seed: 0,
              tick: 1,
              overflow: true,
            }}
            levas={["overdriveNumber"]}
          />
          <header className="prop-heading">
            <h3>playOnMount</h3> <code>boolean</code>
          </header>
          <p>
            When creating interactive elements, or want to play the animation manually on user interaction or other events, you can disable
            the first animation, by setting <code>playOnMount</code> to <code>true</code>.
          </p>
          <header className="prop-heading">
            <h3>onAnimationStart</h3> <code>function</code>
          </header>
          <p>Callback triggered when the animation starts</p>
          <header className="prop-heading">
            <h3>onAnimationFrame</h3> <code>function</code>
          </header>
          <p>Callback triggered on every animation redraw</p>
          <header className="prop-heading">
            <h3>onAnimationEnd</h3> <code>function</code>
          </header>
          <p>Callback triggered when the animation has finished</p>
          <h2>Reduced Motion</h2>
          <p>
            People experiencing vertigo or motion sensitivities, can request to reduce the amount of non-essential motion, through their
            operating system configuration. At the moment, the animation is entirely disabled when `prefers-reduced-motion` is enabled.
          </p>

          <h2>Unicode</h2>
          <Unicode />
          <h2>Credits</h2>
          <Credits />
        </div>
      </main>
      <footer>
        <Link href="https://tol.is" label="tol.is" target="_blank" />
      </footer>
    </>
  )
}

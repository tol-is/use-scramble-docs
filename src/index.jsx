import "./styles/reset.css"
import "./styles/fonts.css"
import "./styles/code.css"
import "./styles/theme.css"

import { createRoot } from "react-dom/client"
import { App } from "./App"

const container = document.getElementById("root")
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(<App />)

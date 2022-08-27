/** @jsxRuntime classic */
/** @jsx jsx */
import {createElement,render,useState} from './sreact'
import './index.css'


/** @jsx createElement */
function Counter() {
  
  const [state, setState] = useState(0)
  const [state2, setState2] = useState(2)

  return (
    <div>
      <h1 onClick={() => setState(c => c + 1)} style="user-select: none">
      Count: {state}
    </h1>
    <h1 onClick={() => setState2(c => c + 2)} style="user-select: none">
      Count2: {state2}
    </h1>
    </div>
  )
}
const element = <Counter />
const container = document.getElementById("root")
render(element, container)
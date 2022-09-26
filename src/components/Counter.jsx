import { useState } from "react"
import Button from "./Button"

function Counter() {
  // set state counter
  const [counter, setCounter] = useState(0)
  //   set actions btns
  const handleAdd = () => setCounter(counter + 1)
  const HandleSubstract = () => setCounter(counter - 1)
  const handleReset = () => setCounter(0)
  // set objet btns
  const buttons = [
    { id: 1, name: " +1 ", action: handleAdd },
    { id: 2, name: " -1 ", action: HandleSubstract },
    { id: 3, name: " Reset ", action: handleReset },
  ]
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="Top m-4 text-center">
          <h1>CounterApp</h1>
          <h2>{counter}</h2>
        </div>
        <div className="Bot">
          {/* render objet btns */}
          {buttons.map((button) => (
            <Button
              key={`${button.id} + ${button.name}`}
              btnName={button.name}
              btnAction={button.action}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Counter

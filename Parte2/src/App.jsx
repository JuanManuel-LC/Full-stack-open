import { useState } from "react"

const Display = ({ counter }) => <>{counter}</>

const Button = ({ onSmash, text }) => { <button onClick={onSmash}>{text}</button> }

const App = () => {
  const [counter, setCounter] = useState(0)
  console.log('Rendering with counter value ', counter)


  const increaseByOne = () => {
    console.log('increasing, value before; ', counter)
    setCounter(counter + 1)
  }

  const decreaseByOne = () => {
    console.log('decreasing, value before: ', counter)
    setCounter(counter - 1)
  }

  const setToZero = () => {
    console.log('resetting to zero, value before: ', counter)
    setCounter(0)
  }

  return (
    <>
      <Display counter={counter} />
      <Button
        onClick={increaseByOne}
        text="plus">
      </Button>
      <Button
        onClick={setToZero}
        text={"zero"}>
      </Button>
      <Button
        onClick={decreaseByOne}
        text={"minus"}>
      </Button>
    </>
  )

}

export default App

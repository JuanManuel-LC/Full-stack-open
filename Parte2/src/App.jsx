import { useState } from "react"


const App = () => {

  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)
  // Es lo mismo que:

  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  // ! version 1
  // const handleLeftClick = () => {
  //   const newClicks = {
  //     // right: clicks.right --> Esto es lo mismo que la siguiente linea
  //     ...clicks,
  //     left: clicks.left + 1,
  //   }

  //   setClicks(newClicks)
  // }

  // ! Version 2
  const handleLeftClick = () =>
    setClicks({ ...clicks, left: clicks.left + 1 })

  const handleRightClick = () =>
    setClicks({ ...clicks, right: clicks.right + 1 })


  return (
    <>
      {clicks.left}
      <button onClick={handleLeftClick}>
        left
      </button>
      <button onClick={handleRightClick}>
        right
      </button>
      {clicks.right}
    </>
  )

}

export default App

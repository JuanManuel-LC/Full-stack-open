import { useState } from "react"

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <>
        the App is used by pressing the buttons
      </>
    )
  }
  return (
    <>
      button press history: {props.allClicks.join(' ')}
    </>

  )
}

const Button = (props) => {
  console.log(props);

  const { handleClick, text } = props

  return (
    < button onClick={handleClick} >
      {text}
    </ button>
  )
}


const App = () => {

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  // ! Que no hacer con los useState y useEffect

  // if ( age > 10 ) {
  //   // esto no funciona!
  //   const [foobar, setFoobar] = useState(null)
  // }

  // for ( let i = 0; i < age; i++ ) {
  //   // esto tampoco está bien
  //   const [rightWay, setRightWay] = useState(false)
  // }

  // const notGood = () => {
  //   // y esto también es ilegal
  //   const [x, setX] = useState(-1000)
  // }



  return (
    <>
      {left}
      <Button handleClick={handleLeftClick} text='left'>
        left
      </Button>
      <Button handleClick={handleRightClick} text='right'>
        right
      </Button>
      {right}
      <History allClicks={allClicks} />
    </>
  )

}

export default App

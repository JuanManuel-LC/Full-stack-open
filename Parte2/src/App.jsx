import { useState } from "react"


// ? Desestructuracion version 1

// const Hello = (props) => {
//   // Desestructuracion utilizando name y age
//   const { name, age } = props
//   const bornYear = () => new Date().getFullYear() - age

//   return (
//     <>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>
//         So you were probably born in {bornYear()}
//       </p>
//     </>
//   )
// }


// ? Desestructuracion version 2
const Hello = ({ name, age }) => {
  // Desestructuracion utilizando name y age
  const bornYear = () => new Date().getFullYear() - age

  return (
    <>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>
        So you were probably born in {bornYear()}
      </p>
    </>
  )
}



const App = () => {
  const [counter, setCounter] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  console.log('rendering...', counter)


  return (
    <>
      {counter}
    </>
  )


}

export default App

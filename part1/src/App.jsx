function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of component',
        exercises: 14
      }
    ]
  };



  // const part1 = {
  //   name: 'Fundamentals of React',
  //   exercises: 10
  // }
  // const part2 = {
  //   name: 'Using props to pass data',
  //   exercises: 7
  // }

  // const part3 = {
  //   name: 'State of component',
  //   exercises: 14
  // }


  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10

  // const part2 = 'Using props to pass data'
  // const exercises2 = 7

  // const part3 = 'State of component'
  // const exercises3 = 14

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />

    </>
  )
}

// Componente para el Header
function Header(props) {
  // console.log(props);

  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

// Componente para el contenido
function Content(props) {

  return (
    <>
      <Part parts={props.parts} />
    </>
  )

}


// Componente para las partes del componente Content
const Part = (props) => {
  console.log(props);


  return (
    <>
      <p>
        {props.parts[0].name} {props.parts[0].exercises}
      </p>
      <p>
        {props.parts[1].name} {props.parts[1].exercises}
      </p>
      <p>
        {props.parts[2].name} {props.parts[2].exercises}
      </p>
    </>
  )
}


// Componente para el Total
function Total(props) {
  return (
    <>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </>
  )

}

export default App
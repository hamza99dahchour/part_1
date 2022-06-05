

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}
const Part = ({name,exo}) => {
  return (
    <p>{name}  {exo}</p>
  )
}
const Content = ({parts}) => {
  
  return (
    <div>
    <Part name = {parts[0].name} exo={parts[0].exercises}/>
    <Part name = {parts[1].name} exo={parts[1].exercises}/>
    <Part name = {parts[2].name} exo={parts[2].exercises}/>
    </div>
  )
}
const Total = (props) => {
  let total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return (
    <p>Number of exercises {total} </p>
  )
}
const App = () => {
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
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}  />
      <Total parts={course.parts}    />
    </div>
  )
}

export default App;
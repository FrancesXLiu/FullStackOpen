import React from 'react'

const Header = (course) => {
  return (
    <div>
      <h1>{course.course}</h1>
    </div>
  )
}

const Part = (part) => {
  return (
    <>
    <p>
      {part.name} {part.exercises}
    </p>
    </>
  )
}

const Content = ({ parts }) => {
  console.log(parts)
  return (
    <>
      <Part name={parts[0].name} exercises={parts[0].exercises}/>
      <Part name={parts[1].name} exercises={parts[1].exercises}/>
      <Part name={parts[2].name} exercises={parts[2].exercises}/>
    </>
  )
}

const Total = ({ parts }) => {
  return (
    <div>
      <p>
        Number of exercises is tmd {parts[0].exercises+parts[1].exercises+parts[2].exercises}
      </p>
    </div>
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
      <div>
        <Content parts={course.parts}/>
      </div>
      <Total parts={course.parts} />
    </div>
  )
}

export default App
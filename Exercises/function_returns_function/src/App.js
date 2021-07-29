import React, { useState } from 'react'

const App = () => {
  const [value, setValue] = useState(10)

  /*const hello = (who) => {
    const handler = () => {
      console.log('hello', who)
    }
    return handler /* 返回一个函数
  } */

  const setToValue = (newValue) => {
    setValue(newValue)
  }

  const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )

  const Display = (props) => {
    return (
      <div>{props.value}</div>
    )
  }

  return (
    <div>
      <Display value={value} />
      {/**<button onClick={hello()}>button</button> /* 因为 hello 函数返回一个函数，事件处理程序现在是一个函数。所以此处的事件处理程序可以是函数调用而非引用。 
      <button onClick={hello('world')}>World</button>
      <button onClick={hello('react')}>React</button>
      <button onClick={hello('function')}>Function</button> */}

      <Button handleClick={() => setToValue(1000)} text="thousand"/>
      <Button handleClick={() => setToValue(0)} text="reset"/>
      <Button handleClick={() => setToValue(value+1)} text="increment"/>

    </div>
  )
}

export default App;
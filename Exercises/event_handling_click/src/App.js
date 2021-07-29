import React, { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => {
    setCounter(counter + 1)
  }

  const decreaseByOne = () => {
    setCounter(counter - 1)
  }

  const setToZero = () => {
    setCounter(0)
  }

  const Display = ({ counter }) => { /* 将props解构为{ counter } */
    return (
      <div>
        {counter}
      </div>
    )
  }

  const Button = ({ handleClick, text }) => { /* 通过组件的props传递事件处理程序以及按钮的标题，将props解构为{ onClick, text } */
    return (
      <button onClick={handleClick}>
        {text}
      </button>
    )
  }

  return (
    <div>
      <div><Display counter={counter}/></div>
      {/* <button onClick={() => setCounter(counter + 1)}> {/* 直接在conClick属性的值中定义事件处理函数。我们实现了预期，也就是计数器的值增加了1，而且组件被重新渲染 */}
      {/* <button onClick={increaseByOne}> {/* onClick 属性的值是一个包含函数引用的变量
            plus
          </button> */}
      <Button handleClick={increaseByOne} text="plus" />

      <Button handleClick={decreaseByOne} text="minus" />

      {/*<button onClick={() => setCounter(0)}>*/}
      {/* <button onClick={setToZero}>
            zero
          </button> */}
      <Button handleClick={setToZero} text="zero" />
    </div>
  )
}

export default App
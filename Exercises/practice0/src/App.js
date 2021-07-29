import React from 'react'

const Hello = ({ name, age }) => {  /*a component - like a function */
  console.log({ name, age })
  /* 解构：将入参props直接在component头里解构为{ name, age } */
  /* 或：
  const {name, age} = props 或
  const name = props.name
  const age = props.age */
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - age
  }

  /* 以上bornYear函数定义等价于：
  const bornYear = () => new Date().getFullYear() - age
  此方法更简洁
   */

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old.
      </p>
      <p>So you were probably born in {bornYear()}.</p>
    </div>
  )
}

const App = () => {
  const name = "Frances"
  const age = 20
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={name} age={age}/> {/** 如果props的值是通过 JavaScript 表达式实现的，那么它必须用花括号括起来 */}
      <Hello name="Ryan" age={20-10} />
      <br></br>
      < Footer/>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/FrancesXLiu">FrancesXLiu</a>
    </div>
  )
}

export default App
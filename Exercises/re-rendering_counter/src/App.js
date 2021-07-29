import React, { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0) /* 函数调用将state 添加到组件，并将其值用0进行初始化。 该函数返回一个包含两个元素的数组。 
  我们使用前面所讲的解构赋值语法将元素分配给变量 counter 和 setCounter 。 */
  /* counter 变量被赋予的初始值state 为零。 变量 setCounter 被分配给一个函数，该函数将用于修改 state。 */
  /* [state, setState] = useState(initialValue)返回一个包含2个元素的数组:状态值和状态更新函数。 */

  /* 第二次执行组件函数时，它调用了 useState 函数返回的新状态值: 1。 再次执行函数体还会对 setTimeout 进行一次新的函数调用，它会执行一秒钟的超时并再次递增计数器状态。 
  由于counter变量的值现在是1，所以将该值增加1本质上等同于将计数器的状态值设置为2。 */
  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  console.log('rendering...', counter)

  return (
    <div>The current count is: {counter}</div>
  )
}

export default App
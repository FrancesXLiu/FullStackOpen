import React, { useState } from 'react'

const History = (props) => {
  if (props.allClicks.length === 0) { /* 条件渲染：现在，组件的行为取决于是否单击了任何按钮。 如果没有，这意味着 allClicks 数组是空的，那么该组件将渲染一个带有如下说明的 div 组件: */
    return (
      <div>
        the app is used by pressing the buttons 
      </div>
    )
  }
  return ( /* 在其他情况下，该组件渲染单击历史记录: */
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L')) /* 存储在 allClicks 中的状态块现在被设置为一个数组，该数组包含前一个状态数组的所有项以及字母。 
                                  向数组中添加新元素是通过concat方法完成的，该方法不改变现有数组，而是返回数组 新副本，并将元素添加到该数组中。 */
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text="Left" />
      <Button handleClick={handleRightClick} text="Right" />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}

export default App;
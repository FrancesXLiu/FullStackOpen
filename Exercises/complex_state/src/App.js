import React, { useState } from 'react'

const App = () => {
  const [clicks, setClicks] = useState( {
    left: 0,
    right: 0
  } )

  const handleLeftClick = () => {
    const newClicks = {
      left: clicks.left + 1,
      right: clicks.right
    }
    setClicks(newClicks) /* setClicks将clicks.left和clicks.right设置为应用的新状态 */
  }

  /* 或使用展开语法——如下 */

  const handleRightClick = () => {
    const newClicks = {
      ...clicks, /* { ...clicks } 创建了一个新对象，该对象是具有 clicks 对象的所有属性的副本。 当我们向对象添加新属性时，例如 { ...clicks, right: 1 }，新对象中right属性的值将为1。 */
      right: clicks.right + 1 
    }
    setClicks(newClicks)
  }

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>
        left
      </button>
      <button onClick={handleRightClick}>
        right
      </button>
      {clicks.right}
    </div>
  )
}

export default App;

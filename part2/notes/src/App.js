import React from 'react'
import Note from './components/Note.js'

const App = ({ notes }) => {

  /* const result = notes.map((note) => {return note.id}) 以完整形式而非紧凑形式编写，紧凑形式如下：*/ 
  const resultId = notes.map(note => note.id) /* map 总是会创建一个新数组，其元素是从原始数组的元素通过mapping映射创建的，映射的逻辑是使用作为 map 方法传递进去的函数。
  该函数获取一个 note 对象作为参数，然后返回 其id 字段的值。 */
  const resultContent = notes.map(note => note.content)
  console.log(resultId)
  console.log(resultContent)

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {/*{notes.map(note =>   使用 map 函数从数组对象生成 React-元素 
          <li key={note.id}>   {列表项，即 map 方法生成的每个元素，都必须有一个唯一的键值: 一个名为key 的属性。 它生成一个li 标签，其中包含每个便笺对象的便笺内容。
            {note.content} 
          </li>
          )} */}

        {/* 以下方法不推荐使用：
        {notes.map((note, i) => <li key={i}>{note.content}</li>)}  通过使用数组的索引作为键。可以通过向 map 方法 的回调函数传递的第二个参数来获取索引，当这样调用时，i 根据便笺所在数组中的位置，分配到了索引值。
        */}

        {notes.map(note => <Note key={note.id} note={note}/>)} {/* 注意，现在必须为Note 组件定义key 属性，而不是像前面那样为li 标签定义key 属性。 */}
      </ul>
    </div>
  )
}

export default App
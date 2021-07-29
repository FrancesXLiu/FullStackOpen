import React, { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  /* 在 React 中，可变状态（mutable state）通常保存在组件的 state 属性中，并且只能通过使用 setState()来更新。
  我们可以把两者结合起来，使 React 的 state 成为“唯一数据源”。渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”。 */
  const [newNote, setNewNote] = useState( 
    'a new note...'
  ) 
  const [showAll, setShowAll] = useState(true) /* 用于同步应该显示哪些便笺（是否重要） */

  const addNote = (event) => { /* event 参数是触发对事件处理函数需要调用的event */
    event.preventDefault()
    console.log('button clicked', event.target)
    const noteObject = { /* 我们为名为noteObject 的便笺创建一个新对象，该对象将从组件的newNote状态接收其内容 */
      content: newNote,
      date: new Date().toISOString,
      important: Math.random() < 0.5, /* 唯一标识符 id 是根据便笺的总数生成的。 此方法适用于我们的应用，因为便笺永远不会被删除。 在 Math.random() 命令的帮助下，我们的便笺有50% 的可能被标记为重要。 */
      id: notes.length + 1
    }

    setNotes(notes.concat(noteObject)) /* 使用数组的 concat 方法添加新便笺到便笺列表中 */
    setNewNote('')
  }

  const handleNoteChange = (event) => { /* 每当 输入元素发生变化时，都会调用事件处理函数。 事件处理函数接收事件对象作为其 event 参数 
                                        该方法不会改变原始的 notes 状态数组，而是会创建数组的一个新副本，并将新项添加到尾部。 这很重要，因为我们绝不能在React中直接改变状态！*/
    console.log(event.target.value)
    setNewNote(event.target.value) /* 事件处理还通过调用 newNote 状态的 setNewNote 函数重置受控input元素的值 */
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true) /* 三目运算符：const result = condition ? val1 : val2 
                                                    如果 condition 为真，则 result变量将设置为val1值。 如果 condition为 false，则result 变量将设置为 val2。*/

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>show {showAll ? 'important' : 'all'}</button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input 
          value={newNote} 
          /* 由于我们将App 组件的一部分状态指定为 input 元素的value 属性，因此App 组件现在控制 了input 元素的行为。（useState控制了input的value）
          为了能够编辑 input 元素，我们必须注册一个事件处理 来同步对 input 所做的更改和组件的状态： */
          onChange={handleNoteChange} /* 为表单的input 元素的onChange 属性注册了一个事件处理函数 */
          />
        <button type="submit">save</button>
      </form>  
    </div>
  )
}

export default App 
import React, {useState, useEffect} from 'react'
import data from '../config/todo.json'

function TodoList({titleClicked}) {

  const [count, setCount] = useState(0);
  const [todos, updateTodo] = useState(data)

  useEffect(() => {
    console.log('It renderes everytime')
  });

  useEffect(() => {
    console.log('On first render')
  }, []);

  useEffect(() => {
    console.log('When todo is updated')
  }, [todos]);

  const handleToggle = (id) => {
    const updTodos = todos.map(todo => {
      return todo.id === id ? { ...todo, toggle: !todo.toggle } : {...todo}
    })
    updateTodo(updTodos);
  }

  const handleCount = () => {
    titleClicked(count + 1);
    setCount(count + 1);
  }

  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item" onClick={() => handleCount()}>Click {count}</li>
      </ul>
      <ul className="list-group">
        {todos.map((todo) => {
          return <li className={`list-group-item ${todo.toggle === true ? 'selected' : ''}`} key={todo.id} onClick={() => handleToggle(todo.id)}>{todo.title}</li>
        })}
      </ul>
    </div>
  )
}

export default TodoList

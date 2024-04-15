import { useState, useEffect } from 'react'
import './App.css'
import TodoList from './TodoList'
import uuidv4 from 'uuid-v4'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

export default function Form() {

  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState(() => {
    const storedtodos = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY))
    return storedtodos
  })

  // useEffect(() =>{
  //   const storedtodos=JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY))
  //   setTodos(storedtodos || [])/// if we have something in stored item
  //   console.log("get"+storedtodos)
  // },[])

  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    console.log("setting", todos);
  }, [todos])

  function handleChange(e) {
    setInputValue(e.target.value)
  }

  function handleAddTodo(e) {
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: inputValue, complete: false }]
      //todos.push({id:uuidv4(), name:inputValue, complete:false});

    })
    setInputValue('');
  }

  return (
    <>
      <h1>My Todo App</h1>
      <input value={inputValue} onChange={handleChange} type="text" /><br />
      <br />
      <button style={{ background: 'blue', color: 'white' }} onClick={handleAddTodo}>Add Todos</button><br />
      <label>To dos :</label>
      <br />
      <TodoList todos={todos} />
    </>
  )
}



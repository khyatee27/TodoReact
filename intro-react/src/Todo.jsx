import React from 'react'


export default function Todo({todo}) {
  return (
    <div>
      <label>
      <input type="checkbox" />
    {todo.name}
    </label>
  </div>
  )
}

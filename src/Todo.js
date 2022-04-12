import React from 'react'
export default function Todo({todo, toggleTodo}) {
  function handleCheckbox(){
    toggleTodo(todo.id);
  }
  return (
    <div>
        <input checked={todo.complete} onChange={handleCheckbox} type="checkbox"/>
        <label>
          {todo.name}
        </label>
    </div>
  )
}
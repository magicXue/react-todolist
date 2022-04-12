import React from 'react'
import Todo from './Todo.js'
export default function Todolist({todolist, toggleTodo}) {
  
  return (
    todolist.map(todo=>{
      return <Todo key={todo.id} todo = {todo} toggleTodo = {toggleTodo}/>
    })
    
  )
}
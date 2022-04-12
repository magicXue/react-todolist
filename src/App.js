import React, {useState, useRef, useEffect} from 'react';
import Todolist from './Todolist';
import { v4 as uuidv4 } from 'uuid';
const LOCAL_STORAGE = 'todoapp.todolist'
function App() {
	const [todo, setTodos] = useState([]);
	const todoNameRef = useRef();
	function handleAddTodo(){
		const name = todoNameRef.current.value;
		setTodos(previous=>{
			return [...previous, {id: uuidv4(), name: name, complete: false}]
		})
		todoNameRef.current.value = null;
	}
	useEffect(() => {
		const savedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE));
		if(savedTodos) setTodos(savedTodos);
	},[])
	useEffect(()=>{
		localStorage.setItem(LOCAL_STORAGE,JSON.stringify(todo))
	},[todo])
	function toggleTodo(id){
		const newtodo = [...todo];
		console.log(newtodo);
		const findTask = todo.find(todo=>todo.id === id);
		findTask.complete = !findTask.complete;
		setTodos(newtodo);
	}
	function clearTask(){
		const newtodo = todo.filter(todo=>todo.complete === false);
		setTodos(newtodo);
	}
	return (
		<div>
			<Todolist todolist = { todo } toggleTodo = { toggleTodo }/>
			<input ref={todoNameRef} type="text"/>
			<button onClick={handleAddTodo} type="button">add task</button>
			<button onClick={clearTask} type="button">clear completed task</button>
			<p>{todo.filter(todo => todo.complete == false).length} need to be completed</p>
		</div>
	);
}

export default App;

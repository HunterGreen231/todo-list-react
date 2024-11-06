import { useState } from 'react'
import TodoList from './components/TodoList'
import { v4 as uuidv4 } from 'uuid';

function TodoMain() {
    const [todoList, setTodoList] = useState([])
    const [todoInput, setTodoInput] = useState("Enter todo item")

    const handleAddTodo = () => {
        let todo = {
            text: todoInput,
            checked: false,
            key: uuidv4(),
        }
        
        setTodoList([...todoList, todo])
    }

    const handleTodoInputChange = (event) => {
        setTodoInput(event.target.value)
    }

    const handleDelete = (index) => {
        setTodoList(todoList.slice(0, index).concat(todoList.slice(index + 1)))
    }

    const handleComplete = (event, todoIndex) => {
        let todoToUpdate = {...todoList[todoIndex]}

        todoToUpdate.checked = event.target.checked
        setTodoList(todoList.slice(0, todoIndex).concat(todoToUpdate).concat(todoList.slice(todoIndex + 1)))
    }

    return (
        <>
            <div style={{display: "flex", justifyContent: "center", marginBottom: "24px"}}>
                <h1>Todo App</h1>
            </div>
            <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                <div>
                    Enter thing to do: <input value={todoInput} onChange={handleTodoInputChange} name="TodoInput" id="todo-input" />
                    <button id="add-todo-button" name="AddTodoButton" onClick={handleAddTodo} >Add</button>
                </div>
                <TodoList todoList={todoList} handleDelete={handleDelete} handleComplete={handleComplete}/>
                <div>
                    <p>Checked: {todoList.filter((todoItem) => todoItem.checked).length}</p>
                </div>
            </div>
        </>
    )
}

export default TodoMain
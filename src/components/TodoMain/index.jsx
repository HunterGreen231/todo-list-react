import { useEffect, useRef } from 'react';
import TodoList from './components/TodoList'
import useStore from '~/store'

function TodoMain() {
    const { todoList, addTodo, setTodoList, todoInput, changeTodoInput } = useStore();
    const isInitialMount = useRef(true)

    useEffect(() => {
        const todoItemListStorage = localStorage.getItem('todoItemList')
        if (todoItemListStorage != null) {
            setTodoList(JSON.parse(todoItemListStorage))
        }
    }, [setTodoList])

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false
        } else {
            localStorage.setItem('todoItemList', JSON.stringify(todoList))
        }
    }, [todoList])

    return (
        <>
            <div style={{display: "flex", justifyContent: "center", marginBottom: "24px"}}>
                <h1>Todo App</h1>
            </div>
            <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                <div>
                    Enter thing to do: <input value={todoInput} onChange={changeTodoInput} name="TodoInput" id="todo-input" />
                    <button id="add-todo-button" name="AddTodoButton" onClick={addTodo} >Add</button>
                </div>
                <TodoList/>
                <div>
                    <p>Checked: {todoList.filter((todoItem) => todoItem.checked).length}</p>
                </div>
            </div>
        </>
    )
}

export default TodoMain
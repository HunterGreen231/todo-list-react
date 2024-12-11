import { useEffect } from 'react';
import TodoList from './components/TodoList'
import useStore from '~/store'

function TodoMain() {
    const { todoList, addTodo, setTodoList, todoInput, changeTodoInput } = useStore();

    useEffect(() => {
        const todoItemListStorage = localStorage.getItem('todoItemList')
        if (todoItemListStorage != null) {
            setTodoList(JSON.parse(todoItemListStorage))
        }
    }, [])

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
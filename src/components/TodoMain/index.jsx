import TodoList from './components/TodoList'
import useStore from '~/store'

function TodoMain() {
    const { todoList, addTodo, todoInput, changeTodoInput } = useStore();

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
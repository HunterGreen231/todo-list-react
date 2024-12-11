import { v4 as uuidv4 } from 'uuid';

const handleCompleteTodo = (state, event, todoIndex) => {
    let todoToUpdate = {...state.todoList[todoIndex]}

    todoToUpdate.checked = event.target.checked
    return state.todoList.slice(0, todoIndex).concat(todoToUpdate).concat(state.todoList.slice(todoIndex + 1))
}

const handleAddTodo = (state) => {
    let todo = {
        text: state.todoInput,
        checked: false,
        key: uuidv4()
    }

    localStorage.setItem('todoItemList', JSON.stringify([...state.todoList, todo]))

    return [...state.todoList, todo]
}

const handleDeleteTodo = (state, index) => {
    return state.todoList.slice(0, index).concat(state.todoList.slice(index + 1)) 
}

const handleSetTodoList = (todoListStorage) => {
    return todoListStorage
}

const todoSlice = (set, get) => ({
    todoList: [],
    todoInput: 'Enter todo item',
    setTodoList: (todoListStorage) => set((state) => ({
        todoList: handleSetTodoList(todoListStorage)
    })),
    addTodo: () => set((state) => ({ 
        todoList: handleAddTodo(state)
    })),
    deleteTodo: (index) => set((state) => ({ 
        todoList: handleDeleteTodo(state, index)
    })),
    completeTodo: (event, todoIndex) => set((state) => ({
        todoList: handleCompleteTodo(state, event, todoIndex)
    })),
    changeTodoInput: (event) => set((state) => ({
        todoInput: event.target.value
    }))
});

export default todoSlice;
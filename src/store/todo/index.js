import { v4 as uuidv4 } from 'uuid';

const handleCompleteTodo = (state, event, todoIndex) => {
    let todoToUpdate = {...state.todoList[todoIndex]}
    todoToUpdate.checked = event.target.checked

    const updatedTodoList = state.todoList.slice(0, todoIndex).concat(todoToUpdate).concat(state.todoList.slice(todoIndex + 1))
    return updatedTodoList
}

const handleAddTodo = (state) => {
    let todo = {
        text: state.todoInput,
        checked: false,
        key: uuidv4()
    }

    return [...state.todoList, todo]
}

const handleDeleteTodo = (state, index) => {
    const updatedTodoList = state.todoList.slice(0, index).concat(state.todoList.slice(index + 1)) 

    return updatedTodoList
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
import TodoItem from './components/TodoItem'

export default function TodoList(props) {
    return (
        <div>
            {props.todoList.map((todoItem, index) => {
                return (
                    <TodoItem key={todoItem.key} index={index} todoItem={todoItem} handleDelete={props.handleDelete} handleComplete={props.handleComplete}/>
                )
            })}
        </div>
    )
}
import TodoItem from './components/TodoItem'
import useStore from '~/store'

export default function TodoList(props) {
    const { todoList } = useStore();

    return (
        <div>
            {todoList.map((todoItem, index) => {
                return (
                    <TodoItem key={todoItem.key} index={index} todoItem={todoItem} />
                )
            })}
        </div>
    )
}
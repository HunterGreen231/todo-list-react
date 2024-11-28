import useStore from '~/store'

export default function TodoItem(props) {
    const { deleteTodo, completeTodo } = useStore();

    return (
        <div style={{display: 'flex'}}>
            <input type="checkbox" onClick={ (event) => completeTodo(event, props.index)} />
            <p className={props.todoItem.checked ? "complete" : ""}>{props.todoItem.text}</p>
            { props.todoItem.checked == true && <button onClick={ () => deleteTodo(props.index) }>Delete</button> }
        </div>
    )
}
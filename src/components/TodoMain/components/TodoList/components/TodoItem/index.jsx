export default function TodoItem(props) {
    return (
        <div style={{display: 'flex'}}>
            <input type="checkbox" onClick={ (event) => props.handleComplete(event, props.index)} />
            <p className={props.todoItem.checked ? "complete" : ""}>{props.todoItem.text}</p>
            { props.todoItem.checked == true && <button onClick={ () => props.handleDelete(props.index) }>Delete</button> }
        </div>
    )
}
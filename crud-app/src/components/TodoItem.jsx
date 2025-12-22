
const TodoItem = (props) => {
    const {
        todo,
        onCompleted,
    } = props

    return (
        <div>
            <b>{todo.name}</b>
            <input type='checkbox' checked={todo.isCompleted} onChange={(e) => onCompleted({ ...todo, isCompleted: e.target.checked })}></input>
        </div>
    )
}

export default TodoItem
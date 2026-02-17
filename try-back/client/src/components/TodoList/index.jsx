
export default function TodoList(props) {
    const {
        todoList,
        updateTodoList,
    } = props;

    const deleteTodoItem = async (title) => {
        try {
            const response = await fetch('http://localhost:3002/api/todos/delete', {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title
                })
            });

            if (!response.ok) {
                const json = await response.json()
                alert(json.message);
                return;
            }

            const responseData = await response.json();
            console.log('Success:', responseData);

            updateTodoList();
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            {
                !todoList.length && <>Loading...</>
            }
            {
                todoList.map((todo) =>
                    <div key={todo._id}>
                        {todo.title}
                        <button style={{ marginLeft: "20px", cursor: 'pointer' }} onClick={() => deleteTodoItem(todo.title)}>Удалить</button>
                    </div>)
            }
        </>
    )
};
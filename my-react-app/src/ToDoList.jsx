import { useCallback, useState } from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Изучить React' },
        { id: 2, text: 'Написать проект' },
    ]);

    const addTodo = useCallback(() => {
        setTodos((prevTodos) => [...prevTodos, { id: Date.now(), text: 'Новая задача' }]);
    }, []);


    const deleteTodo = useCallback((id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    }, []);


    return (
        <div style={{ marginTop: '15px' }}>
            <button onClick={addTodo}>Добавить задачу</button>
            {todos.map((todo) => (
                <TodoItem key={todo.id} id={todo.id} text={todo.text} onDelete={deleteTodo} />
            ))}
        </div>
    );
};


export default TodoList
import { useEffect, useState } from 'react';
import TodoItem from './TodoItem';


const TODOS_LIST = [
    {
        id: 1,
        name: 'Создать TODO лист',
        isCompleted: false,
    },
    {
        id: 2,
        name: 'Получение списка постов',
        isCompleted: false,
    },
    {
        id: 3,
        name: 'Вывод постов на страницу',
        isCompleted: false,
    },
    {
        id: 4,
        name: 'Создание поста',
        isCompleted: false,
    },
    {
        id: 5,
        name: 'Удаление поста',
        isCompleted: false,
    },
    {
        id: 6,
        name: 'Редактирование поста',
        isCompleted: false,
    },
    {
        id: 7,
        name: 'Изменение поста',
        isCompleted: false,
    },
    {
        id: 8,
        name: 'Пагинация постов',
        isCompleted: false,
    },
    {
        id: 9,
        name: 'Фильтрация по userId',
        isCompleted: false,
    },
    {
        id: 10,
        name: 'Детальная страница поста',
        isCompleted: false,
    },
    {
        id: 11,
        name: 'Комментарии к посту на детальной странице',
        isCompleted: false,
    },
];
const TODOS_KEY = 'todos';


const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const onToggleCompleted = (todo) => {
        const updatedTodos = todos.map((oldTodo) => {
            if (oldTodo.id === todo.id) {
                return { ...oldTodo, isCompleted: todo.isCompleted }
            }
            return oldTodo;
        });

        localStorage.setItem(TODOS_KEY, JSON.stringify(updatedTodos));

        setTodos(updatedTodos);
    };

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem(TODOS_KEY));

        setTodos(savedTodos || TODOS_LIST);
    }, []);

    return (
        <div>
            <h2>Todo List</h2>
            {
                todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} onCompleted={onToggleCompleted} />
                ))
            }
        </div>
    )
}

export default TodoList
import { useState } from "react";

export default function AddTodoItem(props) {
    const {
        updateTodoList,
    } = props;

    const [title, setTitle] = useState('');

    const onHandleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3002/api/todos/add', {
                method: 'POST',
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

        } catch (error) {
            console.error('Error:', error);
        }

        setTitle('');
    };

    return (
        <form onSubmit={onHandleSubmit}>
            <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <br />
            <button type="submit">Добавить</button>
        </form>
    )
};
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from './features/users/usersSlice';
import { useState } from 'react';

export default function Users() {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const [name, setName] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (!name.trim()) return;

        dispatch(addUser({
            id: Date.now(),
            name,
        }));

        setName('');
    }

    return (
        <>
            <form onSubmit={onSubmit} style={{ display: 'flex', gap: '20px' }}>
                <input type='text' placeholder='Имя пользователя' value={name} onChange={(e) => setName(e.target.value)} />
                <button type='submit'>Добавить пользователя</button>
            </form>
            <div style={{ padding: 20 }}>
                {
                    users.map((user) => (
                        <div key={user.id} style={{ display: 'flex', gap: '10px' }}>
                            {user.name},{user.id}
                            <button onClick={() => dispatch(removeUser(user.id))}>X</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
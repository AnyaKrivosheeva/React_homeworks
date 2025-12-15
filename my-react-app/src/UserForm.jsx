import { useState } from "react"

const UserForm = (props) => {
    const {
        handleForm,
    } = props

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            name,
            age: Number(age),
            id: Date.now(),
        };

        handleForm(newUser);

        setName('');
        setAge('');
    };

    return (
        <form style={{ display: 'flex', gap: '10px' }} onSubmit={onSubmit}>
            <input type='text' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type='text' placeholder='age' value={age} onChange={(e) => setAge(e.target.value)} />
            <button type='submit'>Add</button>
        </form>
    )
}

export default UserForm
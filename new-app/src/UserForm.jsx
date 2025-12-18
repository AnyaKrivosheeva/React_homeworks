import { useState } from "react";

const UserForm = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = 'Введите имя!';
        }

        if (!password.trim()) {
            newErrors.password = 'Введите пароль!';
        } else if (password.length < 6) {
            newErrors.password = 'Пароль должен быть не меньше 6 символов';
        }

        return newErrors;
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        console.log(`Имя: ${name}, Пароль: ${password}`);

        setName('');
        setPassword('');
        setErrors({});
    };

    return (
        <form style={{ display: 'flex', gap: '10px' }} onSubmit={onSubmit}>
            <input type='text' placeholder='Имя' value={name} onChange={(e) => setName(e.target.value)} />
            <input type='text' placeholder='Пароль' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type='submit'>Сохранить</button>
            {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
            {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
        </form>
    )
}

export default UserForm
import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(3);

    const decrease = () => {
        setCount((prevState) => prevState === 0 ? 0 : prevState - 1);
    }

    const changeCount = () => {
        const value = Number(prompt("Введите новое значение счётчика:"));

        value > 0 && !isNaN(value)
            ? setCount(value)
            : alert("Введите корректное число.");
    }

    return (
        <>
            <button onClick={decrease}>Уменьшить счет: {count}</button>

            {count === 0 && (
                <>
                    <p style={{ color: 'red' }}>Пожалуйста, измените количество, оно не может быть меньше 0.</p>

                    <button onClick={changeCount}>Изменить число на счетчике</button>
                </>
            )}
        </>
    )
}

export default Counter
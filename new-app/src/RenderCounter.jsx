import { useState, useRef } from "react";

const RenderCounter = () => {
    const [count, setCount] = useState(0);
    const renders = useRef(0);

    renders.current += 1;

    return (
        <div style={{ marginTop: '15px' }}>
            <p>Счётчик: {count}</p>
            <p>Количество ререндеров: {renders.current}</p>
            <button onClick={() => setCount(count + 1)}>Увеличить</button>
        </div >
    );
}

export default RenderCounter
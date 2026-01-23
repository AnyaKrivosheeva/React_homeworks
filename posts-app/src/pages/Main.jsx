import { useNavigate } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Главная страничка</h1>
            <button onClick={() => navigate("/posts")} style={{ marginRight: "20px" }}>Перейти к постам</button>
            <button onClick={() => navigate("/this-does-not-exist")}>Проверить 404</button>
        </div>
    )
}

export default Main
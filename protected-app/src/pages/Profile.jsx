import { useNavigate } from "react-router-dom";

export default function Profile({ onLogout }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        navigate('/login');
    };

    return (
        <div>
            <h2>👤 Личный кабинет</h2>
            <button onClick={handleLogout}>Выйти</button>
        </div>
    );
}
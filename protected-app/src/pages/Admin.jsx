import { useNavigate } from "react-router-dom";

export default function Admin({ onLogout }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        navigate('/login');
    };
    return (
        <div>
            <h2>👤 Админка</h2>
            <button onClick={handleLogout}>Выйти</button>
        </div>
    );
}

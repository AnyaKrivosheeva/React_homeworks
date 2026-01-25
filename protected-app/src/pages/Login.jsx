import { useNavigate } from 'react-router-dom';

export default function Login({ setIsAuth, setRole }) {
    const navigate = useNavigate();

    const handleUserLogin = () => {
        setIsAuth(true);
        setRole('user');
        navigate('/profile');
    };

    const handleAdminLogin = () => {
        setIsAuth(true);
        setRole('admin');
        navigate('/admin');
    };

    return (
        <div>
            <h2>Вход</h2>
            <button onClick={handleUserLogin} style={{ marginRight: 10 }}>Войти как пользователь</button>
            <button onClick={handleAdminLogin}>Войти как админ</button>
        </div>
    );
}
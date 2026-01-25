import { Outlet, NavLink } from 'react-router-dom';

export default function Layout() {
    return (
        <>
            <nav style={{ padding: 10, borderBottom: '1px solid #ddd' }}>
                <NavLink to="/" style={{ marginRight: 10 }}>Главная</NavLink>
                <NavLink to="/profile" style={{ marginRight: 10 }}>Профиль</NavLink>
                <NavLink to="/admin" style={{ marginRight: 10 }}>Админка</NavLink>
                <NavLink to="/login">Вход</NavLink>
            </nav>
            <main style={{ padding: 20 }}>
                <Outlet />
            </main>
        </>
    );
}
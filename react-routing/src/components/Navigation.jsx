import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className="navbar">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Лента постов
            </NavLink>
            <NavLink to="/info" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Об авторе
            </NavLink>
            <NavLink to="/contacts" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Обратная связь
            </NavLink>
        </nav>
    )
}

export default Navigation
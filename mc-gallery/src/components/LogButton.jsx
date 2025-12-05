import { useContext } from "react"
import AuthContext from "../AuthContext"


const LogButton = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

    const toggleLog = () => {
        setIsLoggedIn(prev => !prev);
    };

    return (
        <>
            <button onClick={() => toggleLog()}>
                {isLoggedIn && 'Выйти'}
                {!isLoggedIn && 'Войти'}
            </button>
        </>
    )
}

export default LogButton
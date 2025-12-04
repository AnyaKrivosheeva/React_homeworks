import { useContext } from "react"
import AuthContext from "../AuthContext"


const LogButton = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

    const toggleLog = (isLoggedIn) => {
        return !isLoggedIn ? setIsLoggedIn(true) : setIsLoggedIn(false);
    };

    return (
        <>
            <button onClick={() => toggleLog(isLoggedIn)}>
                {isLoggedIn && 'Выйти'}
                {!isLoggedIn && 'Войти'}
            </button>
        </>
    )
}

export default LogButton
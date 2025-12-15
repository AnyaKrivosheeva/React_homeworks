import { memo } from 'react'

const User = (props) => {
    const {
        user,
    } = props

    console.log("render User:", user.name);  //каждый раз при добавлении нового пользователя видим только один новый лог

    return (
        <li>
            {user.name}, {user.age}
        </li>
    )
}

export default memo(User)
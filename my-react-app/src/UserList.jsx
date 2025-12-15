import User from "./User";

const UserList = (props) => {
    const {
        users,
    } = props

    return (
        <ul>
            {
                users.map((user) => (
                    <User
                        key={user.id}
                        user={user}
                    />
                ))
            }
        </ul>
    )
}

export default UserList
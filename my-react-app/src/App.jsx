import { useCallback, useState } from "react"
import UserForm from "./UserForm"
import UserList from "./UserList"
import ExpensiveCalculation from "./ExpensiveCalculation"
import TodoList from "./ToDoList"

function App() {
  const [users, setUsers] = useState([
    {
      name: "Anna",
      age: 27,
      id: 1,
    },
    {
      name: "Anton",
      age: 35,
      id: 2,
    }
  ]);

  const addUser = useCallback((newUser) => {
    setUsers((prev) => ([...prev, newUser]));
  }, []);

  const numbers = [
    543, 12, 87, 2345, 678, 5, 98, 345, 765, 4321,
    654, 23, 876, 90, 4567, 234, 65, 789, 321, 999
  ];

  return (
    <>
      <UserList users={users} />
      <UserForm handleForm={addUser} />
      <ExpensiveCalculation numbers={numbers} />
      <TodoList />
    </>
  )
}

export default App

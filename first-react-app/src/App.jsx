import UserCard from "./UserCard";

const App = () => {
  const tasks = ["Помыть посуду", "Сделать домашнее задание", "Прочитать книгу"];
  return (
    <>
      <h1>Список дел</h1>
      <ul>
        {tasks.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <UserCard name="Анна" age={27} />
      <UserCard name="Елена" age={20} />
      <UserCard name="Геннадий" age={54} />
    </>
  )
}

export default App

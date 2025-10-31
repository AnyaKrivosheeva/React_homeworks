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
    </>
  )
}

export default App

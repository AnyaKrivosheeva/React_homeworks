import { useCallback, useEffect, useState } from 'react';
import { useGetTodoList } from './hooks/useGetTodoList';
import './App.css';
import TodoList from './components/TodoList';
import AddTodoItem from './components/AddTodoItem';

function App() {
  const [todoList, setTodoList] = useState([]);

  const getTodoList = useGetTodoList();

  const updateTodoList = useCallback(() => {
    getTodoList().then((res) => setTodoList(res.todos));
  }, [getTodoList]);

  useEffect(() => {
    updateTodoList();
  }, [updateTodoList]);

  return (
    <div className="App">
      <h1>Мои задачи</h1>
      <TodoList todoList={todoList} updateTodoList={updateTodoList} />
      <br />
      <AddTodoItem updateTodoList={updateTodoList} />
    </div>
  );
}

export default App;

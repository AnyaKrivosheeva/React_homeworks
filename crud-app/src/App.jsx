import './App.css';
import TodoList from './components/TodoList';
import Posts from './components/Posts';


function App() {
  return (
    <div className='App' >
      <h1 className='title'>Посты</h1>
      <div className='wrapper'>
        <TodoList />
        <Posts />
      </div>
    </div>
  )
}

export default App

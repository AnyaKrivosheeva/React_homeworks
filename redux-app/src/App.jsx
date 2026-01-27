import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counter/counterSlice';
import Users from './Users';

export default function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div style={{ padding: 20 }}>
        <h1>Счётчик: {count}</h1>
        <button onClick={() => dispatch(decrement())} style={{ marginRight: '20px' }}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <Users />
    </>
  );
}

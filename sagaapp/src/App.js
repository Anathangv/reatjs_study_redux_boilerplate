import { useSelector, useDispatch } from 'react-redux';
import {increaseCount} from './reducer'
import './App.css';

function App() {
  const count = useSelector(state => state.myFirstReducer.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>Count {count}</div>
      <button onClick={() => dispatch(increaseCount())}>Increase Count</button>
    </div>
  );
}

export default App;

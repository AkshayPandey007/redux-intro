import logo from './logo.svg';
import './App.css';
import {useDispatch} from "react-redux"
import {useSelector} from "react-redux"
import { Add, Subtract , Multiply , Divide } from './store/action';
 import {useState} from "react"


function App() {
  // const [count,setCount] = useState(0)
  const count = useSelector((state)=>state.count)
  const dispatch = useDispatch()

  const [value, setValue] = useState([]);

  const handleChange = (e) => {
    if (e.target.value) {
      setValue(+e.target.value);
    }
  };

  return (
    <div className="App">
<input
        type="number"
        placeholder="Enter Number..."
        onChange={handleChange}
      />
      <div>
  <h1>Counter :{count}</h1>
  </div>
  <button onClick={()=>dispatch(Add(value))}>+</button>
  <button onClick={()=>dispatch(Subtract(value))}>-</button>
  <button onClick={() => dispatch(Multiply(value))}>*</button>
  <button onClick={() => dispatch(Divide(value))}>/</button>
    </div>
  );
}

export default App;

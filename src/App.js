import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {Decrement, Increment,Reset,Increment_with_value} from './Redux/CountSlice'

function App() {
  const dispatch= useDispatch()
  const count = useSelector(state=>state.CountReducer.count)
  const [val,setVal] = useState('')
  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={()=>dispatch(Increment())}>+</button>
      <button onClick={()=> dispatch(Decrement())}>-</button>
      <button onClick={()=> dispatch(Reset())}>Reset</button>
      <input onChange={(e)=> setVal(e.target.value)} />
      <button onClick={()=> dispatch(Increment_with_value(+val))}>Increment with value</button>
    </div>
  );
}

export default App;
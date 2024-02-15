import './App.css';
import { getData } from './Redux/Action';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  console.log(data);
  return (
    <>
      {data.map((el, i) => {
        return (
          <div key={i} style={{ borderBottom: "1px solid black" }}>
            <h1>{el.name}</h1>
            <p>{el.email}</p>
          </div>
        )
      })}
      <button onClick={() => dispatch(getData())}>Fetch Data</button>
    </>
  )
}

export default App;
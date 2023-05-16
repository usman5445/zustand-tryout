import "./App.css";
import useStore from "./zustand";
function App() {
  let { count, decrementCount, incrementCount } = useStore((state) => state);
  return (
    <div className="App">
      <h1>{count}</h1>
      <div>
        <button onClick={() => decrementCount("decrementCount")}>-</button>
        <button onClick={() => incrementCount("incrementCount")}>+</button>
      </div>
    </div>
  );
}

export default App;

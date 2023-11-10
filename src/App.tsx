import { useState } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState<number>(0);

  const update = (v: number) => (): void => {
    setCount((prev: number) => prev + v);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={update(+1)}>+</button>
      <button disabled={count === 0} onClick={update(-1)}>-</button>
      <button onClick={update(-count)}>Reset</button>
    </div>
  );
}

export default App;

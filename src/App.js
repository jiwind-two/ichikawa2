import "./styles.css";
import { useState } from "react";

export default function App() {
  console.log("App");
  const [count, setCount] = useState(0);
  const onClickCountUp = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <input />
      <button>表示</button>
    </div>
  );
}

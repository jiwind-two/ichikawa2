import "./styles.css";
import { useState } from "react";
import { childArea } from "./childArea";

export default function App() {
  console.log("App");
  const [count, setCount] = useState(0);
  const onClickCountUp = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <input />
      <br />
      <br />
      <button>表示</button>

      <childArea />
    </div>
  );
}

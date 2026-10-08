import React, { useState } from "react";
import Counter from "./components/counter.jsx";
import Textbox from "./components/textbox.jsx";
import Stopwatch from "./components/stopwatch.jsx";
import ToggleButton from "./toggleButton.jsx";
import Card from "./components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount((count) => Math.min(100, count + 1));
  }
  return (
    <>
      <Counter />
      <Textbox />
      <Stopwatch />
      <ToggleButton />
      <div className="flex justify-around items-baseline gap-5 m-15">
        <Card
          title="Noah Thomson"
          text="A UI Designer who builds beautiful and functional UI"
          like={10}
          post={5}
          view={100}
          count={count}
          handleIncrement={handleIncrement}
        />
        <Card
          title="Carls Johnson"
          text="A UI Developer who builds beautiful and functional Components"
          like={10000}
          post={500}
          view={100}
          count={count}
          handleIncrement={handleIncrement}
        />
      </div>
    </>
  );
}

export default App;

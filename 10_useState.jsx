const [count, setCount] = useState(0);
//so=>
useState => hook(useState hook) //that creates a state
count =>state variable
setCount => function.

//here 
Think of useState(0) as creating a box (state) with a default value (0).

    count is what’s inside the box.(the content inside the state)
    setCount is the tool to modify the contents of the box.(a function to update the content)


//code example=>
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1); // Updating state inside a separate function
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

re-render =>

  import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  console.log("Component re-rendered!"); // Runs every time React re-renders

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
//👉 Every time you click the button, setCount updates the state, and React re-renders the component to reflect the new count.
//when major changes happen react re render the component to laod updated data.(like use state,props,parent component etc)(

clousure=>
  

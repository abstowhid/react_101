//event
//note: do not use () while callling. cz () it executes the function instatn. but we need only when the event happen then it will be called. so don' use ()
function Fname(event){
event.preventDefault();
}
//this ensure to prevent default behaviour of event in react,(in facing problem then try it)


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

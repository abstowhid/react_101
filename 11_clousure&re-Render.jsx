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
  //A closure is when a function remembers variables from its parent scope even after the parent function has finished executing.
  function outerFunction() {
  let count = 0; // Variable inside outerFunction

  function innerFunction() {
    count++; // innerFunction remembers 'count'
    console.log(count);
  }

  return innerFunction; // Returning function (closure)
}

const increment = outerFunction(); // outerFunction runs, returns innerFunction
increment(); // Output: 1
increment(); // Output: 2
increment(); // Output: 3
//innerFunction is returned from outerFunction, but it remembers count, even though outerFunction has finished running.
//This happens because of closure, which keeps count stored in memory.



//problem=>
function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setTimeout(() => {
      setCount(++count); // ❌ Closure keeps the old `count`
      console.log(count); // ❌ Might print stale value!
    }, 2000);
  }

  return <button onClick={handleClick}>Click Me</button>;
}

// solution=>
function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setTimeout(() => {
      setCount((prevCount) => prevCount + 1); // ✅ Uses latest state
    }, 2000);
  }

  return <button onClick={handleClick}>Click Me</button>;
}

🔥 The Key Difference

    When you use setCount(count + 1), it captures the count value at the time of execution.
        If the state updates multiple times in quick succession, you might miss updates (stale state issue).
    When you use setCount((prevCount) => prevCount + 1), React ensures that prevCount is always the latest state.
  

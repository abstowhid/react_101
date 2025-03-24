clousure=> 
  think of i'm updating a value with function with a initial value 1, so the function will continuesly update my value (like i++ will increase 1 contnuesly) ,, but in normal or real case each time my initial value and first upate remain same for all time( like initial=1, and updated=2). to remove this isshue here come the clourusre , it remember the values.. so when the  value is updated to 2 now for the next step it will be 2=+1=3,,,without cousure each time it will be 1+1=2,,so clousure remember the updated value







//mainly clousure concept is for the function(means depending of function structure the state value is updated or not)
re-render =>

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
  //A closure is when a function remembers variables from its parent scope even after the parent function has finished executing.(fast solution= we can store value in a parameter to be updated)
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
  

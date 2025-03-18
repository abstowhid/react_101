// for best practice we need to call back functions properly so that we can use whenever however we want;
function ThisIsAComponent(){
  const[count , setCount]=useState(0); //setcount is a function
  
function Fname(){
 // instead => setCount(count+1);
//  setCount(here goes the code or another func)
  setCount((newCount)=>{   //as we know already here newCount store the "count" from the state(same for array,mapping overall key store)
   return newCount+1;  //as js function need return
  }); 
}
  
return(
  //here goes html
  <button onclick={Fname}>Btn</button>  //no first bracket ().only when btn is clicke;
)
}

// if we want a function will be executed instant the code refresh, thne we will use ()
//if we want after a event it will execute only then we will not use ().
//again=>
function Outer function(){
let randomNumber=  Math.Random();
  console.log('this should executes only once')
}
function ThisIsAComponent(){
  
  const[count , setCount]=useState(randomNumber); //we want only once when the refresh happen we will a random number and each time component refresh we don't want a new number(or we don't want that function to execute) so we are not using (). if we want each time component refresh it will execute again again we can use ().
  //note:even the randomNumber function executes each time only the first execution will work as the furst random value is taken by useState then we make +1, that means the operation has started and is happening on the first number we chose, so even it executes again and again it is worthless and take extra data.so as we don't need that so don't use ()
  function Fname(){
  setCount((newCount)=>{
   return newCount+1; 
  }); 
}

return(
  //here goes html
  <button onclick={Fname}>Btn</button>  //this causes compononent re render(refresh)
)
}

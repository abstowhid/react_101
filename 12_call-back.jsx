// for best practice we need to call back functions properly so that we can use whenever however we want;
function ThisIsAComponent(){
  const[count , setCount]=useState(0); //setcount is a function
function Fname(){
    // instead => setCount(count+1);
//  setCount(here goes the code or another func)
  setCount((newCount)=>{
   return newCount+1;  //as js function need return
  });  //as we know already here newCount store the "count" from the state(same for array,mapping overall key store)
}
return(
  //here goes html
  <button onclick={Fname}>Btn</button>  //no first bracket ().only when btn is clicke;
)
}

// if we want a function will be executed instant the code refresh, thne we will use ()
//if we want after a event it will execute only then we will not use ().

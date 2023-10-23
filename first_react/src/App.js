import { useState } from "react";   //  useState is a hook


























function App() {

  let [counter, setCounter] = useState(5) //this is same as let counter = 5 and setCounter is a function which is responsible to update the counter varialble

  //let counter = 5

  const addValue = function(){
    if(counter === 10)
    return
    counter++;
    setCounter(counter)
    console.log("Value added", counter);
  }

  const removeValue = ()=>{
    if(counter === 0 )
    return
    counter--
    setCounter(counter)
    console.log("Value subtracted",counter);
  }

  return (
    <>
      <h1>Counter project</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Subtract value</button>

      <p>footer: {counter}</p>
    </>   
  );
}

export default App;


//   < >  call fragment


//only evaluated expression in html elements
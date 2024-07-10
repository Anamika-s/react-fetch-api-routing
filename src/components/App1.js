import { useState, useEffect } from "react";

export const App1 = ()=>{
    const [counter1, setCounter1] = useState(1);
    
    const [counter2, setCounter2] = useState(100);
   useEffect(()=>
{
   setTimeout(()=>
{
    setCounter1((counter1) => counter1 + 1);
},1000)  ; 
},[counter2])
    return(
        <>
        <h1>  counter1 : {counter1}<br/>
        counter2 : {counter2} </h1>
        <button onClick={()=> setCounter1(counter1+1)}> Incr counter1 </button>
       
        <button onClick={()=> setCounter2(counter2+1)}> Incr of Counter2 </button>
        </>
    )
}
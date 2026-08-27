// import { useState } from "react";

// useState
function Counter()
{
    let count=5;
    let hi=()=>{
        console.log("hello");
        count++;
        // setCount(count++)
    }
    return(
        <>
        <h1>I'm Counter</h1>
        <button onClick={hi}>Click me{count}</button>
        
        </>
    )
}
export default Counter
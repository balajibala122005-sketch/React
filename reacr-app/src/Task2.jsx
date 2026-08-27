import { useState } from "react";
function Task2(){
    const[count,setCount]=useState(0);
    const sei =()=>{
        setCount(count +1 );
    }
    const pei=()=>{
        setCount(count - 1);
    }
    return(
        <div>
            <h1>count{count}</h1>
            <button onClick={sei}>Click me (Increase)</button>
            <button onClick={pei}>Click me (decrease)</button>



        </div>

    )
}
export default Task2
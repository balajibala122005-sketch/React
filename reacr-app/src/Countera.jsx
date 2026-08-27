import { useState } from "react";

function Countera() {
    const [count, setCount] = useState(0);

    const hi = () => {
        setCount(count + 1);
    };
    const bye =()=>{
        setCount(count-1);
    };

    return (
        <>
            <h1>I'm Counter {count}</h1>
            {/* <button onClick={hi}>Click me {count}</button>
            <button onClick={bye}>Click me {count}</button> */}
            <button onClick={hi}>Click me (increase)</button>
            <button onClick={bye}>Click me (decrease)</button> 
        </>
    );
}

export default Countera;
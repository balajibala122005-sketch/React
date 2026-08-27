import { useState } from "react";

function Countera() {
    const [count, setCount] = useState(5);

    const hi = () => {
        console.log("hello");
        setCount(count + 1);
    };

    return (
        <>
            <h1>I'm Counter</h1>
            <button onClick={hi}>Click me {count}</button>
        </>
    );
}

export default Counter;
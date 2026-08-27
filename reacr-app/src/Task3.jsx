import { useState } from "react";
function Task3(){
    const [text, setText] = useState("word");
    const changeText=()=>{
        setText("Welcome to React.");
    };
    return(
        <div>
            <h1>{text}</h1>
            <button onClick={changeText}>change text</button>
        </div>
    )

}
export default Task3
import { useState } from "react";
let Task1 = ()=>{
    const[name,setName]=useState("")
    return(
        <div>
        <input type="text"
        value={name} 
        onChange={(e)=>{
            console.log(e);
            setName(e.target.value)
            
        }}
        />
        <p>Hello! {name}</p>
        </div>
    )
}
export default Task1
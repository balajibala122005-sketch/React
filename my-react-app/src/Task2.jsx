import React, { useState } from 'react'

const Task2 = () => {
    const[person,setPerson]=useState({
        name:'',
        age:'',
        duration:''
    });
   const detail=()=>{
    setPerson({
        name : 'balaji',
        age : 20,
        duration:'6hr'
    });
   }
   return(
    <div>
        <h1>{person.name}</h1>
        <h1>{person.age}</h1>
        <h1>{person.duration}</h1>
        <button onClick={detail}>Click here</button>
    </div>
   )
   
  
}

export default Task2


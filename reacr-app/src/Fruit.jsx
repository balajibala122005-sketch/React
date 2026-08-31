import React, { useState } from 'react'

const Fruit = () => {
    let fruit=["Apple","Orange","banana","kavaifruit"]
  return (
    // <ul>
    // {fruit.map((fruit,i)=>
    // <li key={i}><h1>{fruit}</h1>
    // </li>)}
    // </ul>
   
    <ul>
      {fruit.map((fruit,i)=>( <li key={i}><h1>{fruit}</h1></li>))}
    </ul>
  )
}


export default Fruit
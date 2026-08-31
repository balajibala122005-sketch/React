import React from 'react'

const Task3 = () => {
    const fruits=[
        "Apple",
        "Orange",
        "Mango",
        "Banana",
        "Grapes"
    ];
   

  return (
    // <div>{fruits.map((fruits)=>(
    // <h1>{fruits}</h1>))}</div>
    //  <ul>
    //   {fruits.map((fruits,i)=>(
    //      <li key={i}>
    //       <h1>{fruits}</h1>
    //     </li>))}
    // </ul>
    <ul>
      {fruits.map((fruits,i)=>(
        <li key={i}><h1>{fruits}</h1>
        </li>
      ))}
    </ul>
   
  )
}

export default Task3
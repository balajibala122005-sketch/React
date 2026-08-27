// const Home=({age,role,city})=
const Home=(p)=>
  {
    return(<>
    {/* <p>Home</p>
     <p> To update Node.js, the easiest and safest method is using a Node Version Manager like nvm (for macOS/Linux/WSL) or nvm-windows (for Windows), or by downloading a fresh installer directly from the Official Node.js Website.</p> */}

  <h1>{p.age}</h1>
  <h1>{p.role}</h1>
  <h1>{p.city}</h1>
  </>)
  
}
export default Home
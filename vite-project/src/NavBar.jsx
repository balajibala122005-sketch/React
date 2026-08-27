// import About from "./About"
// import Contact from "./Contact"
// import Galary from "./Galary"
// import Home from "./Home"
// import { BrowserRouter,Routes,Route,Link } from "react-router-dom"

// Galary
// let NavBar=()=>{
//     return(
//         <div>
          
//             <nav>
//                 <Link to="/">Home</Link>
//                 <Link to="/Aboout">About</Link>
//                 <Link to="/contact">Contact</Link>
//                 <Link to="/galary">Galary</Link>
//             </nav>

//         </div>
//     )
        
    
// }
// export default NavBar



import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav id="nav">
      <Link to="/">Home |</Link>
      <Link to="/about">About |</Link>
      <Link to="/contact">Contact |</Link>
      <Link to="/galary">Gallery |</Link>
    </nav>
  );
};

export default NavBar;
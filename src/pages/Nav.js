import { Link } from "react-router-dom"
export const Nav =()=>{
    return(
        <nav>
          <Link to="/">Home</Link> |
          <Link to="/About">About</Link> |
          <Link to="/contact">Contact Me</Link> |
        </nav>
    )
}
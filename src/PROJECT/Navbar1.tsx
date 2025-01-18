import { Link } from "react-router-dom";
import './Navbars.css'

const Navbar1=()=>{
    return(
        <>
        <ul>
            <li><Link to="/">Home1</Link></li>
            <li><Link to="/About1">About1</Link></li>
            <li><Link to="/Contact1">Contact1</Link></li>
        </ul>
        </>
    )
}
export default Navbar1;

import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {
    
    const header: any = {
        'display': 'flex',
        'justify-content': 'center'

    }
    const bodys: any = {
        'padding': '25px',
        'list-style': 'none'
    }
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated } = useAuth0();


    const navigate = useNavigate();
    const back = () => {
        navigate(-1);

    }


    return (
        <>
            <ul style={header}>
            <button  onClick={back}>Back</button>
                <li style={bodys}><NavLink to="/">Home</NavLink></li>
                <li style={bodys}><NavLink to="/about">About</NavLink></li>
                <li style={bodys}><NavLink to="/contact">Contact</NavLink></li>

                {
                    (isAuthenticated) ? (<div>
                        <h2>{user?.name}</h2>
                        <h2><img src={user?.picture} alt="" /></h2>
                        <h2>{user?.email}</h2>

                        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className="btn btn-danger">Logout</button>  </div>) :
                        <li style={bodys}><button onClick={() => loginWithRedirect()} className="btn btn-info">Log In</button></li>
                }


            </ul>

        </>
    )
}
export default Navbar;
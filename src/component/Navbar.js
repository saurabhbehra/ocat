import React from 'react'
import {Link} from 'react-router-dom'
import { useOktaAuth } from "@okta/okta-react";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {

    // const { oktaAuth, authState } = useOktaAuth();

    // const loggingIn = async () => oktaAuth.signInWithRedirect({ originalUri: "/profile" });
  
    // const loggingOut = async () => oktaAuth.signOut();


    //testing
    const { loginWithRedirect,logout ,isAuthenticated} = useAuth0();
    
  return (
    <>
    <nav className="navbar navbar-expand-lg mb-5" style={{backgroundColor:"red"}}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#" style={{color:"white"}} >Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav" >
          <li className="nav-item" >
            <Link className="nav-link active" aria-current="page" href="#" style={{color:"white"}} to='/home'>Home</Link>
          </li>
          {/* {isAuthenticated &&<li className="nav-item">
            <a className="nav-link" href="#" style={{color:"white"}} onClick ={() => logout({ logoutParams: { returnTo: window.location.origin } })}>LogOut</a>
          </li>} */}
          <li className="nav-item" >
            <a className="nav-link active" aria-current="page" href="#" style={{color:"white"}} onClick ={()=>loginWithRedirect()}>Login</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </>
  )
}

export default Navbar
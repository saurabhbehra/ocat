import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, useHistory, Switch } from 'react-router-dom';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { useOktaAuth, Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { oktaAuthConfig } from "./octaConfig";
import Navbar from "./component/Navbar";
import Profile from './component/Profile'
import Login from './component/Login'
import Home from './component/Home'
import RapidNav from "./component/RapidNav";
import useAuthUser from "./component/getUser";

import { SidebarTopbar } from 'tredence-rapid-xd';

let octaConfig = new OktaAuth(oktaAuthConfig);

function App() {

  let history = useHistory()
  // const userInfo = useAuthUser();
  // console.log(userInfo)
  console.log(oktaAuthConfig)
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || "/", window.location.origin));
  };


  return (
    <div className="App">
      <Router>
        {/* <Security oktaAuth={octaConfig} restoreOriginalUri={restoreOriginalUri}> */}

        {/* <Navbar/> */}
            <RapidNav/>
            <Switch>

              <Route path='/' exact={true} component={Home} />
              {/* <Route path ='/logout' component ={Login}/> */}
              <Route path='/profile' component={Profile} />

            </Switch>
         
        {/* </Security> */}
      </Router>
    </div>
  );
}

export default App;

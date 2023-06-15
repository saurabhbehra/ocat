import React,{useEffect} from 'react'
import { useAuth0 ,withAuthenticationRequired } from "@auth0/auth0-react";

export function Profile() {
const { user, isAuthenticated, isLoading ,getAccessTokenSilently } = useAuth0();

useEffect(()=>{
   const userToken =async() =>{ 
    const domain = "dev-dzy68gle787cmgde.us.auth0.com";
    try{
        // const accessToken = await getAccessTokenSilently({
        //     authorizationParams: {
        //       audience: `https://${domain}/api/v2/`,
        //       scopes: ["openid", "profile", "email","offline_access"]
        //     },
        //   })
        const accessToken = await getAccessTokenSilently()

          console.log(accessToken,'accessToken')
       }
       catch(err){
            console.log(err)
       }
   }

   userToken()

},[getAccessTokenSilently])

  console.log(user)
  return (
    <>
    {isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
        )}

        <h3>Profile page</h3>
   </>
  )
 
}

export default withAuthenticationRequired(Profile, {
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => (<div>Redirecting you to the login page...</div>)
});
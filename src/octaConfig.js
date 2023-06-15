export const oktaAuthConfig = {
    issuer: `https://${process.env.REACT_APP_ISSUER}/oauth2/default`,
    clientId: process.env.REACT_APP_CLIENT_ID,
    redirectUri: `${window.location.origin}/profile`,
    scopes: ["openid", "profile", "email"],
    pkce: true,
};
import { AppState, Auth0Provider, User } from '@auth0/auth0-react';

const AuthProviderWithNavigte = ({children} : {children:React.ReactNode}) => {
   
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_AUTH0_REDIRECT_URI;

    if(!domain || !clientId || !redirectUri) {
        throw new Error("Please define VITE_AUTH0_DOMAIN, VITE_AUTH0_CLIENT_ID and VITE_AUTH0_REDIRECT_URI in your .env file");
    }

    console.log(domain,clientId,redirectUri)

    const onRedirectCallback = (appState?: AppState,user?: User) =>{
        console.log(user);
    };

  return (
    <Auth0Provider domain={domain} clientId={clientId} 
    authorizationParams={{
        redirectUri
    }}
    onRedirectCallback={onRedirectCallback}
    >
        {children}
    </Auth0Provider>
  )
}

export default AuthProviderWithNavigte
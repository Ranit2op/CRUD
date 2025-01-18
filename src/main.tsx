
import { Auth0Provider } from '@auth0/auth0-react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
<Auth0Provider
    domain="my-pag.us.auth0.com"
    clientId="0yB1cIPcP9HWqdyydawk5CGpbK2TOkUP"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);
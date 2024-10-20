import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Auth0Provider
      domain="dev-mqzq7ooglu3lux58.us.auth0.com"
      clientId="MRCiorbI8q4ObQYBxFpdOVFqkK8Bewmc"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);

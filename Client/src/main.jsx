import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {Auth0Provider} from "@auth0/auth0-react"
import { redirect } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider domain="dev-yrcfk4jwxg3uw4jg.us.auth0.com"
    clientId="hZjokKkkVHAEaHtQ0TMM9FCcTJ2HMyRF"
    authorizationParams={{
      redirect_uri:"https://homyz-realestate-clientside.vercel.app"
    }}
    audience="http://localhost:8000"
    scope="openid profile email">
      <MantineProvider>
        <App />
      </MantineProvider>
    </Auth0Provider>
  </React.StrictMode>
);


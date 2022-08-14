import { Loading, Provider } from "@shopify/app-bridge-react";
import { AppProvider } from "@shopify/polaris";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const queries = new URLSearchParams(window.location.search);

const shopifyAppBridgeConfig = {
  apiKey: import.meta.env.VITE_SHOPIFY_APP_KEY,
  host: queries.get("host") as string,
  forceRedirect: false,
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppProvider i18n={{}}>
      <Provider config={shopifyAppBridgeConfig}>
        <Loading />
        <App />
      </Provider>
    </AppProvider>
  </React.StrictMode>
);

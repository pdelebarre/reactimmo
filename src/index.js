import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { FavoritesContextProvider } from "./store/favorites-context";
import { PreferencesContextProvider } from "./store/preferences-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavoritesContextProvider>
    <PreferencesContextProvider>
      <App />
    </PreferencesContextProvider>
  </FavoritesContextProvider>
);

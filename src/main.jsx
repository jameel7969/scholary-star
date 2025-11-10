import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import storeConfig from "./store";
import { Toaster } from "react-hot-toast";

const { store, persistor } = storeConfig;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster position="top-right" />
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);

import * as React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import App from "./App";
import WiseMind from "./components/Wisemind";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
      <WiseMind />
    </StyledEngineProvider>
  </React.StrictMode>
);

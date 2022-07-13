import * as React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import App from "./App";
import WiseMind from "./components/Wisemind";
import Whatskills from "./components/Whatskills";
import Howskills from "./components/Howskills";
import Distract from "./components/Distract";
import Proscons from "./components/Proscons";
import Oppositeaction from "./components/Oppositeaction";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
      <WiseMind />
      <Whatskills />
      <Howskills />
      <Distract />
      <Proscons />
      <Oppositeaction />
    </StyledEngineProvider>
  </React.StrictMode>
);

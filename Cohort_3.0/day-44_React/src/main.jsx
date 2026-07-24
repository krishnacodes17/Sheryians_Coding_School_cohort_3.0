import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { ProviderRouter } from "./context/Mycontext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProviderRouter>
      <App />
    </ProviderRouter>
  </BrowserRouter>,
);

import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouters from "./routers/AppRouters.jsx";
import { ToastContainer, toast } from "react-toastify";
import { UserContextProvider } from "./context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <UserContextProvider>
      <AppRouters />
      <ToastContainer />
    </UserContextProvider>
  </>,
);

import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./routes/AppRoutes.jsx";
import NestedAppRoute from "./routes/NestedAppRoute.jsx";

createRoot(document.getElementById("root")).render(
    // ! here we direct use our router components
    // <AppRoutes />

    <NestedAppRoute />
);
 
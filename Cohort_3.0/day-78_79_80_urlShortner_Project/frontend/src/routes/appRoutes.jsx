import { createBrowserRouter, Navigate } from "react-router";
import MainLayout from "../layout/MainLayout";
import ChatPage from "../url_Short/ui/pages/ChatPage";

export const Approutes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/main" replace />,
  },
  {
    path: "/main",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ChatPage />,
      },
    ],
  },
]);
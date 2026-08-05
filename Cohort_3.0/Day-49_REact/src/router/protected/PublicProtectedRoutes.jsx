import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PublicProtectedRoutes() {
  let { user } = useSelector((state) => state.auth);

  if (user) {
    return <Navigate to="/main" replace />;
  }

  return <Outlet />;
}

export default PublicProtectedRoutes;

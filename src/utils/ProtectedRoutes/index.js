import React from "react";
import { Navigate } from "react-router-dom";
import Hooks from "../../hooks";

export const ProtectedRoutes = ({ component: Component }) => {
  const { IsUserLoggedIn } = Hooks();
  if (IsUserLoggedIn()) {
    return Component;
  } else {
    return <Navigate to="/" />;
  }
};

import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import UserChat from "./User/UserChat";

const ProtectedRoute = ({ admin }) => {
  const auth = false;

  if (admin) {
    let adminauth = true;
    return adminauth ? <Outlet /> : <Navigate to="/login" />;
  } else {
    let userAuth = true;
    return userAuth ? (
      <>
        <UserChat /> <Outlet />
      </>
    ) : (
      <Navigate to="/login" />
    );
  }
  
};

export default ProtectedRoute;

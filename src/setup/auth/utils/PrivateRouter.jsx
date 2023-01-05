import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const PrivateRouter = ({ children }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return user ? children : <Navigate to="/dashboard/login" />;
};
export default PrivateRouter;

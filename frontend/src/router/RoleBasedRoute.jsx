// RoleBasedRoute.js
import { Navigate, Route, Routes } from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';



const RoleBasedRoute = ({ element, requiredRole, ...props }) => {
  // Check if the user is logged in and has the required role
  const { role } = useContext(AuthContext);
  const isAuthenticated = true; // Replace with your authentication check
  
  if (isAuthenticated && role === requiredRole) {
    return <Route {...props} element={element} />;
  } else {
    // Redirect to a different route if not authenticated or lacks required role
    return <Navigate to="/login" />;
  }
};

export default RoleBasedRoute;


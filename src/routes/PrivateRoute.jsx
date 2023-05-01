import React from 'react';
import { useContext } from 'react';
import { authContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const location = useLocation();
  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }
  if (user) {
    return children;
  }
  return (
    <Navigate to="/login" replace={true} state={{ from: location }}></Navigate>
  );
};

export default PrivateRoute;

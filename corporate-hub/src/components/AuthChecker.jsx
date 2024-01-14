import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const AuthChecker = ({ children, isAuthenticated }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
  
    return children;
  };
  
  AuthChecker.propTypes = {
    children: PropTypes.node,
    isAuthenticated: PropTypes.bool.isRequired,
  };
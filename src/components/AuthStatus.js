import React from 'react';
import { useAuth } from '../AuthContext';

const AuthStatus = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div className="p-4 bg-light border-top">
      <div className="d-flex align-items-center justify-content-between">
        <p className="small text-muted mb-0">
          User is {isAuthenticated ? <span className="fw-semibold text-success">logged in</span> : <span className="fw-semibold text-danger">logged out</span>}
        </p>
        <div className="d-flex gap-2">
          <button
            onClick={login}
            disabled={isAuthenticated}
            className="btn btn-primary btn-sm"
          >
            Login
          </button>
          <button
            onClick={logout}
            disabled={!isAuthenticated}
            className="btn btn-danger btn-sm"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthStatus;

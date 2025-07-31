import React, { useEffect, useState } from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import UserProfile from '../components/UserProfile';
import AuthStatus from '../components/AuthStatus';

const HomePage = () => {
  const [last_datetime, setLastDatetime] = useState(null);
  const [viewedAuthStatus, setViewedAuthStatus] = useState(false);
  const location = useLocation();

  const handleButtonClick = () => {
    setLastDatetime(new Date().toISOString());
  };

  // Ensure viewedAuthStatus is set to true if the path matches "/home/auth-status"
  useEffect(() => {
    if (location.pathname.endsWith('/auth-status')) {
      setViewedAuthStatus(true);
    }
  }, [location.pathname]);

  return (
    <div className="w-100" style={{maxWidth: '28rem'}}>
      <h1 className="h3 fw-bold text-center text-dark mb-4">React Auth Demo</h1>
      <div className="bg-white rounded shadow-lg overflow-hidden">
        <UserProfile />
        <div className="p-4 bg-light border-top text-center">
          {!viewedAuthStatus && (
            <Link 
              to="/home/auth-status"
              className="btn btn-outline-primary"
            >
              View Auth Status
            </Link>
          )}
          <Routes>
            <Route 
              path="/auth-status" 
              element={
                <AuthStatus 
                  last_datetime={last_datetime} 
                  onViewed={() => setViewedAuthStatus(true)}
                />
              } 
            />
          </Routes>
        </div>
      </div>
      
      <div className="text-center mt-3">
        <button 
          className="btn btn-primary mb-2" 
          onClick={handleButtonClick}
        >
          Capture DateTime
        </button>
      </div>
      
      <p className="text-center small text-muted mt-3">
        This app demonstrates a simple authentication flow using React Context and Hooks.
      </p>
    </div>
  );
};

export default HomePage;

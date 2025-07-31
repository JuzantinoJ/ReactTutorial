import React, { useState } from 'react';
import UserProfile from '../components/UserProfile';
import AuthStatus from '../components/AuthStatus';

const HomePage = () => {
  const [last_datetime, setLastDatetime] = useState(null);

  const handleButtonClick = () => {
    setLastDatetime(new Date().toISOString());
  };

  return (
    <div className="w-100" style={{maxWidth: '28rem'}}>
      <h1 className="h3 fw-bold text-center text-dark mb-4">React Auth Demo</h1>
      <div className="bg-white rounded shadow-lg overflow-hidden">
        <UserProfile />
        <AuthStatus last_datetime={last_datetime} />
      </div>
      
      <div className="text-center mt-3">
        <button 
          className="btn btn-primary mb-2" 
          onClick={handleButtonClick}
        >
          Capture DateTime
        </button>
        {/* {last_datetime && (
          <p className="small text-muted">
            Last clicked: {new Date(last_datetime).toLocaleString()}
          </p>
        )} */}
      </div>
      
      <p className="text-center small text-muted mt-3">
        This app demonstrates a simple authentication flow using React Context and Hooks.
      </p>
    </div>
  );
};

export default HomePage;

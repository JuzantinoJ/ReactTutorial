import React from 'react';
import UserProfile from '../components/UserProfile';
import AuthStatus from '../components/AuthStatus';

const HomePage = () => {
  return (
    <div className="w-100" style={{maxWidth: '28rem'}}>
      <h1 className="h3 fw-bold text-center text-dark mb-4">React Auth Demo</h1>
      <div className="bg-white rounded shadow-lg overflow-hidden">
        <UserProfile />
        <AuthStatus />
      </div>
      <p className="text-center small text-muted mt-3">
        This app demonstrates a simple authentication flow using React Context and Hooks.
      </p>
    </div>
  );
};

export default HomePage;

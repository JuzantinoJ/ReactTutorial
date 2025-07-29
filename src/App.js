import React from 'react';
import { AuthProvider } from './AuthContext';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <AuthProvider>
      <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center">
        <HomePage />
      </div>
    </AuthProvider>
  );
}
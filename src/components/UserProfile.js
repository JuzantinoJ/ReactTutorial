import React, { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';

const UserProfile = () => {
  const { isAuthenticated } = useAuth();
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      setUserData(null);
      return;
    }

    setIsLoading(true);
    const fetchUserData = () => {
      setTimeout(() => {
        const mockUserData = {
          name: 'Jane Doe',
          email: 'jane.doe@example.com',
          avatar: 'https://placehold.co/100x100/E2E8F0/4A5568?text=JD'
        };
        setUserData(mockUserData);
        setIsLoading(false);
      }, 1500);
    };

    fetchUserData();
  }, [isAuthenticated]);

  return (
    <div className="p-4" style={{minHeight: '200px'}}>
      {isAuthenticated ? (
        isLoading ? (
          <div className="d-flex align-items-center justify-content-center h-100">
            <div className="spinner-border text-primary" role="status" aria-label="Loading">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          userData && (
            <div className="d-flex align-items-center">
              <img 
                src={userData.avatar} 
                alt="User Avatar" 
                className="rounded-circle me-3"
                style={{width: '96px', height: '96px'}}
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/E2E8F0/4A5568?text=Error'; }}
              />
              <div>
                <h2 className="h4 fw-bold text-dark">Welcome, {userData.name}!</h2>
                <p className="text-muted">{userData.email}</p>
              </div>
            </div>
          )
        )
      ) : (
        <div className="d-flex align-items-center justify-content-center h-100">
            <p className="fs-5 text-muted">Please log in to view your profile.</p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;

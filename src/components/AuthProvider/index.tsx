import { ReactNode, useEffect, useState } from 'react';
import { API, BEARER } from '../../constant';
import { AuthContext } from '../../contexts/AuthContext';
import { getToken } from '../../helper';

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: SidebarDrawerProviderProps) => {
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const authToken = getToken();

  const fetchLoggedInUser = async (token) => {
    setIsLoading(true);

    try {
      const response = await fetch(`${API}/users/me`, {
        headers: { Authorization: `${BEARER} ${token}` },
      });

      const data = await response.json();

      setUserData(data);
    } catch (error) {
      console.log(error);
      alert('Error while getting logged in user details');
    } finally {
      setIsLoading(false);
    }
  };

  const handleUser = (user) => {
    setUserData(user);
  };

  useEffect(() => {
    if (authToken) {
      fetchLoggedInUser(authToken);
    }
  }, [authToken]);

  return (
    <>
      <AuthContext.Provider
        value={{ user: userData, setUser: handleUser, isLoading }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;

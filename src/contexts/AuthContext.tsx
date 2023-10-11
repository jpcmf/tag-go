import { createContext, useContext } from 'react';

export const AuthContext = createContext({
  user: undefined,
  isLoading: false,
  setUser: (value: any) => {},
});

export const useAuthContext = () => useContext(AuthContext);
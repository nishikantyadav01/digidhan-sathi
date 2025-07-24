// src/context/AuthContext.tsx
import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { authService } from './auth';
import type { User } from './auth';

type AuthContextType = {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(authService.getUser());

  const login = async (username: string, password: string) => {
    const loggedInUser = await authService.login(username, password);
    setUser(loggedInUser);
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

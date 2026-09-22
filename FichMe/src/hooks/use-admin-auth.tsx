import { createContext, useContext, useState, type ReactNode } from 'react';

type AdminAuthContextType = {
  isAdminLoggedIn: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
};

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

// Credenciales simuladas — sustituir por validación real contra un backend más adelante
const FAKE_ADMIN_USERNAME = 'admin';
const FAKE_ADMIN_PASSWORD = 'admin123';

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  function login(username: string, password: string) {
    const isValid = username === FAKE_ADMIN_USERNAME && password === FAKE_ADMIN_PASSWORD;
    if (isValid) setIsAdminLoggedIn(true);
    return isValid;
  }

  function logout() {
    setIsAdminLoggedIn(false);
  }

  return (
    <AdminAuthContext.Provider value={{ isAdminLoggedIn, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (!context) throw new Error('useAdminAuth debe usarse dentro de AdminAuthProvider');
  return context;
}
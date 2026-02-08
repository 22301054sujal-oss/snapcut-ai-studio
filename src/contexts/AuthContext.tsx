import React, { createContext, useContext, useState, useCallback } from "react";

interface User {
  id: string;
  email: string;
  name: string;
  plan: "free" | "pro" | "enterprise";
  credits: number;
  maxCredits: number;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  useCredit: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const DEMO_USER: User = {
  id: "demo-1",
  email: "demo@snapcut.ai",
  name: "Demo User",
  plan: "free",
  credits: 3,
  maxCredits: 5,
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback(async (email: string, _password: string) => {
    // Simulate login
    setUser({ ...DEMO_USER, email });
  }, []);

  const signup = useCallback(async (email: string, _password: string, name: string) => {
    setUser({ ...DEMO_USER, email, name });
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const useCredit = useCallback(() => {
    if (!user || user.credits <= 0) return false;
    setUser((prev) => prev ? { ...prev, credits: prev.credits - 1 } : null);
    return true;
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, signup, logout, useCredit }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

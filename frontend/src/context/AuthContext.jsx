import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

// Create AuthContext
export const AuthContext = createContext();

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);

  // Login Function
  const login = (userData) => {
    setUser(userData);
  };

  // Logout Function
  const logout = () => {
    setUser(null);
  };

  // Add Expense Function
  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  // Update Budget Function
  const updateBudget = (newBudget) => {
    setBudget(newBudget);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, expenses, addExpense, setExpenses, budget, updateBudget }}>
      {children}
    </AuthContext.Provider>
  );
};

// PropTypes Validation
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom Hook for Context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

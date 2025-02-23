import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // ✅ Track expenses and budget globally
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);

  // 🔹 Login function
  const login = (userData) => {
    setUser(userData);
  };

  // 🔹 Logout function
  const logout = () => {
    setUser(null);
  };

  // 🔹 Function to add new expense
  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  // 🔹 Function to update budget
  const updateBudget = (newBudget) => {
    setBudget(newBudget);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, expenses, addExpense, budget, updateBudget }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

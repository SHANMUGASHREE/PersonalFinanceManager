import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import SetBudget from "./pages/SetBudget";
import ExpenseManager from "./pages/ExpenseManager";
import ViewReports from "./pages/ViewReports";
import { AuthProvider } from "./context/AuthContext";
import "./styles/Auth.css";
import "./styles/Dashboard.css";
import "./styles/SetBudget.css";
import "./styles/ExpenseManager.css";
import "./styles/ViewReports.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/set-budget" element={<SetBudget />} />
          <Route path="/expenses" element={<ExpenseManager />} />
          <Route path="/reports" element={<ViewReports />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

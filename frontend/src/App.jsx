import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "./pages/TopNav"; 
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import SetBudget from "./pages/SetBudget";
import ExpenseManager from "./pages/ExpenseManager";
import ViewReports from "./pages/ViewReports";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppContent = () => {
  const location = useLocation();
  const showTopNav = !["/login", "/signup", "/dashboard"].includes(location.pathname);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      {showTopNav && <TopNav />} {/* ✅ Show buttons on all pages except login/signup */}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/set-budget" element={<SetBudget />} />
        <Route path="/expenses" element={<ExpenseManager />} />
        <Route path="/reports" element={<ViewReports />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

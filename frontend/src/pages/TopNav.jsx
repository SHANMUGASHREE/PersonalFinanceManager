import { useNavigate, useLocation } from "react-router-dom";
import "../styles/TopNav.css";

const TopNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isAuthPage = ["/login", "/signup"].includes(location.pathname);

  return (
    <div className="top-nav">
      <div>
        <h2 className="nav-title">TRACKIFY</h2>
        <p className="nav-subtitle">Smarter Spending, Better Saving!</p>
      </div>
      {!isAuthPage && (
        <div className="nav-buttons">
          <button
            className={`btn btn-primary ${location.pathname === "/dashboard" ? "active" : ""}`}
            onClick={() => navigate("/dashboard")}
          >
            Home
          </button>
          <button
            className={`btn btn-info ${location.pathname === "/expenses" ? "active" : ""}`}
            onClick={() => navigate("/expenses")}
          >
            Track Expenses
          </button>
          <button
            className={`btn btn-warning ${location.pathname === "/set-budget" ? "active" : ""}`}
            onClick={() => navigate("/set-budget")}
          >
            Set Budget
          </button>
          <button
            className={`btn btn-success ${location.pathname === "/reports" ? "active" : ""}`}
            onClick={() => navigate("/reports")}
          >
            View Reports
          </button>
          <button className="btn btn-danger logout-btn" onClick={() => navigate("/login")}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default TopNav;

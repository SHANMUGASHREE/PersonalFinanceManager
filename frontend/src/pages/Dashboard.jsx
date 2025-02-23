import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      {/* Trackify Branding */}
      <div className="dashboard-header">
        <h2 className="dash-title">
          TRACKIFY <span className="dash-subtitle">Smarter Spending, Better Saving!</span>
        </h2>
      </div>

      {/* Adjusted positioning for welcome text */}
      <div className="welcome-section">
        <h1>Welcome to the Personal Finance Manager</h1>
        <p>Manage your expenses, set budgets, and track financial reports efficiently.</p>
      </div>

      <div className="dashboard-options">
        <button className="btn btn-info mx-2 my-2" onClick={() => navigate("/expenses")}>
          Track Expenses
        </button>
        <button className="btn btn-warning mx-2 my-2" onClick={() => navigate("/set-budget")}>
          Set Budget
        </button>
        <button className="btn btn-success mx-2 my-2" onClick={() => navigate("/reports")}>
          View Reports
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

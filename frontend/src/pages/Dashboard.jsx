import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h1>Welcome to Your Personal Finance Manager</h1>
      <div className="dashboard-options">
        <button className="btn btn-info mx-2 my-2" onClick={() => navigate('/expenses')}>
          Track Expenses
        </button>
        <button className="btn btn-warning mx-2 my-2" onClick={() => navigate('/set-budget')}>
          Set Budget
        </button>
        <button className="btn btn-success mx-2 my-2" onClick={() => navigate('/reports')}>
          View Reports
        </button>
      </div>
      <button className="btn btn-danger mt-4" onClick={() => navigate('/login')}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;

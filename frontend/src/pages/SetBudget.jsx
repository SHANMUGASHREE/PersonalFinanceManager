import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "../styles/SetBudget.css";

const SetBudget = () => {
  const { budget, updateBudget } = useAuth(); // ✅ Using AuthContext
  const [newBudget, setNewBudget] = useState(budget);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBudget(newBudget); // ✅ Update the global budget state
  };

  return (
    <div className="budget-container">
      <h2>Set Your Budget</h2>
      <form onSubmit={handleSubmit}>
        <label>Enter Budget:</label>
        <input
          type="number"
          value={newBudget}
          onChange={(e) => setNewBudget(Number(e.target.value))}
          required
        />
        <button type="submit">Update Budget</button>
      </form>
      <p>Current Budget: ₹{budget}</p>
    </div>
  );
};

export default SetBudget;

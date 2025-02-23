import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const ExpenseManager = () => {
  const { expenses, addExpense } = useAuth();
  const [expense, setExpense] = useState({ category: "", amount: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (expense.category && expense.amount) {
      addExpense({ ...expense, amount: Number(expense.amount) });
      setExpense({ category: "", amount: "" });
    }
  };

  return (
    <div className="expense-container">
      <h2>Track Your Expenses</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={expense.category}
          onChange={(e) => setExpense({ ...expense, category: e.target.value })}
          placeholder="Category"
          required
        />
        <input 
          type="number"
          value={expense.amount}
          onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
          placeholder="Amount"
          required
        />
        <button type="submit" className="btn btn-success">Add Expense</button>
      </form>

      <h3>Expense List</h3>
      <ul>
        {expenses.map((exp, index) => (
          <li key={index}>{exp.category}: ₹{exp.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseManager;

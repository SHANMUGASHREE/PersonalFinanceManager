import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import "../styles/ExpenseManager.css";

const ExpenseManager = () => {
  const { expenses, setExpenses } = useAuth();
  const [expense, setExpense] = useState({ category: "", amount: "" });
  const [editingIndex, setEditingIndex] = useState(null);

  // ✅ Handle Add & Update
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!expense.category || !expense.amount) return;

    if (editingIndex !== null) {
      // 🔹 Update existing expense
      const updatedExpenses = [...expenses];
      updatedExpenses[editingIndex] = { ...expense, amount: Number(expense.amount) };
      setExpenses(updatedExpenses);
      toast.info("✅ Expense updated successfully!");
      setEditingIndex(null);
    } else {
      // 🔹 Add new expense
      setExpenses([...expenses, { ...expense, amount: Number(expense.amount) }]);
      toast.success("✅ Expense added successfully!");
    }

    setExpense({ category: "", amount: "" });
  };

  // ✅ Edit Expense
  const handleEdit = (index) => {
    setExpense(expenses[index]);
    setEditingIndex(index);
  };

  // ✅ Delete Expense
  const handleDelete = (index) => {
    if (window.confirm("❌ Are you sure you want to delete this expense?")) {
      const updatedExpenses = expenses.filter((_, i) => i !== index);
      setExpenses(updatedExpenses);
      toast.error("🗑️ Expense deleted successfully!");
    }
  };

  return (
    <div className="expense-container">
      <h2>Track Your Expenses</h2>
      <form onSubmit={handleSubmit} className="expense-form">
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
        <button type="submit" className="btn btn-success">
          {editingIndex !== null ? "Update Expense" : "Add Expense"}
        </button>
      </form>

      <h3>Expense List</h3>
      <ul>
        {expenses.map((exp, index) => (
          <li key={index}>
            {exp.category}: ₹{exp.amount} 
            <button onClick={() => handleEdit(index)} className="btn btn-edit">✏️</button>
            <button onClick={() => handleDelete(index)} className="btn btn-delete">🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseManager;

const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const Expense = require("../models/Expense");

const router = express.Router();

// @route  POST /api/expenses
// @desc   Add a new expense
router.post("/", protect, async (req, res) => {
  const { category, amount } = req.body;

  if (!category || !amount) return res.status(400).json({ message: "All fields are required" });

  const expense = new Expense({ user: req.user.id, category, amount });
  await expense.save();
  res.status(201).json(expense);
});

// @route  GET /api/expenses
// @desc   Get all user expenses
router.get("/", protect, async (req, res) => {
  const expenses = await Expense.find({ user: req.user.id });
  res.json(expenses);
});

// @route  DELETE /api/expenses/:id
// @desc   Delete an expense
router.delete("/:id", protect, async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.json({ message: "Expense deleted" });
});

module.exports = router;

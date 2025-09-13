import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  // For now, hardcoded values. Later, we can fetch from AddExpense state.
  const balance = 5000;
  const totalExpenses = 2500;
  const goals = "Laptop: 40% complete";
  const insights = "⚠️ You spent 50% on Food last week.";

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

      <Link to="/add-expense">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-6">
          Add Income/Expense
        </button>
      </Link>

      <div className="grid grid-cols-2 gap-6">
        {/* Balance Card */}
        <div className="bg-cyan-100 p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold text-gray-800">💰 Balance</h3>
          <p className="text-2xl font-bold text-gray-900">₹{balance}</p>
        </div>

        {/* Expenses Card */}
        <div className="bg-red-100 p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold text-gray-800">📉 Total Expenses</h3>
          <p className="text-2xl font-bold text-gray-900">₹{totalExpenses}</p>
        </div>

        {/* Goals Card */}
        <div className="bg-purple-100 p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold text-gray-800">🎯 Goals</h3>
          <p className="text-2xl font-bold text-gray-900">{goals}</p>
        </div>

        {/* Insights Card */}
        <div className="bg-yellow-100 p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold text-gray-800">💡 Insights</h3>
          <p className="text-md text-gray-700">{insights}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

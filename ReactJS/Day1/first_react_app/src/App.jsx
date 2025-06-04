import { useState } from "react";
import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpe/NewExpense";

function App() {
	const [expenses, setExpenses] = useState([
		{
			title: "Groceries",
			amount: 45.99,
			date: new Date(2025, 5, 1),
		},
		{
			title: "Car Insurance",
			amount: 294.67,
			date: new Date(2025, 4, 28),
		},
		{
			title: "Electricity Bill",
			amount: 89.23,
			date: new Date(2025, 4, 25),
		},
		{
			title: "New Desk (Home Office)",
			amount: 450.0,
			date: new Date(2025, 3, 12),
		},
	]);

	const addExpenseHandler = (expense) => {
		console.log("In APP.jsx");
		console.log(expense);
	};

	return (
		<>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</>
	);
}
export default App;

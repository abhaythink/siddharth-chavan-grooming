import { useState } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpe/NewExpense";
import ExpenseChart from "./components/Expenses/ExpensesChart";

const DummyExpenses = [
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
];

function App() {
	const [expenses, setExpenses] = useState(DummyExpenses);

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...expenses];
		});
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

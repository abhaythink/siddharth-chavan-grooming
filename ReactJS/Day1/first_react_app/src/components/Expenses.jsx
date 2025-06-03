import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses() {
	const expenses = [
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

	return (
		<Card>
			<h1>Learning React</h1>
			<ExpenseItem
				title={expenses[0].title}
				amount={expenses[0].amount}
				date={expenses[0].date}
			></ExpenseItem>
			<ExpenseItem
				title={expenses[1].title}
				amount={expenses[1].amount}
				date={expenses[1].date}
			></ExpenseItem>
			<ExpenseItem
				title={expenses[2].title}
				amount={expenses[2].amount}
				date={expenses[2].date}
			></ExpenseItem>
			<ExpenseItem
				title={expenses[3].title}
				amount={expenses[3].amount}
				date={expenses[3].date}
			></ExpenseItem>
		</Card>
	);
}
export default Expenses;

import "./ExpenseDate.css";
function ExpenseDate({ date }) {
	const month = date.toLocaleString("en-US", { month: "long" }); // e.g., June
	const day = date.toLocaleString("en-US", { day: "2-digit" }); // correct: "2-digit" (not "2 digit")
	const year = date.getFullYear(); // e.g., 2025

	return (
		<div className="expense-date">
			<div className="expense-month">{month}</div>
			<div className="expense-year">{year}</div>
			<div className="expense-day">{day}</div>
		</div>
	);
}

export default ExpenseDate;

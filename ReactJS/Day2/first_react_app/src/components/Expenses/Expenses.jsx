import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpensesChart";
import Card from "../UI/Card";
import { useState } from "react";

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState("2020");

	let filterIntoText = "2019 , 2020, 2021, 2022, 2023, 2024 & 2025";

	if (filteredYear === "2019") {
		filterIntoText = "2020, 2021, 2022, 2023, 2024 & 2025";
	} else if (filteredYear === "2020") {
		filterIntoText = "2019, 2021, 2022, 2023, 2024 & 2025";
	} else if (filteredYear === "2021") {
		filterIntoText = "2019 ,2020 ,2022 ,2023, 2024 & 2025";
	} else if (filteredYear === "2022") {
		filterIntoText = "2019, 2020, 2021, 2023, 2024 & 2025";
	} else if (filteredYear === "2023") {
		filterIntoText = "2019, 2020, 2021, 2022, 2024 & 2025";
	} else if (filteredYear === "2024") {
		filterIntoText = "2019, 2020, 2021, 2022, 2023 & 2025";
	} else if (filteredYear === "2025") {
		filterIntoText = "2019, 2020, 2021, 2022, 2023 & 2024";
	}

	const filterChangeHandler = (event) => {
		setFilteredYear(event.target.value);
	};

	const visibleExpenses =
		filteredYear === "All"
			? props.items
			: props.items.filter(
					(expense) => expense.date.getFullYear().toString() === filteredYear
			  );

	return (
		<Card>
			<h1>Learning React</h1>

			{/* Year Filter */}

			<ExpenseFilter
				selectedYear={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>

			<p>
				Data for year <strong>{filteredYear}</strong> is hidden.
			</p>

			{/* ExpenseChart */}

			<ExpenseChart expenses={visibleExpenses} />

			{/* Expenses List */}

			{visibleExpenses.map((expense, index) => (
				<ExpenseItem
					key={index}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}

			{/* <ExpenseItem
				title={props.items[0].title}
				amount={props.items[0].amount}
				date={props.items[0].date}
			/>
			<ExpenseItem
				title={props.items[1].title}
				amount={props.items[1].amount}
				date={props.items[1].date}
			/>
			<ExpenseItem
				title={props.items[2].title}
				amount={props.items[2].amount}
				date={props.items[2].date}
			/>
			<ExpenseItem
				title={props.items[3].title}
				amount={props.items[3].amount}
				date={props.items[3].date}
			/>*/}
		</Card>
	);
}

export default Expenses;

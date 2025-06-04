import "./ExpenseFilter.css";

function ExpenseFilter(props) {
	return (
		<div>
			<h2>Filter by Year </h2>
			<select
				className="expenses-filter"
				value={props.selectedYear}
				onChange={props.onChangeFilter}
			>
				<option value="All">All</option>
				<option value="2019">2019</option>
				<option value="2020">2020</option>
				<option value="2021">2021</option>
				<option value="2022">2022</option>
				<option value="2023">2023</option>
				<option value="2024">2024</option>
				<option value="2025">2025</option>
			</select>
		</div>
	);
}
export default ExpenseFilter;

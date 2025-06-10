import styles from "./ResultTable.module.css";

function ResultTable(props) {
	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "INR",
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});

	return (
		<table className={styles.result}>
			<thead>
				<tr>
					<th>Year</th>
					<th>Total Savings</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>
				{props.data.map((yearlyData) => (
					<tr key={formatter.format(yearlyData.year)}>
						<td>{formatter.format(yearlyData.year)}</td>
						<td>{formatter.format(yearlyData.savingsEndOfYear)}</td>
						<td>{formatter.format(yearlyData.yearlyInterest)}</td>
						<td>
							{formatter.format(
								yearlyData.savingsEndOfYear -
									props.initialInvestment -
									yearlyData.yearlyContribution * yearlyData.year
							)}
						</td>
						<td>
							{formatter.format(
								props.initialInvestment +
									yearlyData.yearlyContribution * yearlyData.year
							)}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
export default ResultTable;

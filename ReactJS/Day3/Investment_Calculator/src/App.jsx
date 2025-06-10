import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import ResultTable from "./components/ResultTable/ResultTable";
import { useState } from "react";
function App() {
	const [userInput, setUserInput] = useState();
	const [results, setResults] = useState([]);

	const calculateHandler = (userInput) => {
		setUserInput(userInput);

		const yearlyData = []; // per-year results

		let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
		const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
		const expectedReturn = +userInput["expected-return"] / 100;
		const duration = +userInput["duration"];

		// The below code calculates yearly results (total savings, interest etc)
		for (let i = 0; i < duration; i++) {
			const yearlyInterest = currentSavings * expectedReturn;
			currentSavings += yearlyInterest + yearlyContribution;
			yearlyData.push({
				// feel free to change the shape of the data pushed to the array!
				year: i + 1,
				yearlyInterest: yearlyInterest,
				savingsEndOfYear: currentSavings,
				yearlyContribution: yearlyContribution,
			});
		}

		// do something with yearlyData ...
		setResults(yearlyData);
	};

	return (
		<div>
			<Header />
			<UserInput onCalculate={calculateHandler} />
			{!userInput && (
				<center>
					<h2>No Investment Calculated Yet.</h2>
				</center>
			)}
			{userInput && (
				<ResultTable
					data={results}
					initialInvestment={userInput["current-savings"]}
				/>
			)}
		</div>
	);
}

export default App;

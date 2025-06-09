import { useState } from "react";

import styles from "./UserInput.module.css";

function UserInput(props) {
	const initialInput = {
		"current-savings": 10000,
		"yearly-contribution": 1200,
		"expected-return": 7,
		duration: 10,
	};
	const [userInput, setUserInput] = useState(initialInput);
	const submitHandler = (event) => {
		event.preventDefault();
		props.onCalculate(userInput);
		console.log("Submit");
	};

	const resetHandler = (event) => {
		setUserInput(initialInput);
		console.log("reset");
	};

	const inputChangeHandler = (input, value) => {
		setUserInput((previousInput) => {
			return {
				...previousInput,
				[input]: value,
			};
		});
		console.log(input, value);
	};

	return (
		<>
			<form onSubmit={submitHandler} className={styles.form}>
				<div className={styles["input-group"]}>
					<p>
						<label htmlFor="current-savings">Current Savings ($)</label>
						<input
							onChange={(event) => {
								inputChangeHandler("current-savings", event.target.value);
							}}
							value={userInput["current-savings"]}
							type="number"
							id="current-savings"
						/>
					</p>
					<p>
						<label htmlFor="yearly-contribution">Yearly Savings ($)</label>
						<input
							onChange={(event) => {
								inputChangeHandler("yearly-contribution", event.target.value);
							}}
							value={userInput["yearly-contribution"]}
							type="number"
							id="yearly-contribution"
						/>
					</p>
				</div>
				<div className={styles["input-group"]}>
					<p>
						<label htmlFor="expected-return">
							Expected Interest (%, per year)
						</label>
						<input
							onChange={(event) => {
								inputChangeHandler("expected-return", event.target.value);
							}}
							value={userInput["expected-return"]}
							type="number"
							id="expected-return"
						/>
					</p>
					<p>
						<label htmlFor="duration">Investment Duration (years)</label>
						<input
							onChange={(event) => {
								inputChangeHandler("duration", event.target.value);
							}}
							value={userInput["duration"]}
							type="number"
							id="duration"
						/>
					</p>
				</div>
				<p className={styles["actions"]}>
					<button
						type="reset"
						className={styles["buttonAlt"]}
						onClick={resetHandler}
					>
						<strong> RESET</strong>
					</button>
					<button
						type="submit"
						className={styles["button"]}
						onClick={submitHandler}
					>
						<strong> CALCULATE</strong>
					</button>
				</p>
			</form>
		</>
	);
}
export default UserInput;

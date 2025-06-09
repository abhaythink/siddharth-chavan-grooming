import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {
	// const [enteredUsername, setEnteredUsername] = useState("");
	// const [enteredAge, setEnteredAge] = useState("");

	const nameInputRef = useRef();
	const ageInputRef = useRef();

	const [error, setError] = useState("");

	// const userNameChangeHandler = (event) => {
	// 	setEnteredUsername(event.target.value);
	// };
	// const AgeChangeHandler = (event) => {
	// 	setEnteredAge(event.target.value);
	// };

	const addUserHandler = (event) => {
		const enteredUserName = nameInputRef.current.value;
		const enteredAge = ageInputRef.current.value;

		event.preventDefault();
		if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: "Invalid Input",
				message: "Please enter a valid name and age (non-empty values).",
			});
			return;
		}
		if (enteredAge < 0) {
			setError({
				title: "Invalid Age",
				message: "Please enter a valid name and age (non-empty values).",
			});
			return;
		}
		props.onAddUser(enteredUserName, enteredAge);
		console.log(enteredUserName, enteredAge);
		// setEnteredAge("");
		// setEnteredUsername("");
		nameInputRef.current.value = "";
		ageInputRef.current.value = "";
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<Card>
				<div className={styles.form_container}>
					<form onSubmit={addUserHandler} className={styles["user-form"]}>
						<h1>User Form</h1>
						<label htmlFor="username">Username</label>
						<input
							type="text"
							id="username"
							name="username"
							ref={nameInputRef}
							// value={enteredUsername}
							// onChange={userNameChangeHandler}
						/>

						<label htmlFor="age">Age (Years)</label>
						<input
							type="number"
							id="age"
							name="age"
							ref={ageInputRef}
							// value={enteredAge}
							// onChange={AgeChangeHandler}
						/>

						<Button type="submit">Add New User</Button>
					</form>
				</div>
			</Card>
		</>
	);
}
export default AddUser;

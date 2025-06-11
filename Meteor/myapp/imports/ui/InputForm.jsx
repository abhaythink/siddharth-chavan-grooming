import React, { useRef } from "react";
import { Meteor } from "meteor/meteor";

const InputForm = () => {
	const inputRef = useRef();

	const submitDataHandler = (event) => {
		event.preventDefault();
		const taskText = inputRef.current.value.trim();

		if (!taskText) return;

		Meteor.call("tasks.insert", taskText, (error) => {
			if (error) {
				console.error("Insert failed:", error.reason);
			} else {
				inputRef.current.value = "";
				console.log("Insert successful");
			}
		});
	};

	return (
		<form onSubmit={submitDataHandler}>
			<input type="text" ref={inputRef} placeholder="Enter a task" />
			<button type="submit">Add Task</button>
		</form>
	);
};

export default InputForm;

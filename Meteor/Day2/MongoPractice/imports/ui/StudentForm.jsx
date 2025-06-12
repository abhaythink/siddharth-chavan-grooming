import React, { useState } from "react";
import { Meteor } from "meteor/meteor";

export const StudentForm = () => {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [course, setCourse] = useState("");

	// handler to submit the event
	const handleSubmit = (e) => {
		e.preventDefault();

		//meteor call to call the insertion method from studentMethods

		Meteor.call("students.insert", name, age, course, (err) => {
			if (err) {
				alert(err.reason);
			} else {
				setName("");
				setAge("");
				setCourse("");
			}
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder="Name"
			/>
			<input
				value={age}
				onChange={(e) => setAge(e.target.value)}
				placeholder="Age"
				type="number"
			/>
			<input
				value={course}
				onChange={(e) => setCourse(e.target.value)}
				placeholder="Course"
			/>
			<button type="submit">Add Student</button>
		</form>
	);
};

import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { Students } from "/imports/api/students";

export const StudentList = () => {
	const students = useTracker(() => {
		// fetching data from students

		Meteor.subscribe("students");
		return Students.find({}, { sort: { createdAt: -1 } }).fetch();
	});

	return (
		<ul>
			{students.map((student) => (
				<li key={student._id}>
					<strong>{student.name}</strong> ({student.age}) - {student.course}
				</li>
			))}
		</ul>
	);
};

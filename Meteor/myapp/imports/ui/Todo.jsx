import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { Tasks } from "../collections/tasks";
import InputForm from "./InputForm";
import { Meteor } from "meteor/meteor";

const Todo = () => {
	const { isLoading, todos } = useTracker(() => {
		const handle = Meteor.subscribe("tasks");
		const loading = !handle.ready();
		const allTasks = Tasks.find({}, { sort: { createdAt: -1 } }).fetch();
		return { isLoading: loading, todos: allTasks };
	}, []);

	const deleteTask = (taskId) => {
		Meteor.call("tasks.remove", taskId, (error) => {
			if (error) {
				console.error("Delete failed:", error.reason);
			} else {
				console.log("Deleted task:", taskId);
			}
		});
	};

	return (
		<div>
			<h1 style={{ textAlign: "center" }}>To Do App</h1>
			<InputForm />
			{isLoading ? (
				<p>Loading tasks...</p>
			) : (
				<ul>
					{todos.map((todo) => (
						<li
							key={todo._id}
							style={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: "8px",
							}}
						>
							<span>{todo.text}</span>
							<button
								onClick={() => deleteTask(todo._id)}
								style={{
									marginLeft: "10px",
									color: "white",
									background: "red",
									border: "none",
									padding: "5px 10px",
									cursor: "pointer",
								}}
							>
								X
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Todo;

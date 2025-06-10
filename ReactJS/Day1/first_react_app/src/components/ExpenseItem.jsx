import React, { useState } from "react";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem({ date, title, amount }) {
	const [currentTitle, setTitle] = useState(title);
	const [currentColor, setColor] = useState("black");

	const clickHandler = () => {
		setTitle("Updated!!");
		console.log(title + " updated");
		setColor("green");
	};

	return (
		<Card className="expense-item">
			<ExpenseDate date={date}></ExpenseDate>
			<div className="expense-item__description">
				<h2 style={{ color: currentColor }}>{currentTitle}</h2>
				<div className="expense-item__price">{amount}</div>
				<button className="changeTitle" onClick={clickHandler}>
					ChangeTitle
				</button>
			</div>
		</Card>

		// 		<div className="expense-item">
		// 			<div>{props.date.toDateString()}</div>
		// 			<div className="expense-item__description">
		// 				<h2>{props.title}</h2>
		// 				<div className="expense-item__price">{props.amount}</div>
		// 			</div>
		// 		</div>
	);
}
export default ExpenseItem;

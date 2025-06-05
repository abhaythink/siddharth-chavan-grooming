import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
	const [title, setTitle] = useState(props.title);
	const [currentColor, setColor] = useState("black");

	const clickHandler = () => {
		setTitle("Updated!!");
		console.log(title + " updated");
		setColor("green");
	};

	return (
		<li className="expense-list">
			<Card className="expense-item">
				<ExpenseDate date={props.date}></ExpenseDate>
				<div className="expense-item__description">
					<h2 style={{ color: currentColor }}>{title}</h2>
					<div className="expense-item__price">{props.amount}</div>
					<button className="changeTitle" onClick={clickHandler}>
						ChangeTitle
					</button>
				</div>
			</Card>
		</li>
	);

	// 		<div className="expense-item">
	// 			<div>{props.date.toDateString()}</div>
	// 			<div className="expense-item__description">
	// 				<h2>{props.title}</h2>
	// 				<div className="expense-item__price">{props.amount}</div>
	// 			</div>
	// 		</div>
}
export default ExpenseItem;
